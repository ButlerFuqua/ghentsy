export default ({ colors, utils, font }, MainMenu) => {

    const mainMenuClass = MainMenu({ colors, utils, font })


    const style = document.createElement('style')
    style.textContent = `

    *{
        box-sizing: border-box;
    }

    #container {
        height: 45px;
        background: ${colors.dark1};
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #container button {
        background: ${colors.dark1};
        border: none;
        max-height: 100%;
    }

    #container .selectBtn {
        height: 30px;
    }

    #menuBtn{
        width: 45px;
        height: inherit;
    }

    `
    const template = document.createElement('template')
    template.innerHTML = `
           <div id="container">
                <button>
                    <img class="selectBtn" id="spotsBtn" src="/src/images/default_icon.png" />
                </button>
                <button>
                    <img id="menuBtn" src="/src/images/start_btn.png" />
                </button>
                <button>
                    <img class="selectBtn"  id="friendsBtn" src="/src/images/default_icon.png" />
                </button>
           </div>
        
    `

    class BottomBar extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(style)
            this.shadowRoot.appendChild(template.content.cloneNode(true))

            this.mainMenu

        }

        menuBtnPressed() {
            const menu = document.querySelector('main-menu') || false

            if (!menu) {
                console.log('create new menu')
                this.mainMenu = new mainMenuClass
                this.mainMenu.slideDown()
            } else {
                this.mainMenu.closeMenu(menu)
            }

        }
        spotsBtnPressed() {
            console.log('view spots')
        }
        friendsBtnPressed() {
            console.log('view friends')
        }

        connectedCallback() {
            this.shadowRoot.getElementById('spotsBtn').addEventListener('pointerdown', this.spotsBtnPressed)
            this.shadowRoot.getElementById('friendsBtn').addEventListener('pointerdown', this.friendsBtnPressed)
            this.shadowRoot.getElementById('menuBtn').addEventListener('pointerdown', this.menuBtnPressed)
        }


    }


    window.customElements.define('bottom-bar', BottomBar)
}

