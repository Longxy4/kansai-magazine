import {readFile, writeFile, mkdir, readdir, copyFile} from 'node:fs/promises';
import {generateFlipbookHtml} from '../vendor/pages/generator.js';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = name => readFile(path.join(root, name), 'utf8');
const out = path.join(root, '_site');
await mkdir(path.join(out, 'vendor'), {recursive:true});
await mkdir(path.join(out, 'issues'), {recursive:true});
await copyFile(path.join(root, 'vendor/qrcode.js'), path.join(out, 'vendor/qrcode.js'));
await writeFile(path.join(out, '.nojekyll'), '');
const issues = (await readdir(path.join(root, 'issues'))).filter(n => /^\d{4}-(0[1-9]|1[0-2])\.pdf$/.test(n)).map(n=>n.slice(0,-4)).sort();
if (!issues.length) throw Error('No issues found');
const names = ['utils','state','navigation','scaling','zoom','pageflip','ui','links','main'];
const js = (await Promise.all(names.map(n=>read('vendor/pages/flipbook/'+n+'.js')))).join('\n');
const css = await read('vendor/pages/engine.css') + '\n' + await read('vendor/pages/flipbook.css');
const engine = await read('vendor/pages/engine.js');
const extraJs = await read('scripts/reader-extras.js');
const license = await read('vendor/pages/ENGINE-LICENSE');
const extraCss = `#issue-share,#issue-qr,#issue-pdf{font:inherit;font-size:13px;padding:6px;width:auto;flex-shrink:0;white-space:nowrap;border:0;background:transparent;color:#453a32;cursor:pointer;text-decoration:none}#top-controls-panel{gap:8px;max-width:calc(100vw - 20px);opacity:.9}#zoom-slider{width:clamp(55px,14vw,150px)}#share-status{position:fixed;bottom:90px;left:50%;transform:translateX(-50%);z-index:2200;background:#fff8;border-radius:8px;padding:3px;font-size:12px;pointer-events:none}#share-dialog{box-sizing:border-box;width:min(340px,90vw);border:0;border-radius:14px;max-width:90vw;padding:22px;text-align:center;z-index:4000}#share-dialog::backdrop{background:#0007}#qr-container svg{width:230px;max-width:70vw;height:auto;display:block;margin:12px auto}#share-url{box-sizing:border-box;display:block;width:100%;min-width:0;margin:10px 0;padding:8px}#close-share{padding:8px 16px;border:1px solid #ccc;background:#fff;border-radius:8px}button:focus-visible,a:focus-visible,input:focus-visible{outline:3px solid #c9785b;outline-offset:2px}@media(max-width:480px){#top-controls-panel{padding:8px;gap:5px;top:max(12px,env(safe-area-inset-top))}}`;
for (const issue of issues) {
    const pages = JSON.parse(await read('.build/'+issue+'/pages.json'));
    const book = await generateFlipbookHtml(pages, {
        title:'関西通信 '+issue+' | freebird Kansai',mode:'folder',doubleSpread:false,extraCss
    }, {loadCss:async()=>css,loadJs:async()=>js,loadPageFlipJs:async()=>engine});
    let html = book.html.replace('<html lang="en">','<html lang="ja" data-issue="'+issue+'">');
    html = html.replace('        </div>\n        <div id="controls-panel">',
        `<button id="issue-share" aria-label="共有リンクをコピー">共有</button><button id="issue-qr" aria-label="共有QRコード">QR</button><a id="issue-pdf" href="../../issues/${issue}.pdf" target="_blank" rel="noopener">PDF</a></div><div id="controls-panel">`);
    html = html.replace('</body>', `<div id="share-status" role="status" aria-live="polite"></div><dialog id="share-dialog"><strong>この号を共有</strong><div id="qr-container"></div><input id="share-url" aria-label="共有リンク" readonly><button id="close-share">閉じる</button></dialog><script src="../../vendor/qrcode.js"></script><script>${extraJs}</script><!-- Based on S-poony/Pages (MIT). PagesEngine license:\n${license} -->\n</body>`);
    const folder = path.join(out, 'read', issue);
    await mkdir(path.join(folder, 'images'), {recursive:true});
    await writeFile(path.join(folder, 'index.html'), html);
    for (const asset of book.assets) {
        await writeFile(path.join(folder, asset.filename), Buffer.from(asset.data.slice(asset.data.indexOf(',')+1),'base64'));
    }
    await copyFile(path.join(root, 'issues', issue+'.pdf'),path.join(out, 'issues', issue+'.pdf'));
    console.log(issue+': generated Pages reader ('+pages.length+' pages)');
}
let router = await read('index.html');
router = router.replace('__LATEST_ISSUE__',issues.at(-1));
await writeFile(path.join(out, 'index.html'),router);
