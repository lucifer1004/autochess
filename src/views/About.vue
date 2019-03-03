<template>
  <v-card style="margin-top: 20px; padding-bottom: 20px;">
    <h1>About this site</h1>
    <v-layout justify-center align-center wrap>
      <v-flex xs12>
        <v-layout justify-center>
          <v-img
            alt="Vue logo"
            :src="require('@/assets/logo.png')"
            max-width="200"
          />
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-card-text>
          <h3>
            This site is built with Vue and Vuetify. Pictures are from Dota2,
            and the original game was made by Drodo Games.
          </h3>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>
