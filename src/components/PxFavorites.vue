<template>
  <div>
    <px-header />
    <div class="container">
      <px-card />
    </div>
  </div>
</template>

<script>
import PxHeader from "./PxHeader";
import PxCard from "./PxCard";
export default {
  name: "PxFavorites",
  components: { PxHeader, PxCard }
};
</script>
