<template>
  <v-card
    flat
    height=60
    width=60
    v-on:click="addHero"
    v-on:dragover.prevent="dragover"
    v-on:drop="drop"
    :color="(row + col) % 2 === 0 ? 'green lighten-4' : 'green lighten-2'"
  >
    <img
      v-if="showImage()"
      v-on:dragstart="drag"
      v-on:dblclick="clickImage"
      :alt="chessBoard[(row - 1) * 8 + col - 1]"
      :src="imageSource()"
    />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import {ADD_HERO, MOVE_CHESS} from '@/common/mutation-types'
import {State} from '@/common/types'

export default Vue.extend({
  name: 'ChessCell',
  props: {
    row: Number,
    col: Number,
  },
  data: () => ({
    evenCellStyle: {
      backgroundColor: '#80aba9',
    },
    oddCellStyle: {
      backgroundColor: '#43676b',
    },
  }),
  computed: {
    chessBoard(): string[] {
      return this.$store.state.gameInfo.chessBoard
    },
  },
  methods: {
    drag(event: any) {
      event.dataTransfer.setData(
        'data',
        JSON.stringify({
          row: this.row,
          col: this.col,
          hero: this.chessBoard[(this.row - 1) * 8 + this.col - 1],
        }),
      )
    },
    dragover() {},
    drop(event: any) {
      const data = JSON.parse(event.dataTransfer.getData('data'))
      this.$store.commit(MOVE_CHESS, {
        from: {row: data.row, col: data.col},
        to: {row: this.row, col: this.col},
      })
    },
    showImage(): boolean {
      return this.chessBoard[(this.row - 1) * 8 + this.col - 1] !== ''
    },
    imageSource(): NodeRequire {
      return require(`@/assets/heroes/${
        this.chessBoard[(this.row - 1) * 8 + this.col - 1]
      }.png`)
    },
    addHero(): void {
      this.$store.commit(ADD_HERO, {row: this.row, col: this.col})
    },
    clickImage(): void {
      console.log(this.chessBoard[(this.row - 1) * 8 + this.col - 1])
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
