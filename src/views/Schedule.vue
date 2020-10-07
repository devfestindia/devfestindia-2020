<template>
  <v-main class="ma-0">
    <v-container
      fluid
      class="pb-0"
      :class="$vuetify.theme.dark ? 'row-border-dark' : 'row-border-white'"
    >
      <v-row justify="center" align="center">
        <v-col md="10" class="py-0 my-0">
          <v-toolbar
            flat
            class="py-0 mt-0 my-0"
            tabs
            height="120%"
            :class="$vuetify.theme.dark == true ? 'grey darken-4' : 'white'"
          >
            <v-toolbar-title
              class="google-font my-5"
              style="font-size: 3.5vh; line-height: 1.22; font-weight: 500"
              >Schedules
            </v-toolbar-title>
            <template v-slot:extension>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus atque dolorum sequi ex cumque praesentium, quaerat
                molestias? Earum quod libero sit veniam. Dolorem provident
                quibusdam, necessitatibus laborum perspiciatis ipsam laudantium.
              </p>
            </template>

            <template v-slot:extension>
              <v-tabs
                v-model="model"
                :grow="getMobileTab()"
                :centered="getMobileTab()"
                color="#0005DF"
                slider-color="#0005DF"
              >
                <v-tab href="#day1"> October 16 </v-tab>
                <v-tab href="#day2"> October 17 </v-tab>
                <v-tab href="#day3"> October 18 </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col md="10">
          <v-tabs-items v-model="model">
            <v-tab-item
              value="day1"
              :class="$vuetify.theme.dark ? 'black' : 'white'"
            >
              <v-container>
                <v-row>
                  <v-col>
                    <!-- <h3 class="google-font">Performance & Developer Tools</h3>
                    <p class="google-font" style="text-align:justify;">
                      Runtime performance is how your page performs when it is running, as opposed to loading. Users expect pages to be interactive and smooth. Each stage in the pixel pipeline represents an opportunity to introduce jank. Learn about tools and strategies to identify and fix common problems that slow down runtime performance.
                    </p> -->
                    <!-- <ComingSoon /> -->

                    <ScheduleDetails :data="ScheduleData[0]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item
              value="day2"
              :class="$vuetify.theme.dark ? 'black' : 'white'"
            >
              <v-container>
                <v-row>
                  <v-col>
                    <!-- <h3 class="google-font">Front-end & AMP</h3>
                    <p class="google-font" style="text-align:justify;">
                      AMP is an open-source HTML framework that provides a straightforward way to create web pages that are fast, smooth-loading and prioritize the user-experience above all else. Can't believe it? Try it out.
                    </p> -->
                    <!-- <ComingSoon /> -->

                    <ScheduleDetails :data="ScheduleData[1]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item
              value="day3"
              :class="$vuetify.theme.dark ? 'black' : 'white'"
            >
              <v-container>
                <v-row>
                  <v-col>
                    <!-- <h3 class="google-font">PWA & FUGU</h3>
                    <p class="google-font" style="text-align:justify;">
                     Progressive Web Apps are web apps that use emerging web browser APIs and features along with traditional progressive enhancement strategy to bring a native app-like user experience to cross-platform web applications.
                     <br>
                     Project Fugu 🐡 is an effort to close gaps in the web's capabilities enabling new classes of applications to run on the web. The developer-friendly landing page of the project is <a href="https://web.dev/fugu-status/" rel="noreferrer" target="_blank" style="text-decoration:none;">https://web.dev/fugu-status/</a>.
                    </p> -->
                    <!-- <ComingSoon /> -->

                    <ScheduleDetails :data="ScheduleData[2]" />
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>

      <!-- <v-row justify="center" align="center">
      <v-col md="8" xl="7">
        <SocialShare/>
      </v-col>
    </v-row> -->
    </v-container>
  </v-main>
</template>

<script>
import ScheduleDetails from "@/components/schedule/ScheduleDetails";
import ScheduleData from "@/assets/data/schedule.json";
export default {
  name: "",
  components: {
    ScheduleDetails,
    // ComingSoon:()=>import('@/components/common/ComingSoon'),
    // SocialShare: () => import("@/components/common/SocialShare")
  },
  data: () => ({
    model: "day1",
    ScheduleData: [],
  }),
  mounted() {
    this.ScheduleData = ScheduleData;
  },
  methods: {
    getMobileTab() {
      if (window.innerWidth < 500) return true;
      else return false;
    },
  },
};
</script>

<style >
.row-border-white {
  border-bottom: 1px solid #e0e0e0;
}
.row-border-dark {
  border-bottom: 1px solid #292929;
  background: #212121;
}
.v-slide-group__prev {
  display: none !important;
}
</style>