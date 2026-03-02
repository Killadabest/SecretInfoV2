function unlock() {
    const key = document.getElementById('key-input').value;
    if (key === "KEY_95726398756235") {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('vault').style.display = 'block';
        document.getElementById('bgm').play();
    }
}

function tab(id) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function generate() {
    const c = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let r = '';
    for(let i=0; i<4; i++) r += c[Math.floor(Math.random()*c.length)];
    document.getElementById('name-out').innerText = r;
}
