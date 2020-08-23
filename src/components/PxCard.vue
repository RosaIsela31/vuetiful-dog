<template>
  <div class="card">
    <div class="wrapper-title-heart">
      <h3 class="title-gift">{{ title }}</h3>
      <div
        :class="isFavorite ? 'wrapper-icon-heart-liked' : 'wrapper-icon-heart'"
        class="wrapper-icon-heart"
        @click="toggleLikeClick"
      >
        <font-awesome-icon icon="heart" class="icon-heart" />
      </div>
    </div>
    <div class="div-divisor"></div>
    <figure class="figure">
      <img :src="image" alt="image" class="img-gift" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "PxCard",

  props: {
    title: {
      type: String
    },
    key: {
      type: String
    },
    id: {
      type: String
    },
    image: {
      type: String
    },
    like: {
      type: String
    }
  },

  computed: {
    isFavorite() {
      let favPictures = this.$store.state.favorites;
      let index = favPictures.findIndex(picture => picture.id === this.id);

      return index >= 0;
    }
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

.div-divisor {
  height: 0.2rem;
  background-color: #48b8eb;
  margin-top: 1rem;
}

.figure {
  height: 20rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.icon-heart {
  color: #ffffff;
}

.img-gift {
  height: 19.5rem;
  width: 19.5rem;
}

.title-gift {
  padding: 0.5rem 0 0 2.5rem;
  font-family: "Montserrat", sans-serif;
}

.wrapper-icon-heart {
  height: 2.5rem;
  width: 2.5rem;
  background-color: #c8d542;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}

.wrapper-icon-heart:hover {
  background-color: #ffffff;
  border: none;
  border: 1px solid #d90429;
}

.wrapper-icon-heart:hover .icon-heart {
  color: #d90429;
}

.wrapper-icon-heart-liked {
  height: 2.5rem;
  width: 2.5rem;
  background-color: #d90429;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}

.wrapper-title-heart {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .card {
    height: 35rem;
    width: 30rem;
  }

  .figure {
    height: 25rem;
    width: 25rem;
    margin-top: 1rem;
  }

  .img-gift {
    height: 24rem;
    width: 22rem;
  }
}

@media screen and (max-width: 480px) {
  .card {
    height: 25rem;
    width: 20rem;
  }

  .div-divisor {
    width: 20rem;
  }

  .figure {
    height: 16rem;
    width: 16rem;
    margin-top: 1rem;
  }

  .img-gift {
    height: 15rem;
    width: 15rem;
  }

  .wrapper-icon-heart {
    margin-right: 2rem;
  }
}

@media screen and (max-width: 320px) {
  .card {
    height: 20rem;
    width: 15rem;
  }

  .div-divisor {
    width: 15rem;
    margin-top: 2rem;
  }

  .figure {
    height: 13rem;
    width: 11rem;
    margin-top: 2rem;
  }

  .icon-heart {
    font-size: 0.5rem;
  }

  .img-gift {
    height: 12rem;
    width: 12rem;
  }

  .wrapper-icon-heart {
    height: 1rem;
    width: 1rem;
  }
}
</style>
