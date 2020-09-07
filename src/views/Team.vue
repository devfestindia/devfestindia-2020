<template>
  <v-main class="">
    <v-container
      fluid
    >
    <v-row justify="start" align="center">
        <v-col md="8" offset-md="1" offset-lg="1" lg="8" sm="11" cols="12">
          <v-container>
            <v-row class>
              <v-col class="pb-5">
                <h1 class="google-font mb-5" style="color:#0005DF">
                  Our Team
                </h1>
                <p class="google-font">
                  Google is known all around the world. Everyone is 'googling',
                  checking on 'maps' and communicating in 'gmail'. For simple
                  users, they are services that just works, but not for us.
                  Developers see much more: APIs, scalability issues, complex
                  technology stacks. And that is what GDG is about.
                </p>

              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <!-- <v-col md="2" lg="5" sm="11" cols="12" class="green"> </v-col> -->
      </v-row>
    </v-container>

    <v-container fluid class="mb-5 pb-5">
      <v-row justify="center" align="center" class="px-0">
        <!-- style="margin-top: -150px;" -->
        <v-col md="10" lg="10" sm="11" cols="12">
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
    TeamMember,
  },
  data: () => ({
    TeamData: [],
  }),
  mounted() {
    this.TeamData = this.sortByName(TeamData);
  },
};
</script>
