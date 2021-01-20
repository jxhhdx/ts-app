import Vue from 'vue'
import App from './App.vue'
import Composition from '@vue/composition-api'
Vue.use(Composition)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
