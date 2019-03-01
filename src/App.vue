<template>
  <v-app dark>
    <v-container grid-list-lg text-xs-center>
      <v-layout justify-center>
        <v-flex xs1>
          <router-link tag="div" to="/">
            <v-btn fab color="green darken-4">
              <v-icon>home</v-icon>
            </v-btn>
          </router-link>
        </v-flex>
        <v-flex xs1>
          <router-link tag="div" to="/game">
            <v-btn fab color="green darken-4">
              <v-icon>games</v-icon>
            </v-btn>
          </router-link>
        </v-flex>
        <v-flex xs1>
          <router-link tag="div" to="/about">
            <v-btn fab color="green darken-4">
              <v-icon>help</v-icon>
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
      <router-view />
      <v-footer color="transparent">
        <v-layout>
          <v-flex xs3 offset-xs8>
            <h3 class="headline mb-0">2019 - Gabriel Wu</h3>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-container>
  </v-app>
</template>
