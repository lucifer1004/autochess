<template>
  <div class="home">
    <h1>Play the game!</h1>
    <v-layout wrap justify-center>
      <v-flex xs12>
        <ChessBoard />
      </v-flex>
      <v-flex xs8>
        <Preparation />
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Message} from '@/common/types'
import ChessBoard from '@/components/ChessBoard.vue'
import Preparation from '@/components/Preparation.vue'

export default Vue.extend({
  name: 'game',
  components: {
    ChessBoard,
    Preparation,
  },
})
</script>
