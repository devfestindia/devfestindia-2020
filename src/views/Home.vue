<template>
  <v-main class="">
    <v-container fluid class="my-0 py-0">
      <!-- :lazy-src="require('@/assets/img/main.png')" -->
      <v-row align="center" justify="center" class="my-0 py-0">
        <v-col md="10" lg="8" sm="12" class="text-center my-0 py-0 px-0">
          <v-img
            class="grey lighten-2 hidden-sm-and-down"
            transition="fade-transition"
            :src="require('@/assets/img/main.png')"
            
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <!-- Mobile -->
          <v-img
            class="grey lighten-2 hidden-md-and-up"
            transition="fade-transition"
            :src="require('@/assets/img/mobile.png')"
            
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <h1 class="google-font mt-4" style="color:#0005DF">DevFest India</h1>
          <p class="google-font mt-4 mb-3">
            DevFest is a community-led developer events hosted by Google
            Developer Groups around the globe. GDGs are focused on community
            building and learning about Google
          </p>

          <v-btn dark color="#0005DF" depressed style="text-transform: capitalize;border-radius:5px;" to="/registration" class="google-font mb-10"
            >Registration</v-btn
          >
          <FollowUs />
          <br />
          <br /><br />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Home",
  components: {
    FollowUs: () => import("@/components/home/follow"),
  },
};
</script>
