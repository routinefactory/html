/**
 * Search Advisor - Request Queue
 * 요청 큐 및 동시성 제어
 */

import { sleep } from '../utils/helpers';

/**
 * 요청 큐 아이템
 */
interface QueueItem<T> {
  id: string;
  execute: () => Promise<T>;
  resolve: (value: T) => void;
  reject: (error: Error) => void;
  retries: number;
  maxRetries: number;
}

/**
 * 요청 큐 옵션
 */
interface RequestQueueOptions {
  maxConcurrent: number;
  delayBetweenRequests: number;
  maxRetries: number;
  retryDelay: number;
}

/**
 * 요청 큐 클래스
 * 동시성 제어 및 재시도 로직 포함
 */
export class RequestQueue {
  private queue: QueueItem<unknown>[] = [];
  private activeCount = 0;
  private options: RequestQueueOptions;
  private isProcessing = false;
  private idCounter = 0;

  constructor(options: Partial<RequestQueueOptions> = {}) {
    this.options = {
      maxConcurrent: options.maxConcurrent ?? 3,
      delayBetweenRequests: options.delayBetweenRequests ?? 200,
      maxRetries: options.maxRetries ?? 3,
      retryDelay: options.retryDelay ?? 1000,
    };
  }

  /**
   * 요청 추가
   * @param execute 실행할 함수
   * @returns 결과 Promise
   */
  async add<T>(execute: () => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const item: QueueItem<T> = {
        id: `req_${++this.idCounter}`,
        execute,
        resolve: resolve as (value: unknown) => void,
        reject,
        retries: 0,
        maxRetries: this.options.maxRetries,
      };

      this.queue.push(item as QueueItem<unknown>);
      this.process();
    });
  }

  /**
   * 큐 처리 시작
   */
  private async process(): Promise<void> {
    if (this.isProcessing) return;
    this.isProcessing = true;

    while (this.queue.length > 0) {
      // 동시 요청 수 제한 대기
      while (this.activeCount >= this.options.maxConcurrent) {
        await sleep(50);
      }

      const item = this.queue.shift();
      if (!item) break;

      this.activeCount++;
      this.executeItem(item).finally(() => {
        this.activeCount--;
      });

      // 요청 간 지연
      if (this.queue.length > 0) {
        await sleep(this.options.delayBetweenRequests);
      }
    }

    this.isProcessing = false;
  }

  /**
   * 개별 요청 실행
   * @param item 큐 아이템
   */
  private async executeItem(item: QueueItem<unknown>): Promise<void> {
    try {
      const result = await item.execute();
      item.resolve(result);
    } catch (error) {
      if (item.retries < item.maxRetries) {
        item.retries++;
        await sleep(this.options.retryDelay * item.retries);

        // 재시도를 위해 큐 앞쪽에 다시 추가
        this.queue.unshift(item);
        this.process();
      } else {
        item.reject(error as Error);
      }
    }
  }

  /**
   * 큐 비우기
   */
  clear(): void {
    this.queue = [];
  }

  /**
   * 대기 중인 요청 수
   */
  get pendingCount(): number {
    return this.queue.length;
  }

  /**
   * 실행 중인 요청 수
   */
  get activeCount(): number {
    return this.activeCount;
  }
}

// 싱글톤 인스턴스
export const requestQueue = new RequestQueue();
