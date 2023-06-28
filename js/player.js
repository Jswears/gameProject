class Player {
  constructor(gameScreen) {
    // Game screen and canvas
    this.gameScreen = gameScreen;
    this.gameCanvas = document.getElementById("game-container");

    // Player properties
    this.width = 40;
    this.height = 40;
    this.top = 530;
    this.left = 480;
    this.directionX = 0;
    this.directionY = 0;
    this.shootPressed = false;
    console.log(this.shootPressed);
    this.health = 100;
    // Player element
    this.element = document.createElement("img");
    this.element.src = "./resources/img/AdeptNecromancerIdle.gif";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    // Append player element to game canvas
    this.gameCanvas.appendChild(this.element);
  }

  //Moves the player in the specified direction.

  move() {
    const nextLeft = this.left + this.directionX;
    const nextTop = this.top + this.directionY;

    if (!this.checkCollision(nextLeft, nextTop)) {
      this.left = nextLeft;
      this.top = nextTop;
    }

    this.updatePosition();
  }

  //Updates the position of the player element on the game screen.

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
