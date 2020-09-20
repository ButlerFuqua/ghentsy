export default class Canvas {

    constructor(w, h) {
        this.w = w
        this.h = h
        this.canvas = document.createElement('CANVAS')

        this.ctx = this.canvas.getContext('2d')

        this.canvas.width = w
        this.canvas.height = h
        this.canvas.setAttribute('id', 'gameCanvas')
        this.canvas.style = `
            background: #ccc;
            min-width: 100%;
            width: auto;
            padding: 0;
            margin: 0;
        `
    }

    appendCanvas(selector) {
        document.querySelector(selector).prepend(this.canvas)
    }

    setBackground(str) {
        this.canvas.style.background = str
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.w, this.h)
    }
}