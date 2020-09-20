export default class Barrier {
    constructor(ctx) {
        this.ctx = ctx
        this.barrierColor = 'rgba(0,255,255, .5)'
        this.x
        this.y
        this.w
        this.h
        this.barrierId
    }

    drawBarrier(x, y, w, h) {
        this.barrierId = this.barrierId || `${x}&${y}&${w}&${h}`

        this.ctx.fillStyle = this.barrierColor
        this.ctx.fillRect(x, y, w, h)

        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

    detectCollision(player, map) {

        let collision = false

        if (
            player.x < this.x + this.w && //ob1 touches right side of ob2
            player.x + player.w > this.x && //ob1 touches the left side of ob2
            player.y + player.h > this.y && //ob1 touches the top of ob2
            player.y < this.y + this.h //ob1 touches the bottom of ob2
        ) {
            collision = true
        }

        if (collision) {
            // player IS touching barrier
            if (!player.playerTouchingBarrier.beforeTouch && !player.playerTouchingBarrier.touching) { //  & Was not previously touching
                player.playerTouchingBarrier = {
                    touching: true,
                    beforeTouch: map.direction, // the direction player cannot go
                    barrierId: this.barrierId

                }
            } //
        } else if (player.playerTouchingBarrier.touching && player.playerTouchingBarrier.barrierId === this.barrierId) {

            // player NOT touching barrier, and can now move in any direction
            player.playerTouchingBarrier.touching = false
            player.playerTouchingBarrier.beforeTouch = null
        }



    }
}