export default ({ colors, utils, font }) => {


    const style = document.createElement('style')
    style.textContent = `

    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }

    h1 {
        font-size: ${font.h1Size};
    }
    h2 {
        font-size: ${font.h2Size};
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
        display: flex;
        flex-direction: column;
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


    #titleBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${utils.padding1};
    }

    #titleBar button {
        background: ${colors.dark1};
        border: none;
    }

    #titleBar img {
        height: ${utils.iconSize};
        width: auto;
    }

    ul {
        padding: 1rem;
        overflow: auto;
    }

    li {
        display: flex;
        border-bottom: 1px solid ${colors.lightGrey};
        padding-bottom: 1rem;
        align-items: center;
        margin-bottom: 1rem;
    }

    li img {
        height: ${utils.iconSize};
        width: auto;
        margin-right: 1rem;
    }

    `

    const menuItems = [
        {
            title: 'Map',
            icon: 'default_icon',
            action: 'map'
        },
        {
            title: 'Pack',
            icon: 'default_icon',
            action: 'pack'
        },
        {
            title: 'Weapons',
            icon: 'default_icon',
            action: 'weapons'
        },
        {
            title: 'Profile',
            icon: 'default_icon',
            action: 'profile'
        },
        {
            title: 'Wallet',
            icon: 'default_icon',
            action: 'wallet'
        },
        {
            title: 'Sign Out',
            icon: 'default_icon',
            action: 'sign_out'
        },
    ]
    const template = document.createElement('template')
    template.innerHTML = `
           <div id="container">
               <div id="titleBar">
                    <h1>Main Menu</h1>
                    <button>
                        <img src="/src/images/default_icon.png" />
                    </button>
               </div>
               <ul class="menuItemsContainer">
                    ${menuItems.map(item => (`
                        <li data-action="${item.action}">
                            <img src="/src/images/${item.icon}.png" />
                            <h2>${item.title}</h2>
                        </li>
                    `)).join('')}
               </ul>
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

        closeMenu(menu) {
            const menuContainer = menu.shadowRoot.getElementById('container')
            menuContainer.classList.add('slideUp')
            setTimeout(this.removeMainMenu, 600)
        }

        removeMainMenu() {
            document.querySelector('main-menu').remove()
        }

        itemAction(str) {
            console.log(`From class: ${str}`)
        }

        connectedCallback() {

            const menuItems = Array.from(this.shadowRoot.querySelectorAll('li'))
            menuItems.forEach(item => item.addEventListener('pointerdown', this.itemAction.bind(this, item.getAttribute('data-action'))))

        }
    }

    window.customElements.define('main-menu', MainMenu)

    return MainMenu
}

