<template>
  <v-app-bar
    app
    fixed
    hide-on-scroll
    clipped-left
    :class="this.$vuetify.theme.dark ? '' : 'white'"
    :style="
      this.$vuetify.theme.dark ? {boxShadow:'0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #272727'}
      :{ boxShadow: '0 2px 6px 0 rgba(0,0,0,.12), inset  0 -1px 0 0 #dadce0' }"
  >
    <v-app-bar-nav-icon
      aria-label="Hamburger Btn"
      @click="toggleDrawer"
      class="d-md-none d-lg-none"
    ></v-app-bar-nav-icon>
    <!-- <div class="d-flex align-center">
      <router-link
        to="/"
        class="google-font grey--text text--darken-2"
        style="text-decoration:none;font-size:110%"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/img/webdevlogo.png')"
          transition="scale-transition"
          width="25"
        />
      </router-link>
    </div> -->
    <!-- {{ aboutEvent.EventName || "" }} -->
    <v-toolbar-title class="google-font px-0" style="width:300px">
      <router-link
        to="/"
        class="google-font grey--text text--darken-2"
        style="text-decoration:none;font-size:110%"
        >DevFest India</router-link
      >
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tabs
      color="indigo"
      right
      slider-color="indigo"
      :hide-slider="getRouteName()"
      class="hidden-sm-and-down google-font"
    >
      <v-tab
        class
        aria-label="toolbar links"
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        :to="link.to"
        @click="onClick($event, link)"
        style="text-transform: capitalize;"
        >{{ link.text }}</v-tab
      >
    </v-tabs>
    <v-btn dark color="indigo" class="ml-4" to="/registration" depressed>Registration</v-btn>

    <v-btn
      aria-label="Share Button"
      icon
      v-on:click="shareMe"
      class="hidden-sm-and-up"
    >
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
// import aboutEvent from "@/assets/data/about.json";
export default {
  data: () => ({
    timeout: 6000,
    // aboutEvent: aboutEvent,
    menu: [
      { icon: "home", title: "Link A" },
      { icon: "info", title: "Link B" },
      { icon: "warning", title: "Link C" },
    ],
  }),
  computed: {
    ...mapGetters(["links"]),
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    getRouteName() {
      if (this.$route.name === "Register" || this.$route.name === "FAQ") {
        return true;
      } else {
        return false;
      }
    },
    shareMe(e) {
      if (navigator.share) {
        navigator
          .share({
            title: "web.dev LIVE India",
            url: "",
          })
          .then(() => {
            console.log("Thanks for sharing");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        alert('Not supporting in your browser')
      }
    },
  },
};
</script>