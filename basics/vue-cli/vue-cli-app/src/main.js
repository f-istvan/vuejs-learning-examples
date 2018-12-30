import Vue from 'vue'
import App from './App.vue'
import MyAppServers from "./MyAppServers";

/** GLOBAL COMPONENT **/
Vue.component('app-servers', MyAppServers);

new Vue({
  el: '#my_app',
  render: h => h(App)
});
