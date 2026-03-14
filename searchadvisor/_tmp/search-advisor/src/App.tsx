/**
 * Search Advisor - Main Panel Component
 * 메인 패널 컴포넌트
 */

import React, { useRef, useEffect } from 'react';
import { AppProvider, useApp } from '../hooks/useAppContext';
import { Button, Badge, Loading } from './common';
import { Tabs } from './common';
import { SiteListPanel, OverviewPanel, DailyTrendPanel, UrlAnalysisPanel, KeywordAnalysisPanel, CrawlStatusPanel, BacklinksPanel, DiagnosisPanel } from './panels';
import { useScrollPosition, useKeyboardShortcut } from '../hooks/usePanel';
import type { TabId } from '../types';

// 탭 정의
const TABS = [
  { id: 'overview' as TabId, label: '개요', icon: '📊' },
  { id: 'daily' as TabId, label: '일별 추세', icon: '📈' },
  { id: 'urls' as TabId, label: 'URL 분석', icon: '🔗' },
  { id: 'keywords' as TabId, label: '검색어', icon: '🔍' },
  { id: 'crawl' as TabId, label: '크롤링', icon: '🤖' },
  { id: 'backlinks' as TabId, label: '백링크', icon: '🔗' },
  { id: 'diagnosis' as TabId, label: 'SEO 진단', icon: '🏥' },
];

/**
 * 메인 패널 내부 컴포넌트
 */
function PanelContent() {
  const { state, actions } = useApp();
  const contentRef = useRef<HTMLDivElement>(null);
  const { isAtTop, scrollToTop } = useScrollPosition(contentRef);

  // ESC 키로 패널 닫기
  useKeyboardShortcut('Escape', () => {
    // 패널 닫기 로직
    const host = document.getElementById('sadv-react-shell-host');
    if (host) host.remove();
  });

  // 탭 변경 시 스크롤 맨 위로
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [state.selectedTab]);

  // 탭 컨텐츠 렌더링
  const renderTabContent = () => {
    // 사이트가 선택되지 않은 경우 사이트 목록 표시
    if (!state.selectedSiteId && state.selectedTab !== 'overview') {
      return (
        <div style={{ textAlign: 'center', padding: 40, color: '#888' }}>
          사이트를 선택해주세요
        </div>
      );
    }

    switch (state.selectedTab) {
      case 'overview':
        return <OverviewPanel />;
      case 'daily':
        return <DailyTrendPanel />;
      case 'urls':
        return <UrlAnalysisPanel />;
      case 'keywords':
        return <KeywordAnalysisPanel />;
      case 'crawl':
        return <CrawlStatusPanel />;
      case 'backlinks':
        return <BacklinksPanel />;
      case 'diagnosis':
        return <DiagnosisPanel />;
      default:
        return <OverviewPanel />;
    }
  };

  return (
    <div className="sadv-panel">
      {/* 헤더 */}
      <div className="sadv-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h1>서치어드바이저</h1>
          <Badge variant={state.mode}>
            {state.mode === 'live' ? '실시간' : '스냅샷'}
          </Badge>
        </div>
        <div className="sadv-header-actions">
          {state.mode === 'live' && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => actions.refreshData()}
              loading={state.isLoading}
            >
              새로고침
            </Button>
          )}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => actions.exportSnapshot()}
          >
            내보내기
          </Button>
          <Button
            variant="icon"
            size="sm"
            onClick={() => {
              const host = document.getElementById('sadv-react-shell-host');
              if (host) host.remove();
            }}
          >
            ✕
          </Button>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <Tabs
        tabs={TABS}
        activeTab={state.selectedTab}
        onTabChange={actions.selectTab}
      />

      {/* 사이트 선택 영역 (개요 탭이 아닐 때) */}
      {state.selectedTab !== 'overview' && (
        <div style={{ padding: '8px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <SiteSelector />
        </div>
      )}

      {/* 컨텐츠 영역 */}
      <div className="sadv-content" ref={contentRef}>
        {state.isLoading ? (
          <Loading message="데이터를 불러오는 중..." />
        ) : state.error ? (
          <div className="sadv-error">
            {state.error}
            <Button variant="secondary" size="sm" onClick={() => actions.refreshData()} style={{ marginTop: 8 }}>
              다시 시도
            </Button>
          </div>
        ) : (
          renderTabContent()
        )}
      </div>

      {/* 스크롤 맨 위로 버튼 */}
      {!isAtTop && (
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            zIndex: 10,
          }}
        >
          <Button variant="secondary" onClick={scrollToTop}>
            ↑ 맨 위로
          </Button>
        </div>
      )}
    </div>
  );
}

/**
 * 사이트 선택기 컴포넌트
 */
function SiteSelector() {
  const { state, actions } = useApp();

  const selectedSite = state.sites.find(s => s.id === state.selectedSiteId);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '4px 8px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 6,
      }}
    >
      <span style={{ fontSize: 12, color: '#888' }}>현재 사이트:</span>
      <select
        value={state.selectedSiteId ?? ''}
        onChange={e => actions.selectSite(e.target.value || null)}
        style={{
          flex: 1,
          padding: '4px 8px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 4,
          color: '#e4e4e4',
          fontSize: 12,
        }}
      >
        <option value="">사이트 선택</option>
        {state.sites.map(site => (
          <option key={site.id} value={site.id}>
            {site.name}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * 메인 패널 컴포넌트 (Provider 포함)
 */
export function Panel() {
  return (
    <AppProvider>
      <PanelContent />
    </AppProvider>
  );
}
