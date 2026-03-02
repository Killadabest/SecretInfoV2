function checkKey() {
    const key = document.getElementById('access-key').value;
    if (key === "KEY_95726398756235") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-page').style.display = 'flex';
        document.getElementById('music').play();
    } else {
        document.getElementById('error-msg').innerText = "SYSTEM_ERROR: ACCESS_DENIED";
        document.getElementById('error-msg').style.color = "red";
    }
}

function showSection(id) {
    document.querySelectorAll('.file-section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function generate() {
    const c = 'abcdefghijklmnopqrstuvwxyz0123456789._';
    let r = '';
    for (let i = 0; i < 4; i++) r += c[Math.floor(Math.random() * c.length)];
    document.getElementById('display-name').innerText = r;
}