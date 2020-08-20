<template>
  <header class="header">
    <div class="wrapper-logo-search">
      <div class="wrapper-icon-title">
        <div class="wrapper-dog">
          <font-awesome-icon icon="dog" class="icon-dog" />
        </div>
        <h2 class="title">Vuetiful Dog</h2>
      </div>
      <div class="wrapper-search">
        <input
          type="text"
          placeholder="🔎   Write something, example: 'dog'"
          class="search"
        />
        <input type="submit" value="search" class="btn-search" />
      </div>
    </div>
    <div class="divisor-line"></div>
    <div class="wrapper-list">
      <ul>
        <li class="pointing">
          <font-awesome-icon icon="paw" class="icon-list" />
          Random
        </li>
        <li class="pointing">
          <font-awesome-icon icon="heart" class="icon-list" />
          Favorites
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "PxHeader"
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
  margin-top: 2rem;
}

.icon-dog {
  font-size: 3rem;
}

.icon-list {
  color: #c8d542;
  margin-right: 0.3rem;
}

.pointing:hover .icon-list {
  color: #48b8eb;
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
  margin: 1rem 1rem 0 1rem;
}

.wrapper-dog:hover {
  background-color: #ffffff;
}

.wrapper-dog:hover .icon-dog {
  color: #c8d542;
}

.divisor-line {
  height: 0.2rem;
  background-color: #48b8eb;
  margin-top: 1rem;
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

.search {
  -webkit-appearance: none;
  border-radius: 7px;
  width: 18rem;
  height: 2.5rem;
  margin: 1.5rem 0 0 0;
  padding-left: 0.5rem;
  border: none;
}

.btn-search {
  height: 2.6rem;
  border-radius: 7px;
  font-family: "Montserrat", sans-serif;
  background-color: #48b8eb;
  border: none;
  color: #ffffff;
  margin: 1.5rem 0 0 1rem;
}

.btn-search:hover {
  background-color: #c8d542;
}

.btn-search:focus,
.search:focus {
  outline: none;
}

.wrapper-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.wrapper-search {
  display: flex;
}

.wrapper-logo-search {
  display: grid;
  grid-template-columns: 70% 30%;
}

li:hover {
  cursor: pointer;
}

@media screen and (max-width: 1024) {
  .wrapper-logo-search {
    grid-template-columns: 100%;
  }

  .header {
    height: 14rem;
    font-family: "Montserrat", sans-serif;
  }

  .search {
    margin-left: 1rem;
    display: none;
  }
}
</style>
