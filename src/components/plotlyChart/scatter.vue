<template>
  <div id="myDiv"></div>
</template>

<script>
import Plotly from "plotly.js-dist-min";
import happy_df_without_rank from "../../assets/data/happy_df_without_rank.csv";

export default {
  async mounted() {
    const rows = happy_df_without_rank

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    const pl_colorscale = [
      [0.0, "#263238"],
      [0.2, "#263238"],
      [0.3, "#455A64"],
      [0.4, "#78909C"],
       [0.5, "#80DEEA"],
      [0.6, "#4DD0E1"],
      [0.666, "#00BCD4"],
      [0.8, "#0052d4"],
       [1, "#0052d4"],
    ];

    const axis = () => ({
      showline: false,
      zeroline: false,
      gridcolor: "#ffff",
      ticklen:2,
      tickfont:{size:10},
      titlefont:{size:12}
    });

    const data = [
      {
        type: "splom",
        dimensions: [
        {label:'Happiness', values:unpack(rows, 'Happiness score')},
        {label:'GDP / Capita', values:unpack(rows, 'GDP per capita')},
        {label:'Social support', values:unpack(rows, 'Social support')},
        {label:'Healthy life', values:unpack(rows, 'Healthy life expectancy')},
        {label:'Freedom life', values:unpack(rows, 'Freedom to make life choices')},
        {label:'Generosity', values:unpack(rows, 'Generosity')},
        {label:'Corruption', values:unpack(rows, 'Perceptions of corruption')},
      ],
        text: unpack(rows, "Country"),
        marker: {
          color: unpack(rows, "Happiness score"),
          colorscale: pl_colorscale,
          size: 4,
          line: {
            color: "white",
            width: 0.5,
          },
        },
      },
    ];

    const layout = {
      title:"Scatterplot Matrix (SPLOM) for World Happiness Report 2022<br><span style='font-size:12px;color:grey;'>Data source: <a href='https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2022'>https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2022</a></span>",
      height: 1100,
      width: 1100,
      autosize: false,
      hovermode: "closest",
      dragmode: "select",
      plot_bgcolor: "rgba(240,240,240, 0.95)",
      xaxis:axis(),
      yaxis:axis(),
      xaxis2:axis(),
      xaxis3:axis(),
      xaxis4:axis(),
      xaxis5:axis(),
      xaxis6:axis(),
      xaxis7:axis(), 
      yaxis2:axis(),
      yaxis3:axis(),
      yaxis4:axis(),
      yaxis5:axis(),
      yaxis6:axis(),
      yaxis7:axis(),
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