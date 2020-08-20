<template>
  <div class="container">
    <px-card />
    <px-card />
    <px-card />
    <px-card />
    <px-card />
  </div>
</template>

<script>
import PxCard from "@/components/PxCard";
export default {
  name: "Home",
  components: { PxCard },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 34% 34% 34%;
}
</style>
