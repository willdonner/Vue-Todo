// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/styles/global.styl'
import { Script } from 'vm';
// import './assets/style/test.css'
// import './assets/style/image/saito.png'
Vue.config.productionTip = false
let html = document.documentElement;

  window.rem = html.getBoundingClientRect().width / 16 ;
  html.style.fontSize = window.rem + 'px';

/* eslint-disable no-new */
new Vue({
  el: '#app1',
  router,
  components: { App },
  template: '<App/>' 
})

