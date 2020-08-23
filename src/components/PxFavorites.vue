<template>
  <div>
    <px-header />
    <div class="container">
      <px-card
        v-for="(item, key) in myFavsPictures"
        :key="key"
        :title="item.title"
        :id="item.id"
        :image="item.images.original.url"
      />
    </div>
  </div>
</template>

<script>
import PxHeader from "./PxHeader";
import PxCard from "./PxCard";

export default {
  name: "PxFavorites",

  data() {
    return {
      myFavsPictures: []
    };
  },

  components: { PxHeader, PxCard },

  created() {
    this.getFavorites();
  },

  methods: {
    getFavorites() {
      let myfavs = this.$store.state.favorites;
      this.myFavsPictures = [...myfavs];
    }
  }
};
</script>
