<template>
  <div class="hello">
    <h1 v-if="msg.title !== ''">{{ msg.title }}</h1>
    <v-btn v-if="msg.title === ''" color="primary" v-on:click="reset"
      >Reset</v-btn
    >
    <v-btn
      :color="msg.title === '' ? 'error' : 'primary'"
      v-on:click="togglePlaying"
    >
      {{ msg.button }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {RESET, TOGGLE_PLAYING} from '@/common/mutation-types'
import {Message} from '@/common/types'

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: Message,
  },
  methods: {
    reset() {
      this.$store.commit(RESET)
    },
    togglePlaying() {
      this.$store.commit(TOGGLE_PLAYING)
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
a
  color #42b983
</style>
