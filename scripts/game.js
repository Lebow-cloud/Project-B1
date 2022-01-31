

class Game{
    constructor(ctx, player, background) {
        
        this.ctx = ctx
        this.player = player
        this.background = background
        this.frameNumber = null
        
        

    }

    start(){
        
        this.move()
        this.draw()
      
        

    this.frameNumber = requestAnimationFrame(this.start.bind(this))
       
    }

    init(){
        this.start()
        this.createBullets()
    }

    move() {
        this.player.move(this.frameNumber)
    } 

    draw(){

        this.background.draw(this.frameNumber);
        this.player.draw(this.frameNumber);
        
        
        
        
    }

   

    

}



