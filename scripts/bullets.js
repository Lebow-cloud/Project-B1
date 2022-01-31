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
        (bullet) =>
          bullet.y < this.ctx.canvas.height &&
          bullet.y > 0
      );

  }

  newBullet(playerX) {
    this.bullets.push(this.createNewBullet(playerX));
  }

  createNewBullet(position) {
    const rsetrdyf = {
      sprite: new Image(5, 5),

      x: position + 5,
      y: 140,

      width: 5,
      height: 5,
      vy: 1,
    };

    rsetrdyf.sprite.src = "/images/white-square.png";

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
}
