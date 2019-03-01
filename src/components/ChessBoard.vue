<template>
  <div id="chess-board">
    <v-layout wrap>
      <v-flex xs12 md3>
        <GameInfo />
      </v-flex>
      <v-flex xs12 md6>
        <Battlefield />
      </v-flex>
      <v-flex xs12 md3>
        <Shop />
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Battlefield from '@/components/Battlefield.vue'
import GameInfo from '@/components/GameInfo.vue'
import Shop from '@/components/Shop.vue'

export default Vue.extend({
  name: 'ChessBoard',
  components: {Battlefield, GameInfo, Shop},
})
</script>
