import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'http://0.0.0.0:8000/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);

  /** intercepting the response */
  next(response => {
    console.log(response)
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
