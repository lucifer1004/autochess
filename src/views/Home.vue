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
    <v-card-text>
      <h2>A plain version of the 🔥 game DotA AutoChess</h2>
      <v-list>
        <v-list-tile v-for="update in updates" :key="update">
          <v-list-tile-content v-text="update" />
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default Vue.extend({
  name: 'home',
  data() {
    return {
      updates: [
        `[4.1]: 🔥Mars and ⚡️Zeus have come!`,
        `[6.2]: Dazzle, WinterWyvern and Sven have come!`,
      ],
    }
  },
})
</script>
