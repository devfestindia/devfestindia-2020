<template>
  <v-main>
    <Snakebar
      :message="snakeBarMessage"
      :isShow.sync="isSnakeBarVisible"
      :color="snakeBarColor"
      :timeout="snakeBarTimeOut"
    />

    <v-container fluid class="mt-4 mb-10">
      <v-row justify="center" align="center">
        <v-col md="7" sm="8" lg="5" cols="11">
          <h2 class="google-font">DevFest India: Registration</h2>
          <p class="google-font">
            DevFest India - India's biggest developer conclave with 40+ GDG
            communities. Separated by distance, united by passion.
          </p>
          <p class="google-font">
            The DevFest India 2020 will be held on Oct 16th, 17th & 18th.  A great
            line-up of speakers, multiple tracks, fun engagements is on the
            cards for you!
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
                <p class="google-font">
                  Sign in and register to reserve seats.
                </p>

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
                <v-form ref="form">
                  <!-- Email Id -->
                  <v-text-field
                    label="Email"
                    v-model="response.email"
                    placeholder="Email"
                    outlined
                    disabled
                  ></v-text-field>

                  <!-- Full Name -->
                  <v-text-field
                    label="Name"
                    v-model="response.name"
                    placeholder="Name"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- City -->
                  <v-text-field
                    label="City"
                    v-model="response.city"
                    placeholder="City"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Country -->
                  <v-text-field
                    label="Country"
                    v-model="response.country"
                    placeholder="Country"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Organization -->
                  <v-text-field
                    label="Company/Institute Name"
                    v-model="response.org"
                    placeholder="Company/Institute Name"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Role -->
                  <v-text-field
                    label="Role/Designation"
                    v-model="response.role"
                    placeholder="Role/Designation"
                    :rules="[rules.required]"
                    outlined
                  ></v-text-field>

                  <!-- Gender -->
                  <v-radio-group
                    :rules="[(v) => !!v || 'This field is required.']"
                    v-model="response.gender"
                    class="mb-3"
                  >
                    <div
                      class="google-font mb-3"
                      style="font-size:120%;color:black !important"
                    >
                      How would you like to identify yourself as?
                      <span style="color:#ff5252;">*</span>
                      <br />
                      <span
                        style="color:#ff5252;font-size:70%"
                        v-show="response.gender === 0"
                        >This field is required.</span
                      >
                    </div>

                    <v-radio color="#0005DF" value="Male" v-slot:label>
                      <div>Male</div>
                    </v-radio>
                    <v-radio color="#0005DF" value="Female" v-slot:label>
                      <div>Female</div>
                    </v-radio>
                    <v-radio
                      color="#0005DF"
                      value="Prefer not to say"
                      v-slot:label
                    >
                      <div>Prefer not to say</div>
                    </v-radio>
                  </v-radio-group>
                  <!-- Gender -->

                  <!-- Area of Interest -->
                  <div class="google-font" style="font-size:120%;color:black">
                    Tracks / themes you are interested to attend.
                    <span style="color:#ff5252;">*</span>
                    <br />
                    <span style="font-size:80%;color:black"
                      >You can choose more than 1 area of interests</span
                    >
                  </div>
                  <v-checkbox
                    class="mb-0"
                    v-model="response.theme"
                    color="#0005DF"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    label="Mobile"
                    value="Mobile"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    v-model="response.theme"
                    color="#0005DF"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    label="Cloud"
                    value="Cloud"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    v-model="response.theme"
                    color="#0005DF"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    label="Web"
                    value="Web"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    v-model="response.theme"
                    color="#0005DF"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    label="Machine Learning"
                    value="Machine Learning"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-0"
                    v-model="response.theme"
                    color="#0005DF"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    label="Design [UI/UX]"
                    value="Design [UI/UX]"
                  ></v-checkbox>
                  <!-- Area of Interest -->

                  <!-- Experience -->
                  <v-radio-group
                    v-model="response.experience"
                    :rules="[(v) => !!v || 'This field is required.']"
                    class="mb-10"
                  >
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
                        >This field is required.</span
                      >
                    </div>

                    <v-radio color="#0005DF" value="0 - 5 years" v-slot:label>
                      <div>0 - 5 years</div>
                    </v-radio>
                    <v-radio color="#0005DF" value="6 - 10 years" v-slot:label>
                      <div>6 - 10 years</div>
                    </v-radio>
                    <v-radio color="#0005DF" value="11 - 20 years" v-slot:label>
                      <div>11 - 20 years</div>
                    </v-radio>
                    <v-radio color="#0005DF" value="21+ years" v-slot:label>
                      <div>21+ years</div>
                    </v-radio>
                  </v-radio-group>
                  <!-- Experience -->

                  <!-- Coupen Code -->
                  <v-text-field
                    label="Enter the coupon code for the event"
                    v-model="response.code"
                    class="mt-4"
                    placeholder="Enter the coupon code for the event"
                    hint="Enter NA in case you don't have a coupon code"
                    outlined
                  ></v-text-field>
                  <!-- Cooupen Code -->

                  <!-- KnowAbout -->
                  <div
                    class="google-font mt-3"
                    style="font-size:120%;color:black"
                  >
                    How did you get to know about this event?
                    <span style="color:#ff5252;">*</span>
                    <br />
                    <span style="font-size:80%;color:black"
                      >Check all that apply</span
                    >
                  </div>
                  <v-checkbox
                    class="mb-0"
                    :rules="[rules.checkboxbtn]"
                    hide-details="false"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Women Techmakers"
                    value="Women Techmakers"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Google Developer Groups"
                    value="Google Developer Groups"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Developer Student Clubs"
                    value="Developer Student Clubs"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Other Communities"
                    value="Other Communities"
                  ></v-checkbox>

                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Through your company/colleague"
                    value="Through your company/colleague"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Friends"
                    value="Friends"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Twitter"
                    value="Twitter"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Facebook"
                    value="Facebook"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="LinkedIn"
                    value="LinkedIn"
                  ></v-checkbox>
                  <v-checkbox
                    class="my-1"
                    hide-details="false"
                    :rules="[rules.checkboxbtn]"
                    color="#0005DF"
                    v-model="response.knowAbout"
                    label="Others"
                    value="Others"
                  ></v-checkbox>

                  <!-- KnowAbout -->

                  <!-- Share -->
                  <v-textarea
                    outlined
                    class="mt-10"
                    label="Anything else you want to share with us?"
                    v-model="response.share"
                  ></v-textarea>
                  <!-- Share -->

                  <!-- Accepts TC -->
                  <v-checkbox color="#0005DF" v-model="tcstatus" :rules="[v => !!v || 'You must agree to register!']" label="By checking this box, i confirm that: ">
                  </v-checkbox>
                  <p class="mt-3">I agree to let DevFest India Organisers use the information collected in this form to be used for my participation in "DevFest India 2020 Event".</p>
                  <p>I have read and agree to the <router-link to="/tc" target="_blank">Participation Terms</router-link></p>
                  <!-- Accepts TC -->

                  <v-btn
                    depressed
                    dark
                    class="mt-3"
                    :loading="saveloading"
                    v-on:click="saveData"
                    color="#0005DF"
                    >Submit</v-btn
                  >
                </v-form>
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
                    style="text-decoration:none;color:#0005DF"
                  >
                    <b>#DevFestIndia</b> </a
                  >.
                </h3>
                <p class="google-font">
                  Thank you for registering for <b>#DevFestIndia</b> and giving
                  us the honour to host you at India's biggest developer
                  conclave. We highly appreciate your enthusiasm and energy and
                  would love to see you onboard along with your friends and
                  family.
                </p>
                <v-btn
                  href="https://twitter.com/intent/tweet?text=console.log('Hi%20%23WebDevs');%0A%0AI%20have%20registered%20for%20%23DevFestIndia%20to%20attend%20many%20amazing%20sessions.%0AHave%20you?%0A%0AIf%20not,%20register%20yourself%20at%20devfestindia.com%0A%0A%23DevFestIndia%20%23DevFest%20%20@DevFestIndia"
                  target="_blank"
                  depressed
                  rel="noreferrer"
                  dark
                  style="text-transform: capitalize;"
                  color="#4285F4"
                  class="google-font mr-3 mt-2"
                >
                  <v-icon size="20px" left>mdi-twitter</v-icon>
                  Share your excitement
                </v-btn>
                <v-btn
                  outlined
                  color="#0005DF"
                  style="text-transform: capitalize;border-radius:5px;border-color:#e0e0e0"
                  class="google-font mt-2"
                  >Generate your Profile Badge</v-btn
                >
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
                <p class=" mb-5">
                  Thank you for registering for #DevFestIndia and giving us the
                  honour to host you at India's biggest developer conclave. We
                  highly appreciate your enthusiasm and energy and would love to
                  see you onboard along with your friends and family.
                </p>
                <v-btn
                  href="https://twitter.com/intent/tweet?text=console.log('Hi%20%23WebDevs');%0A%0AI%20have%20registered%20for%20%23DevFestIndia%20to%20attend%20many%20amazing%20sessions.%0AHave%20you?%0A%0AIf%20not,%20register%20yourself%20at%20devfestindia.com%0A%0A%23DevFestIndia%20%23DevFest%20%20@DevFestIndia"
                  target="_blank"
                  rel="noreferrer"
                  style="text-transform: capitalize;"
                  dark
                  depressed
                  color="#4285F4"
                  class=" google-font mr-3 mt-2"
                >
                  <v-icon size="20px" left>mdi-twitter</v-icon>
                  Share your excitement
                </v-btn>
                <v-btn
                  outlined
                  color="#0005DF"
                  style="text-transform: capitalize;border-radius:5px;border-color:#e0e0e0"
                  class="google-font mt-2"
                  >Generate your Profile Badge</v-btn
                >
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
    rules: {
      required: (value) => !!value || "This field is required.",
      radiobtn: (value) => {
        return value.length > 0 || "This field is required.";
      },
      checkboxbtn: (value) =>
        value.length > 0 || "At least one item should be selected",
    },
    tcstatus: false,
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
      city: "",
      country: "",
      org: "",
      theme: [],
      role: "",
      gender: "",
      experience: "",
      code: "",
      knowAbout: [],
      share: "",
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
      if (this.$refs.form.validate()) {
        let cc = [
          "AMDQ",
          "BGGE",
          "AZXE",
          "GBHP",
          "DXXT",
          "AWWX",
          "YOTR",
          "TRRD",
          "WOWQ",
          "PRDW",
          "GHIU",
          "KYIT",
          "WEET",
          "PGGT",
          "DEOT",
          "GHNT",
          "DCGT",
          "VGYT",
          "DCFT",
          "KITG",
          "VGYT",
          "CDRG",
          "VGDS",
          "CDSW",
          "KHTD",
          "XSEW",
          "BHIG",
          "CSSA",
          "BGDC",
          "VCSA",
          "BCDS",
          "NGKO",
          "CFDS",
          "XDSE",
          "KLTR",
          "ZAWE",
          "CGHY",
          "CFDE",
          "VGHT",
          "KNHY",
          "SWAD",
          "NVBC",
          "ZXZX",
          "KGSA",
          "NGRW",
          "POMN",
          "SDSD",
          "JGNT",
          "XCXZ",
          "DESW",
          "DWQS",
          "NA",
        ];

        if (cc.indexOf(this.response.code) == -1) {
          this.response.code = "NA";
        }

        this.saveloading = true;
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
          })
          .catch((e) => {
            console.log(e);
            this.saveloading = false;
          });
      } else {
        alert("Some fields are required.");
      }
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
