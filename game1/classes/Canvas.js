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
            min-height: 100%;
            padding: 0;
            margin: 0;
        `

        // // stop long press event
        // this.absorbEvent_ = (event) => {
        //     var e = event || window.event;
        //     e.preventDefault && e.preventDefault();
        //     e.stopPropagation && e.stopPropagation();
        //     e.cancelBubble = true;
        //     e.returnValue = false;
        //     return false;
        // }
        // this.ontouchstart = this.absorbEvent_;
        // this.ontouchmove = this.absorbEvent_;
        // this.ontouchend = this.absorbEvent_;
        // this.ontouchcancel = this.absorbEvent_;





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