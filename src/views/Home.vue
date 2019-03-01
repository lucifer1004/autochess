<template>
  <div class="home">
    <img v-if="!playing" alt="AutoChess logo" src="@/assets/autochess.jpg" />
    <ChessBoard v-if="playing" />
    <Preparation v-if="playing" />
    <HelloWorld :msg="message" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Message} from '@/common/types'
import ChessBoard from '@/components/ChessBoard.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Preparation from '@/components/Preparation.vue'

export default Vue.extend({
  name: 'home',
  components: {
    ChessBoard,
    HelloWorld,
    Preparation,
  },
  computed: {
    playing(): boolean {
      return this.$store.state.isPlaying
    },
    message(): Message {
      return this.$store.state.isPlaying
        ? new Message('', 'Stop')
        : new Message('Welcome to AutoChess', 'Play')
    },
  },
})
</script>
