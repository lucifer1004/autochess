<template>
  <v-layout align-center justify-center>
    <v-flex v-for="col in cols" :key="col" xs2 md1>
      <ChessCell :col="col" :row="row" />
    </v-flex>
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
