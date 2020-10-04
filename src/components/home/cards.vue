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
         DevFest is a tech fest & welcoming event, made for and run by developers to bring community-led technical learning to energize your mind and put on an even better event.
        </p>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col md="12">
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="(item, index) in imgs"
            :key="index"
            v-slot:default="{ active, toggle }"
          >
            <v-img
              class="ma-4"
              :color="active ? undefined : 'grey lighten-1'"
              :src="item.img"
              style="width: 1%"
              @click="toggle"
            ></v-img>

            <!-- <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card> -->
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>

  <!-- <v-slide-item
            v-for="(item, index) in imgs"
            :key="index"
            v-slot:default="{ active }"
          >
            <v-img
              class="ma-4"
              :color="active ? undefined : 'grey lighten-1'"
              :src="item.img"
              style="height:auto"
            ></v-img>
          </v-slide-item> -->
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
