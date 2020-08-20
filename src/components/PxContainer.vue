<template>
  <div>
    <px-header :search="search" @customclick="newSearch" />
    <div class="container">
      <px-card
        v-for="(item, key) in data"
        :key="key"
        :title="item.title"
        :id="item.id"
        :image="item.images.original.url"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PxHeader from "@/components/PxHeader";
import PxCard from "@/components/PxCard";
export default {
  name: "Container",

  data() {
    return {
      data: [],
      URL_BASE: "https://api.giphy.com/v1/gifs/search?q=",
      search: "dog"
    };
  },

  components: { PxCard, PxHeader },

  methods: {
    findDogs() {
      this.info = [];
      let apiKey = "XW1HTpw6EWg9S4z8EYwbMoBy1lUOfc5o";
      let completeUrl = `${this.URL_BASE}${this.search}&api_key=${apiKey}&limit=5`;
      axios.get(completeUrl).then(response => {
        let resp = response.data.data;
        resp = resp.map(elem => {
          console.log("resp", resp);
          this.data.push(elem);
        });
      });
    },

    newSearch(search) {
      this.search = search;
      this.info = [];
      let apiKey = "XW1HTpw6EWg9S4z8EYwbMoBy1lUOfc5o";
      let completeUrl = `${this.URL_BASE}${this.search}&api_key=${apiKey}&limit=5`;
      axios.get(completeUrl).then(response => {
        let resp = response.data.data;
        resp = resp.map(elem => {
          console.log("resp", resp);
          this.data.push(elem);
        });
      });
    }
  },

  created() {
    this.findDogs();
  }
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
