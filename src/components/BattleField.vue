<template>
  <v-card color="green darken-4">
    <v-card-title primary-title>
      <h3 class="headline mb-0">Battlefield</h3>
    </v-card-title>
    <ChessRow v-for="row in rows" :key="row" :row="row" :cols="cols" />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import ChessRow from '@/components/ChessRow.vue'

export default Vue.extend({
  name: 'Battlefield',
  components: {ChessRow},
  props: {
    cols: {type: Number, default: 8},
    rows: {type: Number, default: 8},
  },
})
</script>
