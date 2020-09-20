


export default class Player {
    constructor(canvas, src, sheetWidth, sheetHeight) {
        this.ctx = canvas.ctx
        this.sheetWidth = sheetWidth || 96
        this.sheetHeight = sheetHeight || 128
        this.imgColumns = 3
        this.imgRows = 4
        this.w = this.sheetWidth / this.imgColumns
        this.h = this.sheetHeight / this.imgRows

        this.x = canvas.w / 2 - this.w / 2
        this.y = canvas.h / 2 - this.h / 2
        this.moveCode = 0
        this.cycle = [0, 1, 2, 1]
        this.cycleCounter = 0
        this.playerTouchingBarrier = { touching: false, beforeTouch: null, barrierId: null }

        this.image = new Image()
        this.image.src = src
    }



    drawSprite(playerX, frameCount) {

        // increment cycle 
        if (frameCount % 10 === 0) this.cycleCounter++
        if (this.cycleCounter >= this.cycle.length) this.cycleCounter = 0

        if (!playerX) playerX = 0
        else {
            playerX = this.cycle[this.cycleCounter]
        }


        // draw image
        this.ctx.drawImage(
            this.image,
            playerX * this.w, this.moveCode * this.h, // coordinates to start slice
            this.w, this.h, // width and height of slice
            this.x, this.y, // coordinates to place image slice
            this.w, this.h, // width and height of the image slice placed
        )

    }



}