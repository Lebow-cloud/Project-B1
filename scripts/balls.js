class Balls {
  constructor(ctx) {
    this.ctx = ctx;
    this.balls = [];
    this.fps = 60
    
  }

  move() {
    this.balls.forEach((ball) => {
      
      
      
      ball.x += ball.vx


      ball.y += ball.vy
      
      
      
        
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

  newBall() {
   const randomPosX = ()=> {
      let randomX = Math.floor(Math.random() * this.ctx.canvas.width)
      if(randomX > this.ctx.canvas.width ) randomX - (this.balls.width )   //STILL SPANW OUTSIDE CANVAS ????
      
      return randomX
      
    }
    
    
    this.balls.push(this.createNewBalls(randomPosX()));
    console.log("new ball")
  }


  createNewBalls(positionX) {
    const anotherBall = {
      sprite: new Image(60, 50),

      x: positionX,
      y: -60,
      
      width: 90,
      height: 90,

      vy: 3,
      vx: 3,
    };
    anotherBall.sprite.src = "/images/PURPLE.png";
    
    return anotherBall;
  }
  
 

  draw() {
    this.balls.forEach((ball) =>
      this.ctx.drawImage(ball.sprite, ball.x, ball.y, ball.width + 5, ball.height + 5)
    );
  }
  
  init(){
    
    this.balls = []
   // console.log("init ball to: ", this.balls)
  }

  
  collidesWith(element) {
    let collide = false;
    this.balls.forEach((ball) => {
      if (
        ball.x  < element.x + element.width &&
        ball.x + ball.width  > element.x &&
        ball.y < element.y + element.height &&
        ball.y + ball.height > element.y
      ) {
         collide = true;
         bubblePop.play()
         

      let index = this.balls.indexOf(ball);
      
      this.balls.splice(index, 1);
      return collide
      }
    }); 
  
  } 

}
