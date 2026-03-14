/**
 * Search Advisor - URL Analysis Panel
 * URL 분석 패널 컴포넌트
 */

import React, { useMemo } from 'react';
import { Card, Table, EmptyState, SearchInput } from '../common';
import { Sparkline } from '../charts';
import { useApp, useUrlAnalysis, useSearch, usePagination } from '../../hooks';
import { formatNumber, formatPercent, truncateUrl } from '../../utils/format';

export function UrlAnalysisPanel() {
  const { state } = useApp();
  const { query, debouncedQuery, setQuery } = useSearch();
  const { data: urlData, isLoading, error } = useUrlAnalysis(state.selectedSiteId);

  // 필터링
  const filteredData = useMemo(() => {
    if (!urlData || !debouncedQuery) return urlData;

    const lowerQuery = debouncedQuery.toLowerCase();
    return urlData.filter(item =>
      item.url.toLowerCase().includes(lowerQuery)
    );
  }, [urlData, debouncedQuery]);

  // 페이지네이션
  const { currentPage, totalPages, goToPage, startIndex, endIndex, hasNextPage, hasPrevPage } =
    usePagination(filteredData?.length ?? 0, 1, 15);

  const paginatedData = useMemo(() => {
    if (!filteredData) return [];
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, startIndex, endIndex]);

  if (isLoading) {
    return <div className="sadv-loading"><span className="sadv-spinner" /> 로딩 중...</div>;
  }

  if (error) {
    return <div className="sadv-error">{error}</div>;
  }

  if (!urlData || urlData.length === 0) {
    return <EmptyState message="URL 분석 데이터가 없습니다" />;
  }

  return (
    <div>
      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder="URL 검색..."
      />

      <Card>
        <Table
          headers={[
            { key: 'url', label: 'URL' },
            { key: 'clicks', label: '클릭', align: 'right' },
            { key: 'impressions', label: '노출', align: 'right' },
            { key: 'ctr', label: 'CTR', align: 'right' },
          ]}
          data={paginatedData.map(item => ({
            ...item,
            ctr: formatPercent(item.ctr),
          }))}
          renderCell={(key, value, row) => {
            if (key === 'url') {
              return (
                <span style={{ color: '#4f8cff' }}>
                  {truncateUrl(value as string, 40)}
                </span>
              );
            }
            if (key === 'clicks' || key === 'impressions') {
              return formatNumber(value as number);
            }
            return value;
          }}
        />

        {/* 페이지네이션 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
          <button
            className="sadv-btn sadv-btn-secondary"
            disabled={!hasPrevPage}
            onClick={() => goToPage(currentPage - 1)}
          >
            이전
          </button>
          <span style={{ fontSize: 12, color: '#888', lineHeight: '28px' }}>
            {currentPage} / {totalPages}
          </span>
          <button
            className="sadv-btn sadv-btn-secondary"
            disabled={!hasNextPage}
            onClick={() => goToPage(currentPage + 1)}
          >
            다음
          </button>
        </div>
      </Card>
    </div>
  );
}

// ============================================
// 키워드 분석 패널
// ============================================

export function KeywordAnalysisPanel() {
  const { state } = useApp();
  const { query, debouncedQuery, setQuery } = useSearch();
  const { data: keywordData, isLoading, error } = useKeywords(state.selectedSiteId);

  // 필터링
  const filteredData = useMemo(() => {
    if (!keywordData || !debouncedQuery) return keywordData;

    const lowerQuery = debouncedQuery.toLowerCase();
    return keywordData.filter(item =>
      item.keyword.toLowerCase().includes(lowerQuery)
    );
  }, [keywordData, debouncedQuery]);

  // 페이지네이션
  const { currentPage, totalPages, goToPage, startIndex, endIndex, hasNextPage, hasPrevPage } =
    usePagination(filteredData?.length ?? 0, 1, 15);

  const paginatedData = useMemo(() => {
    if (!filteredData) return [];
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, startIndex, endIndex]);

  if (isLoading) {
    return <div className="sadv-loading"><span className="sadv-spinner" /> 로딩 중...</div>;
  }

  if (error) {
    return <div className="sadv-error">{error}</div>;
  }

  if (!keywordData || keywordData.length === 0) {
    return <EmptyState message="키워드 데이터가 없습니다" />;
  }

  return (
    <div>
      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder="키워드 검색..."
      />

      <Card>
        <Table
          headers={[
            { key: 'keyword', label: '키워드' },
            { key: 'clicks', label: '클릭', align: 'right' },
            { key: 'impressions', label: '노출', align: 'right' },
            { key: 'ctr', label: 'CTR', align: 'right' },
            { key: 'avgPosition', label: '평균위치', align: 'right' },
          ]}
          data={paginatedData.map(item => ({
            ...item,
            ctr: formatPercent(item.ctr),
            avgPosition: item.avgPosition.toFixed(1),
          }))}
          renderCell={(key, value, row) => {
            if (key === 'keyword') {
              return <span style={{ color: '#4f8cff' }}>{value as string}</span>;
            }
            if (key === 'clicks' || key === 'impressions') {
              return formatNumber(value as number);
            }
            return value;
          }}
        />

        {/* 페이지네이션 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
          <button
            className="sadv-btn sadv-btn-secondary"
            disabled={!hasPrevPage}
            onClick={() => goToPage(currentPage - 1)}
          >
            이전
          </button>
          <span style={{ fontSize: 12, color: '#888', lineHeight: '28px' }}>
            {currentPage} / {totalPages}
          </span>
          <button
            className="sadv-btn sadv-btn-secondary"
            disabled={!hasNextPage}
            onClick={() => goToPage(currentPage + 1)}
          >
            다음
          </button>
        </div>
      </Card>
    </div>
  );
}

// useKeywords 훅 import
import { useKeywords } from '../../hooks';
