<template>
  <v-container fluid class="py-10 my-10">
    <v-row justify="center" align="center" > 
      <v-col md="12" lg="12" sm="12" cols="12" class="">
        <p class="google-font mb-2" style="font-size: 3.5vh;line-height: 1.22;font-weight:500">Explore themes</p>
        <p class="google-font" style="font-size: 2.0vh">From beginners to experts, coders to creatives, DevFest India conference is for everyone.</p>
      </v-col>
      <v-col md="12" lg="12" sm="12" cols="12" class="mt-1">
        <v-container fluid class="pa-0 ma-0">
          <v-row>
            <v-col md="3" cols="12" sm="6"  v-for="(item, index) in maindata.theme" :key="index" >
              <div style="border:1px solid #e0e0e0;border-radius:7px" class="fill-height pa-5">
                <v-img :src="item.img" width="15vh" class="mb-4"> </v-img>
                <p class="google-font mb-0" style="font-size:135%">
                  {{item.name}}
                </p>
                <p class="mt-4 google-font mb-0" style="font-size:110%">{{item.content}}</p>
                </div>
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
