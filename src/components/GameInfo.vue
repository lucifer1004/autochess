<template>
  <div id="game-info">
    <v-card>
      <v-card-title primary-title>
        <h3 class="headline mb-0">Game Info</h3>
      </v-card-title>
      <v-card-text>
        <p><strong>Round</strong> {{ round }}</p>
        <p><strong>Gold</strong> {{ gold }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn v-on:click="addRound">Next round</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {INCREASE_ROUND, RESET} from '@/common/mutation-types'

export default Vue.extend({
  name: 'GameInfo',
  computed: {
    gold(): number {
      return this.$store.state.gameInfo.gold
    },
    round(): number {
      return this.$store.state.gameInfo.round
    },
  },
  methods: {
    addRound() {
      this.$store.dispatch(INCREASE_ROUND)
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
