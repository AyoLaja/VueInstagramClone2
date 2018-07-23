import Vue from 'vue'
import App from './App.vue'
import VueDragscroll from 'vue-dragscroll'

Vue.use(VueDragscroll);

new Vue({
  el: '#app',
  render: h => h(App)
})
