//global scope for the canvas
const gameScreen = document.querySelector("#game-screen");
const ctx = gameScreen.getContext("2d");

//Game Class
class Game {
  constructor() {
    //Game elements
    this.startScreen = document.getElementById("main-screen");
    this.gameScreen = gameScreen;
    this.gameContainer = document.getElementById("game-container");
    this.gameEndScreen = document.getElementById("game-end");
    this.getLives = document.getElementById("lives");
    //Player-Boss
    this.player = new Player(this.gameScreen);
    this.boss = new Boss(this.gameScreen);

    //Game properties
    this.width = 960;
    this.height = 640;
    this.isGameOver = false;
    this.lives = 3;
    this.animateId = null;
  }
  //Start the game
  start() {
    this.rederMap();
    this.renderBoundaries();
    this.gameLoop();
  }
  //Renders the map
  rederMap() {
    //Set game size
    this.gameScreen.width = `${this.width}`;
    this.gameScreen.height = `${this.height}`;

    //hidding-showing screens
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameContainer.style.display = "block";
    this.getLives.style.display = "flex";

    //Draws the map on the screen
    const map = new Image();
    map.src = "./resources/img/finalMap.png";
    map.onload = () => {
      ctx.drawImage(map, 0, 0);
    };
  }

  //Updates the game
  gameLoop() {
    this.boss.move();
    this.player.move();
    this.animateId = requestAnimationFrame(() => this.gameLoop());
  }
  //Updates player
  renderBoundaries() {
    boundaries.forEach((boundary) => {
      boundary.draw();
    });
  }
  attackBoss() {
    this.boss.this.element.addEventListener("click", () => {
      console.log("hola");
    });
  }
}

//creating boundaries
class Boundary {
  //defines the size of each boundary
  static width = 32;
  static height = 32;
  constructor({ position }) {
    this.position = position;
    this.width = 32;
    this.height = 32;
  }
  //draws transparent rectangle representing the boundary, 16px16px
  draw() {
    ctx.fillStyle = "transparent";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
//Creates collision map array

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 30) {
  //divides collision array into chunks of 30 elements (width of map)
  collisionsMap.push(collisions.slice(i, 30 + i));
}

//Creates boundaries array
const boundaries = [];
collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    //If symbol is 103 creates a new boundary, 103 is the number where boundaries are.
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
