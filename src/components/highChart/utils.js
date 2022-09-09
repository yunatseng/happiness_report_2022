import HighchartsMaps from "highcharts/highmaps.js";
import Highcharts from "highcharts/highcharts.js";
import addMore from "highcharts/highcharts-more";

addMore(Highcharts)

import data from "../../assets/data/map_result_left_join.json";
import mapData from "../../assets/data/map_topo.json";
import happyDfCluster from "../../assets/data/happy_df_cluster.json";

const happyDfCluster_0 = happyDfCluster.filter((i)=>i.cluster === 0)

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

export function initPackedBubble(){
    Highcharts.chart('containerKmeans', {
        chart: {
          type: 'packedbubble',
          height: '100%'
        },
        title: {
          text: 'Carbon emissions around the world (2014)'
        },
        credits: {
            enabled: false,
            },
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
        },
        plotOptions: {
          packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
              gravitationalConstant: 0.05,
              splitSeries: true,
              seriesInteraction: false,
              dragBetweenSeries: true,
              parentNodeLimit: true
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}',
            //   filter: {
            //     property: 'y',
            //     operator: '>',
            //     value: 250
            //   },
              style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal'
              }
            }
          }
        },
        series: [{
          name: 'Cluster_0 (Kmeans 分組：0)',
          data: happyDfCluster_0
        }, {
          name: 'Africa',
          data: [{
            name: "Senegal",
            value: 8.2
          },
          {
            name: "Cameroon",
            value: 9.2
          },
          {
            name: "Zimbabwe",
            value: 13.1
          },
          {
            name: "Ghana",
            value: 14.1
          },
          {
            name: "Kenya",
            value: 14.1
          },
          {
            name: "Sudan",
            value: 17.3
          },
          {
            name: "Tunisia",
            value: 24.3
          },
          {
            name: "Angola",
            value: 25
          },
          {
            name: "Libya",
            value: 50.6
          },
          {
            name: "Ivory Coast",
            value: 7.3
          },
          {
            name: "Morocco",
            value: 60.7
          },
          {
            name: "Ethiopia",
            value: 8.9
          },
          {
            name: "United Republic of Tanzania",
            value: 9.1
          },
          {
            name: "Nigeria",
            value: 93.9
          },
          {
            name: "South Africa",
            value: 392.7
          }, {
            name: "Egypt",
            value: 225.1
          }, {
            name: "Algeria",
            value: 141.5
          }]
        }, {
          name: 'Oceania',
          data: [{
            name: "Australia",
            value: 409.4
          },
          {
            name: "New Zealand",
            value: 34.1
          },
          {
            name: "Papua New Guinea",
            value: 7.1
          }]
        }, {
          name: 'North America',
          data: [{
            name: "Costa Rica",
            value: 7.6
          },
          {
            name: "Honduras",
            value: 8.4
          },
          {
            name: "Jamaica",
            value: 8.3
          },
          {
            name: "Panama",
            value: 10.2
          },
          {
            name: "Guatemala",
            value: 12
          },
          {
            name: "Dominican Republic",
            value: 23.4
          },
          {
            name: "Cuba",
            value: 30.2
          },
          {
            name: "USA",
            value: 5334.5
          }, {
            name: "Canada",
            value: 566
          }, {
            name: "Mexico",
            value: 456.3
          }]
        }, {
          name: 'South America',
          data: [{
            name: "El Salvador",
            value: 7.2
          },
          {
            name: "Uruguay",
            value: 8.1
          },
          {
            name: "Bolivia",
            value: 17.8
          },
          {
            name: "Trinidad and Tobago",
            value: 34
          },
          {
            name: "Ecuador",
            value: 43
          },
          {
            name: "Chile",
            value: 78.6
          },
          {
            name: "Peru",
            value: 52
          },
          {
            name: "Colombia",
            value: 74.1
          },
          {
            name: "Brazil",
            value: 501.1
          }, {
            name: "Argentina",
            value: 199
          },
          {
            name: "Venezuela",
            value: 195.2
          }]
        }, {
          name: 'Asia',
          data: [{
            name: "Nepal",
            value: 6.5
          },
          {
            name: "Georgia",
            value: 6.5
          },
          {
            name: "Brunei Darussalam",
            value: 7.4
          },
          {
            name: "Kyrgyzstan",
            value: 7.4
          },
          {
            name: "Afghanistan",
            value: 7.9
          },
          {
            name: "Myanmar",
            value: 9.1
          },
          {
            name: "Mongolia",
            value: 14.7
          },
          {
            name: "Sri Lanka",
            value: 16.6
          },
          {
            name: "Bahrain",
            value: 20.5
          },
          {
            name: "Yemen",
            value: 22.6
          },
          {
            name: "Jordan",
            value: 22.3
          },
          {
            name: "Lebanon",
            value: 21.1
          },
          {
            name: "Azerbaijan",
            value: 31.7
          },
          {
            name: "Singapore",
            value: 47.8
          },
          {
            name: "Hong Kong",
            value: 49.9
          },
          {
            name: "Syria",
            value: 52.7
          },
          {
            name: "DPR Korea",
            value: 59.9
          },
          {
            name: "Israel",
            value: 64.8
          },
          {
            name: "Turkmenistan",
            value: 70.6
          },
          {
            name: "Oman",
            value: 74.3
          },
          {
            name: "Qatar",
            value: 88.8
          },
          {
            name: "Philippines",
            value: 96.9
          },
          {
            name: "Kuwait",
            value: 98.6
          },
          {
            name: "Uzbekistan",
            value: 122.6
          },
          {
            name: "Iraq",
            value: 139.9
          },
          {
            name: "Pakistan",
            value: 158.1
          },
          {
            name: "Vietnam",
            value: 190.2
          },
          {
            name: "United Arab Emirates",
            value: 201.1
          },
          {
            name: "Malaysia",
            value: 227.5
          },
          {
            name: "Kazakhstan",
            value: 236.2
          },
          {
            name: "Thailand",
            value: 272
          },
          {
            name: "Taiwan",
            value: 276.7
          },
          {
            name: "Indonesia",
            value: 453
          },
          {
            name: "Saudi Arabia",
            value: 494.8
          },
          {
            name: "Japan",
            value: 1278.9
          },
          {
            name: "China",
            value: 10540.8
          },
          {
            name: "India",
            value: 2341.9
          },
          {
            name: "Russia",
            value: 1766.4
          },
          {
            name: "Iran",
            value: 618.2
          },
          {
            name: "Korea",
            value: 610.1
          }]
        }]
      });

}