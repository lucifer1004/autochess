<template>
  <v-layout align-center justify-center>
    <chess-cell v-for="col in cols" :key="col" :col="col" :row="row" />
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import ChessCell from '@/components/ChessCell.vue'

export default Vue.extend({
  name: 'ChessRow',
  components: {ChessCell},
  props: {
    row: Number,
    cols: {type: Number, default: 8},
  },
})
</script>
