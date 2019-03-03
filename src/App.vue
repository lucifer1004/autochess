<template>
  <v-app :dark="!lightMode">
    <a href="https://github.com/lucifer1004/autochess">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 250 250"
        fill="#151513"
        style="position: absolute; top: 0; right: 0"
      >
        <path d="M0 0l115 115h15l12 27 108 108V0z" fill="#fff" />
        <path
          class="octo-arm"
          d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16"
          style="-webkit-transform-origin: 130px 106px; transform-origin: 130px 106px"
        />
        <path
          class="octo-body"
          d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"
        />
      </svg>
    </a>
    <v-container grid-list-sm text-xs-center>
      <v-layout justify-center>
        <v-flex xs3 md2 lg1>
          <router-link tag="div" to="/">
            <v-btn fab :color="buttonColor">
              <v-icon>home</v-icon>
            </v-btn>
          </router-link>
        </v-flex>
        <v-flex xs3 md2 lg1>
          <router-link tag="div" to="/game">
            <v-btn fab :color="buttonColor">
              <v-icon>games</v-icon>
            </v-btn>
          </router-link>
        </v-flex>
        <v-flex xs3 md2 lg1>
          <router-link tag="div" to="/about">
            <v-btn fab :color="buttonColor">
              <v-icon>help</v-icon>
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
      <router-view />
    </v-container>
    <v-footer height="auto">
      <v-card flat tile width="100%" class="text-xs-center">
        <v-card-actions>
          <v-layout justify-center>
            <v-btn
              v-for="icon in icons"
              :key="icon.name"
              :href="icon.link"
              icon
            >
              <v-icon size="24px">{{ icon.name }}</v-icon>
            </v-btn>
          </v-layout>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-text>
          <v-layout align-center column>
            <v-flex>
              <v-switch
                v-model="lightMode"
                color="green lighten-4"
                label="Light Mode"
              />
            </v-flex>
            <v-flex>&copy;2019 — <strong>Gabriel Wu</strong></v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      lightMode: false,
      icons: [
        {
          name: 'fa fa-facebook',
          link: 'https://www.facebook.com/profile.php?id=100006454686275',
        },
        {
          name: 'fa fa-twitter',
          link: 'https://twitter.com/gabriel_wzh',
        },
        {
          name: 'fa fa-linkedin',
          link:
            'https://www.linkedin.com/in/%E8%87%AA%E5%8D%8E-%E5%90%B4-81864a115/',
        },
        {
          name: 'fa fa-github',
          link: 'https://github.com/lucifer1004',
        },
      ],
    }
  },
  computed: {
    buttonColor(): string {
      return this.lightMode ? 'green lighten-4' : 'green darken-4'
    },
  },
})
</script>
<style lang="stylus">
h1
  padding 10px
</style>
