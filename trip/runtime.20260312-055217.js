/* Trip Partner Panel runtime 20260312-055217 */
(function(){
const metricOrder = [
  "clicks",
  "uv",
  "bookings",
  "bookingAmount",
  "cvr",
  "conversion",
];

const metricLabels = {
  clicks: "클릭",
  uv: "UV",
  bookings: "예약",
  bookingAmount: "예약금액",
  cvr: "CVR",
  conversion: "전환율",
};

const growthFieldByMetric = {
  clicks: "clicksGrowthRate",
  uv: "uvGrowthRate",
  bookings: "bookingsGrowthRate",
};

const stripProtocol = (value) => String(value || "").replace(/^https?:\/\//, "").replace(/\/$/, "");
const toTripTimestamp = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const timestamp = new Date(`${value}T00:00:00+09:00`).getTime();
  if (!Number.isFinite(timestamp)) {
    throw new Error(`Invalid date value: ${value}`);
  }
  return timestamp;
};
const buildSummaryRequest = ({
  uid,
  startDate,
  endDate,
  sidList,
  excludeCancel = true,
}) => {
  if (!uid || !String(uid).trim()) {
    throw new Error("uid is required");
  }

  return {
    uid: String(uid).trim(),
    startDate: toTripTimestamp(startDate),
    endDate: toTripTimestamp(endDate),
    sidList: [...sidList],
    excludeCancel,
  };
};

const formatNumber = (value, digits = 0) => {
  const numeric = Number(value || 0);
  return numeric.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
};

const formatMetricValue = (id, summaryResponse) => {
  switch (id) {
    case "bookingAmount":
      return `${formatNumber(summaryResponse.bookingAmount, 2)} ${summaryResponse.currency || ""}`.trim();
    case "cvr":
    case "conversion":
      return `${formatNumber(summaryResponse[id], 2)}%`;
    default:
      return formatNumber(summaryResponse[id], 0);
  }
};

const pickSidRows = (sidList, selectedSidIds) => {
  const selectedSet = new Set(selectedSidIds);
  if (!selectedSet.size) return [...sidList];
  return sidList.filter((row) => selectedSet.has(row.sid));
};
const createPanelModel = ({
  uid,
  sidResponse,
  summaryResponse,
  selectedSidIds = [],
}) => {
  const sidList = Array.isArray(sidResponse?.sidList) ? sidResponse.sidList : [];
  const sidRows = pickSidRows(sidList, selectedSidIds);

  return {
    uid,
    sidTotalCount: Number(sidResponse?.count || sidList.length || 0),
    selectedSidCount: sidRows.length,
    metrics: metricOrder.map((id) => ({
      id,
      label: metricLabels[id],
      displayValue: formatMetricValue(id, summaryResponse || {}),
      growthRate: summaryResponse?.[growthFieldByMetric[id]] ?? null,
    })),
    sidRows: sidRows.map((row) => ({
      sid: row.sid,
      sidName: row.sidName || row.sidUrl || `SID ${row.sid}`,
      sidUrl: row.sidUrl || "",
    })),
  };
};
const buildSiteRows = ({
  sidResponse,
  siteSummaryBySid,
}) => {
  const sidList = Array.isArray(sidResponse?.sidList) ? sidResponse.sidList : [];

  return sidList
    .map((row) => {
      const summary = siteSummaryBySid?.[row.sid];
      if (!summary) return null;

      return {
        sid: row.sid,
        siteName: row.sidName || row.sidUrl || `SID ${row.sid}`,
        siteLabel: stripProtocol(row.sidName || row.sidUrl || `SID ${row.sid}`),
        siteUrl: row.sidUrl || "",
        clicks: Number(summary.clicks || 0),
        uv: Number(summary.uv || 0),
        bookings: Number(summary.bookings || 0),
        bookingAmount: Number(summary.bookingAmount || 0),
        cvr: Number(summary.cvr || 0),
        conversion: Number(summary.conversion || 0),
        currency: summary.currency || "USD",
        clicksDisplay: formatNumber(summary.clicks || 0, 0),
        uvDisplay: formatNumber(summary.uv || 0, 0),
        bookingsDisplay: formatNumber(summary.bookings || 0, 0),
        bookingAmountDisplay: `${formatNumber(summary.bookingAmount || 0, 2)} ${summary.currency || "USD"}`.trim(),
        cvrDisplay: `${formatNumber(summary.cvr || 0, 2)}%`,
        conversionDisplay: `${formatNumber(summary.conversion || 0, 2)}%`,
      };
    })
    .filter(Boolean)
    .sort((left, right) => {
      return (
        right.bookingAmount - left.bookingAmount ||
        right.bookings - left.bookings ||
        right.clicks - left.clicks
      );
    });
};
const createProgressSnapshot = ({
  total,
  completed,
  failed = 0,
  currentLabel = "",
}) => {
  const safeTotal = Math.max(0, Number(total || 0));
  const safeCompleted = Math.max(0, Number(completed || 0));
  const ratio = safeTotal ? Math.min(1, safeCompleted / safeTotal) : 0;

  return {
    total: safeTotal,
    completed: safeCompleted,
    failed: Math.max(0, Number(failed || 0)),
    pending: Math.max(0, safeTotal - safeCompleted),
    ratio,
    percent: Math.round(ratio * 100),
    currentLabel,
    done: safeTotal > 0 && safeCompleted >= safeTotal,
  };
};
const createCacheMeta = ({
  timestamp,
  ttlMs,
  now = Date.now(),
  label,
}) => ({
  label,
  updatedAt: timestamp,
  remainingMs: Math.max(0, timestamp + ttlMs - now),
  measuredAt: now,
});
const extractUidFromAccountInfo = (response) => {
  const uid = String(response?.uid || "").trim();
  if (!uid) {
    throw new Error("UID not found in account info response");
  }

  return {
    uid,
    bindEmail: String(response?.bindEmail || "").trim(),
  };
};
const stripModuleSyntax = (source) =>
  source
    .replace(/^\s*import[\s\S]*?from\s+["'][^"']+["'];?\r?\n?/gm, "")
    .replace(/^\s*export\s+/gm, "");


const UI_STORAGE_KEY = "trip_panel_ui_v2";
const CACHE_STORAGE_PREFIX = "trip_panel_cache_v2";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const PANEL_ID = "trip-panel-root";
const STYLE_ID = "trip-panel-style";
const ENDPOINTS = {
  accountInfo: "/restapi/soa2/13775/json/getAccountInfoByTicket",
  sidList: "/restapi/soa2/18073/json/querySidList",
  summary: "/restapi/soa2/18073/json/performanceSummaryV2",
};

const sampleSidResponse = {
  count: 4,
  sidList: [
    { sid: 264440331, sidName: "https://blog.naver.com/hophea3052", sidUrl: "https://blog.naver.com/hophea3052" },
    { sid: 264440324, sidName: "https://blog.naver.com/wolber2154", sidUrl: "https://blog.naver.com/wolber2154" },
    { sid: 179910291, sidName: "https://craveforlambmeat.tistory.com/", sidUrl: "https://craveforlambmeat.tistory.com/" },
    { sid: 168140456, sidName: "https://inhyungsam.tistory.com/", sidUrl: "https://inhyungsam.tistory.com/" },
  ],
};

const sampleSummaryResponse = {
  clicks: 3808,
  clicksGrowthRate: -16.89,
  cvr: 1.16,
  bookings: 44,
  bookingsGrowthRate: -15.38,
  bookingAmount: 12218.9286,
  currency: "USD",
  uv: 3487,
  uvGrowthRate: -16.26,
  conversion: 1.26,
};

const sampleSiteSummaryBySid = {
  264440331: { clicks: 802, uv: 744, bookings: 11, bookingAmount: 3120.44, cvr: 1.48, conversion: 1.62, currency: "USD" },
  264440324: { clicks: 1100, uv: 1022, bookings: 14, bookingAmount: 4218.31, cvr: 1.37, conversion: 1.55, currency: "USD" },
  179910291: { clicks: 1206, uv: 1060, bookings: 13, bookingAmount: 3650.12, cvr: 1.23, conversion: 1.44, currency: "USD" },
  168140456: { clicks: 700, uv: 661, bookings: 6, bookingAmount: 1230.06, cvr: 0.91, conversion: 1.02, currency: "USD" },
};

const todayString = (offsetDays = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const initialState = () => ({
  uid: "",
  accountEmail: "",
  startDate: todayString(-6),
  endDate: todayString(0),
  mode: "all",
  siteQuery: "",
  currentSiteSid: null,
  sidResponse: null,
  allSummary: null,
  siteSummaryBySid: {},
  siteRows: [],
  statusTone: "idle",
  statusText: "전체현황과 사이트별 통계를 불러올 준비가 됐습니다.",
  logs: [],
  lastLoadedAt: null,
  cacheMeta: null,
  loading: {
    active: false,
    total: 0,
    completed: 0,
    failed: 0,
    currentLabel: "",
  },
});

const readUiState = () => {
  try {
    const raw = window.localStorage.getItem(UI_STORAGE_KEY);
    if (!raw) return initialState();
    return { ...initialState(), ...JSON.parse(raw), siteSummaryBySid: {}, siteRows: [], sidResponse: null, allSummary: null, cacheMeta: null };
  } catch {
    return initialState();
  }
};

const state = readUiState();
let root = null;

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const stripProtocol = (value) => String(value || "").replace(/^https?:\/\//, "").replace(/\/$/, "");

const formatUpdatedAt = (value) => {
  if (!value) return "없음";
  return new Intl.DateTimeFormat("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(value);
};

const formatRemainingMs = (value) => {
  if (value == null) return "없음";
  if (value <= 0) return "만료";
  const totalMinutes = Math.max(1, Math.ceil(value / 60000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0) return `${hours}시간 ${minutes}분`;
  return `${minutes}분`;
};

const cacheKey = () => `${CACHE_STORAGE_PREFIX}:${state.uid.trim()}:${state.startDate}:${state.endDate}`;

const persistUiState = () => {
  try {
    window.localStorage.setItem(
      UI_STORAGE_KEY,
      JSON.stringify({
        uid: state.uid,
        accountEmail: state.accountEmail,
        startDate: state.startDate,
        endDate: state.endDate,
        mode: state.mode,
        siteQuery: state.siteQuery,
        currentSiteSid: state.currentSiteSid,
        statusTone: state.statusTone,
        statusText: state.statusText,
        logs: state.logs.slice(0, 12),
        lastLoadedAt: state.lastLoadedAt,
      }),
    );
  } catch {}
};

const writeCache = () => {
  if (!state.uid.trim() || !state.sidResponse || !state.allSummary) return;
  try {
    const payload = {
      timestamp: Date.now(),
      sidResponse: state.sidResponse,
      allSummary: state.allSummary,
      siteSummaryBySid: state.siteSummaryBySid,
    };
    window.localStorage.setItem(cacheKey(), JSON.stringify(payload));
  } catch {}
};

const readCache = () => {
  try {
    const raw = window.localStorage.getItem(cacheKey());
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const remainingMs = parsed.timestamp + CACHE_TTL_MS - Date.now();
    if (remainingMs <= 0) return null;
    return parsed;
  } catch {
    return null;
  }
};

const appendLog = (tone, message) => {
  state.logs = [
    {
      tone,
      message,
      at: new Date().toLocaleTimeString("ko-KR", { hour12: false }),
    },
    ...state.logs,
  ].slice(0, 12);
  persistUiState();
};

const refreshDerivedState = () => {
  state.siteRows = buildSiteRows({
    sidResponse: state.sidResponse,
    siteSummaryBySid: state.siteSummaryBySid,
  });

  if (!state.currentSiteSid && state.siteRows.length) {
    state.currentSiteSid = state.siteRows[0].sid;
  }

  if (state.currentSiteSid && !state.siteRows.some((row) => row.sid === state.currentSiteSid)) {
    state.currentSiteSid = state.siteRows[0]?.sid ?? null;
  }

  const cache = readCache();
  state.cacheMeta = cache
    ? createCacheMeta({
        timestamp: cache.timestamp,
        ttlMs: CACHE_TTL_MS,
        label: `${state.startDate} ~ ${state.endDate}`,
      })
    : null;
};

const setStatus = (tone, text) => {
  state.statusTone = tone;
  state.statusText = text;
  persistUiState();
  render();
};

const ensureStyle = () => {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    #${PANEL_ID}{
      position:fixed;top:0;right:0;z-index:2147483646;width:min(470px,100vw);height:100vh;
      background:linear-gradient(180deg,#06101a 0%,#0a1625 100%);color:#e2edf9;border-left:1px solid rgba(127,156,188,.16);
      box-shadow:-18px 0 52px rgba(0,0,0,.35);font-family:Pretendard Variable,SUIT Variable,Apple SD Gothic Neo,Noto Sans KR,sans-serif;
    }
    #${PANEL_ID} *{box-sizing:border-box}
    #${PANEL_ID} .trip-shell{display:flex;flex-direction:column;height:100%}
    #${PANEL_ID} .trip-header{padding:14px 14px 12px;border-bottom:1px solid rgba(255,255,255,.06);background:rgba(5,11,20,.92);backdrop-filter:blur(14px)}
    #${PANEL_ID} .trip-top{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:start}
    #${PANEL_ID} .trip-brand{display:flex;align-items:center;gap:10px;min-width:0}
    #${PANEL_ID} .trip-brand-icon{display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:12px;border:1px solid rgba(64,196,255,.18);background:rgba(255,255,255,.04);font-size:16px}
    #${PANEL_ID} .trip-brand-text{min-width:0}
    #${PANEL_ID} .trip-title{font-size:16px;font-weight:800;letter-spacing:-.02em}
    #${PANEL_ID} .trip-title span{color:#34d399}
    #${PANEL_ID} .trip-subtitle{margin-top:2px;font-size:11px;color:#88a0bc;line-height:1.45}
    #${PANEL_ID} button{border:0;background:none;color:inherit;font:inherit;cursor:pointer}
    #${PANEL_ID} .trip-actions{display:flex;gap:6px}
    #${PANEL_ID} .trip-button{display:inline-flex;align-items:center;justify-content:center;height:34px;padding:0 12px;border-radius:10px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);font-size:12px;font-weight:700}
    #${PANEL_ID} .trip-button:hover{border-color:rgba(64,196,255,.3);background:rgba(64,196,255,.08)}
    #${PANEL_ID} .trip-button.primary{background:linear-gradient(135deg,#38bdf8,#34d399);color:#04111d;border:0}
    #${PANEL_ID} .trip-button.danger{background:rgba(248,113,113,.12);color:#fecaca;border-color:rgba(248,113,113,.18)}
    #${PANEL_ID} .trip-toolbar{margin-top:10px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
    #${PANEL_ID} .trip-field{display:flex;flex-direction:column;gap:6px}
    #${PANEL_ID} .trip-field.full{grid-column:1 / -1}
    #${PANEL_ID} .trip-label{font-size:10px;font-weight:700;letter-spacing:.12em;color:#7f9cbc;text-transform:uppercase}
    #${PANEL_ID} .trip-input{width:100%;height:38px;border-radius:11px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.03);padding:0 12px;color:#ecf7ff;font:inherit}
    #${PANEL_ID} .trip-input:focus{outline:none;border-color:rgba(64,196,255,.35)}
    #${PANEL_ID} .trip-mode-switch{margin-top:10px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
    #${PANEL_ID} .trip-mode{height:38px;border-radius:12px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);font-size:12px;font-weight:800}
    #${PANEL_ID} .trip-mode.active{border-color:rgba(64,196,255,.28);background:rgba(64,196,255,.1);color:#f4fbff}
    #${PANEL_ID} .trip-status{margin-top:10px;padding:10px 12px;border-radius:12px;font-size:12px;line-height:1.45}
    #${PANEL_ID} .trip-status[data-tone="idle"]{background:rgba(148,163,184,.1);color:#dbeafe}
    #${PANEL_ID} .trip-status[data-tone="success"]{background:rgba(34,197,94,.12);color:#c7f9d4}
    #${PANEL_ID} .trip-status[data-tone="error"]{background:rgba(239,68,68,.12);color:#fecaca}
    #${PANEL_ID} .trip-progress{margin-top:10px;padding:10px 12px;border-radius:14px;border:1px solid rgba(64,196,255,.15);background:rgba(255,255,255,.03)}
    #${PANEL_ID} .trip-progress-row{display:flex;justify-content:space-between;gap:10px;font-size:11px;color:#8ba3bf}
    #${PANEL_ID} .trip-progress-bar{margin-top:8px;height:6px;border-radius:999px;background:rgba(255,255,255,.06);overflow:hidden}
    #${PANEL_ID} .trip-progress-value{height:100%;border-radius:999px;background:linear-gradient(90deg,#38bdf8,#34d399)}
    #${PANEL_ID} .trip-body{flex:1;overflow:auto;padding:12px 12px 28px}
    #${PANEL_ID} .trip-card{padding:14px;border-radius:18px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);margin-bottom:12px}
    #${PANEL_ID} .trip-card-title{font-size:11px;font-weight:800;letter-spacing:.13em;color:#7f9cbc;text-transform:uppercase}
    #${PANEL_ID} .trip-chip-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
    #${PANEL_ID} .trip-chip{padding:7px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);font-size:11px;color:#d7e8fb}
    #${PANEL_ID} .trip-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:12px}
    #${PANEL_ID} .trip-metric{padding:12px;border-radius:14px;border:1px solid rgba(255,255,255,.08);background:rgba(2,6,23,.36)}
    #${PANEL_ID} .trip-metric-label{font-size:11px;color:#8ba3bf}
    #${PANEL_ID} .trip-metric-value{margin-top:6px;font-size:18px;font-weight:800;line-height:1.15}
    #${PANEL_ID} .trip-metric-growth{margin-top:7px;font-size:11px;font-weight:700}
    #${PANEL_ID} .tone-pos{color:#4ade80}
    #${PANEL_ID} .tone-neg{color:#f87171}
    #${PANEL_ID} .tone-neutral{color:#d7e8fb}
    #${PANEL_ID} .trip-search{margin-top:12px}
    #${PANEL_ID} .trip-site-list{display:grid;gap:8px;margin-top:12px;max-height:420px;overflow:auto;padding-right:3px}
    #${PANEL_ID} .trip-site-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;padding:12px;border-radius:14px;border:1px solid rgba(255,255,255,.07);background:rgba(2,6,23,.32)}
    #${PANEL_ID} .trip-site-row.active{border-color:rgba(64,196,255,.28);background:rgba(64,196,255,.08)}
    #${PANEL_ID} .trip-site-name{font-size:12px;font-weight:800;line-height:1.4;word-break:break-all}
    #${PANEL_ID} .trip-site-sub{margin-top:4px;font-size:11px;color:#8ba3bf}
    #${PANEL_ID} .trip-site-score{font-size:12px;font-weight:800;color:#34d399;text-align:right}
    #${PANEL_ID} .trip-site-mini{margin-top:6px;display:flex;flex-wrap:wrap;gap:6px;font-size:10px;color:#cfe1f3}
    #${PANEL_ID} .trip-mini-chip{padding:4px 7px;border-radius:999px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06)}
    #${PANEL_ID} .trip-logs{display:grid;gap:8px;margin-top:12px}
    #${PANEL_ID} .trip-log{padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.07);background:rgba(2,6,23,.28)}
    #${PANEL_ID} .trip-log-head{display:flex;justify-content:space-between;gap:12px;font-size:11px;color:#8ba3bf}
    #${PANEL_ID} .trip-log-body{margin-top:4px;font-size:12px;line-height:1.45}
    #${PANEL_ID} details{margin-top:12px}
    #${PANEL_ID} summary{cursor:pointer;font-size:12px;font-weight:700;color:#dbeafe}
    #${PANEL_ID} pre{margin:8px 0 0;padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,.07);background:rgba(2,6,23,.5);white-space:pre-wrap;word-break:break-word;font-size:11px;color:#cbd5e1}
  `;
  document.head.appendChild(style);
};

const persistAndRender = () => {
  persistUiState();
  render();
};

const growthTone = (value) => {
  if (value == null || Number.isNaN(Number(value))) return "tone-neutral";
  if (Number(value) > 0) return "tone-pos";
  if (Number(value) < 0) return "tone-neg";
  return "tone-neutral";
};

const growthText = (value) => {
  if (value == null || Number.isNaN(Number(value))) return "증감 없음";
  const numeric = Number(value);
  const sign = numeric > 0 ? "+" : "";
  return `${sign}${numeric.toFixed(2)}%`;
};

const currentProgress = () =>
  createProgressSnapshot({
    total: state.loading.total,
    completed: state.loading.completed,
    failed: state.loading.failed,
    currentLabel: state.loading.currentLabel,
  });

const postJson = async (path, body) => {
  const response = await window.fetch(new URL(path, window.location.origin).toString(), {
    method: "POST",
    credentials: "include",
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  let data = null;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`JSON parse failed: ${text.slice(0, 160)}`);
  }

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${text.slice(0, 160)}`);
  }

  return data;
};

const requireUid = () => {
  if (state.uid && String(state.uid).trim()) return true;
  setStatus("error", "UID를 먼저 입력하세요.");
  appendLog("error", "UID missing");
  return false;
};

const autoDetectUid = async () => {
  try {
    const response = await postJson(ENDPOINTS.accountInfo, {
      ticket: "",
    });
    const account = extractUidFromAccountInfo(response);
    state.uid = account.uid;
    state.accountEmail = account.bindEmail;
    persistUiState();
    appendLog("success", `UID 자동 감지: ${account.uid}`);
    render();
    return true;
  } catch (error) {
    appendLog("error", `UID 자동 감지 실패: ${error.message}`);
    render();
    return false;
  }
};

const filteredRows = () => {
  const query = state.siteQuery.trim().toLowerCase();
  if (!query) return state.siteRows;
  return state.siteRows.filter((row) => row.siteName.toLowerCase().includes(query) || row.siteLabel.toLowerCase().includes(query));
};

const currentSiteRow = () => state.siteRows.find((row) => row.sid === state.currentSiteSid) || state.siteRows[0] || null;

const loadFromCache = () => {
  const cached = readCache();
  if (!cached) return false;

  state.sidResponse = cached.sidResponse;
  state.allSummary = cached.allSummary;
  state.siteSummaryBySid = cached.siteSummaryBySid || {};
  state.lastLoadedAt = formatUpdatedAt(cached.timestamp);
  refreshDerivedState();
  setStatus("success", "6시간 캐시 데이터를 불러왔습니다.");
  appendLog("success", "Cache hit");
  render();
  return true;
};

const runWithConcurrency = async (items, concurrency, worker) => {
  let index = 0;
  const runners = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (index < items.length) {
      const currentIndex = index++;
      await worker(items[currentIndex], currentIndex);
    }
  });
  await Promise.all(runners);
};

const loadAllStats = async (options = {}) => {
  if (!state.uid.trim()) {
    await autoDetectUid();
  }
  if (!requireUid()) return;
  if (!options.forceRefresh && loadFromCache()) return;

  state.loading = {
    active: true,
    total: 0,
    completed: 0,
    failed: 0,
    currentLabel: "",
  };
  setStatus("idle", "사이트 목록과 전체 성과를 조회하는 중...");

  try {
    const sidResponse = await postJson(ENDPOINTS.sidList, {
      uid: state.uid.trim(),
      pageFlag: false,
    });

    const sidList = Array.isArray(sidResponse.sidList) ? sidResponse.sidList : [];
    const allSummary = await postJson(
      ENDPOINTS.summary,
      buildSummaryRequest({
        uid: state.uid.trim(),
        startDate: state.startDate,
        endDate: state.endDate,
        sidList: sidList.map((row) => row.sid),
      }),
    );

    state.sidResponse = sidResponse;
    state.allSummary = allSummary;
    state.siteSummaryBySid = {};
    state.loading.total = sidList.length;
    state.loading.completed = 0;
    state.loading.failed = 0;
    state.loading.currentLabel = "";
    render();

    await runWithConcurrency(sidList, 6, async (site) => {
      state.loading.currentLabel = stripProtocol(site.sidName || site.sidUrl || `SID ${site.sid}`);
      render();

      try {
        const siteSummary = await postJson(
          ENDPOINTS.summary,
          buildSummaryRequest({
            uid: state.uid.trim(),
            startDate: state.startDate,
            endDate: state.endDate,
            sidList: [site.sid],
          }),
        );
        state.siteSummaryBySid[site.sid] = siteSummary;
      } catch (error) {
        state.loading.failed += 1;
        appendLog("error", `${stripProtocol(site.sidName)} 조회 실패: ${error.message}`);
      } finally {
        state.loading.completed += 1;
        render();
      }
    });

    state.lastLoadedAt = formatUpdatedAt(Date.now());
    state.loading.active = false;
    state.loading.currentLabel = "";
    refreshDerivedState();
    writeCache();
    persistUiState();
    appendLog("success", `전체 ${state.siteRows.length}개 사이트 집계를 완료했습니다.`);
    setStatus("success", `전체 사이트 집계를 완료했습니다. 실패 ${state.loading.failed}건`);
  } catch (error) {
    state.loading.active = false;
    state.loading.currentLabel = "";
    appendLog("error", error.message);
    setStatus("error", `일괄 로딩 실패: ${error.message}`);
  }
};

const loadSample = () => {
  state.uid = state.uid || "_sample";
  state.sidResponse = sampleSidResponse;
  state.allSummary = sampleSummaryResponse;
  state.siteSummaryBySid = sampleSiteSummaryBySid;
  state.lastLoadedAt = formatUpdatedAt(Date.now());
  state.loading = { active: false, total: 0, completed: 0, failed: 0, currentLabel: "" };
  refreshDerivedState();
  appendLog("success", "샘플 전체/사이트 통계를 로드했습니다.");
  setStatus("success", "샘플 데이터가 반영되었습니다.");
};

const closePanel = () => {
  document.getElementById(PANEL_ID)?.remove();
  root = null;
};

const renderMetrics = (model) =>
  model.metrics
    .map(
      (metric) => `
        <div class="trip-metric">
          <div class="trip-metric-label">${escapeHtml(metric.label)}</div>
          <div class="trip-metric-value">${escapeHtml(metric.displayValue || "-")}</div>
          <div class="trip-metric-growth ${growthTone(metric.growthRate)}">${escapeHtml(growthText(metric.growthRate))}</div>
        </div>
      `,
    )
    .join("");

const renderSiteList = () => {
  const rows = filteredRows();
  if (!rows.length) {
    return `<div class="trip-log"><div class="trip-log-body">조건에 맞는 사이트가 없습니다.</div></div>`;
  }

  return rows
    .map(
      (row) => `
        <button class="trip-site-row ${row.sid === state.currentSiteSid ? "active" : ""}" data-action="select-site" data-sid="${row.sid}">
          <div>
            <div class="trip-site-name">${escapeHtml(row.siteLabel)}</div>
            <div class="trip-site-sub">SID ${row.sid}</div>
            <div class="trip-site-mini">
              <span class="trip-mini-chip">클릭 ${escapeHtml(row.clicksDisplay)}</span>
              <span class="trip-mini-chip">예약 ${escapeHtml(row.bookingsDisplay)}</span>
              <span class="trip-mini-chip">CVR ${escapeHtml(row.cvrDisplay)}</span>
            </div>
          </div>
          <div class="trip-site-score">${escapeHtml(row.bookingAmountDisplay)}</div>
        </button>
      `,
    )
    .join("");
};

const renderLogs = () => {
  if (!state.logs.length) {
    return `<div class="trip-log"><div class="trip-log-body">아직 실행 로그가 없습니다.</div></div>`;
  }

  return state.logs
    .map(
      (log) => `
        <div class="trip-log">
          <div class="trip-log-head">
            <span>${escapeHtml(log.at)}</span>
            <span>${escapeHtml(log.tone)}</span>
          </div>
          <div class="trip-log-body">${escapeHtml(log.message)}</div>
        </div>
      `,
    )
    .join("");
};

const render = () => {
  if (!root) return;

  refreshDerivedState();
  const progress = currentProgress();
  const allModel = createPanelModel({
    uid: state.uid,
    sidResponse: state.sidResponse || { count: 0, sidList: [] },
    summaryResponse: state.allSummary || {},
  });
  const siteRow = currentSiteRow();
  const siteModel = createPanelModel({
    uid: state.uid,
    sidResponse: siteRow ? { count: 1, sidList: [{ sid: siteRow.sid, sidName: siteRow.siteName, sidUrl: siteRow.siteUrl }] } : { count: 0, sidList: [] },
    summaryResponse: state.siteSummaryBySid?.[siteRow?.sid] || {},
  });

  root.innerHTML = `
    <div class="trip-shell">
      <div class="trip-header">
        <div class="trip-top">
          <div class="trip-brand">
            <div class="trip-brand-icon">T</div>
            <div class="trip-brand-text">
              <div class="trip-title">Trip <span>Siteboard</span></div>
              <div class="trip-subtitle">SearchAdvisor처럼 전체현황과 사이트별 실적을 한 패널에서 확인합니다.</div>
            </div>
          </div>
          <div class="trip-actions">
            <button class="trip-button" data-action="sample">샘플</button>
            <button class="trip-button danger" data-action="close">닫기</button>
          </div>
        </div>

        <div class="trip-toolbar">
          <label class="trip-field full">
            <span class="trip-label">UID</span>
            <input class="trip-input" data-field="uid" value="${escapeHtml(state.uid)}" placeholder="_TIKR...">
          </label>
          <label class="trip-field full">
            <span class="trip-label">계정</span>
            <input class="trip-input" value="${escapeHtml(state.accountEmail || "-")}" disabled>
          </label>
          <label class="trip-field">
            <span class="trip-label">시작일</span>
            <input class="trip-input" data-field="startDate" type="date" value="${escapeHtml(state.startDate)}">
          </label>
          <label class="trip-field">
            <span class="trip-label">종료일</span>
            <input class="trip-input" data-field="endDate" type="date" value="${escapeHtml(state.endDate)}">
          </label>
        </div>

        <div class="trip-actions" style="margin-top:10px;">
          <button class="trip-button primary" data-action="load-all">전체 새로고침</button>
          <button class="trip-button" data-action="detect-uid">UID 자동감지</button>
          <button class="trip-button" data-action="load-cache">캐시 사용</button>
          <button class="trip-button" data-action="force-reload">강제 새로고침</button>
        </div>

        <div class="trip-mode-switch">
          <button class="trip-mode ${state.mode === "all" ? "active" : ""}" data-action="mode-all">전체현황</button>
          <button class="trip-mode ${state.mode === "site" ? "active" : ""}" data-action="mode-site">사이트별</button>
        </div>

        <div class="trip-status" data-tone="${escapeHtml(state.statusTone)}">${escapeHtml(state.statusText)}</div>

        <div class="trip-progress">
          <div class="trip-progress-row">
            <span>진행률 ${progress.completed} / ${progress.total || 0}</span>
            <span>${progress.percent}%</span>
          </div>
          <div class="trip-progress-bar"><div class="trip-progress-value" style="width:${progress.percent}%"></div></div>
          <div class="trip-progress-row" style="margin-top:8px;">
            <span>${escapeHtml(progress.currentLabel || (state.loading.active ? "처리 준비 중" : "대기 중"))}</span>
            <span>실패 ${progress.failed}</span>
          </div>
        </div>
      </div>

      <div class="trip-body">
        <div class="trip-card">
          <div class="trip-card-title">${state.mode === "all" ? "전체 기준 통계" : "현재 사이트 통계"}</div>
          <div class="trip-chip-row">
            <div class="trip-chip">사이트 ${allModel.sidTotalCount}</div>
            <div class="trip-chip">캐시 ${escapeHtml(formatUpdatedAt(state.cacheMeta?.updatedAt ?? null))}</div>
            <div class="trip-chip">남은시간 ${escapeHtml(formatRemainingMs(state.cacheMeta?.remainingMs ?? null))}</div>
          </div>
          <div class="trip-grid">${renderMetrics(state.mode === "all" ? allModel : siteModel)}</div>
        </div>

        ${
          state.mode === "site"
            ? `
              <div class="trip-card">
                <div class="trip-card-title">사이트별 리스트</div>
                <div class="trip-search">
                  <input class="trip-input" data-field="siteQuery" value="${escapeHtml(state.siteQuery)}" placeholder="사이트 검색...">
                </div>
                <div class="trip-site-list">${renderSiteList()}</div>
              </div>
            `
            : `
              <div class="trip-card">
                <div class="trip-card-title">상위 사이트</div>
                <div class="trip-site-list">${renderSiteList()}</div>
              </div>
            `
        }

        <div class="trip-card">
          <div class="trip-card-title">실행 로그</div>
          <div class="trip-logs">${renderLogs()}</div>
          <details>
            <summary>전체 요약 JSON</summary>
            <pre>${escapeHtml(JSON.stringify(state.allSummary, null, 2) || "null")}</pre>
          </details>
          <details>
            <summary>사이트별 요약 JSON</summary>
            <pre>${escapeHtml(JSON.stringify(state.siteSummaryBySid, null, 2) || "null")}</pre>
          </details>
        </div>
      </div>
    </div>
  `;
};

const handleFieldChange = (event) => {
  const fieldEl = event.target.closest("[data-field]");
  if (!fieldEl) return;
  const field = fieldEl.getAttribute("data-field");
  state[field] = fieldEl.value;
  persistAndRender();
};

const handleAction = async (event) => {
  const actionEl = event.target.closest("[data-action]");
  if (!actionEl) return;
  const action = actionEl.getAttribute("data-action");

  if (action === "close") {
    closePanel();
    return;
  }
  if (action === "sample") {
    loadSample();
    return;
  }
  if (action === "detect-uid") {
    setStatus("idle", "계정 정보를 조회해 UID를 찾는 중...");
    const ok = await autoDetectUid();
    if (ok) {
      setStatus("success", "UID를 자동으로 감지했습니다.");
    } else {
      setStatus("error", "UID 자동 감지에 실패했습니다.");
    }
    return;
  }
  if (action === "mode-all") {
    state.mode = "all";
    persistAndRender();
    return;
  }
  if (action === "mode-site") {
    state.mode = "site";
    persistAndRender();
    return;
  }
  if (action === "select-site") {
    state.currentSiteSid = Number(actionEl.getAttribute("data-sid"));
    state.mode = "site";
    persistAndRender();
    return;
  }
  if (action === "load-cache") {
    if (!requireUid()) return;
    if (!loadFromCache()) {
      setStatus("error", "사용 가능한 캐시가 없습니다.");
    }
    return;
  }
  if (action === "load-all") {
    await loadAllStats({ forceRefresh: false });
    return;
  }
  if (action === "force-reload") {
    await loadAllStats({ forceRefresh: true });
  }
};

const openPanel = () => {
  ensureStyle();
  if (!root) {
    root = document.createElement("aside");
    root.id = PANEL_ID;
    root.addEventListener("click", (event) => {
      void handleAction(event);
    });
    root.addEventListener("input", handleFieldChange);
    root.addEventListener("change", handleFieldChange);
    document.body.appendChild(root);
  }
  render();
};

window.TripPartnerPanel = {
  open: openPanel,
  close: closePanel,
  detectUid: autoDetectUid,
  loadAll: (forceRefresh = false) => loadAllStats({ forceRefresh }),
  useSample: loadSample,
  getState: () => structuredClone(state),
};

openPanel();
if (!state.uid.trim()) {
  void autoDetectUid();
}

})();
