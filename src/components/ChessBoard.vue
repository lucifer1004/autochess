<template>
  <div id="chess-board">
    <table>
      <ChessRow v-for="row in rows" :key="row" :row="row" :cols="cols" />
    </table>
    <GameInfo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChessRow from '@/components/ChessRow.vue'
import GameInfo from '@/components/GameInfo.vue'

export default Vue.extend({
  name: 'ChessBoard',
  components: {ChessRow, GameInfo},
  props: {
    cols: {type: Number, default: 8},
    rows: {type: Number, default: 8},
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#chess-board
  align-items center
  display flex
  justify-content center
table
  border 1px solid black
  border-collapse collapse
  margin 10px
</style>
