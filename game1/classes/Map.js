export default class Map {
    constructor(canvas, src, w, h) {
        this.ctx = canvas.ctx

        this.speed = 1.5
        this.w = w
        this.h = h
        this.x = (canvas.w / 2) - (this.w / 2)
        this.y = (canvas.h / 2) - (this.h / 2)

        this.moving = false
        this.direction = 'down'

        this.image = new Image()
        this.image.src = src

        this.padding = 10



    }


    drawMap(canvas) {

        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }


    moveMapDown(player) {
        // Move if player is within top border of map
        if (
            Number(player.y) - this.padding > Number(this.y)
        ) {

            this.y += this.speed
        }

    }
    moveMapUp(player) {
        // Move if player is within bottom border of map
        if (
            Number(player.y) + Number(player.h) + this.padding < Number(this.y) + Number(this.h)
        ) {

            this.y -= this.speed
        }

    }
    moveMapRight(player) {

        // Move if player is within left border of map
        if (
            Number(player.x) - this.padding > Number(this.x)
        ) {

            this.x += this.speed
        }
    }
    moveMapLeft(player) {

        // Move if player is within right border of map
        if (
            Number(player.x) + Number(player.w) + this.padding < Number(this.x) + Number(this.w)
        ) {
            this.x -= this.speed
        }
    }
}