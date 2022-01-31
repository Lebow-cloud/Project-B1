class Bullets {
    constructor(ctx){
        this.ctx = ctx;
        this.bullets = []
        
    }

    move(){
        this.bullets.forEach((bullet)=>{

            
 

            bullet.y -= bullet.vy
                
            
        })
    }


    newBullet(playerX){
        
        
        this.bullets.push(this.createNewBullet(playerX))     
       
    }

    createNewBullet(position){
        const newBullet = {
            sprite: new Image(),

            x: position + 5,
            y: 140,


            width:5,
            height:5,
            vy: 3
            
        }

        newBullet.sprite.src= "/images/white-square.png"
        
        
        return newBullet;  
        
    }

    draw(){
        
        this.bullets.forEach(bullet=>
        this.ctx.drawImage(
            
            bullet.sprite,
            bullet.x,
            bullet.y,
            bullet.width,
            bullet.height,
           
        ))
    }
}   