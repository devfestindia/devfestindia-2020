<template>
  <v-container fluid class="">
    <v-row justify="center" align="center">
      <v-col>
        <p
          class="google-font"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500"
        >
          Keep in touch with DevFest India for the latest announcements
        </p>
        <p class="google-font mb-2" style="font-size: 2.0vh;">
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
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              icon
              x-large
              v-on="on"
              color="#00acee"
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
                color="#FF0000"
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

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                x-large
                v-on="on"
                color="#405DE6"
                rel="noreferrer"
                href="https://www.instagram.com/devfestindia/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </template>
            <span>Instagram</span>
          </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>
