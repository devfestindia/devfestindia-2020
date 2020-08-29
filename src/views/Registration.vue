<template>
  <v-main>
    <Snakebar
      :message="snakeBarMessage"
      :isShow.sync="isSnakeBarVisible"
      :color="snakeBarColor"
      :timeout="snakeBarTimeOut"
    />

    <v-container fluid class="mt-4">
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
            <!-- Google Sign In -->
            <v-row>
              <v-col md="2" cols="2">
                <v-avatar color="#0005DF">
                  <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
                <!-- 
                <h2 class="google-font">Step 1</h2> -->
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">Login with your Google Account</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, dolores iusto mollitia nisi quibusdam accusantium</p>

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

                <v-btn
                  v-if="showLoginBtn"
                  outlined
                  class="mt-3"
                  v-on:click="signIn"
                  >
                  <v-icon size="20px" left>mdi-google</v-icon>
                  Sign In with Google</v-btn
                >
              </v-col>
            </v-row>
            <!-- Google Sign In -->

            <!-- Form -->
            <v-row v-if="userForm && userLoginIn">
              <v-col md="2" cols="2">
                <v-avatar color="#0005DF">
                  <v-icon dark>mdi-format-align-justify</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">Your details</h3>
                <p class=" mb-10">
                  Required fields are marked with an asterisk
                </p>

                <v-text-field
                  label="Email"
                  v-model="response.email"
                  placeholder="Email"
                  outlined
                  disabled
                ></v-text-field>

                <v-text-field
                  label="Your Name"
                  v-model="response.name"
                  placeholder="Your Name"
                  outlined
                ></v-text-field>

                <v-text-field
                  label="Your City"
                  v-model="response.city"
                  placeholder="Your City"
                  outlined
                ></v-text-field>

                <v-text-field
                  label="Your Country"
                  v-model="response.country"
                  placeholder="Your Country"
                  outlined
                ></v-text-field>

                <v-text-field
                  label="Your Company/Institute Name"
                  v-model="response.org"
                  placeholder="Your Company/Institute Name"
                  outlined
                ></v-text-field>

                <v-text-field
                  label="Your Role"
                  v-model="response.role"
                  placeholder="Your Role"
                  outlined
                ></v-text-field>

                <!-- Gender -->
                <!-- v-on:change="validateForm()"
                    :rules="[rules.required]" -->
                <v-radio-group v-model="response.gender" class="mb-3">
                  
                    <div
                      class="google-font mb-3"
                      style="font-size:120%;color:black !important"
                    >
                      How would you like to identify yourself as?
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-if="response.gender === 0"
                      >This field is required.</span>
                    </div>

                    <v-radio value="Male" v-slot:label>
                      <div>Male</div>
                    </v-radio>
                    <v-radio value="Female" v-slot:label>
                      <div>Female</div>
                    </v-radio>
                    <v-radio value="Prefer not to say" v-slot:label>
                      <div>Prefer not to say</div>
                    </v-radio>
                </v-radio-group>
                <!-- Gender -->


                <!-- Experience -->
                <!-- v-on:change="validateForm()"
                    :rules="[rules.required]" -->
                <v-radio-group v-model="response.experience" class="mb-3">
                  
                    <div
                      class="google-font mb-3"
                      style="font-size:120%;color:black !important"
                    >
                      Years of experience
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-if="response.experience === 0"
                      >This field is required.</span>
                    </div>

                    <v-radio value="0 - 5 years" v-slot:label>
                      <div>0 - 5 years</div>
                    </v-radio>
                    <v-radio value="6 - 10 years" v-slot:label>
                      <div>6 - 10 years</div>
                    </v-radio>
                    <v-radio value="11 - 20 years" v-slot:label>
                      <div>11 - 20 years</div>
                    </v-radio>
                    <v-radio value="21+ years" v-slot:label>
                      <div>21+ years</div>
                    </v-radio>
                </v-radio-group>
                <!-- Experience -->

                <!-- Coupen Code -->
                <v-text-field
                  label="Enter the coupon code for the event"
                  v-model="response.code"
                  placeholder="Enter the coupon code for the event"
                  hint="Enter NA in case you don't have a coupon code"
                  outlined
                ></v-text-field>
                <!-- Cooupen Code -->

                <!-- Experience -->
                <!-- v-on:change="validateForm()"
                :rules="[rules.required]" -->
                <v-radio-group v-model="response.knowAbout" class="mb-3">
                    <div
                      class="google-font mb-3"
                      style="font-size:120%;color:black !important"
                    >
                      How did you get to know about this event?
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-if="response.knowAbout === 0"
                      >This field is required.</span>
                    </div>

                    <v-radio value="Women Techmakers" v-slot:label>
                      <div>Women Techmakers</div>
                    </v-radio>
                    <v-radio value="Google Developer Groups" v-slot:label>
                      <div>Google Developer Groups</div>
                    </v-radio>
                    <v-radio value="Developer Student Clubs" v-slot:label>
                      <div>Developer Student Clubs</div>
                    </v-radio>
                    <v-radio value="Other Communities" v-slot:label>
                      <div>Other Communities</div>
                    </v-radio>
                    <v-radio value="Through your company/colleague" v-slot:label>
                      <div>Through your company/colleague</div>
                    </v-radio>
                    <v-radio value="Friends" v-slot:label>
                      <div>Friends</div>
                    </v-radio>
                    <v-radio value="Twitter" v-slot:label>
                      <div>Twitter</div>
                    </v-radio>
                    <v-radio value="Facebook" v-slot:label>
                      <div>Facebook</div>
                    </v-radio>
                    <v-radio value="LinkedIn" v-slot:label>
                      <div>LinkedIn</div>
                    </v-radio>
                    <v-radio value="Other" v-slot:label>
                      <div>Other</div>
                    </v-radio>
                </v-radio-group>
                <!-- Experience -->

                <!-- Share -->
                <v-textarea
                    outlined
                    label="Anything else you want to share with us?"
                    v-model="response.share"
                  ></v-textarea>
                <!-- Share -->
                
                <v-btn
                  depressed
                  dark
                  class="mt-3"
                  :loading="saveloading"
                  v-on:click="saveData"
                  color="#0005DF"
                  >Submit</v-btn
                >
              </v-col>
            </v-row>
            <!-- Form -->

            <!-- Registration Success -->
            <v-row v-if="userSuccess && userLoginIn">
              <v-col md="2" cols="2">
                <v-avatar color="#0005DF">
                  <v-icon dark>mdi-playlist-check</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">
                  Thank you for registering for
                  <a
                    href="https://twitter.com/DevFestIndia"
                    rel="noreferrer"
                    target="_blank"
                    style="text-decoration:none"
                  >
                    <b>#DevFestIndia</b> </a
                  >.
                </h3>
                <v-btn
                  href="https://twitter.com/intent/tweet?text=console.log('Hi%20%23WebDevs');%0A%0AI%20have%20registered%20for%20%23DevFestIndia%20to%20attend%20many%20amazing%20sessions.%0AHave%20you?%0A%0AIf%20not,%20register%20yourself%20at%20devfestindia.com%0A%0A%23DevFestIndia%20%23DevFest%20%20@DevFestIndia"
                  target="_blank"
                  rel="noreferrer"
                  dark
                  color="#4285F4"
                  class="mt-3 google-font"
                >
                  <v-icon size="20px" left>mdi-twitter</v-icon>
                  <b>Share your excitement</b>
                </v-btn>
                <v-btn outlined color="#0005DF" style="text-transform: capitalize;border-radius:5px;" class="google-font ">Generate your Profile Badge</v-btn>
              </v-col>
            </v-row>
            <!-- Registration Success -->
            
            <!-- Already Registerd -->
            <v-row v-if="userSubmitedAlready && userLoginIn">
              <v-col md="2" cols="2">
                <!-- <h2 class="google-font">Step 3</h2> -->
                <v-avatar color="#0005DF">
                  <v-icon dark>mdi-playlist-check</v-icon>
                </v-avatar>
              </v-col>
              <v-col md="10" class="google-font" cols="10">
                <h3 class="google-font">
                  You have already submitted this form
                </h3>
                <p class=" mb-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, iste vel laboriosam assumenda labore tempora? Magni
                  aperiam atque doloremque itaque quis possimus voluptatum
                  cumque, numquam ab nesciunt quos libero vero.xz
                </p>
                <v-btn
                  href="https://twitter.com/intent/tweet?text=console.log('Hi%20%23WebDevs');%0A%0AI%20have%20registered%20for%20%23DevFestIndia%20to%20attend%20many%20amazing%20sessions.%0AHave%20you?%0A%0AIf%20not,%20register%20yourself%20at%20devfestindia.com%0A%0A%23DevFestIndia%20%23DevFest%20%20@DevFestIndia"
                  target="_blank"
                  rel="noreferrer"
                  dark
                  depressed
                  color="#4285F4"
                  class=" google-font mr-3"
                >
                  <v-icon size="20px" left>mdi-twitter</v-icon>
                  <b>Share your excitement</b>
                </v-btn>
                <v-btn outlined color="#0005DF" style="text-transform: capitalize;border-radius:5px;" class="google-font ">Generate your Profile Badge</v-btn>
              </v-col>
            </v-row>
            <!-- Already Registerd -->
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
    // Snackebar
    snakeBarMessage: "",
    isSnakeBarVisible: false,
    snakeBarColor: "green",
    snakeBarTimeOut: 5000,
    //
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
      city:"",
      country:"",
      org:"",
      role:"",
      gender:"",
      experience:"",
      code:"",
      knowAbout:"",
      share:""
    },
  }),
  components: {
    Snakebar: () => import("@/components/common/Snackebar"),
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      var self = this;
      FDK.auth.onAuthStateChanged(function(user) {
        if (user) {
          self.showLoginBtn = false;
          self.userLoginIn = true;
          self.user = user;
          self.response.email = user.email;
          self.response.name = user.displayName;

          // Snackebar
          // self.snakeBarMessage = "Sign In with " + user.email;
          // self.isSnakeBarVisible = true;

          FDK.firestore
            .collection("edata")
            .doc(user.uid)
            .get()
            .then((res) => {
              // console.log(res.data());
              if (res.data()) {
                self.userForm = false;
                self.userSuccess = false;
                self.userSubmitedAlready = true;
              } else {
                self.userForm = true;
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
          // Snackebar
          self.snakeBarMessage = "Sign In with " + user.email;
          self.isSnakeBarVisible = true;
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
      // console.log("asdfas");
      // console.log(this.user.uid);
      FDK.firestore
        .collection("edata")
        .doc(this.user.uid)
        .set({
          name: this.response.name,
          email: this.response.email,
          image: this.user.photoURL,
          city: this.response.city,
          country: this.response.country,
          gender: this.response.gender,
          experience: this.response.experience,
          share: this.response.share,
          knowAbout: this.response.knowAbout,
          code: this.response.code,
          role: this.response.role,
          org: this.response.org,
          date: new Date(),
        })
        .then(() => {
          this.userSuccess = true;
          this.saveloading = false;
          this.userForm = false;

          // self.snakeBarMessage = "Re"+ self.user.email
          // self.isSnakeBarVisible = true
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
          self.showLoginBtn = true;
          self.snakeBarMessage = "User logged out with " + self.user.email;
          self.isSnakeBarVisible = true;
        })
        .catch(function(error) {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>
