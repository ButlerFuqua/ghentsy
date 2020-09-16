export default ({ colors }) => {

    const style = document.createElement('style')
    style.textContent = `
        #container{
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            display: flex;
            justify-content: space-evenly;

        }

        #dpadContainer {
            min-width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #dpad {
            width: 175px;
            max-width: 100%;
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

        #actionButtonContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
        }

        #actionButtonContainer button {
            background: ${colors.primary1};
            border: none;
            height: 80px;
            width: 80px;
            border-radius: 50%;
        }

        #dpad button {
            background: none;
            border: none;
        }

    `
    const template = document.createElement('template')
    template.innerHTML = `

            <div id="container">
                <div id="actionButtonContainer">
                    <button>A</button>
                </div>
                <div id="dpadContainer">
                    <div id="dpad">
                        <div id="top">
                            <button>
                                <img src="./src/images/secondary_dpad.png" />
                            </button>
                        </div>
                        <div id="leftRight">
                            <button>
                                <img style="transform: rotate(180deg)" src="./src/images/prime_dpad.png" />
                            </button>
                            <button>
                                <img src="./src/images/prime_dpad.png" />
                            </button>
                        </div>
                        <div id="bottom">
                            <button >
                                <img style="transform: rotate(180deg)" src="./src/images/secondary_dpad.png" />
                            </button>
                        </div>
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

