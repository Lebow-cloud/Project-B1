class Background {
  constructor(ctx) {
    
    this.ctx = ctx;
    this.img = new Image()
    this.img.src = "./images/beach-bg.png"
    };


    
  

  draw() {
    //ctx.fillRect(0,0,900,600)
    
    this.ctx.drawImage(
      this.img,
      0,
      0,
      1550,
      900,
      0,
      0,
      900,
      600
      
     );
  } 
}
