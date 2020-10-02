<template>
  <v-container fluid class="py-0">
    <!-- Desktop Screen Class hidden-sm-and-down -->
    <v-row justify="center" align="center" class="py-8">
      <v-col md="6" cols="12" class="order-md-1 order-2"> 
        <p class="google-font mb-2" style="font-size: 5.5vh;line-height: 1.22;font-weight:900">DevFest India</p>
        <p class="devfest-font mt-5 mb-3" style="font-size:120%">
          <v-icon class="mb-1">mdi-calendar-text</v-icon>&nbsp;October 16-18,
          2020
          <span style="color:#0005DF">
            <b>|</b>
          </span>
          &nbsp;
          <v-icon class="mb-1">mdi-access-point</v-icon>&nbsp;Online
        </p>
        <p class="google-font my-10" style="font-size: 2.0vh;line-height: 1.22;font-weight:300;line-height: 1.6;">
          <b style="color:#0005DF;">DevFest India</b> - India's
          biggest developer <br/>conclave with 40+ GDG communities. <br />Separated
          by distance, united by passion.
        </p>

        <v-btn
          dark
          color="#0005DF"
          large
          depressed
          style="text-transform: capitalize;border-radius:5px;padding:00% 10%;"
          to="/registration"
          class="google-font mr-3 mb-3"
          >Register</v-btn
        >

        <v-btn
          depressed
          rel="noreferrer"
          large
          style="text-transform: capitalize;border-radius:5px;border:1px solid #e0e0e0;color:#0005DF;background-color:white"
          href="http://badge.devfestindia.com/"
          class="google-font mr-3 mb-3"
          target="_blank"
          >Get your Profile Badge</v-btn
        >
      </v-col>
      <v-col md="6" cols="12" class="text-center order-md-2 order-1"> 
        <v-img
          class="white"
          :src="require('@/assets/img/home.svg')"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
   </v-container>
</template>
