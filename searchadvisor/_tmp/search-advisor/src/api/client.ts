/**
 * Search Advisor - API Client
 * 네이버 서치어드바이저 API 클라이언트
 */

import type {
  Site,
  SiteStats,
  DailyStatItem,
  UrlAnalysisItem,
  KeywordItem,
  CrawlStatusItem,
  BacklinkItem,
  DiagnosisResponse,
  ApiRequestOptions,
} from '../types';
import { cache } from './cache';
import { requestQueue } from './queue';

/**
 * API 엔드포인트
 */
const API_ENDPOINTS = {
  sites: '/api/sites',
  summary: '/api/sites/{siteId}/summary',
  dailyStats: '/api/sites/{siteId}/daily',
  urlAnalysis: '/api/sites/{siteId}/urls',
  keywords: '/api/sites/{siteId}/keywords',
  crawlStatus: '/api/sites/{siteId}/crawl',
  backlinks: '/api/sites/{siteId}/backlinks',
  diagnosis: '/api/sites/{siteId}/diagnosis',
} as const;

/**
 * API 클라이언트 클래스
 */
export class ApiClient {
  private baseUrl: string;
  private defaultTimeout: number;

  constructor(baseUrl: string = 'https://searchadvisor.naver.com', timeout: number = 30000) {
    this.baseUrl = baseUrl;
    this.defaultTimeout = timeout;
  }

  /**
   * 범용 fetch 래퍼
   * @param url 요청 URL
   * @param options 요청 옵션
   * @returns 응답 데이터
   */
  private async fetch<T>(url: string, options: ApiRequestOptions = {}): Promise<T> {
    const { useCache = true, cacheKey, timeout = this.defaultTimeout } = options;

    // 캐시 확인
    const effectiveCacheKey = cacheKey ?? url;
    if (useCache) {
      const cached = cache.get<T>(effectiveCacheKey);
      if (cached) {
        return cached;
      }
    }

    // 요청 실행 (큐를 통해)
    const response = await requestQueue.add(async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      try {
        const res = await fetch(url, {
          method: 'GET',
          credentials: 'include',
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        return res.json();
      } finally {
        clearTimeout(timeoutId);
      }
    });

    // 캐시 저장
    if (useCache) {
      cache.set(effectiveCacheKey, response);
    }

    return response as T;
  }

  /**
   * 등록된 사이트 목록 조회
   */
  async getSites(): Promise<Site[]> {
    const response = await this.fetch<{ sites: Site[] }>(`${this.baseUrl}${API_ENDPOINTS.sites}`);
    return response.sites;
  }

  /**
   * 사이트 요약 통계 조회
   * @param siteId 사이트 ID
   */
  async getSiteSummary(siteId: string): Promise<SiteStats> {
    const url = `${this.baseUrl}${API_ENDPOINTS.summary.replace('{siteId}', siteId)}`;
    return this.fetch<SiteStats>(url);
  }

  /**
   * 일별 통계 조회
   * @param siteId 사이트 ID
   * @param startDate 시작일 (YYYY-MM-DD)
   * @param endDate 종료일 (YYYY-MM-DD)
   */
  async getDailyStats(siteId: string, startDate: string, endDate: string): Promise<DailyStatItem[]> {
    const url = `${this.baseUrl}${API_ENDPOINTS.dailyStats.replace('{siteId}', siteId)}?start=${startDate}&end=${endDate}`;
    const response = await this.fetch<{ items: DailyStatItem[] }>(url);
    return response.items;
  }

  /**
   * URL 분석 데이터 조회
   * @param siteId 사이트 ID
   * @param page 페이지 번호
   * @param pageSize 페이지 크기
   */
  async getUrlAnalysis(siteId: string, page: number = 1, pageSize: number = 50): Promise<UrlAnalysisItem[]> {
    const url = `${this.baseUrl}${API_ENDPOINTS.urlAnalysis.replace('{siteId}', siteId)}?page=${page}&size=${pageSize}`;
    const response = await this.fetch<{ items: UrlAnalysisItem[] }>(url);
    return response.items;
  }

  /**
   * 검색어 분석 데이터 조회
   * @param siteId 사이트 ID
   * @param page 페이지 번호
   * @param pageSize 페이지 크기
   */
  async getKeywords(siteId: string, page: number = 1, pageSize: number = 50): Promise<KeywordItem[]> {
    const url = `${this.baseUrl}${API_ENDPOINTS.keywords.replace('{siteId}', siteId)}?page=${page}&size=${pageSize}`;
    const response = await this.fetch<{ items: KeywordItem[] }>(url);
    return response.items;
  }

  /**
   * 크롤링 상태 조회
   * @param siteId 사이트 ID
   */
  async getCrawlStatus(siteId: string): Promise<CrawlStatusItem[]> {
    const url = `${this.baseUrl}${API_ENDPOINTS.crawlStatus.replace('{siteId}', siteId)}`;
    const response = await this.fetch<{ items: CrawlStatusItem[] }>(url);
    return response.items;
  }

  /**
   * 백링크 데이터 조회
   * @param siteId 사이트 ID
   * @param page 페이지 번호
   */
  async getBacklinks(siteId: string, page: number = 1): Promise<BacklinkItem[]> {
    const url = `${this.baseUrl}${API_ENDPOINTS.backlinks.replace('{siteId}', siteId)}?page=${page}`;
    const response = await this.fetch<{ items: BacklinkItem[] }>(url);
    return response.items;
  }

  /**
   * SEO 진단 데이터 조회
   * @param siteId 사이트 ID
   */
  async getDiagnosis(siteId: string): Promise<DiagnosisResponse> {
    const url = `${this.baseUrl}${API_ENDPOINTS.diagnosis.replace('{siteId}', siteId)}`;
    return this.fetch<DiagnosisResponse>(url);
  }

  /**
   * 캐시 무효화
   * @param siteId 특정 사이트만 무효화 (선택)
   */
  invalidateCache(siteId?: string): void {
    if (siteId) {
      cache.deletePattern(new RegExp(siteId));
    } else {
      cache.clear();
    }
  }
}

// 싱글톤 인스턴스
export const apiClient = new ApiClient();
