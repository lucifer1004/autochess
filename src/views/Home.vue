<template>
  <div class="home">
    <h1>Welcome to AutoChess</h1>
    <v-layout justify-center>
      <v-img alt="AutoChess logo" :src="require('@/assets/autochess.jpg')" max-width=800 />
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Message} from '@/common/types'
import HelloWorld from '@/components/HelloWorld.vue'

export default Vue.extend({
  name: 'home',
})
</script>
