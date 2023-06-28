window.addEventListener("load", () => {
  // Retrieve the start button element
  const startButton = document.getElementById("start-button");
  let game;

  // Function to start the game
  function startGame() {
    console.log("start game");

    // Create a new instance of the Game class
    game = new Game();
    game.start();

    // Event listener for keydown events
    document.addEventListener("keydown", (event) => {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
        "a",
        "w",
        "d",
        "s",
        "A",
        "W",
        "D",
        "S",
        " ",
      ];

      if (possibleKeystrokes.includes(key)) {
        // Update player direction based on the key pressed
        switch (key) {
          case "ArrowLeft":
          case "a":
          case "A":
            game.player.directionX = -1;
            game.player.element.style.transform = "scaleX(-1)";
            break;
          case "ArrowUp":
          case "w":
          case "W":
            game.player.directionY = -1;
            break;
          case "ArrowRight":
          case "d":
          case "D":
            game.player.directionX = 1;
            game.player.element.style.transform = "scaleX(1)";
            break;
          case "ArrowDown":
          case "s":
          case "S":
            game.player.directionY = 1;
            break;
          case " ":
            if (!game.player.shootPressed) {
              game.player.shootPressed = true;
            }
            break;
        }
      }
    });

    // Event listener for keyup events
    document.addEventListener("keyup", (event) => {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
        "a",
        "w",
        "d",
        "s",
        "A",
        "W",
        "D",
        "S",
        " ",
      ];

      if (possibleKeystrokes.includes(key)) {
        // Reset player direction when the key is released
        switch (key) {
          case "ArrowLeft":
          case "ArrowRight":
          case "a":
          case "A":
          case "d":
          case "D":
            game.player.directionX = 0;
            break;
          case "ArrowUp":
          case "ArrowDown":
          case "w":
          case "W":
          case "s":
          case "S":
            game.player.directionY = 0;
            break;
          case " ":
            game.player.shootPressed = false;
            break;
        }
      }
    });
  }

  // Event listener for the start button click
  startButton.addEventListener("click", function () {
    startGame();
    let mySound = new Audio("./resources/sounds/11 - Magician's Tower.mp3");
    mySound.loop = true;
    mySound.volume = 0.2;

    mySound.addEventListener("timeupdate", function () {
      if (mySound.currentTime >= mySound.duration - 0.5) {
        mySound.currentTime = 0;
      }
    });
    mySound.play();
  });
});
