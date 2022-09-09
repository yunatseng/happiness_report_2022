import HighchartsMaps from "highcharts/highmaps.js";
import Highcharts from "highcharts/highcharts.js";
import addMore from "highcharts/highcharts-more";

addMore(Highcharts)

import data from "../../assets/data/map_result_left_join.json";
import mapData from "../../assets/data/map_topo.json";
// import happyDfCluster from "../../assets/data/happy_df_cluster.json";

import happyDfCluster_0 from "../../assets/data/happy_df_cluster_0.json";
import happyDfCluster_1 from "../../assets/data/happy_df_cluster_1.json";
import happyDfCluster_2 from "../../assets/data/happy_df_cluster_2.json";


export function initMap() {
    // Initialize the chart
    HighchartsMaps.mapChart("container", {
        title: {
            text: "世界地圖幸福得分總覽",
        },
        subtitle: {
            text: "Data source: <a href='https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2022'>https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2022</a>",
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: "bottom",
            },
        },

        mapView: {
            projection: {
                name: "WebMercator",
            },
            center: [10, 58],
            zoom: 3,
        },
        credits: {
            enabled: false,
        },
        colorAxis: {
            min: 0,
            max: 10,
            stops: [
                [0.2, "#263238"],
                [0.3, "#455A64"],
                [0.4, "#78909C"],
                [0.5, "#EEEEEE"],
                [0.6, "#B2EBF2"],
                [0.65, "#4DD0E1"],
                [0.78, "#0052d4"],
            ],
        },

        legend: {
            title: {
                text: "Happiness score",
            },
        },

        series: [
            {
                data,
                mapData,
                joinBy: ["iso-a2", "code"],
                name: "Happiness score / Rank",
                states: {
                    hover: {
                        color: "#18FFFF",
                    },
                },
                tooltip: {
                    valueSuffix: " / Rank: {point.rank}",
                },
            },
        ],
    });
}

export function initPackedBubble() {
    Highcharts.setOptions({
        colors: ['#0052d4','#455A64', '#4DD0E1']
    });
    Highcharts.chart('containerKmeans', {
        chart: {
          type: 'packedbubble',
          height: '80%'
        },
        title: {
          text: 'Clustering With K-Means'
        },
        subtitle: {
            text: "Note: 因版面配置，僅標註 Happiness score ±2σ (σ=1.0868) 以外的 Country",
        },
        credits: {
            enabled: false,
        },
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b><br>{point.value}m CO</br>'
        },
        plotOptions: {
          packedbubble: {
            minSize: '1%',
            maxSize: '90%',
            zMin: 2,
            zMax: 6,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02,
                enableSimulation: false
              },
            dataLabels: {
              enabled: true,
              formatter: function () {
                if (this.point.value > 7) {
                    return this.point.name;
                }
            } 
            }
          }
        },
        series: [ {
          name: 'Cluster 1',
          data: happyDfCluster_0,
        }, {
          name: 'Cluster 2',
          data: happyDfCluster_1
        }, {
          name: 'Cluster 3',
          data: happyDfCluster_2
        },]
      });
}