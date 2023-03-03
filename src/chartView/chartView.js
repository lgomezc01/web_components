import "../chart/chart.js"
import "../date-slider/date-slider.js"
import "../slider/slider.js"

const template = document.createElement('template');
template.innerHTML = `
<div id="chartContainer" class="chartContainer">
  <time-slider id="chartTop" class="chartTop"></time-slider>
  <div id="chartMiddle" class="chartMiddle">
    <slot name="time-slider"></slot>
    <div id="chartContent" class="chartContent">
      <slot name="chart" style="position: relative;"></slot>
      <!--<button type="button" class="left-nav"></button>-->
    </div>
    <slot name="grouperSlider"></slot>
  </div>
</div>`;

customElements.define('chart-view',
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', './chartView/chartView.css');
      shadowRoot.appendChild(linkElem);
      shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {

    }
  }
);