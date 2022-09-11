<template>
  <div id="container" style="width: 100%; height: 600px"></div>
</template>

<script>
import { initMap } from './map';

export default {
  mounted() {
    initMap();
  }
};
</script>

<style>
</style>