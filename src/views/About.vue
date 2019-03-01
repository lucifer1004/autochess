<template>
  <div class="about">
    <h1>About this site</h1>
    <v-card color="green darken-4">
      <v-layout justify-center align-center>
        <v-flex xs6 sm3>
          <v-img
            alt="Vue logo"
            :src="require('@/assets/logo.png')"
            max-width="200"
          />
        </v-flex>
        <v-flex xs6 sm3>
          <v-card-text>
            <h3>
              This site is built by Vue and Vuetify. Pictures are from Dota2,
              and the original game was made by Dodoo.
            </h3>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>
