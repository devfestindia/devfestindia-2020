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
              <div v-if="!userCreated">
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
                <v-btn v-on:click="signup" class="indigo">Sign Up</v-btn>
              </div>
              <div v-else>
                <h1>Please verify your email</h1>
              </div>
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
import FDK from "@/config/firebase";
export default {
  components: {},
  data() {
    return {
      email:'',
      password:'',
      dialog: false,
      userCreated: false,
      user:{}
    };
  },
  methods:{
    signup(){
      FDK.auth.createUserWithEmailAndPassword(this.email, this.password).catch(e=>{
        console.log(e)
      })
      this.checkUser()

    },
    checkUser(){
      FDK.auth.onAuthStateChanged((user)=> {
        console.log(user)
        FDK.auth.sendEmailVerification().then(function() {
        // Email sent.
          this.userCreated = true
        }).catch(function(error) {
          // An error happened.
        });

      }).catch(e=>{
        console.log(e)
      })
      
      

    }
  }
};
</script>
