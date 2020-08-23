<template>
  <div>
    <px-header :search="search" @customclick="newSearch" />
    <div class="container">
      <px-card
        v-for="(item, key) in info"
        :key="key"
        :title="item.title"
        :id="item.id"
        :image="item.images.original.url"
        :like="item.like"
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
      info: [],
      URL_BASE: "https://api.giphy.com/v1/gifs/search?q=",
      search: ""
    };
  },

  components: { PxCard, PxHeader },

  methods: {
    newSearch(search) {
      this.search = search;
      this.info = [];
      let completeUrl = `${this.URL_BASE}${this.search}&api_key=${process.env.VUE_APP_API_KEY}&limit=5`;
      axios.get(completeUrl).then(response => {
        let resp = response.data.data;
        resp.map(elem => {
          elem.like = false;
          this.info.push(elem);
        });
      });
      this.search = "";
    },

    toggleLike(data) {
      let gifLike = this.info.find(items => items.id == data.id);
      gifLike.like = data.like;
      this.$store.commit("toggleFavorites", gifLike);
    }
  },

  created() {
    this.newSearch("dog");
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
    grid-template-columns: 50% 50%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: 100%;
    justify-items: center;
    align-items: center;
  }
}
</style>
