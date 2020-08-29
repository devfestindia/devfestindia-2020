<template>
  <v-main class="">
    <v-container
      fluid
      :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'"
    >
      <v-row justify="center" align="center">
        <v-col md="10" lg="10" sm="11" cols="12">
          <v-container>
            <v-row class>
              <v-col class="pb-5">
                <h1 class="google-font mb-5" :class="this.$vuetify.theme.dark?'white--text':'grey--text text--darken-2'">Our Team</h1>
                <br />
                <br />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="mb-5 pb-5">
      <v-row justify="center" align="center" class="px-0">
        <v-col md="10" lg="10" sm="11" cols="12" style="margin-top: -150px;">
          <v-container>
            <v-row class>
              <v-col
                md="3"
                lg="3"
                xl="2"
                sm="4"
                cols="6"
                class="px-1"
                v-for="(item, index) in TeamData"
                :key="index"
              >
                <TeamMember :data="item" />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import TeamMember from "@/components/team/TeamDetails";
import TeamData from "@/assets/data/team.json";
export default {
  name: "TeamPage",
  components: {
    TeamMember
  },
  data: () => ({
    TeamData: [],
  }),
  mounted() {
    this.TeamData = this.sortByName(TeamData);
  }
};
</script>