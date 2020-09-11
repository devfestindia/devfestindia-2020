<template>
  <v-container fluid class="red">
    <v-row>
      <v-col>
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
          <v-slide-item
            v-for="(item,index) in imgs"
            :key="index"
            v-slot:default="{ active, toggle }"
          >
            <!-- <d
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              @click="toggle"
            > -->
              <v-img class="ma-4" :color="active ? 'primary' : 'grey lighten-1'" @click="toggle" :src="item.img"></v-img>
            <!-- </d> -->
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: null,
    imgs: [
      {
        name: "",
        img:
          "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-1_1x.jpg",
      },
      {
        name: "",
        img:
          "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-2_1x.jpg",
      },
      {
        name: "",
        img:
          "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-3_1x.jpg",
      },
      {
        name: "",
        img:
          "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-4_1x.jpg",
      },
    ],
  }),
};
</script>
