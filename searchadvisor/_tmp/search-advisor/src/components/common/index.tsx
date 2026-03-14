/**
 * Search Advisor - Common UI Components
 * 재사용 가능한 공통 UI 컴포넌트들
 */

import React from 'react';
import type { TabId } from '../../types';

// ============================================
// 버튼 컴포넌트
// ============================================

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const variantClass = {
    primary: 'sadv-btn-primary',
    secondary: 'sadv-btn-secondary',
    icon: 'sadv-btn-icon',
  }[variant];

  const sizeClass = {
    sm: 'text-xs px-2 py-1',
    md: '',
    lg: 'text-sm px-4 py-2',
  }[size];

  return (
    <button
      className={`sadv-btn ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="sadv-spinner" style={{ width: 12, height: 12, marginRight: 4 }} />}
      {children}
    </button>
  );
}

// ============================================
// 카드 컴포넌트
// ============================================

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, subtitle, children, className = '' }: CardProps) {
  return (
    <div className={`sadv-card ${className}`}>
      {(title || subtitle) && (
        <div className="sadv-card-header">
          <div>
            {title && <div className="sadv-card-title">{title}</div>}
            {subtitle && <div className="sadv-card-subtitle">{subtitle}</div>}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

// ============================================
// 통계 카드 컴포넌트
// ============================================

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function StatCard({ title, value, subtitle, trend, trendValue }: StatCardProps) {
  const trendColor = {
    up: '#4caf50',
    down: '#f44336',
    neutral: '#888',
  }[trend ?? 'neutral'];

  return (
    <Card className="sadv-stat-card">
      <div className="sadv-card-subtitle">{title}</div>
      <div className="sadv-card-value">{value}</div>
      {(subtitle || trendValue) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
          {subtitle && <span className="sadv-card-subtitle">{subtitle}</span>}
          {trendValue && trend && (
            <span style={{ color: trendColor, fontSize: 11 }}>
              {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
            </span>
          )}
        </div>
      )}
    </Card>
  );
}

// ============================================
// 탭 컴포넌트
// ============================================

interface TabsProps {
  tabs: { id: TabId; label: string; icon?: string }[];
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="sadv-tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`sadv-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.icon && <span style={{ marginRight: 4 }}>{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// ============================================
// 검색 입력 컴포넌트
// ============================================

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({ value, onChange, placeholder = '검색...' }: SearchInputProps) {
  return (
    <input
      type="text"
      className="sadv-search"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

// ============================================
// 배지 컴포넌트
// ============================================

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'live' | 'snapshot' | 'critical' | 'warning' | 'info' | 'default';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variantClass = {
    live: 'sadv-badge-live',
    snapshot: 'sadv-badge-snapshot',
    critical: 'sadv-severity-critical',
    warning: 'sadv-severity-warning',
    info: 'sadv-severity-info',
    default: '',
  }[variant];

  return <span className={`sadv-badge ${variantClass}`}>{children}</span>;
}

// ============================================
// 로딩 컴포넌트
// ============================================

interface LoadingProps {
  message?: string;
}

export function Loading({ message = '로딩 중...' }: LoadingProps) {
  return (
    <div className="sadv-loading">
      <span className="sadv-spinner" />
      <span>{message}</span>
    </div>
  );
}

// ============================================
// 에러 메시지 컴포넌트
// ============================================

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="sadv-error">
      <div style={{ marginBottom: onRetry ? 8 : 0 }}>{message}</div>
      {onRetry && (
        <Button variant="secondary" size="sm" onClick={onRetry}>
          다시 시도
        </Button>
      )}
    </div>
  );
}

// ============================================
// 빈 상태 컴포넌트
// ============================================

interface EmptyStateProps {
  icon?: string;
  message: string;
}

export function EmptyState({ icon = '📭', message }: EmptyStateProps) {
  return (
    <div className="sadv-empty">
      <div className="sadv-empty-icon">{icon}</div>
      <div>{message}</div>
    </div>
  );
}

// ============================================
// 테이블 컴포넌트
// ============================================

interface TableProps {
  headers: { key: string; label: string; align?: 'left' | 'center' | 'right' }[];
  data: Record<string, unknown>[];
  onRowClick?: (row: Record<string, unknown>) => void;
  renderCell?: (key: string, value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

export function Table({ headers, data, onRowClick, renderCell }: TableProps) {
  if (data.length === 0) {
    return <EmptyState message="데이터가 없습니다" />;
  }

  return (
    <table className="sadv-table">
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header.key} style={{ textAlign: header.align ?? 'left' }}>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            onClick={() => onRowClick?.(row)}
            style={{ cursor: onRowClick ? 'pointer' : 'default' }}
          >
            {headers.map(header => (
              <td key={header.key} style={{ textAlign: header.align ?? 'left' }}>
                {renderCell
                  ? renderCell(header.key, row[header.key], row)
                  : String(row[header.key] ?? '')}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ============================================
// 그리드 컴포넌트
// ============================================

interface GridProps {
  cols?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

export function Grid({ cols = 2, children, className = '' }: GridProps) {
  const gridClass = {
    2: 'sadv-grid-2',
    3: 'sadv-grid-3',
    4: 'sadv-grid-4',
  }[cols];

  return <div className={`sadv-grid ${gridClass} ${className}`}>{children}</div>;
}
