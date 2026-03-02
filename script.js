function checkAccess() {
    const key = document.getElementById('passkey').value;
    if (key === "KEY_95726398756235") {
        showPage('menu');
        document.getElementById('audio').play();
    }
}

function showPage(pageId) {
    document.querySelectorAll('.container').forEach(div => div.style.display = 'none');
    document.getElementById(pageId + '-page').style.display = 'flex';
}

function generateUser() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789._';
    let result = '';
    for (let i = 0; i < 4; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('gen-output').innerText = result;
}
