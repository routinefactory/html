/**
 * Search Advisor - Main Entry Point
 * 애플리케이션 진입점 및 초기화
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Panel } from './App';
import { createShadowHost, createShadowRoot, isSearchAdvisorPage, isSnapshotPage } from './utils/dom';
import { apiClient } from './api/client';
import { cache } from './api/cache';
import { generateFullMockData } from './api/mock';
import type { AppMode, Site, SnapshotPayload } from './types';

/**
 * 애플리케이션 초기화
 */
async function init(): Promise<void> {
  // 이미 실행 중인지 확인
  if (document.getElementById('sadv-react-shell-host')) {
    console.log('[Search Advisor] Panel already running');
    return;
  }

  // 실행 모드 결정
  const mode: AppMode = determineMode();
  console.log(`[Search Advisor] Starting in ${mode} mode`);

  try {
    // Shadow DOM 생성
    const host = createShadowHost();
    const shadow = createShadowRoot(host);
    const container = shadow.getElementById('sadv-root');

    if (!container) {
      throw new Error('Failed to create container element');
    }

    // React 앱 마운트
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <Panel />
      </React.StrictMode>
    );

    // 초기 데이터 로드
    await loadInitialData(mode);

    console.log('[Search Advisor] Panel initialized successfully');
  } catch (error) {
    console.error('[Search Advisor] Initialization failed:', error);
  }
}

/**
 * 실행 모드 결정
 */
function determineMode(): AppMode {
  // 스냅샷 HTML에서 실행 중인지 확인
  if (isSnapshotPage()) {
    return 'snapshot';
  }

  // 서치어드바이저 페이지에서 실행 중인지 확인
  if (isSearchAdvisorPage()) {
    return 'live';
  }

  // 기본적으로 스냅샷 모드
  return 'snapshot';
}

/**
 * 초기 데이터 로드
 */
async function loadInitialData(mode: AppMode): Promise<void> {
  if (mode === 'snapshot') {
    // 스냅샷 모드: 저장된 페이로드에서 데이터 로드
    const payload = (window as unknown as { __SEARCHADVISOR_EXPORT_PAYLOAD__?: SnapshotPayload }).__SEARCHADVISOR_EXPORT_PAYLOAD__;

    if (payload) {
      // 캐시에 데이터 저장
      Object.entries(payload.siteStats).forEach(([siteId, stats]) => {
        cache.set(`siteStats_${siteId}`, stats);
      });

      if (payload.dailyStats) {
        cache.set('dailyStats', payload.dailyStats);
      }

      if (payload.urlAnalysis) {
        cache.set('urlAnalysis', payload.urlAnalysis);
      }

      if (payload.keywords) {
        cache.set('keywords', payload.keywords);
      }

      if (payload.crawlStatus) {
        cache.set('crawlStatus', payload.crawlStatus);
      }

      if (payload.backlinks) {
        cache.set('backlinks', payload.backlinks);
      }

      if (payload.diagnosis) {
        cache.set('diagnosis', payload.diagnosis);
      }

      console.log('[Search Advisor] Snapshot data loaded');
    }
  } else {
    // 라이브 모드: API에서 데이터 로드
    try {
      // 개발 환경에서는 목 데이터 사용
      if (process.env.NODE_ENV === 'development') {
        const mockData = generateFullMockData();
        mockData.sites.forEach(site => {
          cache.set(`siteStats_${site.id}`, mockData.siteStats.get(site.id)!);
        });
        console.log('[Search Advisor] Mock data loaded for development');
      } else {
        // 실제 API 호출
        const sites = await apiClient.getSites();
        console.log('[Search Advisor] Loaded', sites.length, 'sites');
      }
    } catch (error) {
      console.error('[Search Advisor] Failed to load initial data:', error);
    }
  }
}

/**
 * 스냅샷 내보내기
 */
export async function exportSnapshot(): Promise<void> {
  // 현재 상태를 HTML로 내보내기
  const payload: SnapshotPayload = {
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    mode: 'snapshot',
    sites: [], // state에서 가져와야 함
    summary: {
      totalClicks: 0,
      totalImpressions: 0,
      avgCtr: 0,
      siteCount: 0,
      lastUpdated: new Date().toISOString(),
    },
    siteStats: {},
    dailyStats: [],
    urlAnalysis: [],
    keywords: [],
    crawlStatus: [],
    backlinks: [],
    diagnosis: null,
  };

  // HTML 생성
  const html = generateSnapshotHTML(payload);

  // 다운로드
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `searchadvisor-snapshot-${new Date().toISOString().split('T')[0]}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log('[Search Advisor] Snapshot exported');
}

/**
 * 스냅샷 HTML 생성
 */
function generateSnapshotHTML(payload: SnapshotPayload): string {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Advisor Snapshot - ${payload.exportedAt}</title>
</head>
<body>
  <script>
    window.__SEARCHADVISOR_EXPORT_PAYLOAD__ = ${JSON.stringify(payload)};
  </script>
  <script>
    // 스냅샷용 스크립트가 여기에 포함됩니다
    ${getSnapshotScript()}
  </script>
</body>
</html>`;
}

/**
 * 스냅샷용 스크립트 가져오기
 */
function getSnapshotScript(): string {
  // 실제 구현에서는 빌드된 스크립트를 인라인으로 포함
  return `
    // Search Advisor Snapshot Script
    (function() {
      console.log('Search Advisor Snapshot loaded');
      // 스냅샷 모드에서 패널 초기화
      // init() 함수 호출
    })();
  `;
}

// 자동 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// 전역으로 노출 (북마클릿용)
(window as unknown as { initSearchAdvisor: typeof init }).initSearchAdvisor = init;
(window as unknown as { exportSearchAdvisorSnapshot: typeof exportSnapshot }).exportSearchAdvisorSnapshot = exportSnapshot;

export { init };
