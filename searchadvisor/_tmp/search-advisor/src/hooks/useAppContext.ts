/**
 * Search Advisor - App Context
 * React Context를 사용한 전역 상태 관리
 */

import React, { createContext, useContext, useReducer, useCallback, type ReactNode } from 'react';
import type { AppMode, TabId, AppState, Site, SiteStats, SummaryData, DailyStatItem, UrlAnalysisItem, KeywordItem, CrawlStatusItem, BacklinkItem, DiagnosisResponse, AppContextValue } from '../types';

// ============================================
// 액션 타입
// ============================================

type AppAction =
  | { type: 'SET_MODE'; payload: AppMode }
  | { type: 'SET_SITES'; payload: Site[] }
  | { type: 'SELECT_SITE'; payload: string | null }
  | { type: 'SELECT_TAB'; payload: TabId }
  | { type: 'SET_SUMMARY'; payload: SummaryData }
  | { type: 'SET_SITE_STATS'; payload: { siteId: string; stats: SiteStats } }
  | { type: 'SET_DAILY_STATS'; payload: DailyStatItem[] }
  | { type: 'SET_URL_ANALYSIS'; payload: UrlAnalysisItem[] }
  | { type: 'SET_KEYWORDS'; payload: KeywordItem[] }
  | { type: 'SET_CRAWL_STATUS'; payload: CrawlStatusItem[] }
  | { type: 'SET_BACKLINKS'; payload: BacklinkItem[] }
  | { type: 'SET_DIAGNOSIS'; payload: DiagnosisResponse | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET' };

// ============================================
// 초기 상태
// ============================================

const initialState: AppState = {
  mode: 'live',
  sites: [],
  selectedSiteId: null,
  selectedTab: 'overview',
  summary: null,
  siteStats: new Map(),
  siteMeta: new Map(),
  dailyStats: [],
  urlAnalysis: [],
  keywords: [],
  crawlStatus: [],
  backlinks: [],
  diagnosis: null,
  isLoading: false,
  error: null,
};

// ============================================
// 리듀서
// ============================================

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_MODE':
      return { ...state, mode: action.payload };

    case 'SET_SITES':
      return { ...state, sites: action.payload };

    case 'SELECT_SITE':
      return { ...state, selectedSiteId: action.payload };

    case 'SELECT_TAB':
      return { ...state, selectedTab: action.payload };

    case 'SET_SUMMARY':
      return { ...state, summary: action.payload };

    case 'SET_SITE_STATS': {
      const newSiteStats = new Map(state.siteStats);
      newSiteStats.set(action.payload.siteId, action.payload.stats);
      return { ...state, siteStats: newSiteStats };
    }

    case 'SET_DAILY_STATS':
      return { ...state, dailyStats: action.payload };

    case 'SET_URL_ANALYSIS':
      return { ...state, urlAnalysis: action.payload };

    case 'SET_KEYWORDS':
      return { ...state, keywords: action.payload };

    case 'SET_CRAWL_STATUS':
      return { ...state, crawlStatus: action.payload };

    case 'SET_BACKLINKS':
      return { ...state, backlinks: action.payload };

    case 'SET_DIAGNOSIS':
      return { ...state, diagnosis: action.payload };

    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

// ============================================
// Context 생성
// ============================================

const AppContext = createContext<AppContextValue | null>(null);

// ============================================
// Provider 컴포넌트
// ============================================

interface AppProviderProps {
  children: ReactNode;
  initialMode?: AppMode;
}

export function AppProvider({ children, initialMode = 'live' }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    mode: initialMode,
  });

  // 액션 함수들
  const setMode = useCallback((mode: AppMode) => {
    dispatch({ type: 'SET_MODE', payload: mode });
  }, []);

  const selectSite = useCallback((siteId: string | null) => {
    dispatch({ type: 'SELECT_SITE', payload: siteId });
  }, []);

  const selectTab = useCallback((tab: TabId) => {
    dispatch({ type: 'SELECT_TAB', payload: tab });
  }, []);

  const refreshData = useCallback(async () => {
    // 실제 구현에서는 API 호출
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      // 데이터 새로고침 로직
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: (error as Error).message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const exportSnapshot = useCallback(async () => {
    // 스냅샷 내보내기 로직
    console.log('Exporting snapshot...');
  }, []);

  const actions = {
    setMode,
    selectSite,
    selectTab,
    refreshData,
    exportSnapshot,
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
}

// ============================================
// 커스텀 훅
// ============================================

/**
 * App Context 사용 훅
 * @returns App Context 값
 */
export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

/**
 * 현재 모드 조회 훅
 * @returns 현재 모드
 */
export function useMode(): AppMode {
  const { state } = useApp();
  return state.mode;
}

/**
 * 사이트 목록 조회 훅
 * @returns 사이트 목록
 */
export function useSites(): Site[] {
  const { state } = useApp();
  return state.sites;
}

/**
 * 선택된 사이트 조회 훅
 * @returns 선택된 사이트 ID
 */
export function useSelectedSite(): string | null {
  const { state } = useApp();
  return state.selectedSiteId;
}

/**
 * 현재 탭 조회 훅
 * @returns 현재 탭 ID
 */
export function useCurrentTab(): TabId {
  const { state } = useApp();
  return state.selectedTab;
}

/**
 * 로딩 상태 조회 훅
 * @returns 로딩 상태
 */
export function useLoading(): boolean {
  const { state } = useApp();
  return state.isLoading;
}

/**
 * 에러 상태 조회 훅
 * @returns 에러 메시지 또는 null
 */
export function useError(): string | null {
  const { state } = useApp();
  return state.error;
}
