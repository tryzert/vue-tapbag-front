import Vue from 'vue'
import vtext from './ViewText.vue'
import $ from 'jquery'

let constructor = Vue.extend(vtext);
let viewText = {};

viewText.install = function (Vue) {

    Vue.prototype.$viewText = function (data) {
        if (typeof data === "object") {
            let dom = new constructor({
                el: document.createElement('div')
            })
            // document.body.appendChild(dom.$el);
            dom.textName = data.textName;
            dom.textContent = data.textContent;
            $('.home').append(dom.$el);
        }

    }
}

export default viewText;