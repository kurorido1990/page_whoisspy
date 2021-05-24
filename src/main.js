// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import AxiosPlugin from 'vue-axios-cors';
 
Vue.use(AxiosPlugin)
Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App, },
//   template: '<App/>'
// })

new Vue({
  // el: '#app',
  router,
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
        const redirect = sessionStorage.redirect
        delete sessionStorage.redirect
        this.$router.push(redirect)
    }
},
}).$mount('#app');
