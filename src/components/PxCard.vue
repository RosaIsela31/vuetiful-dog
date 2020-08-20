<template>
  <div class="card"></div>
</template>

<script>
export default {
  name: "PxCard",

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
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
}
</style>
