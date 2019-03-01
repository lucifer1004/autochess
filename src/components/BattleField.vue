<template>
  <div id="battle-field">
    <v-card>
      <v-card-title primary-title>
        <h3 class="headline mb-0">Battle</h3>
      </v-card-title>
      <v-card-text>
        <table>
          <ChessRow v-for="row in rows" :key="row" :row="row" :cols="cols" />
        </table>
      </v-card-text>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
table
  border 1px solid black
  border-collapse collapse
  margin 10px
</style>
