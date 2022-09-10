<template>
  <div>
    <div id="scatterAll"></div>
    <div class="mx-5 mx-md-14 text-center">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header style="font-size: 19px"
            >Correlation Heatmap<span class="cyan--text" style="font-size: 16px"
              >（可點我對照上圖）</span
            ></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <img
              style="width: 850px; margin-left: -100px"
              src="../../assets/heatmap_all.png"
              alt="Correlation Heatmap for World Happiness Report 2022"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div style="display: flex; justify-content: space-evenly">
      <div>
        <div id="High"></div>
        <div class="mx-5 mx-md-14 text-center">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header style="font-size: 16px"
                >Correlation Heatmap<span
                  class="cyan--text"
                  style="font-size: 14px"
                  >（可點我對照上圖）</span
                ></v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <img
                  style="width: 240px"
                  src="../../assets/happy_high.png"
                  alt="Correlation Heatmap for World Happiness Report 2022"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
      <div><div id="Middle"></div> <div class="mx-5 mx-md-14 text-center">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header style="font-size: 16px"
                >Correlation Heatmap<span
                  class="cyan--text"
                  style="font-size: 14px"
                  >（可點我對照上圖）</span
                ></v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <img
                  style="width: 240px"
                  src="../../assets/happy_mid.png"
                  alt="Correlation Heatmap for World Happiness Report 2022"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div></div>
      
      <div><div id="Low"></div> <div class="mx-5 mx-md-14 text-center">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header style="font-size: 16px"
                >Correlation Heatmap<span
                  class="cyan--text"
                  style="font-size: 14px"
                  >（可點我對照上圖）</span
                ></v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <img
                  style="width: 240px"
                  src="../../assets/happy_low.png"
                  alt="Correlation Heatmap for World Happiness Report 2022"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div></div>
    </div>
  </div>
</template>

<script>
import GDP_high from "../../assets/data/GDP_high.csv";
import GDP_mid from "../../assets/data/GDP_mid.csv";
import GDP_low from "../../assets/data/GDP_low.csv";

import { scatterAll } from "./utils";
import { GDPScatter } from "./utils";

export default {
  data() {
    return {};
  },
  mounted() {
    scatterAll();
    GDPScatter(GDP_high, "High");
    GDPScatter(GDP_mid, "Middle");
    GDPScatter(GDP_low, "Low");
  },
};
</script>

<style>
.svg-container {
  margin: 0 auto !important;
}
</style>