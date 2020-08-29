<template>
  <v-main class="">
    <v-container fluid class="my-0 py-0">
      <v-row align="center" justify="center" class="my-0 py-0">
        <v-col md="10" lg="8" sm="12" class="text-center my-0 py-0">
          <v-img
            class="grey lighten-2"
            transition="fade-transition"
            :src="require('@/assets/img/main.png')"
            :lazy-src="require('@/assets/img/main.png')"
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
          <h1 class="google-font mt-4 indigo--text">DevFest India</h1>
          <p class="google-font mt-4 mb-3">
            DevFest is a community-led developer events hosted by Google
            Developer Groups around the globe. GDGs are focused on community
            building and learning about Google
          </p>

          <v-btn dark color="indigo" to="/registration" class="mb-10"
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
