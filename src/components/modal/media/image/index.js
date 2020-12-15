import Vue from 'vue'
import vimage from './ViewImage.vue'
import $ from 'jquery'

let constructor = Vue.extend(vimage);
let viewImage = {};

viewImage.install = function (Vue) {

    Vue.prototype.$viewImage = function (data) {
        if (typeof data === "string") {
            let dom = new constructor({
                el: document.createElement('div')
            })
            // document.body.appendChild(dom.$el);
            dom.imageSrc = data;
            $('.home').append(dom.$el);
        }

    }
}

export default viewImage;