class Game{
    constructor(ctx, player, background, bullets, balls) {
        
        this.ctx = ctx
        this.player = player
        this.background = background
        this.bullets = bullets
        this.frameNumber = 0
        this.balls = balls
      
        
    
        
        document.addEventListener('keydown', event => {
            if (event.code === 'Space') {
            
              game.shootBullet()
            }
          }) 

    }

    //------listener------------
   
    
    start(){
        
        this.move()
        this.draw()

        this.ballsRebound()
        
      //this.checkBulletCollision()  
       this.checkBallsCollision()   
       
       this.checkCollisionsPlayer()   
        

    this.frameNumber = requestAnimationFrame(this.start.bind(this))
       
    }

    init(){
        this.start()
        this.spawnNewBalls()
        
    }

    draw(){

        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.background.draw(this.frameNumber);
        this.player.draw(this.frameNumber);
        this.bullets.draw(this.frameNumber);
        this.balls.draw(this.frameNumber);
        
    }
    move() {
        this.player.move(this.frameNumber)
        this.bullets.move(this.frameNumber)
        this.balls.move(this.frameNumber)
    } 

  

    shootBullet(){
      
        this.bullets.newBullet(this.player.playerImg.x)
        
    
    }

    spawnNewBalls(){
        if(Math.floor(Math.random() *25) % 2 ===0){
           (this.balls.newBall(this.frameNumber)) // ERROR HEREE ------
        }
        setTimeout(() =>{
            this.spawnNewBalls(this.frameNumber);
        }, 500)

    }

    
   

   checkCollisionsPlayer(){
       
       let collision = false
       if(player.exitsCanvas()) collision = true

       
   }

 /*  checkBulletCollision(){
       this.balls.balls.forEach(element =>{
           if(this.bullets.collidesWith(element)){
               const index = this.balls.indexOf(element)
               
              this.balls.splice(index, 1)
           }
       })
   } */
   
   checkBallsCollision(){
       this.bullets.bullets.forEach(element =>{
           if(this.balls.collidesWith(element)){
               const index = this.bullets.bullets.indexOf(element)
               
              this.bullets.bullets.splice(index, 1)
           }
       })
   } 

   ballsRebound(){
       this.balls.ballsRebound()
   }
   

  

   

    


}





