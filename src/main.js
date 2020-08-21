import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "./store";

import "./assets/css/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDog, faHeart, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faDog, faHeart, faPaw);

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);
const prueba = store.state;
console.log("prueba", prueba);
new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount("#app");
