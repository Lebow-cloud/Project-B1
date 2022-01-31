


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//document.body.insertBefore(this.canvas, document.body.childNodes[0]);

const player = new Player(ctx);
const background = new Background(ctx);
const bullets = new Bullets (ctx)
const ball= new Ball (ctx)


const game = new Game(ctx, player, background, bullets, ball);

const startButton = document.getElementById("start-button");
startButton.onclick = () => {
   

  startButton.textContent = "Play Again";
  
  game.init();
};



// LISTENER

document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    
    game.shootBullet()
  }
})
