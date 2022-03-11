import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from "vue";
import App from "./App";
import router from "./router";

//Vue.config.productionTip = false;

createApp(App).use(router).mount("#app");
