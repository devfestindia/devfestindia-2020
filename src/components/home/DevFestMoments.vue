<template>
  <v-container fluid class="py-10">
    <v-row justify="center" align="center">
      <v-col md="12" lg="12" cols="12" class="">
        <p
          class="google-font mb-2"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
        >
          DevFest Moments
        </p>
        <p class="google-font" style="font-size: 2.0vh">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus, impedit quae animi corrupti reprehenderit odio ipsa magni aliquam error fugiat exercitationem obcaecati adipisci ducimus illum repudiandae nisi numquam laborum.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" lg="3" v-for="(item, index) in contents" :key="index">
        
          <v-img
            :src="item.image"
            :lazy-src="item.image"
            width="100%"
            aspect-ratio="16:9"
            cover
            style="border-radius:8px;"
            gradient="to bottom, rgba(0,0,0,.1), #212121"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-card-title
              class="fill-height align-end google-font pb-3 white--text"
            >
              <div>
                <p class="my-0 pb-0" style="font-size:105%">
                  {{ item.community }}
                </p>
                <v-btn
                  x-small
                  color="white"
                  text
                  style="padding-left:0;font-weight: bold;"
                >
                  <v-icon x-small left>
                    mdi-play-circle-outline
                  </v-icon>
                  Watch
                </v-btn>
              </div>
            </v-card-title>
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-layout>
          </v-img>
      </v-col>
      <v-col md="12">
        
        <!-- <v-slide-group
          v-model="model"
          class="pa-0"
          active-class="success"
        >
          <v-slide-item
            v-for="n in contents"
            :key="n.community"
            v-slot:default="{ active, toggle }"
          >
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="180"
              width="300"
              @click="toggle"
            >
              <v-row class="fill-height elevation-1" align="center" justify="center">
                <v-img :src="n.image"></v-img>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DevFestMoments",
  components: {},
  data:()=>({
    model: null,
    contents:[
        {
            "community":"Community 1",
            "link":"",
            "image":"https://img.youtube.com/vi/Jdxw5E7sDwE/mqdefault.jpg"
        },
        {
            "community":"Community 2",
            "link":"",
            "image":"https://img.youtube.com/vi/Jdxw5E7sDwE/mqdefault.jpg"
        },
        {
            "community":"Community 3",
            "link":"",
            "image":"https://img.youtube.com/vi/Jdxw5E7sDwE/mqdefault.jpg"
        },
        {
            "community":"Community 4",
            "link":"",
            "image":"https://img.youtube.com/vi/Jdxw5E7sDwE/mqdefault.jpg"
        }
    ]
  })
};
</script>
