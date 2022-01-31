class Background {
  constructor(ctx) {
    
    this.ctx = ctx;
    this.backgroundImg = {
      img: new Image(),
      x: 0,
      y: 0,
      width: 900,
      height: 600,
    };
    this.backgroundImg.img.src =
      "images/istockphoto-1202855261-612x612.jpg";
  }

  draw() {
    ctx.fillRect(0,0,900,600)
    
   /* this.ctx.drawImage(
      this.backgroundImg.img,
      this.backgroundImg.x,
      this.backgroundImg.y,
      this.backgroundImg.width,
      this.backgroundImg.height

    ); */
  } 
}
