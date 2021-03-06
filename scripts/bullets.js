class Bullets {
  constructor(ctx) {
    this.ctx = ctx;
    this.bullets = [];
  }

  move() {
    this.bullets.forEach((bullet) => {
      bullet.y -= bullet.vy;
    });

    this.bullets = this.bullets.filter(
      (bullet) => bullet.y < this.ctx.canvas.height && bullet.y > 0
    );
  }

  newBullet(playerX) {
    if(this.bullets.length < 3){
      this.bullets.push(this.createNewBullet(playerX));
    }
    
  }
  
  init(){
    this.bullets = []
  }

  createNewBullet(position) {
    const rsetrdyf = {
      sprite: new Image(5, 5),

      x: position + 40,
      y: this.ctx.canvas.height -60,

      width: 20,
      height: 180,

      vy: 3,
    };

    rsetrdyf.sprite.src = "/images/arpon.png";

    return rsetrdyf;
  }

  draw() {
    this.bullets.forEach((bullet) =>
      this.ctx.drawImage(
        bullet.sprite,
        bullet.x,
        bullet.y,
        bullet.width,
        bullet.height
      )
    );
  }

 /* collidesWith(element) {
    let collide = false;
    this.bullets.forEach((bullet) => {
      if (
        bullet.x < element.x + element.width &&
        bullet.x + bullet.width > element.x &&
        bullet.y < element.y + element.height &&
        bullet.y + bullet.height > element.y
      ) {
        collide = true;

       let index = this.bullets.indexOf(bullet);

       this.bullets.splice(index, 1);
      }
    });
  } */




}
