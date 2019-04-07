<template>
  <v-card style="margin-top: 20px">
    <v-layout wrap>
      <v-flex xs12 lg4 xl2>
        <game-info />
      </v-flex>
      <v-flex xs12 lg8 xl6>
        <battlefield />
      </v-flex>
      <v-flex xs12 lg6 xl2>
        <preparation />
      </v-flex>
      <v-flex xs12 lg6 xl2>
        <shop />
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Battlefield from '@/components/Battlefield.vue'
import GameInfo from '@/components/GameInfo.vue'
import Preparation from '@/components/Preparation.vue'
import Shop from '@/components/Shop.vue'

export default Vue.extend({
  name: 'ChessBoard',
  components: {Battlefield, GameInfo, Preparation, Shop},
})
</script>
