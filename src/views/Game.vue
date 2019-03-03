<template>
  <div class="home">
    <v-layout wrap justify-center>
      <v-flex xs12>
        <ChessBoard />
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChessBoard from '@/components/ChessBoard.vue'

export default Vue.extend({
  name: 'game',
  components: {
    ChessBoard,
  },
})
</script>
