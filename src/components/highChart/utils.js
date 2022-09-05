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