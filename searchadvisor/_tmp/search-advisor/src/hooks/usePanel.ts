/**
 * Search Advisor - UI State Hooks
 * UI 상태 관리를 위한 커스텀 훅들
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { debounce } from '../utils/helpers';

/**
 * 검색 입력 훅 (디바운스 적용)
 * @param initialQuery 초기 검색어
 * @param delay 디바운스 지연 시간
 */
export function useSearch(initialQuery: string = '', delay: number = 300) {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);

  const debouncedSetQuery = useCallback(
    debounce((value: string) => {
      setDebouncedQuery(value);
    }, delay),
    [delay]
  );

  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
    debouncedSetQuery(value);
  }, [debouncedSetQuery]);

  const clearQuery = useCallback(() => {
    setQuery('');
    setDebouncedQuery('');
  }, []);

  return {
    query,
    debouncedQuery,
    setQuery: handleQueryChange,
    clearQuery,
  };
}

/**
 * 정렬 상태 훅
 * @param initialField 초기 정렬 필드
 * @param initialDirection 초기 정렬 방향
 */
export function useSort<T extends string>(initialField: T, initialDirection: 'asc' | 'desc' = 'desc') {
  const [sortField, setSortField] = useState<T>(initialField);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>(initialDirection);

  const toggleSort = useCallback((field: T) => {
    if (sortField === field) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  }, [sortField]);

  const sortData = useCallback(<U extends Record<string, unknown>>(data: U[]): U[] => {
    return [...data].sort((a, b) => {
      const aValue = a[sortField as keyof U];
      const bValue = b[sortField as keyof U];

      if (aValue === undefined || aValue === null) return 1;
      if (bValue === undefined || bValue === null) return -1;

      let comparison = 0;
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        comparison = aValue - bValue;
      } else if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [sortField, sortDirection]);

  return {
    sortField,
    sortDirection,
    toggleSort,
    sortData,
  };
}

/**
 * 페이지네이션 훅
 * @param totalItems 전체 아이템 수
 * @param initialPage 초기 페이지
 * @param initialPageSize 초기 페이지 크기
 */
export function usePagination(totalItems: number, initialPage: number = 1, initialPageSize: number = 10) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = Math.ceil(totalItems / pageSize);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  }, [totalPages]);

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const prevPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const changePageSize = useCallback((newSize: number) => {
    setPageSize(newSize);
    setCurrentPage(1);
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  return {
    currentPage,
    pageSize,
    totalPages,
    startIndex,
    endIndex,
    goToPage,
    nextPage,
    prevPage,
    changePageSize,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}

/**
 * 로컬 스토리지 훅
 * @param key 스토리지 키
 * @param initialValue 초기값
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
}

/**
 * 스크롤 위치 훅
 */
export function useScrollPosition(elementRef: React.RefObject<HTMLElement | null>) {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollTop, scrollLeft, scrollHeight, clientHeight } = element;
      setScrollPosition({ x: scrollLeft, y: scrollTop });
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
      setIsAtTop(scrollTop === 0);
    };

    element.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => element.removeEventListener('scroll', handleScroll);
  }, [elementRef]);

  const scrollToTop = useCallback(() => {
    elementRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [elementRef]);

  const scrollToBottom = useCallback(() => {
    elementRef.current?.scrollTo({ top: elementRef.current?.scrollHeight ?? 0, behavior: 'smooth' });
  }, [elementRef]);

  return {
    scrollPosition,
    isAtBottom,
    isAtTop,
    scrollToTop,
    scrollToBottom,
  };
}

/**
 * 키보드 단축키 훅
 * @param key 단축키
 * @param callback 실행할 함수
 * @param modifiers 수정자 키들
 */
export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  modifiers: { ctrl?: boolean; shift?: boolean; alt?: boolean } = {}
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { ctrl = false, shift = false, alt = false } = modifiers;

      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        event.ctrlKey === ctrl &&
        event.shiftKey === shift &&
        event.altKey === alt
      ) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, modifiers]);
}

/**
 * 이전 값 저장 훅
 * @param value 현재 값
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/**
 * 토글 상태 훅
 * @param initialValue 초기값
 */
export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return { value, toggle, setTrue, setFalse, setValue };
}
