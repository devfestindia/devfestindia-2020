<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="google-font">Follow Us</h1>
        <p class="google-font">
          Follow us on Social Media and keep an eye on
          <a
            href="https://twitter.com/DevFestIndia"
            rel="noreferrer"
            target="_blank"
            style="text-decoration:none"
          >#DevFestIndia
          </a>
          for the latest updates and news about the event.
        </p>

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
              href="#"
              target="_blank"
              slot="activator"
            >
              <v-icon>mdi-youtube</v-icon>
            </v-btn>
          </template>
          <span>LinkedIn</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>
