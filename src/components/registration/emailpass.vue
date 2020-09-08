<template>
  <v-dialog v-model="dialog" width="500" scrollable>
    <template v-slot:activator="{ on }">
        <v-btn color="indigo" depressed dark v-on="on">Sign In/Sign Up with Email & Password</v-btn>
    </template>

    <v-card class="pa-0 white" v-if="dialog" >
      <v-card-title
        class="google-font"
        style="background-position:right bottom;"
      >
        <p class="google-font mb-0" style="font-size:110%">Sign In/Sign Up with Email & Password</p>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text class="px-5">
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col md="12" cols="12">
              <v-text-field
                    v-model="email"
                    placeholder="Email"
                    outlined
              ></v-text-field>
              <v-text-field
                    v-model="password"
                    placeholder="password"
                    outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="grey lighten-3">
        <v-spacer></v-spacer>
        <v-btn aria-label="close" color="primary" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      email:'',
      password:'',
      dialog: false,
    };
  },
};
</script>
