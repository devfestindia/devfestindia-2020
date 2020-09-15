<template>
  <v-main class="">
    <v-container fluid>
      <v-row justify="start" align="center">
        <v-col md="4" offset-md="1" offset-lg="1" lg="4" sm="11" cols="12">
          <v-container class="mb-0 pb-0">
            <v-row class>
              <v-col class="">
                <h1 class="google-font mb-5" style="color:#0005DF;">
                  Our Communities
                </h1>
                <p class="google-font" style="font-size:120%">
                  Communities from each chapter, all over the India have
                  gethered together to make India DevFest a success. Locate your
                  nearest google developer group and join them right here!
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <!-- <v-col md="2" lg="5" sm="11" cols="12" class="green"> </v-col> -->
      </v-row>
    </v-container>

    <v-container fluid class="mb-5 pb-5 py-0 my-0">
      <v-row justify="center" align="center" class="px-0 my-0">
        <!-- style="margin-top: -150px;" -->
        <v-col md="10" lg="10" sm="11" cols="12" class="my-0 py-0">
          <v-container fluid class="my-0 py-0">
            <v-row class>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="6"
                class="px-1"
                v-for="(item, index) in CommunityData"
                :key="index"
              >
                <div class="py-auto my-auto ma-1 whiteThemeCard community-card">
                  <a v-bind:href="item.link" target="_blank" class="my-2">
                    <v-tooltip bottom open-delay = "400">
                      <template v-slot:activator="{ on }">
                        <v-img
                          v-on="on"
                          :src="require('@/assets/img/communities/' + item.logo)"
                        ></v-img>
                      </template>
                      <span class="google-font">{{item.name}}</span>
                    </v-tooltip>
                  </a>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CommunityData from "@/assets/data/community.json";
export default {
  name: "CommunityPage",
  data: () => ({
    CommunityData: [],
  }),
  mounted() {
    this.CommunityData = this.sortByName(CommunityData);
    console.log(this.CommunityData);
  },
};
</script>

<style>
.whiteThemeCard {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.community-card {
  height: 100px;
}

.community-card:hover {
  transition:0.3s all ease-in-out;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,.12);
}

.community-card .v-responsive {
  height:100%;
}

.community-card .v-image__image--cover {
  background-size: contain;
}
</style>
