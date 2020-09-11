// This is the entry point of the game


export default class Game {
    constructor(Canvas, Map, Barrier, Interaction, Player, w, h) {
        this.Canvas = Canvas
        this.Map = Map
        this.Barrier = Barrier
        this.Interaction = Interaction
        this.Player = Player

        this.canvas = new this.Canvas(w, h)
        this.canvas.appendCanvas('body')
        this.canvas.setBackground('coral')

        this.map1 = new this.Map(this.canvas.ctx, './images/ground.png')

        this.player1 = new this.Player(this.canvas, './images/female_sheet.png')

        this.barriers = []
        this.interactions = []


        this.frameCount = 0
    }

    createBarriers(schemas) {
        schemas.forEach(schema => {
            let newBarrier = new this.Barrier(this.canvas.ctx)
            this.barriers.push({ barrier: newBarrier, schema })
        })
    }

    createInteractions(schemas) {
        schemas.forEach(schema => {
            let newInteraction = new this.Interaction(this.canvas.ctx)
            this.interactions.push({ barrier: newInteraction, schema })
        })
    }



    gameLoop() {
        // Clear previous frame
        this.canvas.clearCanvas()


        // draw map
        this.map1.drawMap()


        // Draw barriers
        this.barriers.forEach(obj => {
            obj.barrier.drawBarrier(this.map1.x + obj.schema.x, this.map1.y + obj.schema.y, obj.schema.w, obj.schema.h)
        })
        // Draw interactions
        this.interactions.forEach(obj => {
            obj.barrier.drawBarrier(this.map1.x + obj.schema.x, this.map1.y + obj.schema.y, obj.schema.w, obj.schema.h)
        })

        // Draw player
        this.player1.drawSprite(this.map1.moving, this.frameCount)

        //detect collisions
        this.barriers.forEach(obj => obj.barrier.detectCollision(this.player1, this.map1))
        //detect interactions
        this.interactions.forEach(obj => obj.barrier.detectCollision(this.player1, this.map1, window))




        // Listen for keys to move map
        if (this.map1.moving) {

            if (this.map1.direction === 'up' && this.player1.playerTouchingBarrier.beforeTouch !== 'up') {
                this.map1.moveMapDown()
            }

            if (this.map1.direction === "down" && this.player1.playerTouchingBarrier.beforeTouch !== 'down') {
                this.map1.moveMapUp()
            }

            if (this.map1.direction === "left" && this.player1.playerTouchingBarrier.beforeTouch !== 'left') {
                this.map1.moveMapRight()
            }

            if (this.map1.direction === "right" && this.player1.playerTouchingBarrier.beforeTouch !== 'right') {
                this.map1.moveMapLeft()
            }

        }
        this.frameCount++
        if (this.frameCount >= 60) this.frameCount = 0



        window.requestAnimationFrame(this.gameLoop.bind(this))
    }

    keyDownListeners(e) {
        this.canvas.ctx.save()

        if (e.key === 'ArrowUp') {
            this.map1.moving = true
            this.map1.direction = 'up'
            this.player1.moveCode = 3
        }

        if (e.key === "ArrowDown") {
            this.map1.moving = true
            this.map1.direction = 'down'
            this.player1.moveCode = 0
        }

        if (e.key === "ArrowLeft") {
            this.map1.moving = true
            this.map1.direction = 'left'
            this.player1.moveCode = 1
        }

        if (e.key === "ArrowRight") {
            this.map1.moving = true
            this.map1.direction = 'right'
            this.player1.moveCode = 2
        }
    }

    keyUpListeners() {
        this.map1.moving = false
    }


}