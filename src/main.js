// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource';
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'iview/dist/iview.min.js'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(BootstrapVue)
Vue.use(VueResource);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
