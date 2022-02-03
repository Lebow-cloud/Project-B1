class Game {
  constructor(ctx, player, background, bullets, balls, score) {
    this.ctx = ctx;
    this.player = player;
    this.background = background;
    this.bullets = bullets;
    this.frameNumber = 0;
    this.balls = balls;
    this.score = 0;
    this.spawnRate = 1500;

    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        game.shootBullet();
        this.player.standing = true;
        shootSound.play();
      }
    });
    document.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        this.player.standing = false;
      }
    });
  }

  //------listener------------
  init() {
    // NOT WORKING WELL
    this.frameNumber = 0;
    this.score = 0;
    this.player.init();
    this.bullets.init();
    this.balls.init();
    // this.background.init()
    this.spawnNewBalls();
    this.start();

    console.log("framas init", this.frameNumber);
  }

  start() {
    this.move();
    this.draw();

    this.ballsRebound();
    this.updateScore();
    this.spawnNewBalls();

    //this.checkBulletCollision()
    this.checkBallsCollision();
    this.playerTakePortal();

    if (this.playerCollision()) {
      game.gameOver();
    }
    if (this.frameNumber !== null) {
      this.frameNumber = requestAnimationFrame(this.start.bind(this));
    }
  }

  stop() {
    console.log("frames stop", this.frameNumber);
    cancelAnimationFrame(this.frameNumber);
    this.frameNumber = null;
    startDiv.style.display = "flex";
  }

  draw() {
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.background.draw(this.frameNumber);
    this.bullets.draw(this.frameNumber);
    this.player.draw(this.frameNumber);
    this.balls.draw(this.fps);
    this.scoreDraw();
  }
  move() {
    this.player.move(this.frameNumber);
    this.bullets.move(this.frameNumber);
    this.balls.move(this.frameNumber);
  }

  updateScore() {
    if (this.frameNumber !== 0 && this.frameNumber % 20 === 0) this.score++;
  }

  scoreDraw() {
    this.ctx.save();
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.font = " bold 25px 'roboto'";
    this.ctx.fillText(`SCORE: ${this.score}`, 30, 30);
    this.ctx.restore();
  }

  shootBullet() {
    this.bullets.newBullet(this.player.x);
  }

  spawnNewBalls() {
    /* if(this.frameNumber !== 0 && (this.frameNumber % this.spawnRate ) === 0) {
      this.balls.newBall();
    } */

    if (this.frameNumber === 1) {
      setInterval(() => {
        this.balls.newBall();
      }, this.spawnRate);
    }
    if (this.score % 1001 === 0) {
      this.spawnRate -= 500;
      console.log(this.spawnRate);
    }
  }

  playerTakePortal() {
    let collision = false;
    if (player.takePortal()) collision = true;
  }

  /*  checkBulletCollision(){
       this.balls.balls.forEach(element =>{
           if(this.bullets.collidesWith(element)){
               const index = this.balls.indexOf(element)
               
              this.balls.splice(index, 1)
           }
       })
   } */

  checkBallsCollision() {
    this.bullets.bullets.forEach((element, bulletIndex) => {
      if (this.balls.collidesWith(element)) {
        //const Index = this.bullets.bullets.indexOf(element);
        console.log("bullet collide");
        this.bullets.bullets.splice(bulletIndex, 1);

        /*  score += 100
          scoreEl.innerHTML = score
          console.log(score) */
      }
    });
  }

  ballsRebound() {
    this.balls.ballsRebound();
  }

  playerCollision() {
    return this.balls.balls.some((element) =>
      this.player.collidesWith(element)
    );
  }

  gameOver() {
    this.stop();
    btsSound.currentTime = 100
    gameOverSound.play();
    this.ctx.save();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.font = "bold 60px sans-serif";
    this.ctx.fillText(
      "Game Over",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
    this.ctx.restore();
  }
}
