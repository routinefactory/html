/**
 * Search Advisor - Daily Trend Panel
 * 일별 추세 패널 컴포넌트
 */

import React, { useMemo } from 'react';
import { Card, Grid, StatCard, EmptyState } from '../common';
import { LineChart, BarChart } from '../charts';
import { useApp, useDailyStats } from '../../hooks';
import { formatNumber, formatPercent, formatDate } from '../../utils/format';

export function DailyTrendPanel() {
  const { state } = useApp();
  const { data: dailyStats, isLoading, error } = useDailyStats(
    state.selectedSiteId,
    getDateString(30),
    getDateString(0)
  );

  // 통계 계산
  const stats = useMemo(() => {
    if (!dailyStats || dailyStats.length === 0) return null;

    const totalClicks = dailyStats.reduce((sum, d) => sum + d.clicks, 0);
    const totalImpressions = dailyStats.reduce((sum, d) => sum + d.impressions, 0);
    const avgCtr = totalImpressions > 0 ? totalClicks / totalImpressions : 0;
    const avgPosition = dailyStats.reduce((sum, d) => sum + d.avgPosition, 0) / dailyStats.length;

    // 전주 대비 변화
    const halfIndex = Math.floor(dailyStats.length / 2);
    const recentClicks = dailyStats.slice(halfIndex).reduce((sum, d) => sum + d.clicks, 0);
    const previousClicks = dailyStats.slice(0, halfIndex).reduce((sum, d) => sum + d.clicks, 0);
    const clicksTrend = previousClicks > 0 ? ((recentClicks - previousClicks) / previousClicks) * 100 : 0;

    return {
      totalClicks,
      totalImpressions,
      avgCtr,
      avgPosition,
      clicksTrend,
    };
  }, [dailyStats]);

  // 차트 데이터 변환
  const chartData = useMemo(() => {
    if (!dailyStats || dailyStats.length === 0) return [];

    return dailyStats.map(d => ({
      date: d.date,
      values: {
        clicks: d.clicks,
        impressions: d.impressions / 10, // 스케일 조정
      },
    }));
  }, [dailyStats]);

  const barData = useMemo(() => {
    if (!dailyStats || dailyStats.length === 0) return [];

    // 최근 7일 데이터
    return dailyStats.slice(-7).map(d => ({
      label: d.date.slice(5),
      value: d.clicks,
    }));
  }, [dailyStats]);

  if (isLoading) {
    return <div className="sadv-loading"><span className="sadv-spinner" /> 로딩 중...</div>;
  }

  if (error) {
    return <div className="sadv-error">{error}</div>;
  }

  if (!dailyStats || dailyStats.length === 0) {
    return <EmptyState message="일별 통계 데이터가 없습니다" />;
  }

  return (
    <div>
      {/* 요약 통계 */}
      {stats && (
        <Grid cols={2}>
          <StatCard
            title="기간 내 총 클릭"
            value={formatNumber(stats.totalClicks)}
            trend={stats.clicksTrend >= 0 ? 'up' : 'down'}
            trendValue={`${Math.abs(stats.clicksTrend).toFixed(1)}%`}
          />
          <StatCard
            title="기간 내 총 노출"
            value={formatNumber(stats.totalImpressions)}
          />
          <StatCard
            title="평균 CTR"
            value={formatPercent(stats.avgCtr)}
          />
          <StatCard
            title="평균 위치"
            value={stats.avgPosition.toFixed(1)}
          />
        </Grid>
      )}

      {/* 추세 라인 차트 */}
      <Card title="클릭 & 노출 추세" style={{ marginTop: 16 }}>
        <LineChart
          data={chartData}
          series={[
            { key: 'clicks', label: '클릭', color: '#4f8cff' },
            { key: 'impressions', label: '노출/10', color: '#ff9800' },
          ]}
          width={380}
          height={180}
        />
      </Card>

      {/* 일별 클릭 바 차트 */}
      <Card title="최근 7일 클릭" style={{ marginTop: 16 }}>
        <BarChart
          data={barData}
          width={380}
          height={100}
          showLabels
          showValues
        />
      </Card>

      {/* 일별 상세 데이터 */}
      <Card title="일별 상세" style={{ marginTop: 16 }}>
        <table className="sadv-table">
          <thead>
            <tr>
              <th>날짜</th>
              <th style={{ textAlign: 'right' }}>클릭</th>
              <th style={{ textAlign: 'right' }}>노출</th>
              <th style={{ textAlign: 'right' }}>CTR</th>
              <th style={{ textAlign: 'right' }}>평균위치</th>
            </tr>
          </thead>
          <tbody>
            {dailyStats.slice(-10).reverse().map((day, i) => (
              <tr key={i}>
                <td>{formatDate(day.date)}</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(day.clicks)}</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(day.impressions)}</td>
                <td style={{ textAlign: 'right' }}>{formatPercent(day.ctr)}</td>
                <td style={{ textAlign: 'right' }}>{day.avgPosition.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

// 날짜 문자열 생성 헬퍼
function getDateString(daysAgo: number): string {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
}
