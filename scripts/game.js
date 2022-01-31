class Game{
    constructor(ctx, player, background, bullets) {
        
        this.ctx = ctx
        this.player = player
        this.background = background
        this.bullets = bullets
        this.frameNumber = 0
        
        

    }

    //------listener------------
   
    
    start(){
        
        this.move()
        this.draw()
      
        

    this.frameNumber = requestAnimationFrame(this.start.bind(this))
       
    }

    init(){
        this.start()
        
    }

    draw(){
        
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.background.draw(this.frameNumber);
        this.player.draw(this.frameNumber);
        this.bullets.draw(this.frameNumber)
        
    }
    move() {
        this.player.move(this.frameNumber)
        this.bullets.move(this.frameNumber)
    } 

  

    shootBullet(){
        
        this.bullets.newBullet(this.player.x)
    }

   

    

}



