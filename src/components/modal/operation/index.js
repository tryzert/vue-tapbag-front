import Vue from 'vue'
import voperation from './MoreOperation.vue'
import $ from 'jquery'

let constructor = Vue.extend(voperation);
let mOperation = {};

mOperation.install = function (Vue) {

    Vue.prototype.$moreOperation = function (data) {
        if (typeof data === "object") {
            let dom = new constructor({
                el: document.createElement('div')
            })
            // document.body.appendChild(dom.$el);
            dom.filename = data.filename;
            dom.inputFilename = data.filename;
            $('.home').append(dom.$el);
        }

    }
}

export default mOperation;