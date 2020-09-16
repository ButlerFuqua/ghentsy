import Barrier from './Barrier.js'

export default class Interaction extends Barrier {
    constructor(ctx) {
        super(ctx)

        this.canInteract = false
    }

    invokeInteraction(e) {
        console.log('INTERACTING...')
        if (e && e.key === ' ' || (e.type && e.type === 'pointerdown')) {
            alert("This will be an interaction")
        }
    }


    detectCollision(player, map, window) {


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
            // window.addEventListener('keydown', this.invokeInteraction)
            this.canInteract = true
        } else {
            // window.removeEventListener("keydown", this.invokeInteraction)
            this.canInteract = false
        }


    }
}