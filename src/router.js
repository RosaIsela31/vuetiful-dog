import vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Favorites from "@/views/Favorites";

vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/fav",
      name: "fav",
      component: Favorites
    }
  ]
});
