import GameControls from './gameController/GameControls.js'

export default () => {


    const style = document.createElement('style')
    style.textContent = `



        div.container {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }


    `
    const template = document.createElement('template')
    template.innerHTML = `
            <div class="container">
                <slot name="canvas"></slot>
            </div>

            <game-controls></game-controls>
        
    `

    class CanvasContainer extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(style)
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }

        connectedCallback() {
            // this.shadowRoot.querySelectorAll('button').forEach(el => el.addEventListener('click', () => console.log('clicked')))

            // if (this.getAttribute('this_is_prop')) console.log(this.getAttribute('this_is_prop'))

            // console.log(this.children.canvasContainer.children[0])
        }

        adoptedCallback() {
            console.log(this.children.canvasContainer.children[0])
        }
    }


    window.customElements.define('canvas-container', CanvasContainer)
}

