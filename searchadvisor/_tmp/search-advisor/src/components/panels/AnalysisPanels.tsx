/**
 * Search Advisor - Crawl Status Panel
 * 크롤링 상태 패널 컴포넌트
 */

import React, { useMemo } from 'react';
import { Card, Grid, StatCard, EmptyState, Badge } from '../common';
import { BarChart, LineChart } from '../charts';
import { useApp, useCrawlStatus } from '../../hooks';
import { formatNumber, formatDate } from '../../utils/format';

export function CrawlStatusPanel() {
  const { state } = useApp();
  const { data: crawlData, isLoading, error } = useCrawlStatus(state.selectedSiteId);

  // 통계 계산
  const stats = useMemo(() => {
    if (!crawlData || crawlData.length === 0) return null;

    const totalCrawled = crawlData.reduce((sum, d) => sum + d.crawledPages, 0);
    const totalIndexed = crawlData.reduce((sum, d) => sum + d.indexedPages, 0);
    const totalErrors = crawlData.reduce((sum, d) => sum + d.errors, 0);
    const avgIndexRate = totalCrawled > 0 ? totalIndexed / totalCrawled : 0;

    return {
      totalCrawled,
      totalIndexed,
      totalErrors,
      avgIndexRate,
    };
  }, [crawlData]);

  // 차트 데이터
  const chartData = useMemo(() => {
    if (!crawlData || crawlData.length === 0) return [];

    return crawlData.map(d => ({
      date: d.date,
      values: {
        crawled: d.crawledPages,
        indexed: d.indexedPages,
      },
    }));
  }, [crawlData]);

  const errorBarData = useMemo(() => {
    if (!crawlData || crawlData.length === 0) return [];

    return crawlData.slice(-7).map(d => ({
      label: d.date.slice(5),
      value: d.errors,
      color: d.errors > 5 ? '#f44336' : '#4caf50',
    }));
  }, [crawlData]);

  if (isLoading) {
    return <div className="sadv-loading"><span className="sadv-spinner" /> 로딩 중...</div>;
  }

  if (error) {
    return <div className="sadv-error">{error}</div>;
  }

  if (!crawlData || crawlData.length === 0) {
    return <EmptyState message="크롤링 상태 데이터가 없습니다" />;
  }

  return (
    <div>
      {/* 요약 통계 */}
      {stats && (
        <Grid cols={2}>
          <StatCard
            title="총 크롤링 페이지"
            value={formatNumber(stats.totalCrawled)}
            subtitle="기간 내"
          />
          <StatCard
            title="총 인덱싱 페이지"
            value={formatNumber(stats.totalIndexed)}
            subtitle={`인덱싱율 ${(stats.avgIndexRate * 100).toFixed(1)}%`}
          />
          <StatCard
            title="평균 인덱싱율"
            value={`${(stats.avgIndexRate * 100).toFixed(1)}%`}
          />
          <StatCard
            title="총 에러"
            value={formatNumber(stats.totalErrors)}
          />
        </Grid>
      )}

      {/* 크롤링 추세 차트 */}
      <Card title="크롤링 & 인덱싱 추세" style={{ marginTop: 16 }}>
        <LineChart
          data={chartData}
          series={[
            { key: 'crawled', label: '크롤링', color: '#4f8cff' },
            { key: 'indexed', label: '인덱싱', color: '#4caf50' },
          ]}
          width={380}
          height={150}
        />
      </Card>

      {/* 에러 바 차트 */}
      <Card title="일별 에러" style={{ marginTop: 16 }}>
        <BarChart
          data={errorBarData}
          width={380}
          height={100}
          showLabels
        />
      </Card>

      {/* 상세 테이블 */}
      <Card title="상세 크롤링 상태" style={{ marginTop: 16 }}>
        <table className="sadv-table">
          <thead>
            <tr>
              <th>날짜</th>
              <th style={{ textAlign: 'right' }}>크롤링</th>
              <th style={{ textAlign: 'right' }}>인덱싱</th>
              <th style={{ textAlign: 'right' }}>에러</th>
              <th style={{ textAlign: 'right' }}>상태</th>
            </tr>
          </thead>
          <tbody>
            {crawlData.slice(-10).reverse().map((day, i) => (
              <tr key={i}>
                <td>{formatDate(day.date)}</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(day.crawledPages)}</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(day.indexedPages)}</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(day.errors)}</td>
                <td style={{ textAlign: 'right' }}>
                  <Badge variant={day.errors > 5 ? 'critical' : day.errors > 0 ? 'warning' : 'info'}>
                    {day.errors > 5 ? '주의' : day.errors > 0 ? '양호' : '정상'}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

// ============================================
// 백링크 패널
// ============================================

import { useBacklinks } from '../../hooks';
import { Table } from '../common';

export function BacklinksPanel() {
  const { state } = useApp();
  const { data: backlinkData, isLoading, error } = useBacklinks(state.selectedSiteId);

  if (isLoading) {
    return <div className="sadv-loading"><span className="sadv-spinner" /> 로딩 중...</div>;
  }

  if (error) {
    return <div className="sadv-error">{error}</div>;
  }

  if (!backlinkData || backlinkData.length === 0) {
    return <EmptyState message="백링크 데이터가 없습니다" />;
  }

  // 도메인 권한 점수 분포
  const daDistribution = useMemo(() => {
    const ranges = [
      { label: '1-20', min: 1, max: 20, count: 0 },
      { label: '21-40', min: 21, max: 40, count: 0 },
      { label: '41-60', min: 41, max: 60, count: 0 },
      { label: '61-80', min: 61, max: 80, count: 0 },
      { label: '81-100', min: 81, max: 100, count: 0 },
    ];

    backlinkData.forEach(item => {
      const range = ranges.find(r => item.domainAuthority >= r.min && item.domainAuthority <= r.max);
      if (range) range.count++;
    });

    return ranges.map(r => ({ label: r.label, value: r.count, color: '#4f8cff' }));
  }, [backlinkData]);

  return (
    <div>
      {/* DA 분포 */}
      <Card title="도메인 권한(DA) 분포">
        <BarChart
          data={daDistribution}
          width={380}
          height={100}
          horizontal
          showLabels
          showValues
        />
      </Card>

      {/* 백링크 목록 */}
      <Card title="백링크 목록" style={{ marginTop: 16 }}>
        <Table
          headers={[
            { key: 'sourceUrl', label: '출처 URL' },
            { key: 'anchorText', label: '앵커 텍스트' },
            { key: 'domainAuthority', label: 'DA', align: 'right' },
            { key: 'discoveredDate', label: '발견일' },
          ]}
          data={backlinkData}
          renderCell={(key, value, row) => {
            if (key === 'sourceUrl') {
              return (
                <span style={{ color: '#4f8cff', fontSize: 11 }}>
                  {truncateUrl(value as string, 30)}
                </span>
              );
            }
            if (key === 'domainAuthority') {
              const da = value as number;
              const color = da >= 60 ? '#4caf50' : da >= 40 ? '#ff9800' : '#888';
              return <span style={{ color }}>{da}</span>;
            }
            if (key === 'discoveredDate') {
              return formatDate(value as string);
            }
            return value;
          }}
        />
      </Card>
    </div>
  );
}

import { truncateUrl } from '../../utils/format';
