export default class TouchEvents {
    constructor() {

    }
    // stop long press event
    static absorbEvent_(event) {
        var e = event || window.event;
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    }
    static addNodeToTouchEvents(node) {
        node.ontouchstart = this.absorbEvent_;
        node.ontouchmove = this.absorbEvent_;
        node.ontouchend = this.absorbEvent_;
        node.ontouchcancel = this.absorbEvent_;
    }


    static preventLongPressMenu(sel) {
        const els = Array.from(document.querySelectorAll(sel))
        els.forEach(el => this.addNodeToTouchEvents(el))
    }
}