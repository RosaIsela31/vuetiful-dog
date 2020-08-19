import Vue from "vue";
import App from "./App.vue";
import "./assets/css/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDog, faHeart, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faDog, faHeart, faPaw);

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
