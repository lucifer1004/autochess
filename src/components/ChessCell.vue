<template>
  <v-card
    :height="cellSize"
    :width="cellSize"
    :draggable="!!chessInCell"
    @dblclick="withdrawChess"
    @dragstart="drag"
    @dragenter="dragenter"
    @dragleave="dragleave"
    @dragover.prevent="dragover"
    @drop="drop"
    @touchstart="touchstart"
    @touchend="touchend"
    :color="
      row <= 4
        ? 'grey'
        : (row + col) % 2 === 0
        ? highlighted
          ? 'green darken-1'
          : 'green lighten-4'
        : highlighted
        ? 'green darken-3'
        : 'green lighten-2'
    "
    :img="chessInCell ? imageSource() : null"
  >
    <v-layout justify-center v-if="!!chessInCell">
      <v-flex>
        {{ '⭐'.repeat(chessInCell.star) }}
      </v-flex>
    </v-layout>
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
  data() {
    return {
      highlighted: false,
      screenX: 0,
      screenY: 0,
    }
  },
  props: {
    row: Number,
    col: Number,
  },
  computed: {
    battlefield(): Chess[] {
      return this.$store.state.gameInfo.battlefield
    },
    chessInCell(): Chess {
      return this.battlefield.filter(
        (chess: Chess) =>
          !!chess.position &&
          chess.position.row === this.row &&
          chess.position.col === this.col,
      )[0]
    },
    cellSize(): number {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 30
        case 'sm':
          return 40
        case 'md':
          return 50
        case 'lg':
          return 60
        case 'xl':
          return 80
        default:
          return 60
      }
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
    dragenter() {
      this.highlighted = true
    },
    dragleave() {
      this.highlighted = false
    },
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

      this.highlighted = false
    },
    touchstart(event: any): void {
      if (!this.chessInCell) return
      this.screenX = event.changedTouches[0].screenX
      this.screenY = event.changedTouches[0].screenY
    },
    touchend(event: any): void {
      if (!this.chessInCell) return
      const deltaX = Math.round(
        (event.changedTouches[0].screenX - this.screenX) / this.cellSize,
      )
      const deltaY = Math.round(
        (event.changedTouches[0].screenY - this.screenY) / this.cellSize,
      )
      if (deltaX === 0 && deltaY === 0) return
      const target = {
        row: this.row + deltaY,
        col: this.col + deltaX,
      }

      // Withdraw the chess if moved out of the valid area
      if (
        target.row <= 4 ||
        target.row > 8 ||
        target.col < 1 ||
        target.col > 8
      ) {
        this.$store.commit(WITHDRAW_CHESS, {row: this.row, col: this.col})
        return
      }

      // Otherwise move the chess
      this.$store.commit(MOVE_CHESS, {
        from: {
          row: this.row,
          col: this.col,
        },
        targetPosition: target,
      })
    },
    imageSource(): NodeRequire {
      return require(`@/assets/heroes/${this.chessInCell.name}.png`)
    },
    withdrawChess() {
      // Return if no chess in current cell
      if (!this.chessInCell) return

      this.$store.commit(WITHDRAW_CHESS, {row: this.row, col: this.col})
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
img
  height 100%
  width 100%
</style>
