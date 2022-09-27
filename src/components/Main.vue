<template>
  <v-container fluid>
    <v-row>
      <v-img
        class="white--text"
        src="../assets/bg.jpg"
        :lazy-src="`https://picsum.photos/id/11/10/6`"
        :height="isMobile ? '230' : '250'"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5" />
          </v-row>
        </template>
        <v-container class="fill-height">
          <v-row align="center" justify="center">
            <div class="text">
              <h1 :class="isMobile ? 'banner_title-mobile' : 'banner_title-pc'">World Happiness Report</h1>
            </div>
            <div class="text">
              <h2 :class="isMobile ? 'banner_subtitle-mobile' : 'banner_subtitle-pc'">2022</h2>
            </div>
          </v-row>
        </v-container>
      </v-img>
    </v-row>
    <v-row>
      <v-col class="py-0 px-0" cols="12">
        <div
          style="line-height: 1.7em; font-weight: 400; "
          class="ma-5 ma-md-14 text-center text-md-h6 text-body-2"
        >
          《世界幸福報告》（World Happiness
          Report）為聯合國為衡量可持續的幸福發展方案，所出版的國際調查報告。<br />今年是《世界幸福報告》發布的第<strong>
            10 </strong
          >週年，使用來自<strong>蓋洛普世界民意調查</strong>的數據，可在《世界幸福報告》官網上下載查看。<br />每年由永續發展解法組織（Sustainable
          Development Solutions Network, SDSN）
          <!-- <sup>[1]</sup> -->
          出版，並利用<strong> Cantril 階梯 </strong>
          <!-- <sup>[2]</sup> -->
          方法來進行調查。
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
          style="line-height: 1.7em; font-weight: 400; "
          class="ma-5 ma-md-14 mb-md-8 text-center text-md-h6  text-body-2"
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
          corruption。<br />詳細的指標定義和數據來源可參考
            網頁下方的<a
            href="#Variable_Definitions"
          >「數據方法」 (Data Sources and Variable Definitions)</a
          >
          <p></p>
          下面開始探討哪一個指標最大程度體現了幸福指數的排名，我們用相關係數矩陣來看看各指數對幸福指數的相關度。
        </div>
      </v-col>
    </v-row>

    <!-- scatter plot start -->
    <v-row>
      <v-col class="py-0 px-0" cols="12">
        <Scatter :isMobile ="isMobile"/>
      </v-col>
    </v-row>

    <!-- scatter plot end -->
    <!-- packedBubble start -->
    <v-row>
      <v-col class="py-0 px-0" cols="12">
        <PackedBubble />
        <div
          style="line-height: 1.7em; font-weight: 400; "
          class="ma-5 mx-md-16 my-md-12 text-center text-md-h6  text-body-2"
        >
          這裡我們所用的分群方法稱為<strong> k-means clustering</strong
          >（k-平均演算法)
          <!-- <sup>[1]</sup> -->
          ，<br />只要告訴機器我們想分成幾（k）群，機器就會將整體
          input 資料利用數學運算來幫我們分群。<br />首先我們看一下各群的資料中心（Cluster
          Center），來大致判斷機器分的群有哪些特性：
          <v-simple-table dense class="ma-md-14 mb-md-8 mt-md-8" :class="isMobile ? 'ma-3' : 'ma-5'">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center"></th>
                  <th class="text-center subtitle-2">Happiness score</th>
                  <th class="text-center subtitle-2">GDP per capita</th>
                  <th class="text-center subtitle-2">Social support</th>
                  <th class="text-center subtitle-2">
                    Healthy life expectancy
                  </th>
                  <th class="text-center subtitle-2">
                    Freedom to make life choices
                  </th>
                  <th class="text-center subtitle-2">Generosity</th>
                  <th class="text-center subtitle-2">
                    Perceptions of corruption
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in cluster_centers" :key="i">
                  <td v-if="!isMobile">群組 {{ i + 1 }}</td>
                  <td v-else>Group {{ i + 1 }}</td>
                  <td>{{ item[0].toFixed(3) }}</td>
                  <td>{{ item[1].toFixed(3) }}</td>
                  <td>{{ item[2].toFixed(3) }}</td>
                  <td>{{ item[3].toFixed(3) }}</td>
                  <td>{{ item[4].toFixed(3) }}</td>
                  <td>{{ item[5].toFixed(3) }}</td>
                  <td>{{ item[6].toFixed(3) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div
            style="line-height: 1.7em; font-weight: 400;"
            class="mx-md-16 my-md-12 text-left text-md-h6  text-body-2"
            :class="isMobile ? '' : 'ma-5'"
          >
            <ul>
              <li>
                <strong>群組 1</strong>：Cluster center
                每項都拿到最高的分數，可以推測此群應為幸福指數前段班的國家，Happiness
                分數整體介於 6.3~7.8 之間，唯獨香港（5.425）亦被歸類在群組 1。
              </li>
              <br>
              <li>
                <strong>群組 2</strong>：除了 Generosity（慷慨度）和 Perceptions of corruption（對政府/企業的腐敗信心程度）以外，其餘每項都拿到了最低的 Cluster center。Happiness 分數整體介於 2.2~5.4 之間，推測此群應為幸福指數排名較末的國家。另外此群的 Freedom to make life choices（對生活的選擇自由）Cluster center 約落在 0.41 分，還略高於香港在此項目所拿到的分數（0.40）。
              </li> <br>
              <li>
                <strong>群組 3</strong>：整體 Cluster center 數值位於中間，除了 Generosity（慷慨度）和 Perceptions of corruption（對政府/企業的腐敗信心程度）這兩項拿到最低分。Happiness 分數整體介於 4.3~7.4 之間，推測此群應為幸福指數排名中間的國家。另外，雖然此群的 Generosity（慷慨度）Cluster center 數值為最低，但該指標第一名的國家 Indonesia（印尼）(0.46) 亦被分配到了此群組中。
              </li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- packedBubble end -->
    <!--  -->
    <v-row>
      <v-col cols="12">
        <div class="ma-5 mx-md-16 my-md-12 text-center text-body-2">
        <v-alert outlined color="cyan" class="text-subtitle-1 text-md-h6 pa-5"
            ><strong>✍️ 心得總結 ✍️</strong><br />
            和幸福指數最具有正相關的並不是人均 GDP，而是你我身邊的社會支持網是否足夠。<br />和人均 GDP 唯一呈現負相關的指標為 Generosity（慷慨度）、和幸福指數最具有正相關性的 GDP 資料為中收入國家。<br />
            香港在 K-means 集群分析中，呈現出一個很獨特的存在。<br />此報告完成時（March 9, 2022）正開始烏俄戰爭，此因素或許會明顯的改變烏俄兩國及周遭鄰國在明年的排名。
            </v-alert>
        </div>
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
            <li>
              <a
                target="_blank"
                class="related-links"
                href="https://worldhappiness.report/faq/"
                >FAQ (e.g. What is Dystopia?)</a
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
  props: {
  isMobile: {
    type: Boolean,   
    required: true,   
  }},
  mounted(){
  },
  data: () => ({
    cluster_centers: [
      [7.05855, 1.95635, 1.17755, 0.78455, 0.6565, 0.1901, 0.3973],
      [4.431808, 0.97775, 0.615481, 0.406462, 0.409538, 0.156712, 0.122154],
      [5.935095, 1.566959, 1.036486, 0.658838, 0.555257, 0.12927, 0.112162],
    ],
  }),
  computed: {},
  methods: {},
}
</script>
<style>
.v-application .text-h6 {
  font-size: 18px !important;
}
.v-application .text-md-h6{
  font-size: 18px !important;
}
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

.text .title{
  margin-left: -100px; margin-bottom: 150px
}
.related-links {
  font-style: 14px;
}
.related-links:hover {
  color: #00e5ff;
}
.banner_title-mobile {
  font-size: 2em !important;
}
.banner_subtitle-mobile {
  margin-top: 10px;
}
.banner_subtitle-pc {
  padding-left: 48px;
}
</style>
