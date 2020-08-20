<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import api from "./api";
export default {
  name: "App",

  data() {
    return {
      assets: []
    };
  },

  created() {
    api.getApi().then(assets => (this.assets = assets));
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
