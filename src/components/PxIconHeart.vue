<template>
  <div class="container-icon-heart">
    <div class="wrapper-icon-heart">
      <font-awesome-icon icon="heart" class="icon-heart" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PxIconHeart",
};
</script>

<style>
.container-icon-heart {
  display: flex;
  justify-content: flex-end;
}

.wrapper-icon-heart {
  height: 2.5rem;
  width: 2.5rem;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  border: 1px solid #48b8eb;
}

.wrapper-icon-heart:hover {
  background-color: #c8d542;
  border: none;
}
.icon-heart {
  color: #48b8eb;
}

.wrapper-icon-heart:hover .icon-heart {
  color: #ffffff;
}
</style>
