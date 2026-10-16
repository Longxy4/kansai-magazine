# 関西通信电子杂志

阅读链接： https://longxy4.github.io/kansai-magazine/?issue=2026-07

采用 [S-poony/Pages](https://github.com/S-poony/Pages) 的原有阅读界面和翻页引擎，无杂志首页。每期一个独立链接，电脑双页、手机竖屏单页，全部阅读操作集中在不遮挡正文的底栏；页码显示当前页与总页数。支持缩放和统一分享窗口（二维码＋复制链接），复制提示两秒后自动消失。

## 你以后每期只需要做三步

1. 打开 [issues 文件夹](https://github.com/Longxy4/kansai-magazine/tree/main/issues)，点击 **Add file → Upload files**。
2. 上传命名为 `YYYY-MM.pdf` 的 PDF，例如 `2027-01.pdf`，点击 **Commit changes** 保存到 `main`。
3. 打开 [Actions](https://github.com/Longxy4/kansai-magazine/actions)，等 **Publish magazine** 成功变绿。检查对应链接后分享：
   `https://longxy4.github.io/kansai-magazine/?issue=2027-01`

不需要安装软件、不需要手动转换图片、不需要更改代码。GitHub 会自动生成所有期号的阅读文件并发布，旧期链接继续有效。

同一期修订：在 `issues` 上传同名 PDF 覆盖即可，再等待发布成功。不要删除需要继续访问的旧期 PDF。

## PDF 格式

适用于本期的横向双页跨页排版：首张右半为封面、左半为封底；随后各张先左后右。15 张跨页生成 30 个阅读页面。未来如果改为竖向单页或印刷拼版格式，需要先修改转换规则。错误格式会让生成步骤报错，已发布的旧站点保留。

阅读器显示的是预先生成的图片，读者不必在手机上转换 PDF。原 PDF 的链接可通过工具栏的 **PDF** 按钮打开使用。

## 自动发布

- Pages 发布来源使用 **GitHub Actions**，工作流为 `.github/workflows/publish.yml`。
- 自动流程：Poppler 将 PDF 渲染为跨页 → 拆页并调整封面顺序 → Pages 生成静态 HTML 和分辨率不同的图片 → GitHub Pages 发布。
- 渲染和发布都在此 GitHub 仓库的 Actions 中完成，不上传到 Pages 作者的演示站或任何第三方转换网站。
- 页面运行时只请求此站点内的文件，无外部 CDN、统计或付费服务。GitHub 的免费额度与服务政策仍适用。
- 首次打开可能有缓存更新延迟。判断发布结果应检查公开阅读链接，不能只看绿色状态。

## 来源与修改

- Pages：`cb7c648b05298c6fdd70453244dbaf116880e4d1`，README 声明 MIT。
- PagesEngine：`6c585892900409b2f794afb34c9ad3dc4e6f715d`，MIT，许可证保存在 `vendor/pages/ENGINE-LICENSE`。
- 二维码：qrcode-generator 1.4.4，MIT。
- `vendor/pages/` 保留生成器、阅读样式及模块源码。引擎由该版本源码编译，JS 和 CSS 一同保存。
- 本项目适配：独立封面；横竖屏切换时更新引擎显示模式并保留当前页；初始页码；分享链接、二维码、原 PDF 入口；PDF 自动生成与部署。

开发时先运行 `python scripts/render-issues.py`，再运行 `node scripts/build-site.mjs`。需要 Python/Pillow、Poppler 的 `pdftoppm` 和 Node.js。输出 `_site/`；Windows 可用 `PDFTOPPM` 环境变量指定 `pdftoppm.exe` 的绝对路径。
