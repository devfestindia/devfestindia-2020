<template>
  <v-container fluid class="py-10 ma-0">
    <v-row justify="center" align="center" >
      <v-col md="6" cols="12" class="py-7" > 
        <v-img
          class="white"
          :src="require('@/assets/img/about.png')"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col md="6" cols="12" class="py-7" > 
        <p class="google-font" style="font-size: 2.0vh;line-height: 1.22;font-weight:300;line-height: 1.6;">As the world is coming to terms with this new way of life, we communities are also adopting new formats and methods to bring you all India’s biggest developers conference DevFest India 2020 online with talks, activities, fun & much more.</p>

        <p class="google-font" style="font-size: 2.0vh;line-height: 1.22;font-weight:300;line-height: 1.6;">From beginners to expes, coders to creatives, DevFest India 2020 conference is for everyone, so come along, share your knowledge and learn something new.</p>

        <v-btn
          depressed
          rel="noreferrer"
          large
          style="text-transform: capitalize;border-radius:5px;border:1px solid #e0e0e0;color:#0005DF;background-color:white"
          href="https://gdg.community.dev/devfest"
          class="google-font mr-3 mb-3"
          target="_blank"
          >Learn More About GDG Devfest</v-btn
        >
      </v-col>
    </v-row>
   </v-container>
</template>

<script>
export default {
  name: "About",
  components: {
  },
};
</script>
