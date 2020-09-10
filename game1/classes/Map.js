export default class Map {
    constructor(ctx, src) {
        this.ctx = ctx

        this.speed = 1.5
        this.groundSize = 350
        this.x = -130
        this.y = -30
        this.moving = false
        this.direction = 'down'

        this.image = new Image()
        this.image.src = src



    }


    drawMap() {
        this.ctx.drawImage(this.image, this.x, this.y, this.groundSize, this.groundSize)
    }


    moveMapDown() {
        this.y += this.speed
    }
    moveMapUp() {
        this.y -= this.speed
    }
    moveMapRight() {
        this.x += this.speed
    }
    moveMapLeft() {
        this.x -= this.speed
    }
}