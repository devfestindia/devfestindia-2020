<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="7" sm="8" lg="5">
          <h1 class="google-font">DevFest India: Registration</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            dolores dolorum deleniti quos magnam? Molestiae quidem tempora
            reprehenderit laudantium? Deleniti consequatur aperiam eveniet
            voluptates reiciendis. Debitis blanditiis cumque deleniti quas!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            dolores dolorum deleniti quos magnam? Molestiae quidem tempora
            reprehenderit laudantium? Deleniti consequatur aperiam eveniet
            voluptates reiciendis. Debitis blanditiis cumque deleniti quas!
          </p>

          <v-container fluid>
            <v-row>
              <v-col md="2">
                <h2 class="google-font">Step 1</h2>
              </v-col>
              <v-col md="10" class="google-font">
                <h2 class="google-font">Login with your Google Account</h2>

                <v-list-item v-if="userLoginIn" class="ml-0 pl-0">
                  <v-list-item-avatar size="65">
                    <v-img :src="user.photoURL"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      class="google-font"
                      v-html="user.displayName"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="user.email"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-on:click="logout"
                      style="color:blue;cursor: pointer"
                      ><u>Logout as a {{ user.email }}</u></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-btn v-if="showLoginBtn" outlined class="mt-3" v-on:click="signIn"
                  >Sign In with Google</v-btn
                >
              </v-col>
            </v-row>

            <v-row v-if="userForm && userLoginIn">
              <v-col md="2">
                <h2 class="google-font">Step 2</h2>
              </v-col>
              <v-col md="10" class="google-font">
                <h2 class="google-font">Your details</h2>
                <p class=" mb-10">
                  Required fields are marked with an asterisk
                </p>
                <v-text-field
                  label="Your Name"
                  v-model="response.name"
                  placeholder="Your Name"
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Email"
                  v-model="response.email"
                  placeholder="Email"
                  outlined
                ></v-text-field>
                <v-btn
                  depressed
                  dark
                  class="mt-3"
                  :loading="saveloading"
                  v-on:click="saveData"
                  color="indigo"
                  >Submit</v-btn
                >
              </v-col>
            </v-row>

            <v-row v-if="userSuccess && userLoginIn">
              <v-col md="2">
                <h2 class="google-font">Step 3</h2>
              </v-col>
              <v-col md="10" class="google-font">
                <h2 class="google-font">Thank you!</h2>
                <p class=" mb-10">
                  Required fields are marked with an asterisk
                </p>
              </v-col>
            </v-row>

            <v-row v-if="userSubmitedAlready && userLoginIn">
              <v-col md="2">
                <h2 class="google-font">Step 3</h2>
              </v-col>
              <v-col md="10" class="google-font">
                <h2 class="google-font">You have already submitted this form</h2>
                <p class=" mb-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste vel laboriosam assumenda labore tempora? Magni aperiam atque doloremque itaque quis possimus voluptatum cumque, numquam ab nesciunt quos libero vero.xz
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import FDK from "../config/firebase";
export default {
  data: () => ({
    showLoginBtn: true,
    userLoginIn: false,
    userForm: false,
    userSuccess: false,
    userSubmitedAlready: false,
    saveloading: false,
    user: {},
    response: {
      name: "",
      email: "",
    },
  }),
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      var self = this
      FDK.auth.onAuthStateChanged(function(user) {
        if (user) {
          self.showLoginBtn = false
          self.userLoginIn = true;
          self.user = user;

          FDK.firestore
            .collection("edata")
            .doc(user.uid)
            .get()
            .then((res) => {
              console.log(res.data());
              if (res.data()) {
                self.userForm = false;
                self.userSuccess = false;
                self.userSubmitedAlready = true
                console.log("record hai");
              } else {
                self.userForm = true;
                console.log("record nahi hai");
              }
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          // User is signed out.
          // ...
        }
      });
    },
    signIn() {
      var self = this;
      var provider = new FDK.firebase.auth.GoogleAuthProvider();
      console.log(FDK.auth);
      console.log(provider);

      FDK.firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          // console.log(user)

          self.userLoginIn = true;
          self.userForm = true;
          self.response.email = user.email;
          self.response.name = user.displayName;
          self.user = user;
          // console.log(self.user)
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(error);
          // ...
        });
    },
    saveData() {
      this.saveloading = true;
      console.log("asdfas");
      console.log(this.user.uid);
      FDK.firestore
        .collection("edata")
        .doc(this.user.uid)
        .set({
          name: this.response.name,
          email: this.response.email,
          date: new Date(),
        })
        .then(() => {
          this.userSuccess = true;
          this.saveloading = false;
          this.userForm = false;
        })
        .catch((e) => {
          console.log(e);
          this.saveloading = false;
        });
    },
    logout() {
      var self = this;
      FDK.auth
        .signOut()
        .then(function() {
          self.userLoginIn = false;
          self.userForm = false;
          self.userSuccess = false;
          console.log("User Logged Out!");
          self.showLoginBtn = true
        })
        .catch(function(error) {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>
