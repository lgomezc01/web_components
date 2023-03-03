//import "./js/jquery-3.6.3.min.js"
//import "./js/jquery-ui-1.13.2.custom/jquery-ui.js"

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import  "./slider/js/jquery-ui-1.13.2.custom/jquery-ui.min.css";
    @import  "./slider/slider.css";
</style>`;

customElements.define('slider-comp',
    class extends HTMLElement {
        constructor() {
            super();

            const classStyle = this.getAttribute('class');
            console.log('*************: ' + classStyle);
            const divElem = document.createElement('div');
            divElem.setAttribute('class', classStyle);

            //HEMOS QUITADO SHADOW DOM PARA QUE COJA LOS ESTILO GLOBALES. POR EL MOMENTO.
            //const shadowRoot = this.attachShadow({ mode: 'open' });
            this.appendChild(template.content.cloneNode(true));            
            this.appendChild(divElem);

            //shadowRoot.appendChild(template.content.cloneNode(true));            
            //shadowRoot.appendChild(divElem);


            jQuery(divElem).slider({
                orientation: "vertical",
                range: "min",
                min: 0,
                max: 100,
                value: 60
              });
        }

        // fires after the element has been attached to the DOM
        connectedCallback() {

            
        }
    }
);

