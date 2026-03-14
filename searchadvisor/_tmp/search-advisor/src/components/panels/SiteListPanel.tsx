/**
 * Search Advisor - Site List Panel
 * 사이트 목록 패널 컴포넌트
 */

import React, { useMemo } from 'react';
import { Card, SearchInput, EmptyState } from '../common';
import { Sparkline } from '../charts';
import { useApp, useSearch, useSort } from '../../hooks';
import { formatNumber, formatPercent, truncateUrl } from '../../utils/format';
import type { Site, SiteStats } from '../../types';

interface SiteListPanelProps {
  onSiteSelect?: (siteId: string) => void;
}

export function SiteListPanel({ onSiteSelect }: SiteListPanelProps) {
  const { state, actions } = useApp();
  const { query, debouncedQuery, setQuery } = useSearch();

  // 정렬 훅
  const { sortField, sortDirection, toggleSort, sortData } = useSort<'clicks' | 'name'>('clicks');

  // 사이트 필터링 및 정렬
  const filteredSites = useMemo(() => {
    let sites = state.sites;

    // 검색 필터
    if (debouncedQuery) {
      const lowerQuery = debouncedQuery.toLowerCase();
      sites = sites.filter(
        site =>
          site.name.toLowerCase().includes(lowerQuery) ||
          site.url.toLowerCase().includes(lowerQuery)
      );
    }

    // 정렬
    return sortData(
      sites.map(site => ({
        ...site,
        clicks: state.siteStats.get(site.id)?.clicks ?? 0,
      }))
    );
  }, [state.sites, state.siteStats, debouncedQuery, sortData]);

  const handleSiteClick = (siteId: string) => {
    actions.selectSite(siteId);
    onSiteSelect?.(siteId);
  };

  const renderSiteCard = (site: Site) => {
    const stats = state.siteStats.get(site.id);
    const isSelected = state.selectedSiteId === site.id;

    return (
      <div
        key={site.id}
        className={`sadv-site-item ${isSelected ? 'selected' : ''}`}
        onClick={() => handleSiteClick(site.id)}
      >
        <div className="sadv-site-name">{site.name}</div>
        <div className="sadv-site-url">{truncateUrl(site.url)}</div>
        {stats && <SiteStatsRow stats={stats} />}
      </div>
    );
  };

  return (
    <div>
      <SearchInput
        value={query}
        onChange={setQuery}
        placeholder="사이트 검색..."
      />

      {/* 정렬 옵션 */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button
          className={`sadv-btn sadv-btn-secondary ${sortField === 'clicks' ? 'active' : ''}`}
          style={{ fontSize: 11, opacity: sortField === 'clicks' ? 1 : 0.6 }}
          onClick={() => toggleSort('clicks')}
        >
          클릭수 {sortField === 'clicks' && (sortDirection === 'desc' ? '↓' : '↑')}
        </button>
        <button
          className={`sadv-btn sadv-btn-secondary ${sortField === 'name' ? 'active' : ''}`}
          style={{ fontSize: 11, opacity: sortField === 'name' ? 1 : 0.6 }}
          onClick={() => toggleSort('name')}
        >
          이름순 {sortField === 'name' && (sortDirection === 'desc' ? '↓' : '↑')}
        </button>
      </div>

      {/* 사이트 목록 */}
      {filteredSites.length === 0 ? (
        <EmptyState message="등록된 사이트가 없습니다" />
      ) : (
        <div className="sadv-site-list">{filteredSites.map(renderSiteCard)}</div>
      )}
    </div>
  );
}

// ============================================
// 사이트 통계 행 컴포넌트
// ============================================

interface SiteStatsRowProps {
  stats: SiteStats;
}

function SiteStatsRow({ stats }: SiteStatsRowProps) {
  // 스파크라인용 더미 데이터 (실제로는 일별 데이터에서 가져와야 함)
  const sparklineData = Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * stats.clicks * 0.3 + stats.clicks * 0.7)
  );

  return (
    <div className="sadv-stats-row">
      <div className="sadv-stat-item">
        <div className="sadv-stat-value">{formatNumber(stats.clicks)}</div>
        <div className="sadv-stat-label">클릭</div>
      </div>
      <div className="sadv-stat-item">
        <div className="sadv-stat-value">{formatNumber(stats.impressions)}</div>
        <div className="sadv-stat-label">노출</div>
      </div>
      <div className="sadv-stat-item">
        <div className="sadv-stat-value">{formatPercent(stats.ctr)}</div>
        <div className="sadv-stat-label">CTR</div>
      </div>
      <div className="sadv-stat-item">
        <Sparkline data={sparklineData} width={50} height={20} />
      </div>
    </div>
  );
}
