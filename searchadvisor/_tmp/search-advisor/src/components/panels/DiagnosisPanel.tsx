/**
 * Search Advisor - Diagnosis Panel
 * SEO 진단 패널 컴포넌트
 */

import React from 'react';
import { Card, Grid, StatCard, EmptyState, Badge, Button } from '../common';
import { PieChart } from '../charts';
import { useApp, useDiagnosis } from '../../hooks';
import { formatNumber, formatPercent } from '../../utils/format';
import type { DiagnosisItem, SeverityLevel } from '../../types';

export function DiagnosisPanel() {
  const { state } = useApp();
  const { data: diagnosis, isLoading, error } = useDiagnosis(state.selectedSiteId);

  if (isLoading) {
    return <div className="sadv-loading"><span className="sadv-spinner" /> 로딩 중...</div>;
  }

  if (error) {
    return <div className="sadv-error">{error}</div>;
  }

  if (!diagnosis) {
    return <EmptyState message="SEO 진단 데이터가 없습니다" />;
  }

  const { indexStatus, issues, healthScore } = diagnosis;

  // 인덱스 상태 차트 데이터
  const indexChartData = [
    { label: '인덱싱됨', value: indexStatus.indexedPages, color: '#4caf50' },
    { label: '차단됨', value: indexStatus.blockedPages, color: '#ff9800' },
    { label: '오류', value: indexStatus.errorPages, color: '#f44336' },
  ];

  // 심각도별 이슈 수
  const severityCounts = {
    critical: issues.filter(i => i.severity === 'critical').length,
    warning: issues.filter(i => i.severity === 'warning').length,
    info: issues.filter(i => i.severity === 'info').length,
  };

  // 건강 점수에 따른 색상
  const getHealthColor = (score: number) => {
    if (score >= 80) return '#4caf50';
    if (score >= 60) return '#8bc34a';
    if (score >= 40) return '#ff9800';
    return '#f44336';
  };

  return (
    <div>
      {/* 건강 점수 */}
      <Card style={{ textAlign: 'center', padding: 20 }}>
        <div style={{ fontSize: 14, color: '#888', marginBottom: 8 }}>사이트 건강 점수</div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: getHealthColor(healthScore),
          }}
        >
          {healthScore}
        </div>
        <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>/ 100</div>
      </Card>

      {/* 인덱스 상태 요약 */}
      <Grid cols={2} style={{ marginTop: 16 }}>
        <StatCard
          title="전체 페이지"
          value={formatNumber(indexStatus.totalPages)}
        />
        <StatCard
          title="인덱싱된 페이지"
          value={formatNumber(indexStatus.indexedPages)}
          subtitle={`${formatPercent(indexStatus.indexedPages / indexStatus.totalPages)} 비율`}
        />
        <StatCard
          title="차단된 페이지"
          value={formatNumber(indexStatus.blockedPages)}
        />
        <StatCard
          title="오류 페이지"
          value={formatNumber(indexStatus.errorPages)}
        />
      </Grid>

      {/* 인덱스 상태 차트 */}
      <Card title="인덱스 상태 분포" style={{ marginTop: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PieChart data={indexChartData} width={120} height={120} />
        </div>
      </Card>

      {/* 이슈 요약 */}
      <Card title="발견된 이슈" style={{ marginTop: 16 }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <Badge variant="critical">심각 {severityCounts.critical}</Badge>
          <Badge variant="warning">경고 {severityCounts.warning}</Badge>
          <Badge variant="info">정보 {severityCounts.info}</Badge>
        </div>

        {issues.length === 0 ? (
          <div style={{ color: '#4caf50', textAlign: 'center', padding: 20 }}>
            발견된 이슈가 없습니다
          </div>
        ) : (
          <div>
            {issues.map((issue, index) => (
              <IssueItem key={issue.id} issue={issue} />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

// ============================================
// 이슈 아이템 컴포넌트
// ============================================

interface IssueItemProps {
  issue: DiagnosisItem;
}

function IssueItem({ issue }: IssueItemProps) {
  const [expanded, setExpanded] = React.useState(false);

  const severityVariant = {
    critical: 'critical',
    warning: 'warning',
    info: 'info',
  }[issue.severity] as 'critical' | 'warning' | 'info';

  const severityLabel = {
    critical: '심각',
    warning: '경고',
    info: '정보',
  }[issue.severity];

  return (
    <div
      style={{
        padding: 12,
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 6,
        marginBottom: 8,
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          cursor: 'pointer',
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <Badge variant={severityVariant}>{severityLabel}</Badge>
            <span style={{ fontSize: 12, color: '#888' }}>
              {issue.affectedUrls}개 페이지 영향
            </span>
          </div>
          <div style={{ fontSize: 13, color: '#e4e4e4' }}>{issue.message}</div>
        </div>
        <span style={{ color: '#888' }}>{expanded ? '▼' : '▶'}</span>
      </div>

      {expanded && (
        <div
          style={{
            marginTop: 12,
            paddingTop: 12,
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>권장 조치:</div>
          <div style={{ fontSize: 13, color: '#e4e4e4' }}>{issue.recommendation}</div>
        </div>
      )}
    </div>
  );
}
