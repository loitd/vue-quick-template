import "@babel/polyfill";
import Vue from "vue";
import './plugins/fontawesome'
// import "./plugins/octicons";
import "./plugins/axios";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
