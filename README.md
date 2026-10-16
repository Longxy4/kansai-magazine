# 関西通信电子杂志维护

直接阅读，无杂志首页：
https://longxy4.github.io/kansai-magazine/?issue=2026-07

## 每半年发布一期（全程在 GitHub 网页操作）
1. 打开 https://github.com/Longxy4/kansai-magazine/tree/main/issues
2. 点击 Add file → Upload files。
3. 将 PDF 命名为 YYYY-MM.pdf，例如 2027-01.pdf，拖入上传框，点击 Commit changes 保存到 main。
4. 等待仓库 Actions 中 Pages 部署变为绿色，再打开对应链接：
   https://longxy4.github.io/kansai-magazine/?issue=2027-01
5. 检查封面、下一页、最后一页及 QR，再将该期链接或二维码分享出去。旧期链接继续有效，无需改代码。

同一期修订：在 issues 文件夹上传同名 PDF 并覆盖。需要保留旧版时使用不同期号。

## PDF 格式
每张 PDF 包含左右两个页面。首张右半为封面、左半为封底，其余按 PDF 顺序、先左后右阅读。本期 15 张跨页对应 30 个阅读页面。若未来 PDF 改为单页或印刷拼版格式，需先调整阅读器。

## 阅读功能
电脑默认双页，手机默认单页；可手动切换。支持首尾页、左右键、正常缩放下滑动翻页、放大后滚动查看、分享链接及本地生成二维码。PDF 按钮打开原文件，其中的原有链接可点击；阅读器中的画布不支持 PDF 内部链接。

## 部署与依赖
GitHub Pages 使用 main 分支根目录，免费静态托管。PDF 和脚本均保存在此仓库，阅读时不依赖外部 CDN，也不调用收费服务。供应商的免费额度和服务政策仍适用。

vendor/ 保存 PDF.js 4.10.38（Apache-2.0）及 qrcode-generator 1.4.4（MIT），升级时必须同时替换 PDF.js 主程序和 worker，并重新测试。

无法阅读时检查：issues 中是否有完全匹配的文件名；Actions 的 Pages 部署是否完成；刷新页面后重试。不要只凭部署绿色就判断 PDF 已上传。
