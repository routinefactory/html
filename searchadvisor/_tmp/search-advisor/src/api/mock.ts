/**
 * Search Advisor - Mock Data Generator
 * 개발 및 테스트용 목 데이터 생성기
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
  DiagnosisItem,
  IndexStatus,
} from '../types';
import { randomInt } from '../utils/helpers';

/**
 * 랜덤 사이트 데이터 생성
 */
export function generateMockSites(count: number = 5): Site[] {
  const domains = ['example.com', 'mysite.co.kr', 'shop.store', 'blog.me', 'company.io'];

  return Array.from({ length: count }, (_, i) => ({
    id: `site_${i + 1}`,
    name: `테스트 사이트 ${i + 1}`,
    url: `https://${domains[i % domains.length]}`,
    permission: i === 0 ? 'owner' : 'viewer',
  }));
}

/**
 * 랜덤 사이트 통계 생성
 */
export function generateMockSiteStats(): SiteStats {
  const clicks = randomInt(100, 10000);
  const impressions = randomInt(clicks * 10, clicks * 100);

  return {
    clicks,
    impressions,
    ctr: clicks / impressions,
    avgPosition: Math.random() * 10 + 1,
  };
}

/**
 * 랜덤 일별 통계 생성
 */
export function generateMockDailyStats(days: number = 30): DailyStatItem[] {
  const items: DailyStatItem[] = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    const clicks = randomInt(50, 500);
    const impressions = randomInt(clicks * 5, clicks * 20);

    items.push({
      date: date.toISOString().split('T')[0],
      clicks,
      impressions,
      ctr: clicks / impressions,
      avgPosition: Math.random() * 10 + 1,
    });
  }

  return items;
}

/**
 * 랜덤 URL 분석 데이터 생성
 */
export function generateMockUrlAnalysis(count: number = 20): UrlAnalysisItem[] {
  const paths = ['/', '/about', '/products', '/contact', '/blog', '/services', '/faq', '/pricing'];

  return Array.from({ length: count }, (_, i) => {
    const clicks = randomInt(10, 1000);
    const impressions = randomInt(clicks * 3, clicks * 30);

    return {
      url: `https://example.com${paths[i % paths.length]}${i > paths.length ? `/${i}` : ''}`,
      clicks,
      impressions,
      ctr: clicks / impressions,
      avgPosition: Math.random() * 20 + 1,
    };
  });
}

/**
 * 랜덤 검색어 데이터 생성
 */
export function generateMockKeywords(count: number = 30): KeywordItem[] {
  const keywords = [
    '네이버 검색', 'SEO 최적화', '블로그 마케팅', '검색 엔진', '키워드 분석',
    '웹사이트 분석', '트래픽 증가', '콘텐츠 마케팅', '구글 SEO', '메타 태그',
    '백링크', '사이트맵', '로봇 텍스트', '인덱싱', '크롤링',
  ];

  return Array.from({ length: count }, (_, i) => {
    const clicks = randomInt(5, 500);
    const impressions = randomInt(clicks * 5, clicks * 50);

    return {
      keyword: `${keywords[i % keywords.length]} ${Math.floor(i / keywords.length) + 1}`,
      clicks,
      impressions,
      ctr: clicks / impressions,
      avgPosition: Math.random() * 15 + 1,
    };
  });
}

/**
 * 랜덤 크롤링 상태 생성
 */
export function generateMockCrawlStatus(days: number = 14): CrawlStatusItem[] {
  const items: CrawlStatusItem[] = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    const crawled = randomInt(100, 1000);
    const indexed = Math.floor(crawled * (0.7 + Math.random() * 0.25));

    items.push({
      date: date.toISOString().split('T')[0],
      crawledPages: crawled,
      indexedPages: indexed,
      errors: randomInt(0, 10),
    });
  }

  return items;
}

/**
 * 랜덤 백링크 데이터 생성
 */
export function generateMockBacklinks(count: number = 15): BacklinkItem[] {
  const domains = ['naver.com', 'daum.net', 'google.com', 'tistory.com', 'wordpress.com'];
  const anchors = ['홈페이지', '바로가기', '자세히 보기', '클릭', '방문하기'];

  return Array.from({ length: count }, (_, i) => {
    const domain = domains[i % domains.length];
    const today = new Date();
    const discoveredDate = new Date(today);
    discoveredDate.setDate(discoveredDate.getDate() - randomInt(1, 365));

    return {
      sourceUrl: `https://${domain}/page/${randomInt(1, 1000)}`,
      anchorText: anchors[i % anchors.length],
      discoveredDate: discoveredDate.toISOString().split('T')[0],
      domainAuthority: randomInt(10, 90),
    };
  });
}

/**
 * 랜덤 SEO 진단 데이터 생성
 */
export function generateMockDiagnosis(): DiagnosisResponse {
  const indexStatus: IndexStatus = {
    totalPages: randomInt(100, 500),
    indexedPages: randomInt(80, 400),
    blockedPages: randomInt(5, 20),
    errorPages: randomInt(1, 10),
  };

  const issues: DiagnosisItem[] = [
    {
      id: 'issue_1',
      type: 'meta_description',
      severity: 'warning',
      message: '메타 설명이 누락된 페이지가 있습니다.',
      affectedUrls: randomInt(5, 20),
      recommendation: '모든 페이지에 고유한 메타 설명을 추가하세요.',
    },
    {
      id: 'issue_2',
      type: 'title_duplicate',
      severity: 'critical',
      message: '중복된 제목을 가진 페이지가 있습니다.',
      affectedUrls: randomInt(3, 15),
      recommendation: '각 페이지에 고유한 제목을 사용하세요.',
    },
    {
      id: 'issue_3',
      type: 'broken_links',
      severity: 'warning',
      message: '깨진 링크가 발견되었습니다.',
      affectedUrls: randomInt(1, 10),
      recommendation: '깨진 링크를 수정하거나 제거하세요.',
    },
    {
      id: 'issue_4',
      type: 'mobile_usability',
      severity: 'info',
      message: '모바일 사용성 개선이 필요한 페이지가 있습니다.',
      affectedUrls: randomInt(2, 8),
      recommendation: '모바일 친화적인 디자인을 적용하세요.',
    },
  ];

  const indexedRatio = indexStatus.indexedPages / indexStatus.totalPages;
  const errorRatio = indexStatus.errorPages / indexStatus.totalPages;
  const healthScore = Math.max(0, Math.min(100, Math.floor((indexedRatio * 100) - (errorRatio * 100) - (issues.length * 2))));

  return {
    indexStatus,
    issues,
    lastChecked: new Date().toISOString(),
    healthScore,
  };
}

/**
 * 전체 목 데이터 생성
 */
export function generateFullMockData() {
  const sites = generateMockSites();
  const siteStats = new Map<string, SiteStats>();

  sites.forEach(site => {
    siteStats.set(site.id, generateMockSiteStats());
  });

  return {
    sites,
    siteStats,
    dailyStats: generateMockDailyStats(),
    urlAnalysis: generateMockUrlAnalysis(),
    keywords: generateMockKeywords(),
    crawlStatus: generateMockCrawlStatus(),
    backlinks: generateMockBacklinks(),
    diagnosis: generateMockDiagnosis(),
  };
}
