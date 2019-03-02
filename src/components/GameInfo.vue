<template>
  <v-card flat color="transparent">
    <v-card-title>
      <h3 class="headline mb-0">Game Info</h3>
    </v-card-title>
    <v-layout justify-center>
      <v-flex xs4>
        <v-icon large>timer</v-icon>
        <h4>{{ round }}</h4>
      </v-flex>
      <v-flex xs4>
        <v-icon large>attach_money</v-icon>
        <h4>{{ gold }}</h4>
      </v-flex>
    </v-layout>
    <v-card-text>
      <p>Next round:</p>
      Basic: +{{ Math.min(round, 5) }} Interest: +{{
        Math.min(Math.trunc(gold / 10), 5)
      }}
    </v-card-text>
    <v-card-actions>
      <v-layout justify-center>
        <v-flex xs4>
          <v-btn color="green lighten-2" v-on:click="increaseRound" icon>
            <v-icon>play_arrow</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs4>
          <v-btn color="warning" v-on:click="reset" icon>
            <v-icon>autorenew</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
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
    increaseRound() {
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
