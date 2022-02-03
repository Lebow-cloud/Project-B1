class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.spriteColStand = 0;
    this.spriteColumnsStand = 2;
    this.spriteColLeft = 0;
    this.spriteColumnsLeft = 4;
    this.spriteColRight = 0;
    this.spriteColumnsRight = 4;

    this.imgStand = new Image();
    this.imgStand.src = "./images/player-stand.png";
    this.imgLeft = new Image();
    this.imgLeft.src = "./images/player-left.png";
    this.imgRight = new Image();
    this.imgRight.src = "./images/player-right.png";

    this.x = (this.ctx.canvas.width / 2) - (this.width / 2);
    this.y = this.ctx.canvas.height - 70;
    this.width = 90;
    this.height = 70;
    this.vx = 5;
    this.goingLeft = false
    this.goingRight = false
    this.standing = false

  }

  init(){
    this.x = (this.ctx.canvas.width / 2) - (this.width / 2);
    this.y = this.ctx.canvas.height - 70;
    this.width = 90;
    this.height = 70;
  }

  setSpriteFrameStand(frameNumber) {
    if (frameNumber % 10 === 0) {
      this.spriteColStand += 1;
    }
    if (this.spriteColStand >= this.spriteColumnsStand) {
      this.spriteColStand = 0;
    }
  }
  setSpriteFrameLeft(frameNumber) {
    if (frameNumber % 10 === 0) {
      this.spriteColLeft += 1;
    }
    if (this.spriteColLeft >= this.spriteColumnsLeft) {
      this.spriteColLeft = 0;
    }
  }
  setSpriteFrameRight(frameNumber) {
    if (frameNumber % 10 === 0) {
      this.spriteColRight += 1;
    }
    if (this.spriteColRight >= this.spriteColumnsRight) {
      this.spriteColRight = 0;
    }
  }

  move() {
   /*
    document.onkeydown = (event) => {
      const key = event.keyCode;
      const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
        switch (key) {
          case 37:
          case 65:
            this.x -= 20;
            break;
         
          case 39:
          case 83:
            this.x += 20;
            break;
;
        }
      }
      */

      if(this.goingLeft)this.x -= 10;
      if(this.goingRight)this.x += 10;

        document.onkeydown = (event) => {
      const key = event.keyCode;
      const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
        switch (key) {
          case 37:
          case 65:
            this.goingLeft = true
            break;
         
          case 39:
          case 83:
            this.goingRight = true
            break;
;
        }
      }
    };
        document.onkeyup = (event) => {
      const key = event.keyCode;
      const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
        switch (key) {
          case 37:
          case 65:
            this.goingLeft = false
            break;
         
          case 39:
          case 83:
            this.goingRight = false
            break;
;
        }
      }
    };
    
  }

  /* init() {
    this.playerImg.x 
    this.playerImg.y 
    this.playerImg.width 
    this.playerImg.height 
    this.playerImg.vx 
  } */

  draw(frameNumber) {
    /* this.ctx.drawImage(
      this.playerImg.img,
      this.playerImg.x,
      this.playerImg.y,
      this.playerImg.width,
      this.playerImg.height
    ); */

   if(this.goingLeft && !this.standing && !this.goingRight){ this.ctx.drawImage(
      this.imgLeft,
      34 * this.spriteColLeft, // the x-axis coordinate in the destination canvas
      0,
      34,
      32,
      this.x,
      this.y,
      this.width,
      this.height
    );}
   if(this.goingRight && !this.standing && !this.goingLeft){ this.ctx.drawImage(
      this.imgRight,
      34 * this.spriteColRight, // the x-axis coordinate in the destination canvas
      0,
      34,
      32,
      this.x,
      this.y,
      this.width,
      this.height
    );}

   if(this.standing || (!this.goingLeft && !this.goingRight)){ 
     this.ctx.drawImage(
      this.imgStand,
      34 * this.spriteColStand, // the x-axis coordinate in the destination canvas
      0,
      34,
      32,
      this.x,
      this.y,
      this.width,
      this.height
    );}
   if(this.goingLeft && this.goingRight){ 
     this.ctx.drawImage(
      this.imgStand,
      34 * this.spriteColStand, // the x-axis coordinate in the destination canvas
      0,
      34,
      32,
      this.x,
      this.y,
      this.width,
      this.height
    );}

    this.setSpriteFrameStand(frameNumber);
    this.setSpriteFrameLeft(frameNumber);
    this.setSpriteFrameRight(frameNumber);
  }

  takePortal() {
    // -----WORKING!!!-----

    const checkoutPlayerRight = this.x > this.ctx.canvas.width;
    if (checkoutPlayerRight) this.x = 0;

    const checkoutPlayerLeft = this.x < 0;
    if (checkoutPlayerLeft)
      this.x = this.ctx.canvas.width - this.width - 2;
  }

  collidesWith(element) {
    let collide = false;
    if (
      this.x < element.x + element.width &&
      this.x + this.width > element.x &&
      this.y < element.y + element.height &&
      this.y + this.height > element.y
    ) {
      collide = true;
    }
    return collide;
  }
}
