<template>
  <div class="card">
    <div class="wrapper-title-heart">
      <h3 class="title-gift">{{ title }}</h3>
      <px-icon-heart @click="toggleLikeClick" />
    </div>
    <div class="div-divisor"></div>
    <figure class="figure">
      <img :src="image" alt="image" class="img-gift" />
    </figure>
  </div>
</template>

<script>
import PxIconHeart from "@/components/PxIconHeart";
export default {
  name: "PxCard",
  props: ["title", "key", "id", "image"],
  components: {
    PxIconHeart
  },
  methods: {
    toggleLikeClick() {
      let items = {
        id: this.id,
        image: this.image,
        title: this.title
      };
      this.$emit("toggleLikeClick", items);
    }
  }
};
</script>

<style>
.card {
  height: 30rem;
  width: 25rem;
  background-color: #fff;
  margin: 1.5rem;
  border-radius: 20px;
  box-shadow: -0.1em -0.1em 0.3em 0.3em rgba(0, 0, 0, 0.1),
    0 0 0 1px rgb(255, 255, 255), 0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-rows: 15% 5% 80%;
}

.wrapper-title-heart {
  display: flex;
  justify-content: space-between;
}

.title-gift {
  padding: 0.5rem 0 0 2.5rem;
  font-family: "Montserrat", sans-serif;
}

.img-gift {
  height: 19.5rem;
  width: 19.5rem;
}
.figure {
  height: 20rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.div-divisor {
  height: 0.2rem;
  background-color: #48b8eb;
  margin-top: 1rem;
}
</style>
