export default class Map {
    constructor(ctx, src) {
        this.ctx = ctx

        this.speed = 1.5
        this.w = 350
        this.h = 350
        this.x = -140
        this.y = 160
        this.moving = false
        this.direction = 'down'

        this.image = new Image()
        this.image.src = src

        this.padding = 10



    }


    drawMap() {
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