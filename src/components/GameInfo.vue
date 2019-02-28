<template>
  <div id="game-info">
    <p>Round: {{ round }}</p>
    <p>Gold: {{ gold }}</p>
    <button v-on:click="addRound">Click</button>
    <button v-on:click="reset">Reset</button>
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
<style scoped lang="stylus">
#game-info
  border 2px black solid
  display flex
  flex-direction column
  margin 20px
  padding 10px

p
  border 1px black solid
  margin 2px
  padding 5px
</style>
