# Tai Ji Men Qigong Academy 官方網站

這是太極門氣功養生學會的官方網站專案，使用 Next.js 14 + Tailwind CSS 構建。

## 專案架構

```
tjm-client/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.jsx      # 主要佈局文件
│   │   └── page.jsx        # 首頁
│   ├── components/
│   │   └── features/
│   │       └── news.jsx    # 新聞頁面組件
│   └── styles/
│       └── globals.css     # 全域樣式
├── public/
│   └── images/            # 圖片資源
│       ├── hero/          # 主要背景圖片
│       └── content/       # 內容圖片
└── README.md
```

## 快速開始

### 環境需求
- Node.js 18.0 或更高版本
- npm 或 yarn

### 安裝與運行

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 建置專案
npm run build

# 啟動生產服務器
npm start
```

開發服務器將在 [http://localhost:3000](http://localhost:3000) 啟動。

## 重要開發注意事項 ⚠️

### 🖼️ 圖片資源需要更新

#### News 頁面圖片
- **檔案位置**: `src/components/features/news.jsx`
- **需要更換的圖片**:
  - Today's Picks 主要特色圖片
  - Most Recent 區塊的三張圖片
  - Topic Section 的所有圖片
- **備註**: 目前使用的是佔位符圖片，需要替換為實際的新聞圖片

#### 主要頁面背景圖片
以下頁面的最上方背景圖片需要重新調整：

1. **About TJM** 頁面
   - 背景圖片路徑: `public/images/hero/`
   - 漸層效果需要對照 Figma 設計稿調整

2. **Qigong & Life** 頁面
   - 背景圖片路徑: `public/images/hero/`
   - 漸層效果需要對照 Figma 設計稿調整

3. **Benefits of Practice** 頁面
   - 背景圖片路徑: `public/images/hero/`
   - 漸層效果需要對照 Figma 設計稿調整

4. **Join Us** 頁面
   - 背景圖片路徑: `public/images/hero/`
   - 漸層效果需要對照 Figma 設計稿調整

### 🎨 漸層效果調整

**重要提醒**: 各頁面最上方的漸層效果一直無法完美匹配 Figma 設計稿。

**需要調整的項目**:
- 漸層顏色的起始和結束色彩
- 漸層方向和角度
- 透明度和混合模式
- 可能需要使用多層漸層疊加

**建議做法**:
1. 對照 Figma 設計稿中的確切漸層設定
2. 使用 CSS 漸層生成工具輔助
3. 可能需要調整 Tailwind CSS 的自定義漸層類別

### 🔧 技術細節

#### 響應式設計
- 桌面版: 最大寬度 1440px
- 平板版: 適應性佈局
- 手機版: 完全響應式

#### 組件結構
- `news.jsx`: 包含 Today's Picks、Most Recent、Topic Sections
- 使用 Tailwind CSS 進行樣式設計
- 採用 Next.js Image 組件優化圖片載入

#### 已知問題
1. Hydration mismatch 警告已通過 `suppressHydrationWarning` 解決
2. Topic Section 的疊層效果已完成調整

## 開發工作流程

### 圖片更新步驟
1. 將新圖片放入 `public/images/` 對應資料夾
2. 更新組件中的圖片路徑
3. 確認圖片比例和顯示效果
4. 測試響應式效果

### 漸層調整步驟
1. 參考 Figma 設計稿
2. 在開發工具中實時調整 CSS
3. 更新 Tailwind 類別或自定義 CSS
4. 測試在不同螢幕尺寸下的效果

## 部署

### 🖥️ 使用 WinSCP 部署到伺服器

#### 1. 建置專案
```bash
# 安裝依賴
npm install

# 建置專案
npm run build
```

#### 2. 準備上傳檔案
需要上傳的檔案和資料夾：
```
📁 tjm-client/
├── 📁 .next/              # 建置輸出 (必須)
├── 📁 public/             # 靜態資源 (必須)
├── 📁 node_modules/       # 依賴套件 (必須)
├── 📄 package.json        # 專案設定 (必須)
├── 📄 package-lock.json   # 鎖定版本 (必須)
├── 📄 next.config.js      # Next.js 設定 (如果有)
└── 📄 tailwind.config.js  # Tailwind 設定 (如果有)
```

#### 3. WinSCP 上傳步驟

**步驟 1: 連接伺服器**
1. 開啟 WinSCP
2. 輸入伺服器資訊：
   - 主機名稱/IP
   - 使用者名稱
   - 密碼或 SSH 金鑰
3. 點擊「登入」

**步驟 2: 準備伺服器目錄**
```bash
# 在伺服器上建立專案目錄
mkdir -p /var/www/tjm-website
cd /var/www/tjm-website
```

**步驟 3: 上傳檔案**
1. 在 WinSCP 中導航到伺服器的專案目錄 (如 `/var/www/tjm-website`)
2. 選取並上傳以下檔案/資料夾：
   - `.next/` 資料夾 (完整上傳)
   - `public/` 資料夾 (完整上傳)
   - `node_modules/` 資料夾 (完整上傳) ⚠️
   - `package.json`
   - `package-lock.json`

**注意**: 上傳 `node_modules` 可能很慢，建議在伺服器上重新安裝：

#### 4. 伺服器端設定

**選項 A: 重新安裝依賴 (推薦)**
```bash
# SSH 連接到伺服器
ssh user@your-server

# 進入專案目錄
cd /var/www/tjm-website

# 安裝 Node.js 依賴
npm install --production

# 設定檔案權限
chown -R www-data:www-data /var/www/tjm-website
chmod -R 755 /var/www/tjm-website
```

**選項 B: 啟動應用程式**
```bash
# 使用 PM2 管理程序 (推薦)
npm install -g pm2
pm2 start npm --name "tjm-website" -- start

# 或直接啟動
npm start
```

#### 5. 網頁伺服器設定 (Nginx 範例)

建立 Nginx 設定檔 `/etc/nginx/sites-available/tjm-website`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

啟用站點：
```bash
ln -s /etc/nginx/sites-available/tjm-website /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 📝 部署檢查清單

- [ ] 本地建置成功 (`npm run build`)
- [ ] 所有必要檔案已上傳
- [ ] 伺服器已安裝 Node.js (18.0+)
- [ ] 依賴套件已安裝
- [ ] 應用程式正常啟動 (port 3000)
- [ ] 網頁伺服器設定完成
- [ ] 網站可正常訪問

### ⚠️ 部署注意事項

1. **檔案權限**: 確保網頁伺服器有讀取檔案的權限
2. **環境變數**: 如有使用，需在伺服器上設定 `.env` 檔
3. **防火牆**: 確保 port 3000 (或設定的 port) 有開放
4. **SSL 憑證**: 生產環境建議使用 HTTPS

### 🔄 更新部署

當需要更新網站時：
1. 在本地進行修改
2. 執行 `npm run build`
3. 使用 WinSCP 上傳更新的檔案
4. 在伺服器上重啟應用程式：
   ```bash
   pm2 restart tjm-website
   ```

### 🚀 快速部署 (本地建置)

```bash
# 建置專案
npm run build

# 啟動生產服務器
npm start
```

## 聯絡資訊

如有技術問題或需要設計稿，請聯絡開發團隊。

---

**最後更新**: 2025年6月

**重要提醒**: 請務必在開發前仔細閱讀上述注意事項，特別是圖片更新和漸層效果調整的部分。 