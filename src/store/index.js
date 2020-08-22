import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    toggleFavs(state, item) {
      state.favorites = [];
      state.favorites.push(item);
      // console.log("this.favorites", this.favorites);
      // let index = state.favorites.findIndex(i => i.id === item.id);
      // if (index >= 0) {
      //   state.favorites.splice(index, 1);
      //   return;
      // }
      // state.favorites.push(item);
    }
  },
  getters: {
    favs: state => {
      // console.log("state.favorites", state.favorites);
      return state.favorites;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
