import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import protoRoot from './proto/proto'

console.log(protoRoot)
new Vue({
  render: h => h(App),
}).$mount('#app')
