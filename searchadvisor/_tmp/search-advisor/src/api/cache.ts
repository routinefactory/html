/**
 * Search Advisor - Cache Manager
 * 메모리 기반 캐시 관리자
 */

import type { CacheEntry } from '../types';

/**
 * 캐시 매니저 클래스
 * TTL(Time-To-Live) 기반 메모리 캐시
 */
export class CacheManager {
  private cache = new Map<string, CacheEntry<unknown>>();
  private defaultTTL: number;

  constructor(defaultTTL: number = 5 * 60 * 1000) {
    this.defaultTTL = defaultTTL;
  }

  /**
   * 캐시에 데이터 저장
   * @param key 캐시 키
   * @param data 저장할 데이터
   * @param ttl TTL (밀리초)
   */
  set<T>(key: string, data: T, ttl?: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl ?? this.defaultTTL,
    });
  }

  /**
   * 캐시에서 데이터 조회
   * @param key 캐시 키
   * @returns 데이터 또는 null
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key) as CacheEntry<T> | undefined;

    if (!entry) {
      return null;
    }

    // TTL 만료 확인
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  /**
   * 캐시 키 존재 여부 확인
   * @param key 캐시 키
   * @returns 존재하면 true
   */
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  /**
   * 특정 키 삭제
   * @param key 캐시 키
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * 패턴에 맞는 모든 키 삭제
   * @param pattern 키 패턴 (정규식)
   */
  deletePattern(pattern: RegExp): number {
    let count = 0;
    for (const key of this.cache.keys()) {
      if (pattern.test(key)) {
        this.cache.delete(key);
        count++;
      }
    }
    return count;
  }

  /**
   * 전체 캐시 삭제
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * 만료된 캐시 정리
   * @returns 삭제된 캐시 수
   */
  cleanup(): number {
    let count = 0;
    const now = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
        count++;
      }
    }

    return count;
  }

  /**
   * 캐시 크기 반환
   * @returns 캐시 항목 수
   */
  size(): number {
    return this.cache.size;
  }

  /**
   * 캐시 키 목록 반환
   * @returns 키 배열
   */
  keys(): string[] {
    return Array.from(this.cache.keys());
  }
}

// 싱글톤 인스턴스
export const cache = new CacheManager();
