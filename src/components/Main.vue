<template>
  <v-container fluid>
    <v-row>
      <v-img
        class="white--text"
        src="../assets/bg.jpg"
        :lazy-src="`https://picsum.photos/id/11/10/6`"
        :height="$vuetify.breakpoint.smAndDown ? '100%' : '250'"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5" />
          </v-row>
        </template>
        <v-container class="fill-height">
          <v-row style="justify-content: space-around; align-items: center">
            <div class="text" style="margin-left: -100px; margin-bottom: 150px">
              <h1>World Happiness Report</h1>
            </div>
            <div class="text">
              <h2>2022</h2>
            </div>
          </v-row>
        </v-container>
      </v-img>
    </v-row>
    <v-row>
      <v-col class="py-0 px-0" cols="12">
        <div
          style="line-height: 1.7em; font-weight: 400; font-size: 19px"
          class="ma-5 ma-md-14 text-center text-xs-subtitle-1"
        >
          《世界幸福報告》（World Happiness
          Report）為聯合國為衡量可持續的幸福發展方案，所出版的國際調查報告。<br />今年是《世界幸福報告》發布的第<strong>
            10 </strong
          >週年，使用來自<strong>蓋洛普世界民意調查</strong>的數據，可在《世界幸福報告》官網上下載查看。<br />每年由永續發展解法組織（Sustainable
          Development Solutions Network, SDSN）<sup>[1]</sup>
          出版，並利用<strong> Cantril 階梯 </strong
          ><sup>[2]</sup> 方法來進行調查。
          <v-alert
            outlined
            color="cyan "
            class="mt-4 text-subtitle-1 text-md-h6"
          >
            <strong>🪜 Cantril 階梯 🪜</strong><br />
            受訪者被要求想像一個階梯，從下到上階梯的編號分別是<strong>零</strong>到<strong>十</strong>。<br />十分代表最好的生活，零分則是最糟的生活。請受訪者對自己目前的生活進行階梯位置評分。</v-alert
          >
        </div>
      </v-col>
    </v-row>

    <!--  -->
    <v-row>
      <v-col class="py-0 px-0">
        <Map />
        <div
          style="line-height: 1.7em; font-weight: 400; font-size: 19px"
          class="ma-5 ma-md-14 mb-md-8 text-center text-xs-subtitle-1"
        >
          從上圖可以看出，芬蘭是世界上最快樂的國家，而其鄰國挪威、丹麥、丹麥、冰島和瑞典等，也屬於幸福指數得分相對高的前段班。<br />
          台灣排名第 26，相對於鄰居日本 (54)、韓國 (59)、中國 (72)、菲律賓
          (60)，算是獲得相當好的成績，是東亞地區的快樂冠軍。<br />
          <!-- 以色列的排名相對特殊，在隔壁同學均一片灰色的得分中，獲得了幸福指數 7.36、幸福總排名世界第九的好成績。<br> -->
          阿富汗和黎巴嫩則敬陪末座，分別拿到幸福指數倒數第一及倒數第二的成績。
          <p></p>
          在這次的調查報告中，還有其他六個指數影響了幸福分數的排名，分別是：<br />(1)
          GDP per capita、(2) Social support、(3) Healthy life expectancy、(4)
          Freedom to make life choices、(5) Generosity、(6) Perceptions of
          corruption。<br />詳細的指標定義和數據來源可參考<a
            href="#Variable_Definitions"
          >
            下方連結 (Data Sources and Variable Definitions)</a
          >
          <p></p>
          下面開始探討哪一個指標最大程度體現了幸福指數的排名，我們用相關係數矩陣來看看各指數對幸福指數的相關度。
        </div>
      </v-col>
    </v-row>

    <!-- scatter plot start -->
    <v-row>
      <v-col class="py-0 px-0" cols="12">
        <Scatter />
      </v-col>
    </v-row>

    <!-- scatter plot end -->
    <!-- packedBubble start -->
    <v-row>
      <v-col class="py-0 px-0" cols="12">
        <PackedBubble />
          <div
      style="line-height: 1.7em; font-weight: 400; font-size: 19px"
      class="ma-5 ma-md-14  text-center text-xs-subtitle-1"
    >
      這裡我們所用的分群方法稱為 k-means clustering
    </div>
      </v-col>
    </v-row>
    <!-- packedBubble end -->
    <!--  -->
    <v-row>
      <v-col cols="12" >
        <!-- <div class="ma-5 ma-md-16 text-center"> -->
          <!-- <v-alert outlined color="cyan " class="text-subtitle-1 text-md-h6"
            >延伸閱讀</v-alert
          > -->
        <!-- </div> -->
        <v-alert text color="cyan " border="left">
          <p><strong>數據方法</strong></p>
          <ul>
            <li>
              <a
                target="_blank"
                class="related-links"
                href="https://news.gallup.com/poll/105226/world-poll-methodology.aspx"
                >Gallup World Poll Methodology 蓋洛普世界民意調查方法</a
              >
            </li>
            <li>
              <a
                target="_blank"
                id="Variable_Definitions"
                class="related-links"
                href="https://happiness-report.s3.amazonaws.com/2022/Appendix_1_StatiscalAppendix_Ch2.pdf"
                >Data Sources and Variable Definitions</a
              >
            </li>
          </ul>
          <v-divider style="margin: 18px" />

          <p><strong>你可能有興趣...</strong></p>
          <ul>
            <li>
              <a
                target="_blank"
                class="related-links"
                href="https://worldhappiness.report/ed/2022/using-social-media-data-to-capture-emotions-before-and-during-covid-19/"
                >Using Social Media Data to Capture Emotions Before and During
                COVID-19</a
              >
            </li>
            <li>
              <a
                target="_blank"
                class="related-links"
                href="https://worldhappiness.report/ed/2020/the-nordic-exceptionalism-what-explains-why-the-nordic-countries-are-constantly-among-the-happiest-in-the-world/"
                >What Explains Why the Nordic Countries Are Constantly Among the
                Happiest in the World</a
              >
            </li>
            <li>
              <a
                target="_blank"
                class="related-links"
                href="https://worldpopulationreview.com/country-rankings/suicide-rate-by-country"
                >Suicide Rate by Country 2022</a
              >
            </li>
          </ul>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Map from "../components/highChart/map.vue";
import PackedBubble from "../components/highChart/packedBubble.vue";
import Scatter from "./plotlyChart/scatter.vue";

export default {
  name: "Main",
  components: {
    Map,
    Scatter,
    PackedBubble,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>
<style>
a {
  text-decoration: none;
}
h1 {
  color: #fffffc;
  text-align: center;
  font-size: 3em;
  font-family: "Comic Sans MS", cursive, LiSu, sans-serif;
  letter-spacing: 3px;
}
h2 {
  color: #fffffc;
  text-align: center;
  font-size: 1.8em;
  font-family: "Comic Sans MS", cursive, LiSu, sans-serif;
  letter-spacing: 1px;
}

.text {
}
.related-links {
  font-style: 14px;
}
.related-links:hover {
  color: #00e5ff;
}
</style>
