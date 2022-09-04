<template>
  <div id="myDiv"></div>
</template>

<script>
import Plotly from "plotly.js-dist-min";
import { csv } from "d3";

export default {
  async mounted() {
    const rows = await csv(
      "https://raw.githubusercontent.com/plotly/datasets/master/iris-data.csv"
    );

    // console.log(rows);

    function unpack(rows = [], key) {
      //   console.log(rows);
      return rows.map(function (row) {
        return row[key.replace(".", " ")];
      });
    }

    let colors = [];
    for (let i = 0; i < unpack(rows, "class").length; i++) {
      if (unpack(rows, "class")[i] == "Iris-setosa") {
        colors.push(0);
      } else if (unpack(rows, "class")[i] == "Iris-versicolor") {
        colors.push(0.5);
      } else if (unpack(rows, "class")[i] == "Iris-virginica") {
        colors.push(1);
      }
    }

    var pl_colorscale = [
      [0.0, "#19d3f3"],
      [0.333, "#19d3f3"],
      [0.333, "#e763fa"],
      [0.666, "#e763fa"],
      [0.666, "#636efa"],
      [1, "#636efa"],
    ];

    var axis = () => ({
      showline: false,
      zeroline: false,
      gridcolor: "#ffff",
      ticklen: 4,
    });

    var data = [
      {
        type: "splom",
        dimensions: [
          { label: "sepal length", values: unpack(rows, "sepal length") },
          { label: "sepal width", values: unpack(rows, "sepal width") },
          { label: "petal length", values: unpack(rows, "petal length") },
          { label: "petal width", values: unpack(rows, "petal width") },
        ],
        text: unpack(rows, "class"),
        marker: {
          color: colors,
          colorscale: pl_colorscale,
          size: 7,
          line: {
            color: "white",
            width: 0.5,
          },
        },
      },
    ];

    var layout = {
      title: "Iris Data set",
      height: 800,
      width: 800,
      autosize: false,
      hovermode: "closest",
      dragmode: "select",
      plot_bgcolor: "rgba(240,240,240, 0.95)",
      xaxis: axis(),
      yaxis: axis(),
      xaxis2: axis(),
      xaxis3: axis(),
      xaxis4: axis(),
      yaxis2: axis(),
      yaxis3: axis(),
      yaxis4: axis(),
    };

    Plotly.newPlot("myDiv", data, layout);
  },
};
</script>

<style>
.svg-container {
  margin: 0 auto !important;
}
</style>