import 'mdb-vue-ui-kit/css/mdb.min.css'
import Vue from "vue";
import App from "./App";
import router from "./router";

//Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
