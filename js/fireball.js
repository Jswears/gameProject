class Bullet {
  constructor(gameScreen, left, top) {
    this.gameScreen = gameScreen;
    this.width = 60;
    this.height = 30;
    this.left = left;
    this.top = top;
    this.speed = 8;
    this.element = document.createElement("img");

    this.element.src = "./images/shoot.png";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.right = `${this.right}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left += this.speed;

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }

  didCollide(obstacle) {
    const bulletsRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      bulletsRect.left < obstacleRect.right &&
      bulletsRect.right > obstacleRect.left &&
      bulletsRect.top < obstacleRect.bottom &&
      bulletsRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
