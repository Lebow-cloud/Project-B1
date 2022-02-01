class Balls {
  constructor(ctx) {
    this.ctx = ctx;
    this.balls = [];
    
  }

  move() {
    this.balls.forEach((ball) => {
      
        ball.y += (Math.random() * 1);
        
      
    });
  }

  newBall(frameNumber) {
   const randomPosX = ()=> {
      let randomX = Math.floor(Math.random() * this.ctx.canvas.width)
      if(randomX > this.ctx.canvas.width + 60) randomX - 60    //STILL SPANW OUTSIDE CANVAS ????
      
      return randomX
      
    }
    console.log("Create New Ball");
    
    this.balls.push(this.createNewBalls(randomPosX()));
  }


  createNewBalls(positionX) {
    const anotherBall = {
      sprite: new Image(60, 50),

      x: positionX,
      y: -60,
      
      width: 40,
      height: 30,

      vy: 0,
      vx: 1,
    };
    anotherBall.sprite.src = "/images/PURPLE.png";
    
    return anotherBall;
  }
  
 

  draw() {
    this.balls.forEach((ball) =>
      this.ctx.drawImage(ball.sprite, ball.x, ball.y, ball.width, ball.height)
    );
  }
}