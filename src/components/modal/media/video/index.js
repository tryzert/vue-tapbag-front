import Vue from 'vue'
import vvideo from './ViewVideo.vue'
import $ from 'jquery'

let constructor = Vue.extend(vvideo);
let viewVideo = {};

viewVideo.install = function (Vue) {

    Vue.prototype.$viewVideo = function (data) {
        if (typeof data === "object") {
            let dom = new constructor({
                el: document.createElement('div')
            })
            // document.body.appendChild(dom.$el);
            dom.videoSrc = data.videoSrc;
            dom.videoName = data.videoName;
            $('.home').append(dom.$el);
            $("video")[0].volume = 0.35;
        }

    }
}

export default viewVideo;