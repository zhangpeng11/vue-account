// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import components from './components'
import store form './store'

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  store,
  render:(h) => h(components)
})
