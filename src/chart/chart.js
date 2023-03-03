import "./chart-js.js"
//import  "./chart.css";

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import  "./chart/chart.css";
</style>`;


customElements.define('chart-comp',
    class extends HTMLElement {
        constructor() {
            super();

            const width = this.getAttribute('width');
            const height = this.getAttribute('height');

            this.canvasElem = document.createElement('canvas');
            //this.canvasElem.setAttribute('style', 'position: relative; width:450px; height:450px;');
            //this.canvasElem.setAttribute('style', `position: relative; width:$(width); height:$(height);`);
            this.canvasElem.setAttribute('style', 'position: relative;');
            this.canvasElem.setAttribute('width', width);
            this.canvasElem.setAttribute('height', height);
            const divElem = document.createElement('div');
            const classStyle = this.getAttribute('class');
            divElem.setAttribute('class', classStyle);
            divElem.appendChild(this.canvasElem);

            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.content.cloneNode(true));
            shadowRoot.appendChild(divElem);

            this.chart = new Chart(this.canvasElem, {
                type: 'bar',
                responsive: false,
                maintainAspectRatio: false,
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            
            console.log("resize....");
            //this.chart.resize();
        }

        // fires after the element has been attached to the DOM
        connectedCallback() {

            
        }
    }
);

