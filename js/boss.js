class Boss {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.gameCanvas = document.getElementById("game-container");
    this.width = 60;
    this.height = 60;
    this.top = 50;
    this.left = 230;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");

    this.element.src = "./resources/img/GrandmasterWarlockIdle.gif";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.gameCanvas.appendChild(this.element);
  }
}
