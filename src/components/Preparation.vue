<template>
  <v-card flat>
    <v-card-title>
      <h3 class="headline mb-0">Preparation</h3>
    </v-card-title>
    <v-layout wrap justify-center>
      <v-flex v-for="i in 8" :key="`preparation-slot-${i}`" xs12>
        <v-card
          v-if="preparation[i - 1] !== undefined"
          flat
          color="transparent"
        >
          <v-layout justify-center align-center>
            <v-flex xs4>
              <v-img
                :alt="preparation[i - 1].name"
                draggable
                :src="require(`@/assets/heroes/${preparation[i - 1].name}.png`)"
              />
            </v-flex>
            <v-flex xs4>⭐️</v-flex>
            <v-btn icon color="error" v-on:click="sellChess(i - 1)">
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
import {SELL_CHESS} from '@/common/mutation-types'
import {Chess} from '@/common/types'

export default Vue.extend({
  name: 'Preparation',
  computed: {
    preparation(): Chess[] {
      return this.$store.state.gameInfo.preparation
    },
  },
  methods: {
    sellChess(num: number) {
      this.$store.commit(SELL_CHESS, num)
    },
  },
})
</script>
