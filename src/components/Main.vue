<template>
  <v-container fluid>
    <v-row>
      <v-img
        class="grey lighten-5 white--text"
        src="../assets/bg.jpg"
        :lazy-src="`https://picsum.photos/10/6?image=1`"
        :height="$vuetify.breakpoint.smAndDown?'100%':'400'"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            />
          </v-row>
        </template>
        <v-container class="fill-height">
          <v-row
            align="center"
            :class="$vuetify.breakpoint.smAndDown?'pl-4 pr-6':''"
          >
            <strong class="display-4 font-weight-regular">World Happiness</strong>
            <v-row justify="end">
              <div class="headline font-weight-light">
                2022
              </div>
    
            </v-row>
          </v-row>
        </v-container>
      </v-img>
    </v-row>
    <v-row>
      <v-col class="py-0 px-0" cols="12" >
        <div style="line-height:1.7em;font-weight: 400;font-size:19px;" class="ma-5 ma-md-14 text-center text-xs-subtitle-1 ">
          《世界幸福報告》（World Happiness Report）為聯合國為衡量可持續的幸福發展方案，所出版的國際調查報告。<br>今年是《世界幸福報告》發布的第<strong> 10 </strong>週年，使用來自<strong>蓋洛普世界民意調查</strong>的數據，可在《世界幸福報告》官網上下載查看。<br>每年由永續發展解法組織（Sustainable Development Solutions Network, SDSN）<sup>[1]</sup> 出版，並利用<strong> Cantril 階梯 </strong><sup>[2]</sup> 方法來進行調查。
          <v-alert
            outlined
            color="cyan darken-1"
            class="mt-4 text-subtitle-1 text-md-h6"
          >
            <strong>🪜 Cantril 階梯 🪜</strong><br />
            受訪者被要求想像一個階梯，從下到上階梯的編號分別是<strong>零</strong>到<strong>十</strong>。<br>十分代表最好的生活，零分則是最糟的生活。請受訪者對自己目前的生活進行階梯位置評分。</v-alert>
        </div>
      </v-col>
    </v-row>

<!--  -->
    <v-row>
      <v-col
        class="py-0 px-0"
      >
<Map/>
      </v-col>
    </v-row>

<!--  -->

    <v-row>
      <v-col cols="12" style="">
        <div class="ma-5 ma-md-16 text-center">
          <v-alert
            outlined
            color="cyan darken-1"
            class="text-subtitle-1 text-md-h6"
            >延伸閱讀</v-alert
          >
        </div>
        <v-alert text color="cyan darken-1" border="left">
          <p><strong>相關法條討論</strong></p>
          <ul>
            <li>
              <a
                class="related-links"
                href="https://drive.google.com/file/d/103ddeuTXk4tA3R38unoXdotlxYCEWbCd/view"
                >民間版《精神衛生法》說明及全文</a
              >
            </li>
            <li>
              <a
                class="related-links"
                href="https://isbn.ncl.edu.tw/NEW_ISBNNet/main_DisplayRecord.php?&Pact=Display&Pstart=1"
                >正常與瘋狂的天秤: 談精神疾病與司法鑑定</a
              >
            </li>
            <li>
              <a
                class="related-links"
                href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0020030"
                >現行精神衛生法條文</a
              >
            </li>
          </ul>
          <v-divider style="margin: 18px" />

          <p><strong>相關新聞</strong></p>
          <ul>
            <li>
              <a
                class="related-links"
                href="https://www.cna.com.tw/news/firstnews/202111210025.aspx"
                >超商店員疑勸戴口罩遭刺死 犯嫌遭羈押</a
              >
            </li>
            <li>
              <a
                class="related-links"
                href="https://www.cna.com.tw/news/asoc/202110200372.aspx"
                >未戴口罩被提醒惱羞毆打超商店員顧客 桃園男送辦</a
              >
            </li>
            <li>
              <a
                class="related-links"
                href="https://www.cna.com.tw/news/asoc/202110270059.aspx"
                >不滿被要求戴口罩 台中醉男毆打店員遭法辦</a
              >
            </li>
          </ul>
        </v-alert>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12" style="">
        <div id="disqus_thread"></div>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import PTT_DATA from "../data/data";
import Map from "../components/highChart/map.vue"
/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
/*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
(function () {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://ptt-1.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();

export default {
  name: "Main",
  components: {
    Map
  },
  data: () => ({}),
  computed: {
    slides() {
      return this.shuffleArray(PTT_DATA).slice(0, 14);
    },
  },
  methods: {
    shuffleArray(inputArray) {
      return inputArray.sort(() => Math.random() - 0.5);
    },
    textWithoutUrl(text) {
      const textArr = text.split(" ");
      const plainText = textArr.filter(
        (i) => !(i.includes("http") || i.length === 0)
      );
      return plainText.join(" ");
    },
    textImgUrl(text) {
      const textArr = text.split(" ");
      const imgUrl = textArr.filter((i) => i.includes("http"));
      return imgUrl;
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
.carousel-text1 {
  font-size: 18px !important;
  width: 100% !important;
  font-weight: bold;
  height: 60px;
}
.carousel-text2 {
  margin-top: 15px;
  width: 100% !important;
  font-size: 16px !important;
}
.carousel-img {
  width: 60% !important;
  margin-top: 30px !important;
  margin-left: 0 !important;
}
.related-links {
  font-style: 14px;
  color: #231306 !important;
}
</style>
