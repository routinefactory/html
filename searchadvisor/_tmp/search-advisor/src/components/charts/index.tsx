/**
 * Search Advisor - Chart Components
 * 데이터 시각화 컴포넌트들
 */

import React from 'react';

// ============================================
// 스파크라인 컴포넌트
// ============================================

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  fillOpacity?: number;
  showDots?: boolean;
}

export function Sparkline({
  data,
  width = 80,
  height = 24,
  color = '#4f8cff',
  fillOpacity = 0.2,
  showDots = false,
}: SparklineProps) {
  if (!data || data.length === 0) {
    return <span style={{ width, height, display: 'inline-block' }} />;
  }

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const padding = 2;

  // SVG 경로 생성
  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    return { x, y };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  return (
    <svg width={width} height={height} className="sadv-sparkline">
      {/* 영역 채우기 */}
      <path d={areaPath} fill={color} fillOpacity={fillOpacity} />
      {/* 선 */}
      <path d={linePath} fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* 점 표시 */}
      {showDots && points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={2} fill={color} />
      ))}
    </svg>
  );
}

// ============================================
// 바 차트 컴포넌트
// ============================================

interface BarChartProps {
  data: { label: string; value: number; color?: string }[];
  width?: number;
  height?: number;
  barColor?: string;
  showLabels?: boolean;
  showValues?: boolean;
  horizontal?: boolean;
}

export function BarChart({
  data,
  width = 300,
  height = 150,
  barColor = '#4f8cff',
  showLabels = true,
  showValues = false,
  horizontal = false,
}: BarChartProps) {
  if (!data || data.length === 0) {
    return <div style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>데이터 없음</div>;
  }

  const maxValue = Math.max(...data.map(d => d.value));
  const padding = { top: 10, right: 10, bottom: showLabels ? 30 : 10, left: showLabels ? 40 : 10 };

  if (horizontal) {
    return (
      <div style={{ width: '100%' }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 4,
            }}
          >
            {showLabels && (
              <span
                style={{
                  width: 80,
                  fontSize: 10,
                  color: '#888',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginRight: 8,
                }}
              >
                {item.label}
              </span>
            )}
            <div
              style={{
                flex: 1,
                height: 16,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  height: '100%',
                  background: item.color || barColor,
                  borderRadius: 4,
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
            {showValues && (
              <span style={{ marginLeft: 8, fontSize: 10, color: '#e4e4e4', width: 40, textAlign: 'right' }}>
                {item.value.toLocaleString()}
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const barWidth = chartWidth / data.length - 4;

  return (
    <svg width={width} height={height}>
      {/* 그리드 라인 */}
      {[0, 0.25, 0.5, 0.75, 1].map(ratio => (
        <line
          key={ratio}
          x1={padding.left}
          x2={width - padding.right}
          y1={padding.top + chartHeight * (1 - ratio)}
          y2={padding.top + chartHeight * (1 - ratio)}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeDasharray={ratio === 0 ? 'none' : '2,2'}
        />
      ))}

      {/* 바 */}
      {data.map((item, index) => {
        const barHeight = (item.value / maxValue) * chartHeight;
        const x = padding.left + index * (chartWidth / data.length) + 2;
        const y = padding.top + chartHeight - barHeight;

        return (
          <g key={index}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              fill={item.color || barColor}
              rx={2}
              ry={2}
            />
            {/* 레이블 */}
            {showLabels && (
              <text
                x={x + barWidth / 2}
                y={height - 8}
                textAnchor="middle"
                fill="#888"
                fontSize={9}
              >
                {item.label.length > 5 ? item.label.slice(0, 5) + '..' : item.label}
              </text>
            )}
            {/* 값 */}
            {showValues && (
              <text
                x={x + barWidth / 2}
                y={y - 4}
                textAnchor="middle"
                fill="#e4e4e4"
                fontSize={9}
              >
                {item.value.toLocaleString()}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ============================================
// 라인 차트 컴포넌트
// ============================================

interface LineChartProps {
  data: { date: string; values: Record<string, number> }[];
  series: { key: string; label: string; color: string }[];
  width?: number;
  height?: number;
  showLegend?: boolean;
  showGrid?: boolean;
}

export function LineChart({
  data,
  series,
  width = 300,
  height = 150,
  showLegend = true,
  showGrid = true,
}: LineChartProps) {
  if (!data || data.length === 0) {
    return <div style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>데이터 없음</div>;
  }

  const padding = { top: 10, right: 10, bottom: showLegend ? 50 : 30, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // 모든 시리즈의 최댓값 찾기
  const maxValue = Math.max(
    ...data.flatMap(d => series.map(s => d.values[s.key] || 0))
  );

  const xStep = chartWidth / (data.length - 1 || 1);

  return (
    <svg width={width} height={height}>
      {/* 그리드 */}
      {showGrid && [0, 0.25, 0.5, 0.75, 1].map(ratio => (
        <line
          key={ratio}
          x1={padding.left}
          x2={width - padding.right}
          y1={padding.top + chartHeight * (1 - ratio)}
          y2={padding.top + chartHeight * (1 - ratio)}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeDasharray="2,2"
        />
      ))}

      {/* Y축 레이블 */}
      {[0, 0.5, 1].map(ratio => (
        <text
          key={ratio}
          x={padding.left - 8}
          y={padding.top + chartHeight * (1 - ratio) + 4}
          textAnchor="end"
          fill="#888"
          fontSize={10}
        >
          {Math.round(maxValue * ratio).toLocaleString()}
        </text>
      ))}

      {/* 시리즈 */}
      {series.map(s => {
        const points = data.map((d, i) => {
          const x = padding.left + i * xStep;
          const y = padding.top + chartHeight - ((d.values[s.key] || 0) / maxValue) * chartHeight;
          return { x, y };
        });

        const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

        return (
          <g key={s.key}>
            <path
              d={path}
              fill="none"
              stroke={s.color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={2} fill={s.color} />
            ))}
          </g>
        );
      })}

      {/* X축 레이블 */}
      {data.filter((_, i) => i % Math.ceil(data.length / 5) === 0).map((d, i, arr) => {
        const index = data.indexOf(d);
        const x = padding.left + index * xStep;
        return (
          <text
            key={i}
            x={x}
            y={height - padding.bottom + 15}
            textAnchor="middle"
            fill="#888"
            fontSize={9}
          >
            {d.date.slice(5)}
          </text>
        );
      })}

      {/* 범례 */}
      {showLegend && (
        <g transform={`translate(${padding.left}, ${height - 20})`}>
          {series.map((s, i) => (
            <g key={s.key} transform={`translate(${i * 80}, 0)`}>
              <rect x={0} y={-6} width={12} height={12} fill={s.color} rx={2} />
              <text x={16} y={4} fill="#e4e4e4" fontSize={10}>
                {s.label}
              </text>
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}

// ============================================
// 원형 차트 컴포넌트
// ============================================

interface PieChartProps {
  data: { label: string; value: number; color: string }[];
  width?: number;
  height?: number;
  showLegend?: boolean;
}

export function PieChart({
  data,
  width = 150,
  height = 150,
  showLegend = true,
}: PieChartProps) {
  if (!data || data.length === 0) {
    return <div style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>데이터 없음</div>;
  }

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2 - 10;

  let currentAngle = -90;

  const segments = data.map(item => {
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

    return { ...item, path, percentage: ((item.value / total) * 100).toFixed(1) };
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <svg width={width} height={height}>
        {segments.map((seg, i) => (
          <path key={i} d={seg.path} fill={seg.color} stroke="rgba(0,0,0,0.2)" strokeWidth={1} />
        ))}
      </svg>
      {showLegend && (
        <div style={{ fontSize: 10 }}>
          {segments.map((seg, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <div style={{ width: 10, height: 10, background: seg.color, borderRadius: 2 }} />
              <span style={{ color: '#e4e4e4' }}>{seg.label}</span>
              <span style={{ color: '#888' }}>({seg.percentage}%)</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
