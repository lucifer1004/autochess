<template>
  <v-card flat color="transparent">
    <v-card-title>
      <v-layout column align-start>
        <h3 class="headline mb-0">Preparation</h3>
        <h3>{{ preparation.length }} / 8</h3>
      </v-layout>
    </v-card-title>
    <v-layout wrap justify-center>
      <v-flex v-for="i in 8" :key="`preparation-slot-${i}`" xs12>
        <v-card
          v-if="preparation[i - 1] !== undefined"
          flat
          color="transparent"
        >
          <v-layout justify-center align-center>
            <v-flex xs3>
              <v-avatar tile>
                <v-img
                  :alt="preparation[i - 1].name"
                  draggable
                  @dragstart="drag($event, i - 1)"
                  :src="
                    require(`@/assets/heroes/${preparation[i - 1].name}.png`)
                  "
                />
              </v-avatar>
            </v-flex>
            <v-flex xs5>{{ preparation[i - 1].name }}</v-flex>
            <v-flex xs2>{{ '⭐️'.repeat(preparation[i - 1].star) }}</v-flex>
            <v-btn icon color="green lighten-2" @click="dispatchChess(i - 1)">
              <v-icon>send</v-icon>
            </v-btn>
            <v-btn icon color="error" @click="sellChess(i - 1)">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import {SELL_CHESS, DISPATCH_CHESS} from '@/common/mutation-types'
import {Chess} from '@/common/types'

export default Vue.extend({
  name: 'Preparation',
  computed: {
    battlefield(): Chess[] {
      return this.$store.state.gameInfo.battlefield
    },
    preparation(): Chess[] {
      return this.$store.state.gameInfo.preparation
    },
  },
  methods: {
    drag(event: any, num: number) {
      event.dataTransfer.setData(DISPATCH_CHESS, JSON.stringify(num))
    },
    dispatchChess(num: number) {
      const availablePositions = new Set(
        Array.from({length: 32}, (v, i) => i + 33),
      )
      this.battlefield.forEach(chess => {
        if (!chess.position) return
        availablePositions.delete(
          (chess.position.row - 1) * 8 + chess.position.col,
        )
      })

      // Return if all positions have been taken
      if (availablePositions.size === 0) return

      // Set the target
      const target = Math.min(...availablePositions)

      // Dispatch current chess to the target position
      this.$store.commit(DISPATCH_CHESS, {
        num: num,
        targetPosition: {
          row: Math.trunc((target - 1) / 8) + 1,
          col: ((target - 1) % 8) + 1,
        },
      })
    },
    sellChess(num: number) {
      this.$store.commit(SELL_CHESS, num)
    },
  },
})
</script>
