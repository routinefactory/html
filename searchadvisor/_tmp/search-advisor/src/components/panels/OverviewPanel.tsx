/**
 * Search Advisor - Overview Panel
 * 개요 패널 컴포넌트
 */

import React from 'react';
import { Card, StatCard, Grid, Badge } from '../common';
import { BarChart, PieChart } from '../charts';
import { useApp } from '../../hooks';
import { formatNumber, formatPercent } from '../../utils/format';

export function OverviewPanel() {
  const { state } = useApp();

  // 전체 요약 데이터
  const totalClicks = Array.from(state.siteStats.values()).reduce((sum, s) => sum + s.clicks, 0);
  const totalImpressions = Array.from(state.siteStats.values()).reduce((sum, s) => sum + s.impressions, 0);
  const avgCtr = totalImpressions > 0 ? totalClicks / totalImpressions : 0;
  const avgPosition =
    Array.from(state.siteStats.values()).reduce((sum, s) => sum + s.avgPosition, 0) /
    (state.siteStats.size || 1);

  // 사이트별 클릭 데이터 (차트용)
  const siteClickData = state.sites.slice(0, 5).map(site => ({
    label: site.name.slice(0, 6),
    value: state.siteStats.get(site.id)?.clicks ?? 0,
  }));

  // 인덱스 상태 (진단 데이터에서)
  const indexData = state.diagnosis?.indexStatus
    ? [
        { label: '인덱싱됨', value: state.diagnosis.indexStatus.indexedPages, color: '#4caf50' },
        { label: '차단됨', value: state.diagnosis.indexStatus.blockedPages, color: '#ff9800' },
        { label: '오류', value: state.diagnosis.indexStatus.errorPages, color: '#f44336' },
      ]
    : null;

  return (
    <div>
      {/* 모드 표시 */}
      <div style={{ marginBottom: 16 }}>
        <Badge variant={state.mode}>{state.mode === 'live' ? '실시간' : '스냅샷'}</Badge>
      </div>

      {/* 요약 통계 */}
      <Grid cols={2}>
        <StatCard
          title="총 클릭수"
          value={formatNumber(totalClicks)}
          subtitle="전체 사이트"
        />
        <StatCard
          title="총 노출수"
          value={formatNumber(totalImpressions)}
          subtitle="전체 사이트"
        />
        <StatCard
          title="평균 CTR"
          value={formatPercent(avgCtr)}
        />
        <StatCard
          title="평균 위치"
          value={avgPosition.toFixed(1)}
        />
      </Grid>

      {/* 사이트별 클릭 차트 */}
      {siteClickData.length > 0 && (
        <Card title="사이트별 클릭수" style={{ marginTop: 16 }}>
          <BarChart
            data={siteClickData}
            width={380}
            height={120}
            showLabels
          />
        </Card>
      )}

      {/* 인덱스 상태 차트 */}
      {indexData && (
        <Card title="인덱스 상태" style={{ marginTop: 16 }}>
          <PieChart data={indexData} width={120} height={120} />
        </Card>
      )}

      {/* 최근 업데이트 */}
      {state.summary?.lastUpdated && (
        <div style={{ marginTop: 16, fontSize: 11, color: '#888' }}>
          마지막 업데이트: {state.summary.lastUpdated}
        </div>
      )}
    </div>
  );
}
