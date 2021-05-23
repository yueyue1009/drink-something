import Vue from 'vue'
import drinksomething from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(drinksomething),
}).$mount('#app')
