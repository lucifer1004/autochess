<template>
  <v-card>
    <v-layout wrap>
      <v-flex xs12 md2>
        <GameInfo />
      </v-flex>
      <v-flex xs12 md6>
        <Battlefield />
      </v-flex>
      <v-flex xs12 md2>
        <Preparation />
      </v-flex>
      <v-flex xs12 md2>
        <Shop />
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
