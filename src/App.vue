<template>
  <v-app :dark="!lightMode">
    <v-container grid-list-sm text-xs-center>
      <v-layout justify-center>
        <v-flex xs3 md2 lg1>
          <router-link tag="div" to="/">
            <v-btn fab color="green darken-4">
              <v-icon>home</v-icon>
            </v-btn>
          </router-link>
        </v-flex>
        <v-flex xs3 md2 lg1>
          <router-link tag="div" to="/game">
            <v-btn fab color="green darken-4">
              <v-icon>games</v-icon>
            </v-btn>
          </router-link>
        </v-flex>
        <v-flex xs3 md2 lg1>
          <router-link tag="div" to="/about">
            <v-btn fab color="green darken-4">
              <v-icon>help</v-icon>
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
      <router-view />
      <v-footer color="transparent">
        <v-switch
          v-model="lightMode"
          color="green lighten-4"
          label="Light Mode"
        />
        <h3 class="headline mb-0">2019 - Gabriel Wu</h3>
      </v-footer>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      lightMode: false,
    }
  },
})
</script>
