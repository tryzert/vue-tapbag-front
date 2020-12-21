// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import toast from './components/modal/toast/toast.js'


import viewImage from './components/modal/media/image'
import viewAudio from './components/modal/media/audio'
import viewVideo from './components/modal/media/video'
import viewText from './components/modal/media/text'
import viewFileTree from './components/modal/filetree'
import mOperation from './components/modal/operation'


axios.defaults.baseURL = 'http://localhost:9010'
Vue.prototype.$axios = axios
Vue.prototype.$toast = toast


Vue.use(viewImage)
Vue.use(viewAudio)
Vue.use(viewVideo)
Vue.use(viewText)
Vue.use(viewFileTree)
Vue.use(mOperation)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
