/**
 * Search Advisor - Helper Utilities
 * 일반적인 헬퍼 함수들
 */

/**
 * 디바운스 함수
 * @param fn 실행할 함수
 * @param delay 지연 시간 (ms)
 * @returns 디바운스된 함수
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, delay);
  };
}

/**
 * 스로틀 함수
 * @param fn 실행할 함수
 * @param limit 제한 시간 (ms)
 * @returns 스로틀된 함수
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function (this: unknown, ...args: Parameters<T>): void {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * 깊은 복사
 * @param obj 복사할 객체
 * @returns 복사된 객체
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 객체가 비어있는지 확인
 * @param obj 확인할 객체
 * @returns 비어있으면 true
 */
export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * 배열을 청크로 분할
 * @param array 분할할 배열
 * @param size 청크 크기
 * @returns 분할된 배열
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * 배열 중복 제거
 * @param array 배열
 * @param key 키 선택자 (객체 배열인 경우)
 * @returns 중복 제거된 배열
 */
export function unique<T>(array: T[], key?: (item: T) => unknown): T[] {
  if (key) {
    const seen = new Set<unknown>();
    return array.filter(item => {
      const k = key(item);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }
  return [...new Set(array)];
}

/**
 * 범위 내의 랜덤 정수 생성
 * @param min 최솟값
 * @param max 최댓값
 * @returns 랜덤 정수
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * UUID 생성
 * @returns UUID 문자열
 */
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * 슬립 함수
 * @param ms 밀리초
 * @returns Promise
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 재시도 로직
 * @param fn 실행할 함수
 * @param retries 재시도 횟수
 * @param delay 재시도 간격 (ms)
 * @returns 결과 Promise
 */
export async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: Error | null = null;

  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (i < retries - 1) {
        await sleep(delay * (i + 1)); // Exponential backoff
      }
    }
  }

  throw lastError;
}

/**
 * 객체에서 지정된 키만 추출
 * @param obj 원본 객체
 * @param keys 추출할 키 배열
 * @returns 추출된 객체
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * 객체에서 지정된 키 제외
 * @param obj 원본 객체
 * @param keys 제외할 키 배열
 * @returns 제외된 객체
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result;
}

/**
 * 두 객체가 깊게 동등한지 비교
 * @param a 첫 번째 객체
 * @param b 두 번째 객체
 * @returns 동등하면 true
 */
export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;

  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }

  const keysA = Object.keys(a as object);
  const keysB = Object.keys(b as object);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(key => deepEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key]));
}

/**
 * 클래스 이름 결합
 * @param classes 클래스 이름들
 * @returns 결합된 클래스 이름
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
