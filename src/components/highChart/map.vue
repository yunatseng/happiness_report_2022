<template>
  <div id="container" style="width:100%;height:550px;"></div>
</template>

<script>
import Highcharts from "highcharts/highmaps.js";
(async () => {

  const mapData = await fetch(
    'https://code.highcharts.com/mapdata/custom/world.topo.json'
  ).then(response => response.json());

  const data = await fetch(
    'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json'
  ).then(response => response.json());

  // Initialize the chart
  Highcharts.mapChart('container', {
    title: {
      text: 'Predefined zoomed area'
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },

    mapView: {
      projection: {
        name: 'WebMercator'
      },
      center: [10, 58],
      zoom: 2.8
    },

    colorAxis: {
      min: 1,
      max: 1000,
      minColor: '#E0F7FA',
      maxColor: '#00838F',
      type: 'logarithmic'
    },

    legend: {
      title: {
        text: 'Population density per km²'
      }
    },

    series: [{
      data,
      mapData,
      joinBy: ['iso-a2', 'code'],
      name: 'Population density',
      states: {
        hover: {
          color: '#18FFFF'
        }
      },
      tooltip: {
        valueSuffix: '/km²'
      }
    }]
  });
})();

export default {

}
</script>

<style>

</style>