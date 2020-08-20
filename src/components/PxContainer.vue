<template>
  <div class="container">
    <px-card v-for="(item, key) in info" :key="key" :title="item.title" />
    <px-card />
    <px-card />
    <px-card />
    <px-card />
    <px-card />
  </div>
</template>

<script>
import axios from "axios";
import PxCard from "@/components/PxCard";
export default {
  name: "Container",

  data() {
    return {
      info: [],
      URL_BASE: "https://api.giphy.com/v1/gifs/search?q=",
      search: "dog",
    };
  },

  components: { PxCard },

  methods: {
    findDogs() {
      this.info = [];
      let apiKey = "XW1HTpw6EWg9S4z8EYwbMoBy1lUOfc5o";
      let completeUrl = `${this.URL_BASE}${this.search}&api_key=${apiKey}&limit=5`;

      let resp = Promise.all([
        axios.get(completeUrl).then((response) => response.data.data),
      ]);

      console.log("resp", resp);
    },
  },

  created() {
    this.findDogs();
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 34% 34% 34%;
}

@media screen and (max-width: 1024px) {
  .container {
    grid-template-columns: 100%;
  }
}
</style>
