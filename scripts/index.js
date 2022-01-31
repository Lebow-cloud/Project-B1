


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//document.body.insertBefore(this.canvas, document.body.childNodes[0]);

const player = new Player(ctx);
const background = new Background(ctx);


const game = new Game(ctx, player, background);

const startButton = document.getElementById("start-button");
startButton.onclick = () => {
   

  startButton.textContent = "Play Again";
  
  game.init();
};
