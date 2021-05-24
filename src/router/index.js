import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from '@/components/home'
import newroom from '@/components/newroom'
import newplayer from '@/components/newplayer'
import getcard from '@/components/getcard'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Router)

/* 載入並使用Vue Plugin */

/* 等校 var VueResource = require('vue-resource'); */

Vue.use(VueResource)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/page_whoisspy/',
      name: 'home',
      component: home
    },
    {
      path: '/page_whoisspy/newroom/',
      name: '/page_whoisspy/newroom',
      component: newroom
    },
    {
      path: '/page_whoisspy/newplayer/',
      name: 'newplayer',
      component: newplayer
    },
    {
      path: '/page_whoisspy/getcard/',
      name: 'getcard',
      component: getcard
    },
  ]
})
