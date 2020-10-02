<template>
  <v-container fluid class="">
    <v-row>
      <v-col class="">
        <p
          class="google-font mb-2"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
        >
          DevFest Shots
        </p>
        <p class="google-font" style="font-size: 2.0vh">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus, impedit quae animi corrupti reprehenderit odio ipsa magni aliquam error fugiat exercitationem obcaecati adipisci ducimus illum repudiandae nisi numquam laborum.
        </p>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col md="12">
        <v-slide-group
          v-model="model"
          prev-icon="mdi-arrow-left-bold-circle-outline"
          next-icon="mdi-arrow-right-bold-circle-outline"
          class="pa-4"
          center-active
          show-arrows
        >
          <v-slide-item
            v-for="(item, index) in imgs"
            :key="index"
            class="red"
            style="height:auto"
          >
            <v-img
              class="ma-4"
              :src="item.img"
              style="height:auto"
            ></v-img>
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
