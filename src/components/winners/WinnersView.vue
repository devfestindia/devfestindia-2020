<template>
  <div>
    <v-text-field
      flat
      v-model="search"
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-search-web"
      label="Search"
      single-line
    ></v-text-field>
    <v-data-table
      class="mt-3"
      :search="search"
      mobile-breakpoint="no"
      :headers="headers"
      no-results-text="Result Not Decleared"
      no-data-text="Result Not Decleared"
      :items="userData"
      items-per-page="100"
    >
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: ["userData"],
  data: () => ({
    search: "",
    headers: [
      {
        text: "Name",
        align: "start",
        value: "name",
      },
      { text: "Track", value: "track" },
    ],
  }),
};
</script>

<style>
</style>