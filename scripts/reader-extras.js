// One sharing entry: QR and link copy live in the same dialog.
document.addEventListener('DOMContentLoaded', () => {
    const issue = document.documentElement.dataset.issue;
    const canonical = new URL('../../?issue=' + issue, location.href).href;
    const status = document.getElementById('share-status');
    const dialog = document.getElementById('share-dialog');
    const input = document.getElementById('share-url');
    let statusTimer;
    function clearStatus() {
        clearTimeout(statusTimer);
        status.textContent = '';
        status.hidden = true;
    }
    function showStatus(message) {
        clearStatus();
        status.textContent = message;
        status.hidden = false;
        statusTimer = setTimeout(clearStatus, 2000);
    }
    input.value = canonical;
    document.getElementById('issue-share').onclick = () => {
        clearStatus();
        const qr = qrcode(0, 'M');
        qr.addData(canonical);
        qr.make();
        document.getElementById('qr-container').innerHTML = qr.createSvgTag(5, 20);
        dialog.showModal();
    };
    document.getElementById('copy-share').onclick = async () => {
        try {
            await navigator.clipboard.writeText(canonical);
            showStatus('リンクをコピーしました');
        } catch {
            input.focus();
            input.select();
            showStatus('リンクを選択しました。コピーしてください');
        }
    };
    document.getElementById('close-share').onclick = () => dialog.close();
    dialog.addEventListener('close', clearStatus);
    setTimeout(() => {
        if (window.pageFlip) document.getElementById('page-input').value = window.pageFlip.getCurrentPageIndex() + 1;
    }, 250);
});
