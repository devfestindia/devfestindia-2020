<template>
  <v-main>
    <v-container fluid class="my-0 py-0 mt-5 mb-8">
      <v-row align="start" justify="center" class="my-0 py-0">
        <v-col md="2" lg="2" sm="11" cols="11" class="">
          <h1 class="google-font mt-4">FAQ</h1>
          <p class="google-font my-0">Need Answers?</p>
          <p class="google-font my-0">Find them here.</p>
        </v-col>
        <v-col md="8" lg="8" sm="11" cols="11" class="mt-8">
        <div v-for="(item,i) in faqData" :key="i">
            <p class="my-0 google-font" style="color:#0005DF;font-size:105%"><b>{{i+1}}. {{item.name}}</b></p>
            <p class="mb-4">{{item.des}}</p>
          </div>
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