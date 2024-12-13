// Setup Canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Menyesuaikan ukuran canvas sesuai ukuran layar
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 100;

// Variabel untuk Stickman
let stickman = {
    x: 100,
    y: canvas.height - 150,
    width: 30,
    height: 50,
    dx: 5,
    dy: 5,
    gravity: 0.5,
    jumpPower: -12,
    isJumping: false
};

// Fungsi untuk menggambar Stickman
function drawStickman() {
    // Gambar tubuh
    ctx.fillStyle = 'black';
    ctx.fillRect(stickman.x, stickman.y, stickman.width, stickman.height);

    // Gambar kepala
    ctx.beginPath();
    ctx.arc(stickman.x + stickman.width / 2, stickman.y - 10, 15, 0, Math.PI * 2); // Kepala
    ctx.fill();
}

// Fungsi untuk gerakan Stickman (jump & gravity)
function moveStickman() {
    if (stickman.isJumping) {
        stickman.dy += stickman.gravity; // Tambahkan gravitasi
        stickman.y += stickman.dy;

        if (stickman.y >= canvas.height - 150) { // Atur posisi saat mendarat
            stickman.y = canvas.height - 150;
            stickman.isJumping = false;
            stickman.dy = 0;
        }
    }
}

// Fungsi untuk menangani input keyboard
function keyDownHandler(e) {
    if (e.key == "Space" && !stickman.isJumping) {
        stickman.isJumping = true;
        stickman.dy = stickman.jumpPower;
    }
}

// Fungsi untuk menggambar dan memperbarui permainan
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Membersihkan layar
    drawStickman();
    moveStickman();
    requestAnimationFrame(gameLoop); // Memanggil gameLoop untuk frame berikutnya
}

// Event listener untuk tombol Space untuk lompat
document.addEventListener("keydown", keyDownHandler, false);

// Mulai game
gameLoop();
