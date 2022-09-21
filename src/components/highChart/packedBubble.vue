<template>
  <div id="containerKmeans" class="container_kmeans"></div>
</template>

<script>
import { initPackedBubble } from './bubble';

export default {
 mounted() {
    initPackedBubble();
  }
}
</script>

<style>
.container_kmeans {
  min-width: 320px;
  max-width: 800px;
  margin: 1em auto;
}
</style>