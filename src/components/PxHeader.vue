<template>
  <header class="header">
    <div class="wrapper-icon-title">
      <div class="wrapper-dog">
        <font-awesome-icon icon="dog" class="icon-dog" />
      </div>
      <h2 class="title">Vuetiful Dog</h2>
    </div>
    <div class="divisor-line"></div>
    <div class="wrapper-list">
      <ul>
        <li>
          <font-awesome-icon icon="paw" class="icon-list" />
          Random
        </li>
        <li>
          <font-awesome-icon icon="heart" class="icon-list" />
          Favorites
        </li>
      </ul>
    </div>
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
  height: 10rem;
  font-family: "Montserrat", sans-serif;
}

.title {
  font-family: "Lobster", cursive;
}

.icon-dog {
  font-size: 3rem;
}

.icon-list {
  color: #c8d542;
  margin-right: 0.3rem;
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
  margin: 0.7rem;
}

.divisor-line {
  height: 0.2rem;
  background-color: #48b8eb;
  margin-top: 0.5rem;
}

ul {
  list-style: none;
  text-align: center;
}

li {
  display: inline;
  text-align: center;
  margin: 0 50px 0 0;
}

.wrapper-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
