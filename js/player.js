class Player {
  constructor(gameScreen) {
    // Game screen and canvas
    this.gameScreen = gameScreen;
    this.gameCanvas = document.getElementById("game-container");

    // Player properties
    this.width = 20;
    this.height = 20;
    this.top = 270;
    this.left = 240;
    this.directionX = 0;
    this.directionY = 0;

    // Player element
    this.element = document.createElement("img");
    this.element.src = "../resources/img/AdeptNecromancerIdle.gif";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    // Append player element to game canvas
    this.gameCanvas.appendChild(this.element);
  }

  move() {
    const nextLeft = this.left + this.directionX;
    const nextTop = this.top + this.directionY;

    if (!this.checkCollision(nextLeft, nextTop)) {
      this.left = nextLeft;
      this.top = nextTop;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  checkCollision(nextLeft, nextTop) {
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        nextLeft + this.width > boundary.position.x &&
        nextLeft < boundary.position.x + boundary.width &&
        nextTop + this.height > boundary.position.y &&
        nextTop < boundary.position.y + boundary.height
      ) {
        // Collision detected
        return true;
      }
    }
    return false;
  }
}
