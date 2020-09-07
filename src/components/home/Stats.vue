<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col md="7" lg="8" sm="12" cols="12">
        <h1 class="google-font" style="color:#0005DF;">{{maindata.eventname}}</h1>
        <p v-html="maindata.longdes">
        </p>

        <v-btn
          depressed
          style="text-transform: capitalize;border-radius:5px;border:1px solid #e0e0e0;color:#0005DF;background-color:white"
          v-if="maindata.badgeurl"
          :href="maindata.badgeurl"
          class="google-font mr-3 mb-3"
          target="_blank"
          >Get your Profile Badge</v-btn
        >

        <v-btn
          text
          v-if="maindata.mainhashtag"
          style="text-transform: capitalize;border-radius:5px;color:#0005DF;background-color:white"
          :href="'https://twitter.com/hashtag/'+maindata.mainhashtag"
          class="google-font mt-0 mb-3"
          target="_blank"
          >#DevFestIndia</v-btn
        >
      </v-col>
      <v-col md="5" lg="4" class="pa-2" sm="12" cols="12">
        <v-container fluid>
          <v-row>
            <v-col md="6" cols="6"  v-for="(item, index) in maindata.stats" :key="index">
              <p class="google-font mb-0" style="color:#0005DF;font-size:300%">
                {{item.count}}
              </p>
              <p>{{item.name}}</p>
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
