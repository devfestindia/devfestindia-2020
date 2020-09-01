<template>
  <v-main class="m-0">
    <v-container fluid class="m-5">
      <v-row align="center" justify="center">
        <v-col md="10" lg="9" sm="12" class>
          <v-container fluid>
            <v-row justify="center" align="center">
              <v-col md="6" cols="12" class="text-center">
                <v-img
                  class="white"
                  transition="fade-transition"
                  style="width:90%;margin-left:auto;margin-right:auto"
                  :src="require('@/assets/img/cover.png')"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="white"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <p class="devfest-font mt-4 mb-3" style="font-size:120%">
                  <v-icon class="mb-1">mdi-calendar-text</v-icon>&nbsp;October 16-18, 2020
                  <span class="hidden-sm-and-down" style="color:#0005DF">
                    <b>|</b>
                  </span>
                  <span class="hidden-md-and-up">
                    <br />
                  </span>
                  &nbsp;
                  <v-icon class="mb-1">mdi-access-point</v-icon>&nbsp;Online
                </p>

                <!-- For Mobile -->
                <Timer deadline="October 16, 2020" class="hidden-md-and-up" />

                <p class="google-font mt-4 mb-5">
                  <b style="color:#0005DF;font-size:120%">DevFest India</b> - India's biggest developer
                  <span class="hidden-md-and-up">
                    <br />
                  </span>conclave with 40+ GDG communities.
                  <span class="hidden-md-and-up">
                    <br />
                  </span>
                  <br />Separated by distance,
                  <span class="hidden-md-and-up">
                    <br />
                  </span>united by passion.
                </p>

                <v-btn
                  dark
                  color="#0005DF"
                  depressed
                  style="text-transform: capitalize;border-radius:5px;padding:00% 15%;"
                  to="/registration"
                  class="google-font"
                >Register</v-btn>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <span class="hidden-md-and-up">
                  <br />
                  <br />
                </span>
                <v-btn
                  depressed
                  style="text-transform: capitalize;border-radius:5px;border:1px solid #e0e0e0;color:#0005DF;background-color:white"
                  href="https://badge.devfestindia.com/ "
                  class="google-font"
                  target="_blank"
                >Get your Profile Badge</v-btn>
                <span class="hidden-md-and-up">
                  <br />
                </span>
                <v-btn
                  text
                  style="text-transform: capitalize;border-radius:5px;color:#0005DF;background-color:white"
                  href="https://twitter.com/hashtag/DevFestIndia"
                  class="google-font mt-2"
                  target="_blank"
                >#DevFestIndia</v-btn>
              </v-col>
              <v-col md="6" cols="12" class="text-center">
                <!-- For Desktop -->
                <Timer deadline="October 16, 2020" class="hidden-sm-and-down" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col md="10" lg="10" sm="10" class="text-center">
          <v-divider></v-divider>
          <FollowUs />
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
    Timer: () => import("@/components/home/Timer"),
  },
};
</script>
