


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//document.body.insertBefore(this.canvas, document.body.childNodes[0]);

const player = new Player(ctx);
const background = new Background(ctx);
const bullets = new Bullets (ctx)
const balls= new Balls (ctx)

const scoreEl = document.getElementById("scoreEl")
const startDivButton = document.getElementById("startDiv")




const game = new Game(ctx, player, background, bullets, balls,);

const startButton = document.getElementById("start-button");
startButton.onclick = () => {
   

  startButton.textContent = "Play Again";
  startDivButton.style.display='none'
  startButton.blur()
  game.init();
 
};







