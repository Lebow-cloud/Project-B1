


const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
console.log(canvas.width)
console.log(canvas.height)
canvas.width = 900;
canvas.height = 600;
//document.body.insertBefore(this.canvas, document.body.childNodes[0]);

const player = new Player(ctx);
const background = new Background(ctx);
const bullets = new Bullets (ctx)
const balls= new Balls (ctx)

const scoreEl = document.getElementById("scoreEl")
const startDivButton = document.getElementById("startDiv")



// AUDIOS

const game = new Game(ctx, player, background, bullets, balls,);

let btsSound = new Audio("/audio/bandaSonora.mp3")
let gameOverSound = new Audio("/audio/gameover.mp3")
let bubblePop = new Audio("/audio/burbuja_pop.mp3")
let shootSound = new Audio("/audio/disparo.mp3")

const startButton = document.getElementById("start-button");
startButton.onclick = () => {
  startButton.textContent = "Play Again";
  startDivButton.style.display='none'
  startButton.blur()
  gameOverSound.pause()
  btsSound.play()
  
  game.init();
 
};







