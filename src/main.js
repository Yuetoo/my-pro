import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Header } from "mint-ui";
import "./lib/mui/css/mui.min.css";

Vue.config.productionTip = false;
Vue.component(Header.name, Header);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
