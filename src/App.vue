<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      assets: []
    };
  },

  mounted() {
    console.log("process.env.VUE_APP_API_KEY ", process.env.VUE_APP_API_KEY);
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
