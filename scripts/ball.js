class Ball {
    constructor(ctx){
       this.ctx = ctx;
       this.newBall = {
           img: new Image(),
           x: 50,
           y: 50,
           width: 20,
           height: 20,
           vy: 0,
           vx: 0
       }
       this.newBall.src = "/images/ball.png"
    }


    move() {

    }



    draw(){
        this.ctx.drawImage(
            this.newBall.img,
            this.newBall.x,
            this.newBall.y,
            this.newBall.width, 
            this.newBall.height,
            )

    }
}