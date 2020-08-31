<template>
  <v-main class="">
    <v-container fluid class="fill-height my-3">
      <v-row align="center" justify="center">
        <v-col md="10" lg="9" sm="12" class="">
          <v-container fluid>
            <v-row justify="center" align="center">
              <v-col md="6" cols="12" class="text-center" order-md="1" order="2">
                <v-img
                  class="white"
                  transition="fade-transition"
                  style="width:90%;margin-left:auto;margin-right:auto"
                  :src="require('@/assets/img/cover.png')"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="white"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <p class="devfest-font mt-4 mb-3" style="font-size:120%">October 16-18, 2020 <span class="hidden-sm-and-down">|</span> <span class="hidden-md-and-up"><br></span> Online</p>

                <!-- For Mobile -->
                <Timer deadline="October 16, 2020" class="hidden-md-and-up"/>

                <p class="google-font mt-4 mb-3">
                  DevFest India - India's biggest developer conclave with 40+ GDG communities. Separated by distance, united by passion.
                </p>

                <v-btn
                  dark
                  color="#0005DF"
                  depressed
                  style="text-transform: capitalize;border-radius:5px;"
                  to="/registration"
                  class="google-font mb-3"
                  >Register</v-btn
                >
                <v-btn
                  depressed
                  style="text-transform: capitalize;border-radius:5px;border:1px solid #e0e0e0;color:#0005DF;background-color:white"
                  href="https://badge.devfestindia.com/ "
                  class="google-font mb-3 ml-3"
                  target="_blank"
                  >Get your Profile Badge</v-btn
                >
                <v-btn
                  text
                  style="text-transform: capitalize;border-radius:5px;color:#0005DF;background-color:white"
                  href="https://twitter.com/hashtag/DevFestIndia"
                  class="google-font mb-3 ml-3"
                  target="_blank"
                  >#DevFestIndia</v-btn
                >

              </v-col>
              <v-col md="6" cols="12" class="text-center" order-md="2" order="1">
                <!-- For Desktop -->
                <Timer deadline="October 16, 2020" class="hidden-sm-and-down"/>
              </v-col>
            </v-row>

            
          </v-container>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col md="10" lg="10" sm="10" class="text-center my-4">
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
    Timer: ()=> import("@/components/home/Timer")
  },
};
</script>
