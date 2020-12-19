import Vue from 'vue'
import vfiletree from './FileTree.vue'
import $ from 'jquery'

let constructor = Vue.extend(vfiletree);
let viewFileTree = {};

viewFileTree.install = function (Vue) {

    Vue.prototype.$viewFileTree = function (data) {
        if (typeof data === "object") {
            let dom = new constructor({
                el: document.createElement('div')
            })
            // document.body.appendChild(dom.$el);
            dom.moveData = data;
            $('.home').append(dom.$el);
            return dom.prom.promise.then((val) => {
                return Promise.resolve(val);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }

    }
}

export default viewFileTree;