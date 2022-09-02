<template>
  <div id="container" style="width:100%;height:570px;"></div>
</template>

<script>
import Highcharts from "highcharts/highmaps.js";
// import mapData from "../../assets/data/map_topo.json"
import data from "../../assets/data/map_result_left_join.json";
(async () => {

  const mapData = await fetch(
    'https://code.highcharts.com/mapdata/custom/world.topo.json'
  ).then(response => response.json());

  // const data = await fetch(
  //   'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json'
  // ).then(response => response.json());

  // Initialize the chart
  Highcharts.mapChart('container', {
    title: {
      text: '世界地圖幸福得分總覽'
    },
subtitle: {
    text: 'Source: https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2022'
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
credits: {
    enabled: false
  },
    colorAxis: {
      min: 0,
      max: 10,
       stops: [
            [0, '#0091EA'],
            [0.5, '#E1F5FE'],
            [1, '#00B8D4']
        ],
    },

    legend: {
      title: {
        text: 'Happiness score'
      }
    },

    series: [{
      data,
      mapData,
      joinBy: ['iso-a2', 'code'],
      name: 'Happiness score / Rank',
      states: {
        hover: {
          color: '#18FFFF'
        }
      },
      tooltip: {
        valueSuffix: ' / Rank: {point.rank}'
      }
    }]
  });
})();

export default {

}
</script>

<style>

</style>