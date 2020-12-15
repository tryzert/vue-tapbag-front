import Vue from 'vue'
import vaudio from './ViewAudio.vue'
import $ from 'jquery'

let constructor = Vue.extend(vaudio);
let viewAudio = {};

viewAudio.install = function (Vue) {

    Vue.prototype.$viewAudio = function (data) {
        if (typeof data === "object") {
            let dom = new constructor({
                el: document.createElement('div')
            })
            // document.body.appendChild(dom.$el);
            dom.audioSrc = data.audioSrc;
            dom.audioName = data.audioName;
            $('.home').append(dom.$el);
            $("audio")[0].volume = 0.35;
        }

    }
}

export default viewAudio;