export default ({ colors }) => {


    const style = document.createElement('style')
    style.textContent = `

    *{
        box-sizing: border-box;
    }

    #container {
        background: ${colors.dark1};
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



        connectedCallback() {

        }



    }


    window.customElements.define('main-menu', MainMenu)
}

