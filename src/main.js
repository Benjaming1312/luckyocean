import Vue from 'vue'
import App from './App.vue'
import Aboutus from './components/Aboutus.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#aboutus',
  render: h => h(Aboutus)
})
