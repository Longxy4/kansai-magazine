# 関西通信

日中学生交流団体 freebird 関西支部の広報誌です。

**[最新号を読む](https://longxy4.github.io/kansai-magazine/)**

## バックナンバー

| 発行号 | オンラインで読む | PDF |
| --- | --- | --- |
| 2026年7月号 | [読む](https://longxy4.github.io/kansai-magazine/?issue=2026-07) | [PDFを開く](issues/2026-07.pdf) |
| 2026年特別号（1月発行） | [読む](https://longxy4.github.io/kansai-magazine/?issue=2026-01) | [PDFを開く](issues/2026-01.pdf) |
| 2025年9月号 | [読む](https://longxy4.github.io/kansai-magazine/?issue=2025-09) | [PDFを開く](issues/関西通信2025年9月号.pdf) |
| 2025年7月号 | [読む](https://longxy4.github.io/kansai-magazine/?issue=2025-07) | [PDFを開く](issues/関西通信2025年7月号.pdf) |
| 2025年5月号 | [読む](https://longxy4.github.io/kansai-magazine/?issue=2025-05) | [PDFを開く](issues/関西通信2025年5月号.pdf) |
| 2025年3月号 | [読む](https://longxy4.github.io/kansai-magazine/?issue=2025-03) | [PDFを開く](issues/関西通信2025年3月号.pdf) |
| 2025年特別号 | [読む](https://longxy4.github.io/kansai-magazine/?issue=2025-special) | [PDFを開く](issues/関西通信2025年特別号.pdf) |
| 2024年9月号 | [読む](https://longxy4.github.io/kansai-magazine/?issue=2024-09) | [PDFを開く](issues/関西通信2024年9月号.pdf) |
| 2024年7月号 | [読む](https://longxy4.github.io/kansai-magazine/?issue=2024-07) | [PDFを開く](issues/関西通信2024年7月号.pdf) |
| 2024年特別号 | [読む](https://longxy4.github.io/kansai-magazine/?issue=2024-special) | [PDFを開く](issues/関西通信2024年特別号.pdf) |

[公開されているPDF一覧](https://github.com/Longxy4/kansai-magazine/tree/main/issues)

オンライン版はパソコン・スマートフォンのブラウザでお読みいただけます。左端にマウスを移すとページ一覧が開き、下端に移すと閲覧操作が表示されます。スマートフォンでは左端中央・下端をタップしてください。

<details>
<summary>編集担当者向け：発行・更新方法</summary>

1. `issues` フォルダーで **Add file → Upload files** を選び、PDF をアップロードして `main` に保存します。`関西通信2025年9月号.pdf`、`2026年特別号.pdf`、`特别号.pdf`、従来の `YYYY-MM.pdf` に対応しています。
2. [Actions の Publish magazine](https://github.com/Longxy4/kansai-magazine/actions/workflows/publish.yml) が成功したら、実際の閲覧リンクを確認します。
3. 通常号の固定リンクは `https://longxy4.github.io/kansai-magazine/?issue=YYYY-MM` です。`2026年特別号.pdf` は `?issue=2026-special`、年のない特別号は `?issue=special` になります。閲覧画面の共有ボタンから固定リンクをコピーできます。バックナンバーの表にもリンクを追記できます。同じ号の訂正は同名PDFを上書きしてください。

複数年の特別号を公開する場合は、ファイル名に年を付けてください。同一内容の PDF を別名でアップロードした場合は自動でまとめ、元の閲覧リンクを残します。同じ号に内容の異なる PDF が複数ある場合は、使用中のファイルを優先し、競合するファイルだけをスキップします。変更のない PDF は変換済みページを再利用します。壊れた PDF や未対応のファイルは個別にスキップし、ほかの号の公開を続行します。更新に失敗した号は、前回の公開済み版を可能な限り残します。Actions の各実行の Summary で、再利用・変換・スキップの結果と理由を確認してください。縦向きの単ページ PDF、横向きの見開き PDF、回転情報のある PDF に対応しています。

号外・特集など通常の号名に当てはまらない PDF は、`2026年交流会特集.pdf` や `創刊記念号.pdf` のように内容が分かる名前のままアップロードできます。閲覧タイトルは元のファイル名、固定リンクは自動発行の `extra-` と短い番号になります。公開後、Actions の **Summary → 杂志发布结果 → 阅读链接** からリンクを確認・コピーしてください。同名の PDF を上書きしてもリンクは変わりません。内容を変えずに名前だけ変更した場合も、公開済みの元のリンクを維持します。

閲覧システムのソースと詳しい管理手順は [kansai-magazine-system](https://github.com/Longxy4/kansai-magazine-system) にあります。システムを更新した後は、この公開用リポジトリで **Publish magazine → Run workflow** を実行します。

</details>
