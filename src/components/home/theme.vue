<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col md="4" lg="4" sm="12" cols="12" class="">
        <h1 class="google-font mb-2 hidden-sm-and-down" style="color:#0005DF;">Explore themes</h1>
        <p class="google-font mb-2 hidden-md-and-up" style="font-size:130%">Explore themes</p>
      </v-col>
      <v-col md="8" lg="8" sm="12" cols="12">
        <v-container fluid class="pa-0 ma-0">
          <v-row>
            <v-col md="6" cols="12" sm="6" v-for="(item, index) in maindata.theme" :key="index">
              <span class="google-font mb-0 px-3 py-2" :style="{background: item.color, color: item.tcolor}" style="color:white;border-radius:8px;font-size:115%">
                {{item.name}}
              </span>
              <p class="mt-4 google-font mb-2">{{item.content}}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import maindata from '@/assets/data/main.json'
  export default {
    data:()=>({
      maindata:maindata
    })
  }
</script>
