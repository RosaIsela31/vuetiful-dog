<template>
  <div class="card">
    <div class="wrapper-title-heart">
      <h3 class="title-gift">{{ title }}</h3>
      <div @click="toggleLikeClick">
        <px-icon-heart />
      </div>
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
  props: ["title", "key", "id", "image", "like"],
  components: {
    PxIconHeart
  },
  methods: {
    toggleLikeClick() {
      let data = {
        id: this.id,
        like: !this.like,
        image: this.image,
        title: this.title
      };
      this.$emit("toggleLikeClick", data);
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

@media screen and (max-width: 768px) {
  .card {
    height: 35rem;
    width: 30rem;
  }

  .img-gift {
    height: 24rem;
    width: 22rem;
  }
  .figure {
    height: 25rem;
    width: 25rem;
    margin-top: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .card {
    height: 25rem;
    width: 20rem;
  }

  .img-gift {
    height: 15rem;
    width: 15rem;
  }
  .figure {
    height: 16rem;
    width: 16rem;
    margin-top: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .div-divisor {
    width: 20rem;
  }
}

@media screen and (max-width: 320px) {
  .card {
    height: 20rem;
    width: 15rem;
  }

  .img-gift {
    height: 12rem;
    width: 12rem;
  }
  .figure {
    height: 13rem;
    width: 11rem;
    margin-top: 2rem;
  }

  .div-divisor {
    width: 15rem;
    margin-top: 2rem;
  }
}
</style>
