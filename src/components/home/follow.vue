<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col>
        <h1 class="google-font" style="color:#0005DF;">
          Follow Us
          <small class="mr-5 ml-1">-</small>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                x-large
                v-on="on"
                rel="noreferrer"
                href="https://twitter.com/DevfestIndia"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </template>
            <span>Twitter</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                x-large
                v-on="on"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCJsZoFDt7rfxPBI1esak8JQ/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
            </template>
            <span>YouTube</span>
          </v-tooltip>
        </h1>
        <p class="google-font mb-2">
          Let's get connected so that we can reach out to each other via a simple notification.
          <br />Stake out
          <a
            href="https://twitter.com/DevFestIndia"
            rel="noreferrer"
            target="_blank"
            style="color:#0005DF;text-decoration:none"
          >#DevFestIndia</a>
          for the updates and news.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
