<template>
  <div id="chess-board">
    <v-layout justify-center fill-height align-space-around>
      <v-flex xs3>
        <GameInfo />
      </v-flex>
      <v-flex xs6>
        <BattleField />
      </v-flex>
      <v-flex xs3>
        <Shop />
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BattleField from '@/components/BattleField.vue'
import GameInfo from '@/components/GameInfo.vue'
import Shop from '@/components/Shop.vue'

export default Vue.extend({
  name: 'ChessBoard',
  components: {BattleField, GameInfo, Shop},
})
</script>
