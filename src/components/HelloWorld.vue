<template>
  <div class="hello">
    <h1 v-if="msg.title !== ''">{{ msg.title }}</h1>
    <button v-on:click="togglePlaying">{{ msg.button }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {TOGGLE_PLAYING} from '@/common/mutation-types'
import {Message} from '@/common/types'

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: Message,
  },
  methods: {
    togglePlaying() {
      this.$store.commit(TOGGLE_PLAYING)
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
button
  background-color #42b983
  border 0
  border-radius 10px
  color white
  font-size 30px
  padding 5px 20px

a
  color #42b983
</style>
