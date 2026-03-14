/**
 * Search Advisor - Console Edition
 * 네이버 서치어드바이저 콘솔에서 바로 실행 가능한 버전
 * 
 * 사용법:
 * 1. https://searchadvisor.naver.com 접속
 * 2. F12 > Console 탭
 * 3. 이 파일 전체 내용을 붙여넣고 Enter
 */

(function() {
  'use strict';

  // 이미 실행 중이면 종료
  if (document.getElementById('sadv-react-shell-host')) {
    console.log('⚠️ 서치어드바이저 패널이 이미 실행 중입니다.');
    return;
  }

  console.log('🚀 서치어드바이저 패널 로딩 중...');

  // React 로드 체크
  const checkReact = () => {
    return typeof window.React !== 'undefined' &&
           typeof window.ReactDOM !== 'undefined';
  };

  // 앱 초기화
  const initApp = () => {
    console.log('✅ React 로드 완료, 패널 시작...');

    // Shadow DOM 호스트 생성
    const host = document.createElement('div');
    host.id = 'sadv-react-shell-host';
    host.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      width: 420px;
      height: 100vh;
      z-index: 2147483647;
      background: transparent;
    `;
    document.body.appendChild(host);

    // Shadow DOM 생성
    const shadow = host.attachShadow({ mode: 'open' });

    // 스타일 주입
    const style = document.createElement('style');
    style.textContent = getStyles();
    shadow.appendChild(style);

    // React 컨테이너
    const container = document.createElement('div');
    container.id = 'sadv-root';
    shadow.appendChild(container);

    // 앱 렌더링
    renderApp(container);
  };

  // React/ReactDOM 로드
  if (!checkReact()) {
    console.log('📦 React 로드 중...');

    const reactScript = document.createElement('script');
    reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
    reactScript.crossOrigin = 'anonymous';

    const reactDomScript = document.createElement('script');
    reactDomScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
    reactDomScript.crossOrigin = 'anonymous';

    document.head.appendChild(reactScript);
    document.head.appendChild(reactDomScript);

    reactDomScript.onload = () => {
      setTimeout(initApp, 100);
    };
  } else {
    initApp();
  }

  // 스타일 가져오기
  function getStyles() {
    return `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      ::-webkit-scrollbar { width: 6px; height: 6px; }
      ::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.1); border-radius: 3px; }
      ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 3px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.3); }

      .sadv-panel {
        width: 100%; height: 100vh;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        color: #e4e4e4;
        display: flex; flex-direction: column;
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
      }

      .sadv-header {
        padding: 16px;
        background: rgba(0, 0, 0, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex; align-items: center; justify-content: space-between;
        flex-shrink: 0;
      }
      .sadv-header h1 { font-size: 16px; font-weight: 600; color: #fff; }
      .sadv-header-actions { display: flex; gap: 8px; }

      .sadv-btn {
        padding: 6px 12px; border: none; border-radius: 6px;
        cursor: pointer; font-size: 12px; font-weight: 500;
        transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 4px;
      }
      .sadv-btn-primary { background: #4f8cff; color: white; }
      .sadv-btn-primary:hover { background: #3a7bff; }
      .sadv-btn-secondary { background: rgba(255, 255, 255, 0.1); color: #e4e4e4; }
      .sadv-btn-secondary:hover { background: rgba(255, 255, 255, 0.15); }
      .sadv-btn-icon { padding: 6px; background: transparent; color: #e4e4e4; }
      .sadv-btn-icon:hover { background: rgba(255, 255, 255, 0.1); }

      .sadv-tabs {
        display: flex; background: rgba(0, 0, 0, 0.2);
        overflow-x: auto; flex-shrink: 0;
      }
      .sadv-tab {
        padding: 10px 14px; font-size: 11px; color: #a0a0a0;
        background: transparent; border: none;
        border-bottom: 2px solid transparent; cursor: pointer;
        white-space: nowrap; transition: all 0.2s ease;
      }
      .sadv-tab:hover { color: #fff; background: rgba(255, 255, 255, 0.05); }
      .sadv-tab.active { color: #4f8cff; border-bottom-color: #4f8cff; }

      .sadv-content { flex: 1; overflow-y: auto; padding: 16px; }

      .sadv-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px; padding: 12px; margin-bottom: 12px;
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
      .sadv-card-title { font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 4px; }
      .sadv-card-subtitle { font-size: 11px; color: #888; }
      .sadv-card-value { font-size: 24px; font-weight: 700; color: #4f8cff; }

      .sadv-grid { display: grid; gap: 12px; }
      .sadv-grid-2 { grid-template-columns: repeat(2, 1fr); }
      .sadv-grid-3 { grid-template-columns: repeat(3, 1fr); }

      .sadv-site-item {
        padding: 10px; background: rgba(255, 255, 255, 0.03);
        border-radius: 6px; margin-bottom: 6px; cursor: pointer;
        transition: all 0.2s ease; border: 1px solid transparent;
      }
      .sadv-site-item:hover { background: rgba(255, 255, 255, 0.06); }
      .sadv-site-item.selected { background: rgba(79, 140, 255, 0.15); border-color: rgba(79, 140, 255, 0.3); }
      .sadv-site-name { font-size: 13px; font-weight: 500; color: #fff; margin-bottom: 4px; }
      .sadv-site-url { font-size: 11px; color: #888; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

      .sadv-stats-row {
        display: flex; justify-content: space-between;
        margin-top: 8px; padding-top: 8px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
      }
      .sadv-stat-item { text-align: center; flex: 1; }
      .sadv-stat-value { font-size: 12px; font-weight: 600; color: #fff; }
      .sadv-stat-label { font-size: 10px; color: #888; }

      .sadv-badge {
        display: inline-block; padding: 2px 6px;
        border-radius: 4px; font-size: 10px; font-weight: 600; text-transform: uppercase;
      }
      .sadv-badge-live { background: rgba(76, 175, 80, 0.2); color: #81c784; }

      .sadv-search {
        width: 100%; padding: 8px 12px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 6px; color: #fff; font-size: 12px; margin-bottom: 12px;
      }
      .sadv-search::placeholder { color: #666; }
      .sadv-search:focus { outline: none; border-color: rgba(79, 140, 255, 0.5); }

      .sadv-loading { display: flex; align-items: center; justify-content: center; padding: 20px; color: #888; }
      .sadv-spinner {
        width: 20px; height: 20px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-top-color: #4f8cff; border-radius: 50%;
        animation: spin 0.8s linear infinite; margin-right: 8px;
      }
      @keyframes spin { to { transform: rotate(360deg); } }

      .sadv-empty { text-align: center; padding: 40px 20px; color: #888; }
      .sadv-empty-icon { font-size: 40px; margin-bottom: 12px; opacity: 0.5; }
    `;
  }

  // 앱 렌더링
  function renderApp(container) {
    const React = window.React;
    const ReactDOM = window.ReactDOM;

    if (!React || !ReactDOM) {
      console.error('React not loaded');
      return;
    }

    const e = React.createElement;

    // 상태
    let state = {
      selectedTab: 'overview',
      selectedSiteId: null,
      sites: generateMockSites(),
      siteStats: generateMockSiteStats(),
      dailyStats: generateMockDailyStats()
    };

    // 목 데이터 생성
    function generateMockSites() {
      return [
        { id: 'site_1', name: '네이버 블로그', url: 'https://blog.naver.com/example' },
        { id: 'site_2', name: '쇼핑몰 사이트', url: 'https://shop.example.co.kr' },
        { id: 'site_3', name: '회사 홈페이지', url: 'https://company.com' },
      ];
    }

    function generateMockSiteStats() {
      return {
        'site_1': { clicks: 15420, impressions: 245000, ctr: 0.063, avgPosition: 3.2 },
        'site_2': { clicks: 8530, impressions: 156000, ctr: 0.055, avgPosition: 4.5 },
        'site_3': { clicks: 3250, impressions: 89000, ctr: 0.037, avgPosition: 6.1 }
      };
    }

    function generateMockDailyStats() {
      const stats = [];
      for (let i = 29; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const clicks = Math.floor(Math.random() * 500) + 100;
        stats.push({
          date: d.toISOString().split('T')[0],
          clicks,
          impressions: clicks * (Math.floor(Math.random() * 10) + 5)
        });
      }
      return stats;
    }

    // 포맷팅
    const formatNumber = n => n.toLocaleString('ko-KR');
    const formatPercent = n => (n * 100).toFixed(1) + '%';

    // 액션
    const closePanel = () => {
      const host = document.getElementById('sadv-react-shell-host');
      if (host) host.remove();
    };

    const selectTab = tab => {
      state = { ...state, selectedTab: tab };
      render();
    };

    const selectSite = siteId => {
      state = { ...state, selectedSiteId: siteId };
      render();
    };

    // 스파크라인 SVG
    const Sparkline = ({ data, width = 60, height = 20 }) => {
      if (!data || data.length === 0) return null;
      const max = Math.max(...data);
      const min = Math.min(...data);
      const range = max - min || 1;
      const points = data.map((v, i) => {
        const x = 2 + (i / (data.length - 1)) * (width - 4);
        const y = height - 2 - ((v - min) / range) * (height - 4);
        return `${x},${y}`;
      }).join(' ');
      return e('svg', { width, height, style: { display: 'inline-block' } },
        e('polyline', { points, fill: 'none', stroke: '#4f8cff', strokeWidth: 1.5 })
      );
    };

    // 사이트 카드
    const SiteCard = site => {
      const stats = state.siteStats[site.id];
      return e('div', {
        className: `sadv-site-item ${state.selectedSiteId === site.id ? 'selected' : ''}`,
        onClick: () => selectSite(site.id),
        key: site.id
      },
        e('div', { className: 'sadv-site-name' }, site.name),
        e('div', { className: 'sadv-site-url' }, site.url),
        stats && e('div', { className: 'sadv-stats-row' },
          e('div', { className: 'sadv-stat-item' },
            e('div', { className: 'sadv-stat-value' }, formatNumber(stats.clicks)),
            e('div', { className: 'sadv-stat-label' }, '클릭')
          ),
          e('div', { className: 'sadv-stat-item' },
            e('div', { className: 'sadv-stat-value' }, formatNumber(stats.impressions)),
            e('div', { className: 'sadv-stat-label' }, '노출')
          ),
          e('div', { className: 'sadv-stat-item' },
            e('div', { className: 'sadv-stat-value' }, formatPercent(stats.ctr)),
            e('div', { className: 'sadv-stat-label' }, 'CTR')
          )
        )
      );
    };

    // 개요 패널
    const OverviewPanel = () => {
      const totalClicks = Object.values(state.siteStats).reduce((sum, s) => sum + s.clicks, 0);
      const totalImpressions = Object.values(state.siteStats).reduce((sum, s) => sum + s.impressions, 0);
      const avgCtr = totalImpressions > 0 ? totalClicks / totalImpressions : 0;

      return e('div', null,
        e('div', { className: 'sadv-grid sadv-grid-2' },
          e('div', { className: 'sadv-card' },
            e('div', { className: 'sadv-card-subtitle' }, '총 클릭수'),
            e('div', { className: 'sadv-card-value' }, formatNumber(totalClicks))
          ),
          e('div', { className: 'sadv-card' },
            e('div', { className: 'sadv-card-subtitle' }, '총 노출수'),
            e('div', { className: 'sadv-card-value' }, formatNumber(totalImpressions))
          ),
          e('div', { className: 'sadv-card' },
            e('div', { className: 'sadv-card-subtitle' }, '평균 CTR'),
            e('div', { className: 'sadv-card-value' }, formatPercent(avgCtr))
          ),
          e('div', { className: 'sadv-card' },
            e('div', { className: 'sadv-card-subtitle' }, '등록 사이트'),
            e('div', { className: 'sadv-card-value' }, state.sites.length)
          )
        ),
        e('div', { className: 'sadv-card', style: { marginTop: 16 } },
          e('div', { className: 'sadv-card-title' }, '사이트 목록'),
          state.sites.map(site => SiteCard(site))
        )
      );
    };

    // 일별 추세 패널
    const DailyPanel = () => {
      if (!state.selectedSiteId) {
        return e('div', { className: 'sadv-empty' },
          e('div', { className: 'sadv-empty-icon' }, '📈'),
          e('div', null, '사이트를 선택하면 일별 추세를 볼 수 있습니다')
        );
      }

      const sparkData = state.dailyStats.map(d => d.clicks);
      const totalClicks = state.dailyStats.reduce((sum, d) => sum + d.clicks, 0);
      const avgClicks = Math.round(totalClicks / state.dailyStats.length);

      return e('div', null,
        e('div', { className: 'sadv-grid sadv-grid-2' },
          e('div', { className: 'sadv-card' },
            e('div', { className: 'sadv-card-subtitle' }, '30일 총 클릭'),
            e('div', { className: 'sadv-card-value' }, formatNumber(totalClicks))
          ),
          e('div', { className: 'sadv-card' },
            e('div', { className: 'sadv-card-subtitle' }, '일평균 클릭'),
            e('div', { className: 'sadv-card-value' }, formatNumber(avgClicks))
          )
        ),
        e('div', { className: 'sadv-card', style: { marginTop: 16 } },
          e('div', { className: 'sadv-card-title' }, '클릭 추세'),
          e(Sparkline, { data: sparkData, width: 380, height: 60 }),
          e('div', { style: { marginTop: 16 } },
            state.dailyStats.slice(-10).reverse().map(d =>
              e('div', {
                key: d.date,
                style: { display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: 12 }
              },
                e('span', { style: { color: '#888' } }, d.date),
                e('span', null, formatNumber(d.clicks), ' 클릭')
              )
            )
          )
        )
      );
    };

    // 탭 컨텐츠
    const TabContent = () => {
      switch (state.selectedTab) {
        case 'overview': return OverviewPanel();
        case 'daily': return DailyPanel();
        default:
          return e('div', { className: 'sadv-empty' },
            e('div', { className: 'sadv-empty-icon' }, '📊'),
            e('div', null, '준비 중인 기능입니다')
          );
      }
    };

    // 메인 패널
    const Panel = () => {
      return e('div', { className: 'sadv-panel' },
        e('div', { className: 'sadv-header' },
          e('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
            e('h1', null, '서치어드바이저'),
            e('span', { className: 'sadv-badge sadv-badge-live' }, '실시간')
          ),
          e('div', { className: 'sadv-header-actions' },
            e('button', { className: 'sadv-btn sadv-btn-secondary', onClick: () => { state.dailyStats = generateMockDailyStats(); render(); } }, '🔄 새로고침'),
            e('button', { className: 'sadv-btn sadv-btn-icon', onClick: closePanel }, '✕')
          )
        ),
        e('div', { className: 'sadv-tabs' },
          ['개요', '일별추세', 'URL분석', '검색어', '크롤링', 'SEO진단'].map((label, i) =>
            e('button', {
              key: i,
              className: `sadv-tab ${state.selectedTab === ['overview', 'daily', 'urls', 'keywords', 'crawl', 'diagnosis'][i] ? 'active' : ''}`,
              onClick: () => selectTab(['overview', 'daily', 'urls', 'keywords', 'crawl', 'diagnosis'][i])
            }, label)
          )
        ),
        e('div', { className: 'sadv-content' }, TabContent())
      );
    };

    // 렌더
    function render() {
      ReactDOM.render(Panel(), container);
    }

    render();
    console.log('✅ 서치어드바이저 패널이 시작되었습니다!');
  }

})();
