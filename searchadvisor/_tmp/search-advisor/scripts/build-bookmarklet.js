/**
 * Build Bookmarklet Script
 * 북마클릿용 단일 JavaScript 파일 빌드
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const OUTPUT_FILE = path.join(DIST_DIR, 'search-advisor-bookmarklet.js');

console.log('Building Search Advisor Bookmarklet...\n');

// 1. Vite로 빌드
console.log('1. Building with Vite...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed');
  process.exit(1);
}

// 2. 생성된 파일 읽기
console.log('\n2. Reading built files...');
const esmFile = path.join(DIST_DIR, 'index.esm.js');
const umdFile = path.join(DIST_DIR, 'index.umd.js');

let code = '';
if (fs.existsSync(esmFile)) {
  code = fs.readFileSync(esmFile, 'utf-8');
  console.log('   Using ESM output');
} else if (fs.existsSync(umdFile)) {
  code = fs.readFileSync(umdFile, 'utf-8');
  console.log('   Using UMD output');
} else {
  console.error('No built file found');
  process.exit(1);
}

// 3. 북마클릿 래퍼 추가
console.log('\n3. Wrapping for bookmarklet...');
const bookmarkletCode = `
/**
 * Search Advisor Bookmarklet
 * 네이버 서치어드바이저 데이터 분석 패널
 *
 * 사용법: 이 스크립트를 브라우저 북마크릿으로 등록하거나,
 * searchadvisor.naver.com 페이지에서 콘솔에 붙여넣기
 */
(function() {
  'use strict';

  // React와 ReactDOM이 필요합니다
  if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    // CDN에서 React 로드
    const reactScript = document.createElement('script');
    reactScript.src = 'https://unpkg.com/react@19/umd/react.production.min.js';
    reactScript.crossOrigin = 'anonymous';
    document.head.appendChild(reactScript);

    const reactDomScript = document.createElement('script');
    reactDomScript.src = 'https://unpkg.com/react-dom@19/umd/react-dom.production.min.js';
    reactDomScript.crossOrigin = 'anonymous';
    document.head.appendChild(reactDomScript);

    // 로드 완료 후 실행
    reactDomScript.onload = initApp;
  } else {
    initApp();
  }

  function initApp() {
    // 메인 코드 실행
    ${code}
  }
})();
`;

// 4. 파일 저장
fs.writeFileSync(OUTPUT_FILE, bookmarkletCode);
console.log(`\n4. Bookmarklet saved to: ${OUTPUT_FILE}`);

// 5. 파일 크기 출력
const stats = fs.statSync(OUTPUT_FILE);
const sizeKB = (stats.size / 1024).toFixed(2);
console.log(`   File size: ${sizeKB} KB`);

console.log('\n✅ Build complete!');
console.log('\nTo use as bookmarklet:');
console.log('javascript:(function(){var s=document.createElement("script");s.src="PATH_TO_FILE";document.body.appendChild(s);})();');
