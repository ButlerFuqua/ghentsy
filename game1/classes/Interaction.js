import Barrier from './Barrier.js'

export default class Interaction extends Barrier {
    constructor(ctx) {
        super(ctx)
    }

    invokeInteraction(e) {
        if (e.key === ' ') {
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


            window.addEventListener('keydown', this.invokeInteraction)
        } else {
            window.removeEventListener("keydown", this.invokeInteraction);
        }


    }
}