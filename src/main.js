import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNumber from "vue-number-animation";

Vue.config.productionTip = false

Vue.use(VueNumber);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
