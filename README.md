# 天元匯算 官網（TYHS）

雙站點靜態站。`tyhs.hk` 根路徑是入口選擇頁：左側進入深圳主體官網（簡體中文），右側進入香港主體官網（繁體中文 + English）。純靜態，無建構工具，直接編輯 HTML / CSS / JS 即可。

## 目錄結構

| 路徑 | 用途 |
| --- | --- |
| `index.html` | 入口選擇頁（左右雙入口） |
| `css/landing.css` | 入口選擇頁樣式 |
| `hk/index.html`、`hk/about/`、`hk/services/`、`hk/contact/`、`hk/products/` | 香港站五頁（繁體中文 + English 語言下拉） |
| `cn/index.html`、`cn/about/`、`cn/services/`、`cn/contact/`、`cn/products/` | 深圳站五頁（僅簡體中文，無語言切換） |
| `css/style.css` | 兩站共用樣式（深色主題） |
| `js/main.js` | 香港站主腳本：導覽、語言下拉、滾動入場、品牌牆 |
| `js/main-cn.js` | 深圳站主腳本（無語言邏輯） |
| `js/products.js`、`js/products-data.js` | 香港站產品頁渲染與資料 |
| `js/products-cn.js`、`js/products-data-cn.js` | 深圳站產品頁渲染與資料（簡體派生） |
| `js/gate-fx.js` | 入口選擇頁背景：神經網絡 + 匯聚到兩個公司名稱中心的流光 |
| `js/hero-net.js`、`js/hero-flow.js` | 首頁神經網絡背景與端點流光層（兩站共用） |
| `images/`、`fonts/` | 站點用圖、自託管字體（兩站共用根路徑） |
| `CNAME` | GitHub Pages 網域設定（tyhs.hk） |

## 主體口徑

- 香港：天元匯算科技有限公司（TIANYUAN AI COMPUTING SOLUTION CO., LIMITED）／香港觀塘開源道 56 號大眾工業大廈 1 字樓 101A 室
- 深圳：深圳市天元汇算科技有限公司（Shenzhen Tianyuan AI Solution Co., Ltd.）／深圳市龙华区大浪街道同胜社区诚和德科技园 1 号 1 层 103／統一社會信用代碼 91440300MAKKYCNH55
- 企業郵箱 `info@tyhs.hk`，兩站共用；官網不展示電話、銀行帳號、備案號
- 5090D / 5090D V2 為中國特供型號，站內不展示（資料層以型號名正則過濾）
- 產品圖一律以型號命名，取自原廠或授權經銷商產品頁

## 本地預覽

需以 HTTP 方式開啟（`file://` 直開會缺 CSS/JS 路徑）：

```
python -m http.server 8099
```

再訪問 `http://127.0.0.1:8099/`（入口頁）、`/hk/`、`/cn/`。

## 僅本地留存、不入庫的內容

以下由 `.gitignore` 排除，僅存在於本地工作目錄：

- `产品图/` — 從廠商官網抓取的原始圖片與規格 CSV/JSON
- `本地预览.bat` — 本機啟動腳本
- `_backup/` — 改造前的頁面備份（`gate-root/`、`pixa-v3/`、`favicon-old/`）
- `images/front-wall.jpg`、`images/brands-raw.png`、`images/brands-new.png` — 已不引用的舊素材
