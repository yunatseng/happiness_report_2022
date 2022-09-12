<template>
  <div>
    <div id="scatterAll"></div>
    <div class="mx-5 mx-md-16 text-center">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header style="font-size: 19px">
            Correlation Heatmap
            <span class="cyan--text" style="font-size: 16px"
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

    <div
      style="line-height: 1.7em; font-weight: 400; font-size: 19px"
      class="ma-5 ma-md-14 mb-md-5 text-center text-xs-subtitle-1"
    >
      從上圖結果可以看出，和幸福指數正相關最高的是 Social support（社會支持）。
      這個指標的具體問題為：<br />「如果您遇到麻煩，是否有親戚或朋友可以在需要時提供幫助？」從結果來看，在遇到困難時身邊有救助資源的樣本，通常其幸福感的分數也比較高。
      <p></p>
      第二相關的指標則為 GDP per capita（人均
      ​​GDP）。其指標的具體定義為：<strong>購買力平價</strong> (PPP)
      <sup>[1]</sup
      >，為一種貨幣在不同國家，購買相同商品時的價格比率。<br />由這也可以說明雖然芬蘭在
      GDP 的指標排名為第 19 名，但卻是最幸福國家的原因之一。台灣的 GDP
      排名雖在芬蘭之上，幸福排名卻在第 26
      名，也代表我們其他指標落後於芬蘭等排行榜前幾名國家，需要繼續努力。
      <p></p>
      和幸福指數最沒有相關性的指標為：Generosity（慷慨度），其具體問題為：「您在過去一個月內是否向慈善機構捐款過？」。令人好奇的是該指標第一名的國家為
      Indonesia（印尼）<sup>[1]</sup>，日本是倒數第二名，台灣則是倒數第 23
      名，屬於後段班的成績。
      <p></p>
      下面特別針對 GDP per capita 這個指標來探討，在高/中/低收入國家
      <sup>[1]</sup> 中該指標對於幸福指數的相關程度。
    </div>

    <div style="display: flex; justify-content: space-evenly">
      <div>
        <div id="High"></div>
        <ExpansionPanel :fileName="`happy_high.png`" />
      </div>
      <div>
        <div id="Middle"></div>
        <ExpansionPanel :fileName="`happy_mid.png`" />
      </div>

      <div>
        <div id="Low"></div>
        <ExpansionPanel :fileName="`happy_low.png`" />
      </div>
    </div>

    <div
      style="line-height: 1.7em; font-weight: 400; font-size: 19px"
      class="ma-5 mx-md-16 my-md-12 text-center text-xs-subtitle-1"
    >
      從上圖結果可以看出，高 GDP 國家群幸福指數約落在 6~8 分之間，但整體並沒有出現顯著的幸福正相關。中 GDP 國家群幸福指數約落在 4~6 分之間，也是和幸福指數相關性最高的一群。低 GDP 國家群幸福指數約落在 2~5 分之間，並且是和幸福指數最沒有相關性的一群。<br>
      整體而言雖然 GDP 指標仍是和幸福指數有高度正相關，但若在該指標裡再細分群組，仍然呈現出分別不太一樣的相關性。
      <p></p>
      下面我們來看看，若是由機器的觀點來看會如何把資料分群？<br>以下我們完全不給機器任何的額外資訊，單純把整個資料集送給電腦運算，讓機器用演算法幫我們分群 <sup>[1]</sup>，來看看機器會怎麼分～
    </div>
  </div>
</template>

<script>
import GDP_high from "../../assets/data/GDP_high.csv";
import GDP_mid from "../../assets/data/GDP_mid.csv";
import GDP_low from "../../assets/data/GDP_low.csv";

import { scatterAll } from "./utils";
import { GDPScatter } from "./utils";
import ExpansionPanel from "./expansionPanel.vue";

export default {
  data() {
    return {};
  },
  components: {
    ExpansionPanel,
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