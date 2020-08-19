<template>
  <header class="header">
    <div class="wrapper-icon-title">
      <div class="wrapper-dog">
        <font-awesome-icon icon="dog" class="dog" />
      </div>
      <h2 class="title">Vuetiful Dog</h2>
    </div>
    <div class="divisor-line"></div>
  </header>
</template>

<script>
export default {
  name: "PxHeader",
};
</script>

<style>
.header {
  background-color: #000;
  color: #ffffff;
  height: 9rem;
}

.title {
  font-family: "Lobster", cursive;
}

.dog {
  font-size: 3rem;
}

.wrapper-icon-title {
  display: flex;
}

.wrapper-dog {
  background-color: #c8d542;
  width: 4rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin: 0.5rem;
}

.divisor-line {
  height: 0.2rem;
  background-color: #48b8eb;
  margin-top: 0.5rem;
}
</style>
