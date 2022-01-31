class Bullets {
    constructor(ctx){
        this.ctx = ctx;
        this.newBullets = []

    }

    createNewBullet(){
        const newBullet
        ctx.fillStyle = white;
        ctx.fillRect(0,0,10,10)

        this.newBullets.push(newBullet);

    }
}   