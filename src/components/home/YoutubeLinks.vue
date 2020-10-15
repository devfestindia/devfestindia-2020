<template>
  <v-container fluid class="py-10">
    <!-- Desktop Screen Class hidden-sm-and-down -->
    <v-row justify="center" align="center">
      <v-col
        v-for="item in youtube"
        :key="item.day"
        md="3"
        cols="10"
        class="ma-2"
        style="
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: 0px 3px 16px #dceaff;
          border-radius: 10px;
          opacity: 1;
        "
      >
        <p class="google-font mt-2 mb-0" style="font-size: 80%">
          {{ item.date }}
          <br />03:30 PM - 09:00 PM IST
        </p>
        <p class="google-font mb-3">Day {{ item.day }}</p>
        <v-btn
          :href="item.link"
          target="_blank"
          small
          outlined
          color="red"
          style="text-transform: capitalize"
          class="ml-0 google-font"
        >
          <v-icon size="20px" class="mr-1">{{
            item.type == "Watch Now" ? "mdi-access-point" : "mdi-bell-outline"
          }}</v-icon
          >{{ item.type }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    youtube: [
      {
        day: "1",
        date: "October 16",
        type: "Watch Now",
        link: "https://youtube.com",
      },
      {
        day: "2",
        date: "October 17",
        type: "Set Reminder",
        link: "https://youtube.com",
      },
      {
        day: "3",
        date: "October 18",
        type: "Set Reminder",
        link: "https://youtube.com",
      },
    ],
  }),
};
</script>

<style>
</style>