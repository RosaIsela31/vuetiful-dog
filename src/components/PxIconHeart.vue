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
</style>
