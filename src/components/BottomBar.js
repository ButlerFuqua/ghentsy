export default ({ colors }) => {


    const style = document.createElement('style')
    style.textContent = `

    *{
        box-sizing: border-box;
    }

    .container {
        height: 45px;
        background: ${colors.dark1}
    }

    `
    const template = document.createElement('template')
    template.innerHTML = `
           <div class="container">

           </div>
        
    `

    class BottomBar extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(style)
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }

        connectedCallback() {

        }


    }


    window.customElements.define('bottom-bar', BottomBar)
}

