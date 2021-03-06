import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDog, faHeart, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/css/index.css";

library.add(faDog, faHeart, faPaw);

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);
new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount("#app");
