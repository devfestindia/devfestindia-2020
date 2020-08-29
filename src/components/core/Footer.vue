<template>
  <v-footer class="ma-0" >
    <v-container
      fluid
      class="grey lighten-4"
    >
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12">
          <v-card-text class="mx-0 px-0" style="height: 40px; position: relative">
            <v-fab-transition>
              <v-btn
                aria-label="FAB Button"
                style="margin-top:-20px"
                :color="this.$vuetify.theme.dark ? 'primary' : 'white'"
                :dark="this.$vuetify.theme.dark?true:false"
                absolute
                top
                right
                fab
                @click="toTop"
              >
                <v-icon>mdi-chevron-up</v-icon>
              </v-btn>
            </v-fab-transition>
            <h1
              class="google-font"
              :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-2'
              "
            >DevFest India</h1>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col md="10" sm="11" xl="10" cols="12" class="">
       <a href="https://gdg.community.dev/gdg-jalandhar/" target="_blank"
            rel="noreferrer"
            class="grey--text text--darken-3 mr-4 google-font"
            style="text-decoration:none;"
          >Link 1</a>
          <!-- <router-link
            to="/faq"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-3 google-font"
            style="text-decoration:none;"
          >FAQ</router-link> -->
          <br class="hidden-md-and-up">
          <router-link
            to="/faq"
            rel="noreferrer"
            class="mr-3 google-font grey--text text--darken-3"
            style="text-decoration:none;"
          >FAQ</router-link>

            <!-- <a href="https://www.womentechmakers.com" target="_blank"
            rel="noreferrer"
            class="mr-4 google-font grey--text text--darken-3"
            style="text-decoration:none;"
          >FAQ</a> -->
          <br class="hidden-md-and-up">
          <a href="https://developers.google.com/community-guidelines" target="_blank"
            rel="noreferrer"
            :class="
                $vuetify.theme.dark == true
                  ? 'white--text'
                  : 'grey--text text--darken-3'
              "
            class="mr-4 google-font"
            style="text-decoration:none;"
          >Community Guidelines</a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>