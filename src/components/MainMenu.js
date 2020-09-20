export default ({ colors }) => {


    const style = document.createElement('style')
    style.textContent = `

    *{
        box-sizing: border-box;
    }

    #container {
        background: ${colors.dark1};
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        color: white;
        bottom: 10vh;
        animation: slideDown .6s forwards;
    }

    #container.slideUp{
        animation: slideUp .6s forwards;
    }

    @keyframes slideDown {
        0%{
            bottom: 100vh;
        }
        100%{
            bottom: 0;
        }
    }

    @keyframes slideUp {
        0%{
            bottom: 0v;
        }
        100%{
            bottom: 100vh;
        }
    }

 

    `
    const template = document.createElement('template')
    template.innerHTML = `
           <div id="container">
               This is the main menu
               <button id="closeMenuBtn">Close menu</button>
           </div>
        
    `

    class MainMenu extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(style)
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }

        static slideDown() {

            const menu = document.createElement('main-menu')

            document.body.prepend(menu)
        }

        removeMainMenu() {
            document.querySelector('main-menu').remove()
        }

        closeMenu() {
            const menuContainer = this.shadowRoot.getElementById('container')
            if (!menuContainer.classList.contains('slideUp')) menuContainer.classList.add('slideUp')
            setTimeout(this.removeMainMenu, 600)
        }

        connectedCallback() {

            this.shadowRoot.getElementById('closeMenuBtn').addEventListener('pointerdown', this.closeMenu.bind(this))

        }

    }

    window.customElements.define('main-menu', MainMenu)



    return MainMenu
}

