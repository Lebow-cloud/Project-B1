class Bullets {
    constructor(ctx){
        this.ctx = ctx;
        this.bullets = []
        
    }

    move(){
        this.bullets.forEach((bullet)=>{
            bullet.y += bullet.vy
        })
    }


    newBullet(playerX){
        
        console.log(this.bullets)
        this.bullets.push(this.createNewBullet(playerX))
       
    }

    createNewBullet(position){
        const newBullet = {
            sprite: new Image(),

            x: position,
            y: 140,

            str: console.log(this.x),

            width:40,
            height:40,
            vy: 5,
            
        }

        newBullet.sprite.src= "/images/white-square.png"
        
        
        return newBullet;  
        
    }

    
  

  

    draw(){
        console.log("test into draw")
        this.bullets.forEach(bullet=>
        this.ctx.drawImage(
            
            bullet.sprite,
            bullet.x,
            bullet.y,
            bullet.width,
            bullet.height,
            bullet.str
        ))
    }
}   