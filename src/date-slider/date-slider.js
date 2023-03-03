import "./js/jquery-3.6.3.min.js"
import "./js/jquery-ui-1.13.2.custom/jquery-ui.js"
import "./js/jQRangeSlider-master/lib/jquery.mousewheel.min.js"
import "./js/jQRangeSlider-master/jQRangeSliderMouseTouch.js"
import "./js/jQRangeSlider-master/jQRangeSliderDraggable.js"
import "./js/jQRangeSlider-master/jQRangeSliderHandle.js"
import "./js/jQRangeSlider-master/jQRangeSliderBar.js"
import "./js/jQRangeSlider-master/jQRangeSliderLabel.js"
import "./js/jQRangeSlider-master/jQRangeSlider.js"
import "./js/jQRangeSlider-master/jQDateRangeSliderHandle.js"
import "./js/jQRangeSlider-master/jQDateRangeSlider.js"

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import  "./date-slider/date-slider.css";
</style>`;

customElements.define('time-slider',
    class extends HTMLElement {
        constructor() {
            super();

            const divElem = document.createElement('div');
            divElem.setAttribute('id', 'slider');
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(template.content.cloneNode(true));
            shadowRoot.appendChild(divElem);

            //this.querySelector('#slider').dateRangeSlider({
            jQuery(divElem).dateRangeSlider({
                bounds: {
                  min: new Date(2015, 9, 1),
                  max: new Date(2017, 4, 1)
                },
                step: {
                  months: 1
                },
                defaultValues: {
                  min: new Date(2016, 9, 1),
                  max: new Date(2016, 10, 1)
                },
                //enabled: false
                formatter: function(val) {
                  var days, month, year;
                  days = val.getDate();
                  month = val.getMonth() + 1;
                  year = val.getFullYear();
                  return month + '/' + days + '/' + year;
                }
              });

        }

        // fires after the element has been attached to the DOM
        connectedCallback() {
    
        }
    }
);