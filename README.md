# 天元匯算 官網（TYHS）

天元匯算科技有限公司（TIANYUAN AI COMPUTING SOLUTION CO., LIMITED）官方網站。
純靜態站：無建構工具，直接編輯 HTML / CSS / JS 即可，繁體中文為預設語言，提供 English 切換。

## 目錄結構

| 路徑 | 用途 |
| --- | --- |
| `index.html` | 首頁 |
| `about/` `services/` `contact/` `products/` | 各子頁（`index.html`，對外 URL 不帶 `.html`） |
| `css/style.css` | 全站樣式（深色主題） |
| `js/main.js` | 導覽、語言切換、粒子首屏、品牌牆等 |
| `js/products-data.js` | 產品中心真實資料（`PD_REAL` 顯卡 / `PD_COMPUTE` 算力卡 / `PD_SERVER` 伺服器） |
| `js/products.js` | 產品頁渲染、分組摺疊、品牌篩選、規格彈層 |
| `images/` | 站點用圖（banner、logo、產品圖） |
| `images/products/` | 產品圖：`gaming/` 遊戲卡、`compute/` 算力卡、`server/` 伺服器 |
| `CNAME` | GitHub Pages 網域設定（tyhs.hk） |

## 本地預覽

需以 HTTP 方式開啟（`file://` 直開會缺 CSS/JS 路徑）：

```
python -m http.server 8099
```

再訪問 `http://127.0.0.1:8099/`。

## 僅本地留存、不入庫的內容

以下由 `.gitignore` 排除，僅存在於本地工作目錄：

- `产品图/` — 從廠商官網抓取的原始圖片與規格 CSV/JSON（約 15MB）
- `本地预览.bat` — 本機啟動腳本
- `images/front-wall.jpg`、`images/brands-raw.png`、`images/brands-new.png` — 已不引用的舊素材

## 內容口徑

- 只用香港主體與香港地址，不恢復深圳主體、電話、銀行帳號、備案號。
- 5090D / 5090D V2 為中國特供型號，站內不展示（資料層以型號名正則過濾）。
- 產品圖一律以型號命名，取自原廠或授權經銷商產品頁。
