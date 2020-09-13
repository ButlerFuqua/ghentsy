import DButton from './DButton.js'

export default () => {


    const style = document.createElement('style')
    style.textContent = `
        .container{
            position: absolute;
            bottom: 0;
            width: 100vw;
        }

        #dpad {
            width: 75px;
        }

        #dpad div#top{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #dpad div#leftRight{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        #dpad div#bottom{
            display: flex;
            justify-content: center;
            align-items: center;
        }

    `
    const template = document.createElement('template')
    template.innerHTML = `
            <div class="container">
                <div id="dpad">
                    <div id="top">
                        <button>^</button>
                    </div>
                    <div id="leftRight">
                    <button><</button>
                    <button>></button>
                    </div>
                    <div id="bottom">
                        <button>d</button>
                    </div>
                </div>
            </div>
        
    `

    class GameControls extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(style)
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }

        connectedCallback() {

        }


    }


    window.customElements.define('game-controls', GameControls)
}

