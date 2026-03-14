/**
 * Search Advisor - Data Fetching Hooks
 * 데이터 조회를 위한 커스텀 훅들
 */

import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../api/client';
import { cache } from '../api/cache';
import { generateMockData } from '../api/mock';
import type { DailyStatItem, UrlAnalysisItem, KeywordItem, CrawlStatusItem, BacklinkItem, DiagnosisResponse, SiteStats } from '../types';
import { useMode } from './useAppContext';

/**
 * 일별 통계 조회 훅
 * @param siteId 사이트 ID
 * @param startDate 시작일
 * @param endDate 종료일
 */
export function useDailyStats(siteId: string | null, startDate: string, endDate: string) {
  const [data, setData] = useState<DailyStatItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mode = useMode();

  const fetch = useCallback(async () => {
    if (!siteId) {
      setData([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (mode === 'snapshot') {
        // 스냅샷 모드에서는 캐시에서만 조회
        const cached = cache.get<DailyStatItem[]>(`dailyStats_${siteId}`);
        if (cached) {
          setData(cached);
        }
      } else {
        // 라이브 모드에서는 API 호출
        const stats = await apiClient.getDailyStats(siteId, startDate, endDate);
        setData(stats);
      }
    } catch (err) {
      setError((err as Error).message);
      // 목 데이터 사용 (개발용)
      if (process.env.NODE_ENV === 'development') {
        setData(generateMockData.dailyStats());
      }
    } finally {
      setIsLoading(false);
    }
  }, [siteId, startDate, endDate, mode]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, error, refetch: fetch };
}

/**
 * URL 분석 조회 훅
 * @param siteId 사이트 ID
 * @param page 페이지 번호
 */
export function useUrlAnalysis(siteId: string | null, page: number = 1) {
  const [data, setData] = useState<UrlAnalysisItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mode = useMode();

  const fetch = useCallback(async () => {
    if (!siteId) {
      setData([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (mode === 'snapshot') {
        const cached = cache.get<UrlAnalysisItem[]>(`urlAnalysis_${siteId}`);
        if (cached) {
          setData(cached);
        }
      } else {
        const urls = await apiClient.getUrlAnalysis(siteId, page);
        setData(urls);
      }
    } catch (err) {
      setError((err as Error).message);
      if (process.env.NODE_ENV === 'development') {
        setData(generateMockData.urlAnalysis());
      }
    } finally {
      setIsLoading(false);
    }
  }, [siteId, page, mode]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, error, refetch: fetch };
}

/**
 * 검색어 분석 조회 훅
 * @param siteId 사이트 ID
 * @param page 페이지 번호
 */
export function useKeywords(siteId: string | null, page: number = 1) {
  const [data, setData] = useState<KeywordItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mode = useMode();

  const fetch = useCallback(async () => {
    if (!siteId) {
      setData([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (mode === 'snapshot') {
        const cached = cache.get<KeywordItem[]>(`keywords_${siteId}`);
        if (cached) {
          setData(cached);
        }
      } else {
        const keywords = await apiClient.getKeywords(siteId, page);
        setData(keywords);
      }
    } catch (err) {
      setError((err as Error).message);
      if (process.env.NODE_ENV === 'development') {
        setData(generateMockData.keywords());
      }
    } finally {
      setIsLoading(false);
    }
  }, [siteId, page, mode]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, error, refetch: fetch };
}

/**
 * 크롤링 상태 조회 훅
 * @param siteId 사이트 ID
 */
export function useCrawlStatus(siteId: string | null) {
  const [data, setData] = useState<CrawlStatusItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mode = useMode();

  const fetch = useCallback(async () => {
    if (!siteId) {
      setData([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (mode === 'snapshot') {
        const cached = cache.get<CrawlStatusItem[]>(`crawlStatus_${siteId}`);
        if (cached) {
          setData(cached);
        }
      } else {
        const status = await apiClient.getCrawlStatus(siteId);
        setData(status);
      }
    } catch (err) {
      setError((err as Error).message);
      if (process.env.NODE_ENV === 'development') {
        setData(generateMockData.crawlStatus());
      }
    } finally {
      setIsLoading(false);
    }
  }, [siteId, mode]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, error, refetch: fetch };
}

/**
 * 백링크 조회 훅
 * @param siteId 사이트 ID
 */
export function useBacklinks(siteId: string | null) {
  const [data, setData] = useState<BacklinkItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mode = useMode();

  const fetch = useCallback(async () => {
    if (!siteId) {
      setData([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (mode === 'snapshot') {
        const cached = cache.get<BacklinkItem[]>(`backlinks_${siteId}`);
        if (cached) {
          setData(cached);
        }
      } else {
        const backlinks = await apiClient.getBacklinks(siteId);
        setData(backlinks);
      }
    } catch (err) {
      setError((err as Error).message);
      if (process.env.NODE_ENV === 'development') {
        setData(generateMockData.backlinks());
      }
    } finally {
      setIsLoading(false);
    }
  }, [siteId, mode]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, error, refetch: fetch };
}

/**
 * SEO 진단 조회 훅
 * @param siteId 사이트 ID
 */
export function useDiagnosis(siteId: string | null) {
  const [data, setData] = useState<DiagnosisResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mode = useMode();

  const fetch = useCallback(async () => {
    if (!siteId) {
      setData(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (mode === 'snapshot') {
        const cached = cache.get<DiagnosisResponse>(`diagnosis_${siteId}`);
        if (cached) {
          setData(cached);
        }
      } else {
        const diagnosis = await apiClient.getDiagnosis(siteId);
        setData(diagnosis);
      }
    } catch (err) {
      setError((err as Error).message);
      if (process.env.NODE_ENV === 'development') {
        setData(generateMockData.diagnosis());
      }
    } finally {
      setIsLoading(false);
    }
  }, [siteId, mode]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, error, refetch: fetch };
}

/**
 * 사이트 통계 조회 훅
 * @param siteId 사이트 ID
 */
export function useSiteStats(siteId: string | null) {
  const [data, setData] = useState<SiteStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mode = useMode();

  const fetch = useCallback(async () => {
    if (!siteId) {
      setData(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (mode === 'snapshot') {
        const cached = cache.get<SiteStats>(`siteStats_${siteId}`);
        if (cached) {
          setData(cached);
        }
      } else {
        const stats = await apiClient.getSiteSummary(siteId);
        setData(stats);
      }
    } catch (err) {
      setError((err as Error).message);
      if (process.env.NODE_ENV === 'development') {
        setData(generateMockData.siteStats());
      }
    } finally {
      setIsLoading(false);
    }
  }, [siteId, mode]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, error, refetch: fetch };
}

// 목 데이터 생성기 (내부 사용)
const generateMockData = {
  dailyStats: () => {
    const items: DailyStatItem[] = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const clicks = Math.floor(Math.random() * 500) + 50;
      const impressions = Math.floor(Math.random() * 5000) + clicks * 5;
      items.push({
        date: date.toISOString().split('T')[0],
        clicks,
        impressions,
        ctr: clicks / impressions,
        avgPosition: Math.random() * 10 + 1,
      });
    }
    return items;
  },
  urlAnalysis: () => {
    const paths = ['/', '/about', '/products', '/contact', '/blog'];
    return Array.from({ length: 20 }, (_, i) => {
      const clicks = Math.floor(Math.random() * 500) + 10;
      const impressions = Math.floor(Math.random() * 3000) + clicks * 3;
      return {
        url: `https://example.com${paths[i % paths.length]}${i >= paths.length ? `/${i}` : ''}`,
        clicks,
        impressions,
        ctr: clicks / impressions,
        avgPosition: Math.random() * 20 + 1,
      };
    });
  },
  keywords: () => {
    const keywords = ['검색', 'SEO', '마케팅', '블로그', '분석'];
    return Array.from({ length: 30 }, (_, i) => {
      const clicks = Math.floor(Math.random() * 200) + 5;
      const impressions = Math.floor(Math.random() * 2000) + clicks * 5;
      return {
        keyword: `${keywords[i % keywords.length]} ${Math.floor(i / keywords.length) + 1}`,
        clicks,
        impressions,
        ctr: clicks / impressions,
        avgPosition: Math.random() * 15 + 1,
      };
    });
  },
  crawlStatus: () => {
    const items: CrawlStatusItem[] = [];
    const today = new Date();
    for (let i = 13; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const crawled = Math.floor(Math.random() * 500) + 100;
      items.push({
        date: date.toISOString().split('T')[0],
        crawledPages: crawled,
        indexedPages: Math.floor(crawled * (0.7 + Math.random() * 0.25)),
        errors: Math.floor(Math.random() * 10),
      });
    }
    return items;
  },
  backlinks: () => {
    const domains = ['naver.com', 'daum.net', 'google.com'];
    return Array.from({ length: 15 }, (_, i) => ({
      sourceUrl: `https://${domains[i % domains.length]}/page/${i + 1}`,
      anchorText: '링크',
      discoveredDate: new Date().toISOString().split('T')[0],
      domainAuthority: Math.floor(Math.random() * 80) + 10,
    }));
  },
  diagnosis: () => ({
    indexStatus: {
      totalPages: 200,
      indexedPages: 180,
      blockedPages: 10,
      errorPages: 5,
    },
    issues: [
      {
        id: 'issue_1',
        type: 'meta_description',
        severity: 'warning' as const,
        message: '메타 설명이 누락된 페이지가 있습니다.',
        affectedUrls: 10,
        recommendation: '메타 설명을 추가하세요.',
      },
    ],
    lastChecked: new Date().toISOString(),
    healthScore: 85,
  }),
  siteStats: () => {
    const clicks = Math.floor(Math.random() * 5000) + 100;
    const impressions = Math.floor(Math.random() * 50000) + clicks * 5;
    return {
      clicks,
      impressions,
      ctr: clicks / impressions,
      avgPosition: Math.random() * 5 + 1,
    };
  },
};
