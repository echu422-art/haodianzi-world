
# haodianzi.world — 好點子網站 MVP

讓智慧浮出雜訊海（Let wisdom surface from the sea of noise.）

## 快速開始
```bash
pnpm i   # 或 npm i / yarn
pnpm dev # http://localhost:3000
```

## 部署到 Vercel
1. 推上 GitHub
2. 在 Vercel 連結此 repo，按 Deploy
3. 綁定自有網域 `haodianzi.world`：Vercel Dashboard → Settings → Domains

## 結構說明
- `pages/index.tsx` — 首頁（星光背景、今日好點子、AI 推薦）
- `pages/submit.tsx` — 投稿頁（MVP：用 localStorage 暫存）
- `components/*`     — NavBar / Footer / Hero / IdeaCard
- `styles/globals.css` — Tailwind 與星光背景動畫

## 注意事項
- 目前未接後端，所有投稿只存本機瀏覽器（方便 MVP 測試）。
- 之後建議接入 Supabase（Auth + DB），並導入 AI 模組（摘要、張力指數、語意聚類）。

## License
MIT
