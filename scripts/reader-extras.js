// Magazine-specific sharing controls. Reading interactions belong to Pages.
document.addEventListener('DOMContentLoaded', () => {
    const issue = document.documentElement.dataset.issue;
    const canonical = new URL('../../?issue=' + issue, location.href).href;
    const status = document.getElementById('share-status');
    const dialog = document.getElementById('share-dialog');
    document.getElementById('flipbook-wrapper').append(dialog);
    document.getElementById('share-url').value = canonical;
    document.getElementById('issue-share').onclick = async () => {
        try {
            await navigator.clipboard.writeText(canonical);
            status.textContent = 'リンクをコピーしました';
        } catch {
            document.getElementById('qr-container').replaceChildren();
            dialog.showModal();
        }
    };
    document.getElementById('issue-qr').onclick = () => {
        const qr = qrcode(0, 'M');
        qr.addData(canonical);
        qr.make();
        document.getElementById('qr-container').innerHTML = qr.createSvgTag(5, 20);
        dialog.showModal();
    };
    document.getElementById('close-share').onclick = () => dialog.close();
    setTimeout(() => {
        if (window.pageFlip) document.getElementById('page-input').value = window.pageFlip.getCurrentPageIndex() + 1;
    }, 250);
});
