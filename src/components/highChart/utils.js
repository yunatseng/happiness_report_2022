import Highcharts from "highcharts/highmaps.js";
import data from "../../assets/data/map_result_left_join.json";
import mapData from "../../assets/data/map_topo.json";

export function initMap() {    
    // Initialize the chart
    Highcharts.mapChart("container", {
        title: {
        text: "世界地圖幸福得分總覽",
        },
        subtitle: {
        text: "Source: https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2022",
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
            [0.18, "#37474F"],
            [0.5, "#E0F7FA"],
            [0.7, "#00B8D4"],
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