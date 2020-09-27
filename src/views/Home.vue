<template>
  <v-main class="m-0">
    <v-container fluid class="mt-0 py-0">

      <v-row align="center" justify="center" class="mt-0 pt-0" >
        <v-col md="10" lg="9" sm="12" class="my-4" >
          <HomeScreen/>
        </v-col>
      </v-row>

      <!-- style="background:#f8f9fa" -->
      <!-- style="background:#0cad4d" -->
      <!-- <v-row align="center" justify="center" class=""  >
        <v-col md="10" lg="9" sm="12" class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" style="background: #f8f9fa;border-radius:1px solid #e0e0e0;border-radius:7px">
        <Stats/>
        </v-col>
      </v-row> -->

      <!-- Theme -->
      <!-- <v-row align="center" justify="center" class="py-0 my-0" >
        <v-col md="10" lg="9" sm="12" class="py-0 my-0">
          <Theme class="mt-md-8 mb-md-0 my-xs-0 py-xs-0" />
        </v-col>
      </v-row> -->

      <!-- Follow Us -->
      <v-row align="center" justify="center" class="" >
        <v-col md="10" lg="9" sm="10" class="">
          <FollowUs class="mt-md-0 mb-md-10 my-xs-0" />
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
    // Stats: ()=> import('@/components/home/Stats'),
    // Theme: ()=> import('@/components/home/theme'),
  },
};
</script>
