const gameScreen = document.querySelector("#game-screen");
const ctx = gameScreen.getContext("2d");

class Game {
  constructor() {
    this.startScreen = document.getElementById("main-screen");
    this.gameScreen = gameScreen;
    this.gameContainer = document.getElementById("game-container");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(this.gameScreen);
    this.boss = new Boss(this.gameScreen);
    this.height = 320;
    this.width = 480;
    this.isGameOver = false;
    this.lives = 3;
    this.animateId;
  }

  start() {
    this.gameScreen.width = `${this.width}`;
    this.gameScreen.height = `${this.height}`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    ctx.fillRect(0, 0, this.width, this.height);
    ctx.fillStyle = "white";

    const image = new Image();
    image.src = "./resources/img/finale2.0.png";
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };

    this.gameLoop(ctx);
  }
  gameLoop() {
    this.player.move();
    // Draw boundaries
    boundaries.forEach((boundary) => {
      boundary.draw();
    });
    this.animateId = requestAnimationFrame(() => this.gameLoop());
  }
}

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 30) {
  collisionsMap.push(collisions.slice(i, 30 + i));
}

class Boundary {
  static width = 16;
  static height = 16;
  constructor({ position }) {
    this.position = position;
    this.width = 16;
    this.height = 16;
  }
  draw() {
    ctx.fillStyle = "transparent";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const boundaries = [];
collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 103)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width,
            y: i * Boundary.height,
          },
        })
      );
  });
});
