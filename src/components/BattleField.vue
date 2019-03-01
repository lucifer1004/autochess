<template>
  <div id="battle-field">
    <v-card>
      <v-card-title primary-title>
        <h3 class="headline mb-0">Battle</h3>
      </v-card-title>
      <v-layout justify-center>
        <v-flex xs10>
          <table>
            <ChessRow v-for="row in rows" :key="row" :row="row" :cols="cols" />
          </table>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChessRow from '@/components/ChessRow.vue'

export default Vue.extend({
  name: 'BattleField',
  components: {ChessRow},
  props: {
    cols: {type: Number, default: 8},
    rows: {type: Number, default: 8},
  },
})
</script>
