/**
 * Search Advisor - DOM Utilities
 * DOM 조작 및 Shadow DOM 관련 유틸리티
 */

/** 스타일 ID */
const STYLE_ID = 'sadv-styles';
const SHADOW_HOST_ID = 'sadv-react-shell-host';

/**
 * Shadow DOM 호스트 생성
 * @returns Shadow DOM 호스트 요소
 */
export function createShadowHost(): HTMLElement {
  // 기존 호스트 제거
  const existingHost = document.getElementById(SHADOW_HOST_ID);
  if (existingHost) {
    existingHost.remove();
  }

  // 새 호스트 생성
  const host = document.createElement('div');
  host.id = SHADOW_HOST_ID;
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
  return host;
}

/**
 * Shadow DOM 생성 및 스타일 주입
 * @param host Shadow DOM 호스트 요소
 * @returns Shadow Root
 */
export function createShadowRoot(host: HTMLElement): ShadowRoot {
  const shadow = host.attachShadow({ mode: 'open' });

  // 스타일 주입
  const style = document.createElement('style');
  style.textContent = getStyles();
  shadow.appendChild(style);

  // React 마운트용 컨테이너 생성
  const container = document.createElement('div');
  container.id = 'sadv-root';
  container.style.cssText = `
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  `;
  shadow.appendChild(container);

  return shadow;
}

/**
 * 기본 스타일 반환
 * @returns CSS 문자열
 */
function getStyles(): string {
  return `
    /* Reset & Base */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* 스크롤바 스타일 */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    /* 패널 스타일 */
    .sadv-panel {
      width: 100%;
      height: 100vh;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      color: #e4e4e4;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
    }

    /* 헤더 */
    .sadv-header {
      padding: 16px;
      background: rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
    }
    .sadv-header h1 {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }
    .sadv-header-actions {
      display: flex;
      gap: 8px;
    }

    /* 버튼 */
    .sadv-btn {
      padding: 6px 12px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .sadv-btn-primary {
      background: #4f8cff;
      color: white;
    }
    .sadv-btn-primary:hover {
      background: #3a7bff;
    }
    .sadv-btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: #e4e4e4;
    }
    .sadv-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.15);
    }
    .sadv-btn-icon {
      padding: 6px;
      background: transparent;
      color: #e4e4e4;
    }
    .sadv-btn-icon:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    /* 탭 네비게이션 */
    .sadv-tabs {
      display: flex;
      background: rgba(0, 0, 0, 0.2);
      overflow-x: auto;
      flex-shrink: 0;
    }
    .sadv-tab {
      padding: 10px 14px;
      font-size: 11px;
      color: #a0a0a0;
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s ease;
    }
    .sadv-tab:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.05);
    }
    .sadv-tab.active {
      color: #4f8cff;
      border-bottom-color: #4f8cff;
    }

    /* 콘텐츠 영역 */
    .sadv-content {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
    }

    /* 카드 */
    .sadv-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 12px;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .sadv-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .sadv-card-title {
      font-size: 13px;
      font-weight: 600;
      color: #fff;
    }
    .sadv-card-value {
      font-size: 24px;
      font-weight: 700;
      color: #4f8cff;
    }
    .sadv-card-subtitle {
      font-size: 11px;
      color: #888;
    }

    /* 그리드 */
    .sadv-grid {
      display: grid;
      gap: 12px;
    }
    .sadv-grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    .sadv-grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }
    .sadv-grid-4 {
      grid-template-columns: repeat(4, 1fr);
    }

    /* 사이트 목록 */
    .sadv-site-list {
      max-height: 300px;
      overflow-y: auto;
    }
    .sadv-site-item {
      padding: 10px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 6px;
      margin-bottom: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid transparent;
    }
    .sadv-site-item:hover {
      background: rgba(255, 255, 255, 0.06);
    }
    .sadv-site-item.selected {
      background: rgba(79, 140, 255, 0.15);
      border-color: rgba(79, 140, 255, 0.3);
    }
    .sadv-site-name {
      font-size: 13px;
      font-weight: 500;
      color: #fff;
      margin-bottom: 4px;
    }
    .sadv-site-url {
      font-size: 11px;
      color: #888;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* 통계 행 */
    .sadv-stats-row {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    .sadv-stat-item {
      text-align: center;
    }
    .sadv-stat-value {
      font-size: 12px;
      font-weight: 600;
      color: #fff;
    }
    .sadv-stat-label {
      font-size: 10px;
      color: #888;
    }

    /* 테이블 */
    .sadv-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
    }
    .sadv-table th,
    .sadv-table td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .sadv-table th {
      color: #888;
      font-weight: 500;
      background: rgba(0, 0, 0, 0.2);
    }
    .sadv-table td {
      color: #e4e4e4;
    }
    .sadv-table tr:hover td {
      background: rgba(255, 255, 255, 0.02);
    }

    /* 로딩 상태 */
    .sadv-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: #888;
    }
    .sadv-spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-top-color: #4f8cff;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-right: 8px;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* 빈 상태 */
    .sadv-empty {
      text-align: center;
      padding: 40px 20px;
      color: #888;
    }
    .sadv-empty-icon {
      font-size: 40px;
      margin-bottom: 12px;
      opacity: 0.5;
    }

    /* 에러 상태 */
    .sadv-error {
      background: rgba(255, 77, 77, 0.1);
      border: 1px solid rgba(255, 77, 77, 0.3);
      border-radius: 6px;
      padding: 12px;
      color: #ff6b6b;
      font-size: 12px;
    }

    /* 모드 배지 */
    .sadv-badge {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .sadv-badge-live {
      background: rgba(76, 175, 80, 0.2);
      color: #81c784;
    }
    .sadv-badge-snapshot {
      background: rgba(255, 193, 7, 0.2);
      color: #ffd54f;
    }

    /* 검색 입력 */
    .sadv-search {
      width: 100%;
      padding: 8px 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      color: #fff;
      font-size: 12px;
      margin-bottom: 12px;
    }
    .sadv-search::placeholder {
      color: #666;
    }
    .sadv-search:focus {
      outline: none;
      border-color: rgba(79, 140, 255, 0.5);
    }

    /* 스파크라인 컨테이너 */
    .sadv-sparkline {
      display: inline-block;
      vertical-align: middle;
    }

    /* 심각도 배지 */
    .sadv-severity-critical {
      background: rgba(244, 67, 54, 0.2);
      color: #ef5350;
    }
    .sadv-severity-warning {
      background: rgba(255, 152, 0, 0.2);
      color: #ffa726;
    }
    .sadv-severity-info {
      background: rgba(33, 150, 243, 0.2);
      color: #42a5f5;
    }
  `;
}

/**
 * 패널 제거
 */
export function removePanel(): void {
  const host = document.getElementById(SHADOW_HOST_ID);
  if (host) {
    host.remove();
  }
}

/**
 * 현재 페이지가 네이버 서치어드바이저인지 확인
 * @returns 서치어드바이저 페이지면 true
 */
export function isSearchAdvisorPage(): boolean {
  return window.location.hostname === 'searchadvisor.naver.com';
}

/**
 * 현재 페이지가 스냅샷 HTML인지 확인
 * @returns 스냅샷이면 true
 */
export function isSnapshotPage(): boolean {
  return typeof (window as unknown as { __SEARCHADVISOR_EXPORT_PAYLOAD__?: unknown }).__SEARCHADVISOR_EXPORT_PAYLOAD__ !== 'undefined';
}

/**
 * 스크롤을 맨 위로
 * @param container 스크롤할 컨테이너
 */
export function scrollToTop(container: HTMLElement): void {
  container.scrollTo({ top: 0, behavior: 'smooth' });
}
