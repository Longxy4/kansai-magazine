# 関西通信 デジタルブック

GitHub Pages で公開する freebird 関西支部の PDF ビューワーです。トップページの `index.html` を全号共通で使用します。

## 初回公開

1. GitHub の **Settings → Pages → Build and deployment** で **Deploy from a branch** / `main` / `/(root)` を指定します。
2. **Add file → Upload files** から `issues/2026-07.pdf` を登録します。GitHub の Web UI では、先に `issues` フォルダーに入る（必要なら `issues/.gitkeep` を作る）方法が確実です。
3. `https://longxy4.github.io/kansai-magazine/?issue=2026-07` を開きます。

## 次号の発行

`issues/YYYY-MM.pdf` という形式で PDF をアップロードしてください。例：`issues/2027-01.pdf` を追加すると、URL は `https://longxy4.github.io/kansai-magazine/?issue=2027-01` になります。コードの変更は不要です。

## 注意

このビューアーは **各 PDF ページが左右2つの誌面を含む印刷用見開き形式** を前提にしています。第1 PDF ページの右半分を表紙、左半分を裏表紙として扱い、第2ページ以降の各半分を本文として扱います。通常の1ページ1誌面のPDFにはそのままでは適しません。

外部 JavaScript CDN を利用するため、閲覧時はインターネット接続が必要です。GitHub Pages は公開サイトです。PDF 内の個人情報や写真について、事前に掲載許可を確認してください。

PDF に直接埋め込まれたハイパーリンクはキャンバス描画ではクリックできません。ダウンロードした元の PDF では利用できます。
