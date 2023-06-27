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
      ];

      if (possibleKeystrokes.includes(key)) {
        // Update player direction based on the key pressed
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            game.player.element.style.transform = "scaleX(-1)";
            break;
          case "ArrowUp":
            game.player.directionY = -1; 
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            game.player.element.style.transform = "scaleX(1)";

            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
        console.log(game.player.directionX, game.player.directionY);
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
      ];

      if (possibleKeystrokes.includes(key)) {
        // Reset player direction when the key is released
        switch (key) {
          case "ArrowLeft":
          case "ArrowRight":
            game.player.directionX = 0;
            break;
          case "ArrowUp":
          case "ArrowDown":
            game.player.directionY = 0;
            break;
        }
      }
    });
  }

  // Event listener for the start button click
  startButton.addEventListener("click", function () {
    startGame();
  });
});
