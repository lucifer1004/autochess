<template>
  <tr>
    <ChessCell v-for="col in 8" :key="col" :col="col" :row="row" />
  </tr>
</template>

<script lang="ts">
import Vue from 'vue'
import ChessCell from '@/components/ChessCell.vue'

export default Vue.extend({
  name: 'ChessRow',
  components: {ChessCell},
  props: {
    row: Number,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
tr
  border 1px solid black
</style>
