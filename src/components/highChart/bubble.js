import Highcharts from "highcharts/highcharts.js";
import addMore from "highcharts/highcharts-more";

addMore(Highcharts)

import happyDfCluster_0 from "../../assets/data/happy_df_cluster_0.json";
import happyDfCluster_1 from "../../assets/data/happy_df_cluster_1.json";
import happyDfCluster_2 from "../../assets/data/happy_df_cluster_2.json";

export function initPackedBubble() {
    Highcharts.setOptions({
        colors: ['#1444d5','#455A64', '#4DD0E1']
    });
    Highcharts.chart('containerKmeans', {
        chart: {
          type: 'packedbubble',
          height: '100%'
        },
        title: {
          text: 'Clustering With K-Means'
        },
        subtitle: {
            text: "Note: 因版面配置，僅標註 Happiness score ±σ (σ=1.0868) 以外的 Country",
        },
        credits: {
            enabled: false,
        },
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name} / Rank:{point.RANK}</b><br>Happiness score:{point.value}</br>GDP:{point.GDP per capita}</br>Social support:{point.Social support}</br>Healthy:{point.Healthy life expectancy}</br>Freedom:{point.Freedom to make life choices}</br>Generosity:{point.Generosity}</br>Corruption:{point.Perceptions of corruption}</br>'
        },
        plotOptions: {
          packedbubble: {
            minSize: '1%',
            maxSize: '85%',
            zMin: 2,
            zMax: 6,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02,
                // enableSimulation: false
              },
            dataLabels: {
              enabled: true,
              style: {
                fontWeight: 'normal',
                color: 'black',
                // textOutline: 'none',
                fontFamily: 'Arial, Helvetica, Clean, sans-serif'
            },
              formatter: function () {
                if (this.point.value > 6.65 || this.point.value < 4.4) {
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