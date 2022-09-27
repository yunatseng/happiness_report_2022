<template>
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
                <!-- {{fileName}} -->
                <img
                  style="width: 240px"
                  :src="require(`@/assets/${fileName}`)"
                  alt="Correlation Heatmap for World Happiness Report 2022"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
</template>

<script>
export default {
name: 'ExpansionPanel',
  props: {
    fileName: String,
    // isMobile: {
    //   type: Boolean,
    //   required: true,
    // },
  },

}
</script>

<style>

</style>