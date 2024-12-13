const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 50;  // Ukuran dinamis berdasarkan layar
canvas.height = window.innerHeight - 100;

let gameRunning = false;

document.getElementById('startBtn').addEventListener('click', () => {
    if (!gameRunning) {
        gameRunning = true;
        startGame();
    }
});

function startGame() {
    // Menyembunyikan tombol start dan overlay
    document.getElementById('game-overlay').style.display = 'none';
    
    // Mulai game loop
    gameLoop();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Gambar dan update game
    ctx.fillStyle = '#000000';
    ctx.fillRect(50, canvas.height - 100, 50, 50);  // Gambar kotak sebagai stickman
    
    if (gameRunning) {
        requestAnimationFrame(gameLoop);  // Loop game
    }
}
