<template>
  <v-main class="m-0">
    <v-container fluid class="mt-5">
      <v-row align="center" justify="center" class="">
        <v-col md="10" lg="9" sm="12" class="my-4">
          <HomeScreen/>
        </v-col>
      </v-row>

      <!-- <v-row align="center" justify="center" class="">
        <v-col md="10" lg="9" sm="12" class="my-4">
          <Stats/>
        </v-col>
      </v-row> -->
      <!-- Follow Us -->
      <v-row align="center" justify="center" class="">
        <v-col md="10" lg="10" sm="10" class="text-center">
          <v-divider></v-divider>
          <br>
          <FollowUs class="mt-10 mb-0" />
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
    HomeScreen: ()=> import('@/components/home/homescreen'),
    // Stats: ()=> import('@/components/home/Stats')
  },
};
</script>
