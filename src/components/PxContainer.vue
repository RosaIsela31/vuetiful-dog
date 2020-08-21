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
        @toggleLikeClick="toggleLike"
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
      search: ""
    };
  },

  components: { PxCard, PxHeader },

  methods: {
    findDogs() {
      this.info = [];
      let apiKey = "XW1HTpw6EWg9S4z8EYwbMoBy1lUOfc5o";
      let completeUrl = `${this.URL_BASE}dog&api_key=${apiKey}&limit=5`;
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
      this.data = [];
      let apiKey = "XW1HTpw6EWg9S4z8EYwbMoBy1lUOfc5o";
      let completeUrl = `${this.URL_BASE}${this.search}&api_key=${apiKey}&limit=5`;
      axios.get(completeUrl).then(response => {
        let resp = response.data.data;
        resp = resp.map(elem => {
          console.log("resp", resp);
          this.data.push(elem);
        });
      });
      this.search = "";
    },

    toggleLike(items) {
      let findId = this.info.find(item => item.id === items.id);

      findId.like = items.like;

      console.log("findId.like", findId.like);
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
