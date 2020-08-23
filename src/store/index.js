import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    toggleFavorites(state, item) {
      let index = state.favorites.findIndex(i => i.id === item.id);
      if (index >= 0) {
        state.favorites.splice(index, 1);
        return;
      }
      state.favorites.push(item);
    }
  },
  plugins: [createPersistedState()]
});
