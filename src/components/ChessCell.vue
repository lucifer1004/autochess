<template>
  <v-card
    height="45"
    v-on:dragover.prevent="dragover"
    v-on:drop="drop"
    :color="
      row <= 4
        ? 'grey'
        : (row + col) % 2 === 0
        ? 'green lighten-4'
        : 'green lighten-2'
    "
  >
    <img
      v-if="chessInTheCell"
      v-on:dragstart="drag"
      v-on:dblclick="withdrawChess"
      :alt="chessInTheCell.name"
      :src="imageSource()"
    />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  DISPATCH_CHESS,
  MOVE_CHESS,
  WITHDRAW_CHESS,
} from '@/common/mutation-types'
import {Chess, State} from '@/common/types'

export default Vue.extend({
  name: 'ChessCell',
  props: {
    row: Number,
    col: Number,
  },
  computed: {
    battlefield(): Chess[] {
      return this.$store.state.gameInfo.battlefield
    },
    chessInTheCell(): Chess {
      return this.battlefield.filter(
        (chess: Chess) =>
          chess.position &&
          chess.position.row === this.row &&
          chess.position.col === this.col,
      )[0]
    },
  },
  methods: {
    drag(event: any) {
      event.dataTransfer.setData(
        MOVE_CHESS,
        JSON.stringify({
          row: this.row,
          col: this.col,
        }),
      )
    },
    dragover() {},
    drop(event: any) {
      // Cannot move chess to row 1-4
      if (this.row <= 4) return

      if (event.dataTransfer.getData(MOVE_CHESS)) {
        const from = JSON.parse(event.dataTransfer.getData(MOVE_CHESS))
        this.$store.commit(MOVE_CHESS, {
          from: from,
          targetPosition: {
            row: this.row,
            col: this.col,
          },
        })
      }
      if (event.dataTransfer.getData(DISPATCH_CHESS)) {
        const num = JSON.parse(event.dataTransfer.getData(DISPATCH_CHESS))
        this.$store.commit(DISPATCH_CHESS, {
          num: num,
          targetPosition: {
            row: this.row,
            col: this.col,
          },
        })
      }
    },
    imageSource(): NodeRequire {
      return require(`@/assets/heroes/${this.chessInTheCell.name}.png`)
    },
    withdrawChess() {
      this.$store.commit(WITHDRAW_CHESS, {row: this.row, col: this.col})
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
td
  height 60px
  width 60px

img
  display block
  height 100%
  width 100%
</style>
