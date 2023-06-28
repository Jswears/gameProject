class Boss {
  constructor(gameScreen, player) {
    this.gameScreen = gameScreen;
    this.gameCanvas = document.getElementById("game-container");
    this.player = this.width = 120;
    this.height = 120;
    this.top = 150;
    this.left = 450;
    this.directionX = 0;
    this.directionY = 0;
    this.health = 100;
    this.element = document.createElement("img");

    this.element.src = "./resources/img/GrandmasterWarlockIdle.gif";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.explosionElement = document.createElement("img");
    this.explosionElement.src = "/resources/img/cloud_gloom_new.png";
    this.explosionElement.style.position = "absolute";
    this.explosionElement.style.width = "80px";
    this.explosionElement.style.height = "80px";
    this.explosionElement.style.display = "none";
    this.explosionElement.style.zIndex = "9999"; // Set a higher z-index value

    this.gameCanvas.appendChild(this.explosionElement);

    this.gameCanvas.appendChild(this.element);
    let victorySong = new Audio(
      "./resources/sounds/17 - Victory (1)-[AudioTrimmer.com] (1).mp3"
    );
    victorySong.volume = 0.2;

    this.element.addEventListener("click", () => {
      this.health -= 10;
      if (this.health <= 0) {
        this.element.remove();
        victorySong.play();
      }
      this.explosionElement.style.top = `${this.top}px`;
      this.explosionElement.style.left = `${this.left}px`;
      this.explosionElement.style.display = "block";

      // Hide explosion element after a delay
      setTimeout(() => {
        this.explosionElement.style.display = "none";
      }, 1000);
    });
  }
  move() {
    const targetLeft =
      this.left +
      (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 3) + 1);
    const targetTop =
      this.top +
      (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 3) + 1);
    const totalSteps = 10; // Number of intermediate steps
    const delay = 100; // Delay between each step in milliseconds

    const stepSizeX = (targetLeft - this.left) / totalSteps;
    const stepSizeY = (targetTop - this.top) / totalSteps;
    let currentStep = 0;

    const moveStep = () => {
      currentStep++;

      if (currentStep <= totalSteps) {
        this.left += stepSizeX;
        this.top += stepSizeY;
        this.updatePosition();

        setTimeout(moveStep, delay);
      }
    };

    moveStep();
  }
  updatePosition() {
    if (!this.checkCollision(this.left, this.top)) {
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
    }
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
