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
      <v-flex xs4>
        <v-icon large>person</v-icon>
        <h4 :style="onBattlefield > level ? 'color: red' : ''">
          {{ `${onBattlefield}/${level}` }}
        </h4>
      </v-flex>
    </v-layout>
    <v-card-text>
      <p>Next round:</p>
      Basic: +{{ Math.min(round, 5) }} Interest: +{{
        Math.min(Math.trunc(gold / 10), 5)
      }}
    </v-card-text>
    <v-card-text>
      <p
        v-for="entry in Object.entries(effects).filter(entry => entry[1])"
        :key="entry[0]"
      >
        {{ entry[0].substring(2) }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-layout justify-center>
        <v-flex xs4>
          <v-btn color="green lighten-2" v-on:click="increaseRound" icon>
            <v-icon>play_arrow</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs4>
          <v-btn
            color="green lighten-2"
            v-on:click="gainExp"
            :disabled="level >= 10 || gold < 5"
            icon
          >
            <v-icon>book</v-icon>
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
import {INCREASE_ROUND, RESET, GAIN_EXP} from '@/common/mutation-types'
import {Effect} from '@/common/types'

export default Vue.extend({
  name: 'GameInfo',
  computed: {
    gold(): number {
      return this.$store.state.gameInfo.gold
    },
    round(): number {
      return this.$store.state.gameInfo.round
    },
    level(): number {
      return this.$store.state.gameInfo.level
    },
    effects(): Effect {
      return this.$store.state.gameInfo.effects
    },
    onBattlefield(): number {
      return this.$store.state.gameInfo.battlefield.length
    },
  },
  methods: {
    increaseRound() {
      this.$store.dispatch(INCREASE_ROUND)
    },
    gainExp() {
      this.$store.commit(GAIN_EXP)
    },
    reset() {
      this.$store.commit(RESET)
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
