<template>
  <div class="wrapper-icon-heart">
    <font-awesome-icon icon="heart" class="icon-heart" />
  </div>
</template>

<script>
export default {
  name: "PxIconHeart"
};
</script>

<style>
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
  background-color: #d90429;
  border: none;
}
.icon-heart {
  color: #ffffff;
}

.wrapper-icon-heart:hover .icon-heart {
  color: #ffffff;
}

@media screen and (max-width: 480px) {
  .wrapper-icon-heart {
    margin-right: 2rem;
  }
}

@media screen and (max-width: 320px) {
  .wrapper-icon-heart {
    height: 1rem;
    width: 1rem;
  }

  .icon-heart {
    font-size: 0.5rem;
  }
}
</style>
