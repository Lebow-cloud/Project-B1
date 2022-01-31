class Game{
    constructor(ctx, player, background, bullets,ball) {
        
        this.ctx = ctx
        this.player = player
        this.background = background
        this.bullets = bullets
        this.frameNumber = 0
        this.balls = []
        this.ball = ball
        
        

    }

    //------listener------------
   
    
    start(){
        
        this.move()
        this.draw()
        
        this.checkCollisionsBullet()   // NOT WORKING
        this.checkCollisionsPlayer()   //---WORKING----
        

    this.frameNumber = requestAnimationFrame(this.start.bind(this))
       
    }

    init(){
        this.start()
        
    }

    draw(){

        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.background.draw(this.frameNumber);
        this.player.draw(this.frameNumber);
        this.bullets.draw(this.frameNumber);
        this.ball.draw(this.frameNumber);
        
    }
    move() {
        this.player.move(this.frameNumber)
        this.bullets.move(this.frameNumber)
    } 

  

    shootBullet(){
        
        this.bullets.newBullet(this.player.playerImg.x)
    }

   checkCollisionsBullet(){
       let collision = false
       
    for(let i = 0; i < this.bullets.length;)
       if(this.bullets[i].exitsCanvas()) collision = true
       
   }

   checkCollisionsPlayer(){
       let collision = false
       if(player.exitsCanvas()) collision = true
   }

   createBalls(){
    if(Math.floor(Math.random() *25) % 2 ===0){
        this.balls.push(new ball(this)) // ERROR HEREE ------
    }
    setTimeout(() =>{
        this.createObstacles();
    }, 1500)

   }

    

}





