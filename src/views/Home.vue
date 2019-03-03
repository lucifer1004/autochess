<template>
  <v-card style="margin-top: 20px; padding-bottom: 20px;">
    <h1>Welcome to Auto🤖Chess!</h1>
    <v-layout justify-center>
      <v-img
        alt="AutoChess logo"
        :src="require('@/assets/autochess.jpg')"
        max-width="800"
      />
    </v-layout>
    <v-card-text
      ><h3>A plain version of the 🔥 game DotA AutoChess</h3></v-card-text
    >
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default Vue.extend({
  name: 'home',
})
</script>
