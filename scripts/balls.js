class Balls {
  constructor(ctx) {
    this.ctx = ctx;
    this.balls = [];
    this.fps = 60
    
  }

  move() {
    this.balls.forEach((ball) => {
      
     
      ball.y += ball.vy
      ball.x += ball.vx
      
      
        
       });
  }
  ballsRebound(){
    this.balls.forEach((ball) =>{
      if(ball.x   < 0 ){
         ball.vx *= -1
      }
      if(ball.x + ball.width   > this.ctx.canvas.width ){
        ball.vx *= -1
      }
      if(ball.y   < 0 && ball.vy < 0){
        ball.vy *= -1
      }
      if(ball.y + ball.height  > this.ctx.canvas.height ){
        ball.vy *= -1
      }
    })
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

      vy: 1,
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

  



  collidesWith(element) {
    let collide = false;
    this.balls.forEach((ball) => {
      if (
        ball.x < element.x + element.width &&
        ball.x + ball.width > element.x &&
        ball.y < element.y + element.height &&
        ball.y + ball.height > element.y
      ) {
        collide = true;

      let index = this.balls.indexOf(ball);
      console.log("ball broken")
      this.balls.splice(index, 1);
      }
    }); 
  
  } 

}
