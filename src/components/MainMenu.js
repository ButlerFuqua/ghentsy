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
        height: ${window.innerHeight - 45}px;
        z-index: 1;
        color: white;
        bottom: 10vh;
        animation: slideDown .4s forwards;
    }

    #container.slideUp{
        animation: slideUp .4s forwards;
    }

    @keyframes slideDown {
        0%{
            bottom: 100vh;
        }
        100%{
            bottom: 45px;
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
           </div>
        
    `

    class MainMenu extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(style)
            this.shadowRoot.appendChild(template.content.cloneNode(true))

        }

        slideDown() {
            const menu = document.createElement('main-menu')
            document.body.prepend(menu)
        }

        removeMainMenu() {
            document.querySelector('main-menu').remove()
        }

        closeMenu(menu) {
            const menuContainer = menu.shadowRoot.getElementById('container')
            menuContainer.classList.add('slideUp')
            setTimeout(this.removeMainMenu, 600)
        }

        connectedCallback() {

        }

    }

    window.customElements.define('main-menu', MainMenu)



    return MainMenu
}

