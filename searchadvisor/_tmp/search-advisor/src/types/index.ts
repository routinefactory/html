/**
 * Search Advisor - Type Definitions
 * 네이버 서치어드바이저 데이터 분석 패널의 타입 정의
 */

// ============================================
// 기본 타입
// ============================================

/** 실행 모드 */
export type AppMode = 'live' | 'snapshot';

/** 탭 ID */
export type TabId = 'overview' | 'daily' | 'urls' | 'keywords' | 'crawl' | 'backlinks' | 'diagnosis';

/** 사이트 정렬 옵션 */
export type SiteSortOption = 'clicks' | 'impressions' | 'ctr' | 'position' | 'name';

// ============================================
// API 응답 타입
// ============================================

/** 사이트 기본 정보 */
export interface Site {
  id: string;
  name: string;
  url: string;
  permission: string;
}

/** 사이트 통계 데이터 */
export interface SiteStats {
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
}

/** 사이트 메타 정보 (캐시용) */
export interface SiteMeta {
  lastUpdated: string | null;
  isLoading: boolean;
  error: string | null;
}

/** 전체 사이트 요약 데이터 */
export interface SummaryData {
  totalClicks: number;
  totalImpressions: number;
  avgCtr: number;
  siteCount: number;
  lastUpdated: string;
}

// ============================================
// 일별 통계 타입
// ============================================

/** 일별 통계 항목 */
export interface DailyStatItem {
  date: string;
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
}

/** 일별 통계 응답 */
export interface DailyStatsResponse {
  items: DailyStatItem[];
  totalClicks: number;
  totalImpressions: number;
  avgCtr: number;
}

// ============================================
// URL 분석 타입
// ============================================

/** URL 분석 항목 */
export interface UrlAnalysisItem {
  url: string;
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
}

/** URL 분석 응답 */
export interface UrlAnalysisResponse {
  items: UrlAnalysisItem[];
  totalItems: number;
  page: number;
  pageSize: number;
}

// ============================================
// 검색어 분석 타입
// ============================================

/** 검색어 분석 항목 */
export interface KeywordItem {
  keyword: string;
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
}

/** 검색어 분석 응답 */
export interface KeywordResponse {
  items: KeywordItem[];
  totalItems: number;
  page: number;
  pageSize: number;
}

// ============================================
// 크롤링 상태 타입
// ============================================

/** 크롤링 상태 항목 */
export interface CrawlStatusItem {
  date: string;
  crawledPages: number;
  indexedPages: number;
  errors: number;
}

/** 크롤링 상태 응답 */
export interface CrawlStatusResponse {
  items: CrawlStatusItem[];
  lastCrawlTime: string;
  crawlRate: number;
}

// ============================================
// 백링크 타입
// ============================================

/** 백링크 항목 */
export interface BacklinkItem {
  sourceUrl: string;
  anchorText: string;
  discoveredDate: string;
  domainAuthority: number;
}

/** 백링크 응답 */
export interface BacklinkResponse {
  items: BacklinkItem[];
  totalBacklinks: number;
  uniqueDomains: number;
}

// ============================================
// SEO 진단 타입
// ============================================

/** SEO 이슈 심각도 */
export type SeverityLevel = 'critical' | 'warning' | 'info';

/** SEO 진단 항목 */
export interface DiagnosisItem {
  id: string;
  type: string;
  severity: SeverityLevel;
  message: string;
  affectedUrls: number;
  recommendation: string;
}

/** 인덱스 상태 */
export interface IndexStatus {
  totalPages: number;
  indexedPages: number;
  blockedPages: number;
  errorPages: number;
}

/** SEO 진단 응답 */
export interface DiagnosisResponse {
  indexStatus: IndexStatus;
  issues: DiagnosisItem[];
  lastChecked: string;
  healthScore: number;
}

// ============================================
// 앱 상태 타입
// ============================================

/** 전체 앱 상태 */
export interface AppState {
  mode: AppMode;
  sites: Site[];
  selectedSiteId: string | null;
  selectedTab: TabId;
  summary: SummaryData | null;
  siteStats: Map<string, SiteStats>;
  siteMeta: Map<string, SiteMeta>;
  dailyStats: DailyStatItem[];
  urlAnalysis: UrlAnalysisItem[];
  keywords: KeywordItem[];
  crawlStatus: CrawlStatusItem[];
  backlinks: BacklinkItem[];
  diagnosis: DiagnosisResponse | null;
  isLoading: boolean;
  error: string | null;
}

// ============================================
// 내보내기/스냅샷 타입
// ============================================

/** 스냅샷 페이로드 */
export interface SnapshotPayload {
  version: string;
  exportedAt: string;
  mode: 'snapshot';
  sites: Site[];
  summary: SummaryData;
  siteStats: Record<string, SiteStats>;
  dailyStats: DailyStatItem[];
  urlAnalysis: UrlAnalysisItem[];
  keywords: KeywordItem[];
  crawlStatus: CrawlStatusItem[];
  backlinks: BacklinkItem[];
  diagnosis: DiagnosisResponse | null;
}

// ============================================
// API 요청 옵션 타입
// ============================================

/** API 요청 옵션 */
export interface ApiRequestOptions {
  useCache?: boolean;
  cacheKey?: string;
  timeout?: number;
  retries?: number;
}

/** 캐시 엔트리 */
export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

// ============================================
// UI 컴포넌트 Props 타입
// ============================================

/** 스파크라인 Props */
export interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  fillOpacity?: number;
}

/** 바차트 Props */
export interface BarChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
  barColor?: string;
}

/** 탭 Props */
export interface TabProps {
  id: TabId;
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

/** 사이트 카드 Props */
export interface SiteCardProps {
  site: Site;
  stats: SiteStats;
  meta: SiteMeta;
  isSelected: boolean;
  onClick: () => void;
}

// ============================================
// Context 타입
// ============================================

/** App Context 값 */
export interface AppContextValue {
  state: AppState;
  actions: {
    setMode: (mode: AppMode) => void;
    selectSite: (siteId: string | null) => void;
    selectTab: (tab: TabId) => void;
    refreshData: () => Promise<void>;
    exportSnapshot: () => Promise<void>;
  };
}
