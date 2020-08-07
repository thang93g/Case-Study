class Rat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "images/son.png";
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, 380, 250);
    }

    die() {
        this.image = new Image();
        this.image.src = "images/sonbidap.png";
        this.draw();
    }

}


