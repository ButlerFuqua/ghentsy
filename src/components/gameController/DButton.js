export default () => {


    const style = document.createElement('style')
    style.textContent = `

    button {
        background: rgba(0,0,0, 0.0);
        border: 1px solid #ccc;
    }

    `
    const template = document.createElement('template')
    template.innerHTML = `
           <button>d</button>
        
    `

    class DButton extends HTMLElement {
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(style)
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }

        connectedCallback() {

        }


    }


    window.customElements.define('d-button', DButton)
}

