<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col md="7" lg="8" sm="12" cols="12">
        <h1 class="google-font mb-2" style="color:#0005DF;">{{maindata.eventname}}</h1>
        <p v-html="maindata.longdes">
        </p>

      </v-col>
      <v-col md="5" lg="4" class="pa-2" sm="12" cols="12">
        <v-container fluid>
          <v-row>
            <v-col md="6" cols="6"  v-for="(item, index) in maindata.stats" :key="index" class="text-center">
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
