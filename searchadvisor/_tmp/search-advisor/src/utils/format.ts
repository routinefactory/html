/**
 * Search Advisor - Formatting Utilities
 * 숫자 및 날짜 포맷팅 유틸리티
 */

/**
 * 숫자를 천 단위 구분자와 함께 포맷팅
 * @param value 포맷팅할 숫자
 * @returns 포맷팅된 문자열
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('ko-KR').format(value);
}

/**
 * 비율(%) 포맷팅
 * @param value 비율 값 (0-1 또는 0-100)
 * @param decimals 소수점 자릿수
 * @param isPercentage 이미 퍼센트 값인지 여부
 * @returns 포맷팅된 문자열
 */
export function formatPercent(value: number, decimals: number = 1, isPercentage: boolean = false): string {
  const percentValue = isPercentage ? value : value * 100;
  return `${percentValue.toFixed(decimals)}%`;
}

/**
 * CTR (Click-Through Rate) 포맷팅
 * @param clicks 클릭 수
 * @param impressions 노출 수
 * @returns 포맷팅된 CTR 문자열
 */
export function formatCTR(clicks: number, impressions: number): string {
  if (impressions === 0) return '0.0%';
  const ctr = (clicks / impressions) * 100;
  return `${ctr.toFixed(1)}%`;
}

/**
 * 평균 위치 포맷팅
 * @param position 평균 위치 값
 * @returns 포맷팅된 문자열
 */
export function formatPosition(position: number): string {
  return position.toFixed(1);
}

/**
 * 날짜를 로케일 형식으로 포맷팅
 * @param date 날짜 문자열 또는 Date 객체
 * @returns 포맷팅된 날짜 문자열
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

/**
 * 날짜를 상대적인 시간으로 포맷팅 (예: "3시간 전")
 * @param date 기준 날짜
 * @returns 상대적인 시간 문자열
 */
export function formatRelativeTime(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;
  if (diffHour < 24) return `${diffHour}시간 전`;
  if (diffDay < 7) return `${diffDay}일 전`;

  return formatDate(d);
}

/**
 * URL을 표시용으로 단축
 * @param url 원본 URL
 * @param maxLength 최대 길이
 * @returns 단축된 URL 문자열
 */
export function truncateUrl(url: string, maxLength: number = 50): string {
  try {
    const urlObj = new URL(url);
    const display = urlObj.hostname + urlObj.pathname;

    if (display.length <= maxLength) return display;

    const halfLength = Math.floor((maxLength - 3) / 2);
    return display.slice(0, halfLength) + '...' + display.slice(-halfLength);
  } catch {
    return url.length > maxLength ? url.slice(0, maxLength - 3) + '...' : url;
  }
}

/**
 * 큰 숫자를 축약형으로 표시 (예: 1.2K, 3.5M)
 * @param value 숫자 값
 * @returns 축약된 문자열
 */
export function formatCompactNumber(value: number): string {
  const units = ['', 'K', 'M', 'B', 'T'];
  let unitIndex = 0;
  let displayValue = value;

  while (displayValue >= 1000 && unitIndex < units.length - 1) {
    displayValue /= 1000;
    unitIndex++;
  }

  return `${displayValue.toFixed(1)}${units[unitIndex]}`;
}

/**
 * 파일 크기 포맷팅
 * @param bytes 바이트 수
 * @returns 포맷팅된 파일 크기 문자열
 */
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let unitIndex = 0;
  let displayValue = bytes;

  while (displayValue >= 1024 && unitIndex < units.length - 1) {
    displayValue /= 1024;
    unitIndex++;
  }

  return `${displayValue.toFixed(1)} ${units[unitIndex]}`;
}
