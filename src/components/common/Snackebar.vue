<template>
  <v-snackbar :timeout="timeout" right bottom v-model="showS">
    {{ message }}
    <template v-slot:action="{ attrs }">
  <v-btn :color="color" v-bind="attrs" text @click="showS = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
name: "CustomSnakebar",
  props: ["message", "isShow", "color", "timeout"],
  computed: {
        showS: {
            get: function() {
                return this.isShow
            },
            set: function(value) {
                this.$emit('update:isShow', value)
            }
        }
    }
};
</script>

<style>
</style>