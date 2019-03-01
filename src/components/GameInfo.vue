<template>
  <div id="game-info">
    <v-card>
      <v-card-title primary-title>
        <h3 class="headline mb-0">Game Info</h3>
      </v-card-title>
      <v-layout justify-center>
        <v-flex xs4> <v-icon>timer</v-icon> {{ round }} </v-flex>
        <v-flex xs4> <v-icon>attach_money</v-icon> {{ gold }} </v-flex>
      </v-layout>
      <v-card-text>
        <p>Next round:</p>
        Basic: +{{ Math.min(round, 5) }} Interest: +{{
          Math.min(Math.trunc(gold / 10), 5)
        }}
      </v-card-text>
      <v-layout justify-center>
        <v-card-actions>
          <v-btn v-on:click="addRound">Next round</v-btn>
          <v-btn color="warning" v-on:click="reset">Reset</v-btn>
        </v-card-actions>
      </v-layout>
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
    reset() {
      this.$store.commit(RESET)
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
