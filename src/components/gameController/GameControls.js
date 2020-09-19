export default ({ colors }, { map1, player1, interactions }) => {

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

        button {
            opacity: .2;

            transition: .3s;
        }

        button.highlight {
            opacity: 1;
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
                            <button data-direction="up" data-code="3">
                                <img src="./src/images/secondary_dpad.png" />
                            </button>
                        </div>
                        <div id="leftRight">
                            <button data-direction="left" data-code="1">
                                <img style="transform: rotate(180deg)" src="./src/images/prime_dpad.png" />
                            </button>
                            <button data-direction="right" data-code="2">
                                <img src="./src/images/prime_dpad.png" />
                            </button>
                        </div>
                        <div id="bottom">
                            <button data-direction="down" data-code="0">
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



        actionBtnPressed(e) {
            buttonPressed(this)

            interactions.forEach(interaction => {
                if (interaction.instance.canInteract) interaction.instance.invokeInteraction(e)
            })

            setTimeout(() => {
                if (buttonNotPressed) buttonNotPressed(this)
            }, 200)
        }

        dpadBtnDown(e) {
            buttonPressed(this)

            map1.moving = true
            const dir = this.getAttribute('data-direction').toLocaleLowerCase()
            const mc = this.getAttribute('data-code')
            map1.direction = dir
            player1.moveCode = mc
        }

        dpadBtnUp(e) {
            buttonNotPressed(this)

            map1.moving = false
        }

        connectedCallback() {

            // Action button event listener
            this.shadowRoot.querySelector('#actionButtonContainer button').addEventListener('pointerdown', this.actionBtnPressed.bind(this.shadowRoot.querySelector('#actionButtonContainer button')))

            // Dpad devent listeners
            this.shadowRoot.querySelectorAll('#dpad button').forEach(btn => btn.addEventListener('pointerdown', this.dpadBtnDown.bind(btn)))
            this.shadowRoot.querySelectorAll('#dpad button').forEach(btn => btn.addEventListener('pointerup', this.dpadBtnUp.bind(btn)))
            this.shadowRoot.querySelectorAll('#dpad button').forEach(btn => btn.addEventListener('pointerout', this.dpadBtnUp.bind(btn)))

        }


    }

    window.customElements.define('game-controls', GameControls)


    // FUNCTIONS ===

    function buttonPressed(btn) {
        if (!btn.classList.contains('highlight')) btn.classList.add('highlight')
    }
    function buttonNotPressed(btn) {
        if (btn.classList.contains('highlight')) btn.classList.remove('highlight')
    }
}

