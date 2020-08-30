<template>
  <v-main>
    <v-container fluid class="my-0 py-0 mt-5 mb-8">
      <v-row align="start" justify="center" class="my-0 py-0">
        <v-col md="2" lg="2" sm="11" cols="12" class="">
          <h1 class="google-font mt-4">FAQ</h1>
          <p class="google-font my-0">Need Answers?</p>
          <p class="google-font my-0">Find them here.</p>
        </v-col>
        <v-col md="8" lg="8" sm="11" cols="12" class="mt-8">
          <!-- <p class="google-font">DevFest India - India's biggest developer conclave with 40+ GDG communities. Separated by distance, united by passion.</p> -->
          <div v-for="(item,i) in faqData" :key="i">
            <p class="my-0 google-font" style="color:#0005DF;font-size:105%"><b>{{i+1}}. {{item.name}}</b></p>
            <p class="mb-4">{{item.des}}</p>
          </div>

          <!-- <v-expansion-panels accordion flat class="elevation-0" style="border:1px solid #e0e0e0">
            <v-expansion-panel v-for="(item,i) in faqData" :key="i">
              <v-expansion-panel-header class="google-font">{{item.name}}</v-expansion-panel-header>
              <v-expansion-panel-content 
              :class="$vuetify.theme.dark == true?'grey darken-3':'grey lighten-4'"
              class="google-font py-3">
              {{item.des}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels> -->
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import data from '../assets/data/faq.json';
export default {
  data() {
    return {
      faqData: data
    };
  }
};
</script>