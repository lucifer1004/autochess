<template>
  <v-card>
    <v-card-title>
      <h3 class="headline mb-0">Preparation Room</h3>
    </v-card-title>
    <v-card-text>
      <v-layout row justify-center>
        <v-flex v-for="i in 8" :key="`preparation-slot-${i}`" xs2>
          <v-card color="secondary">
            <v-img :src="require('@/assets/heroes/BeastMaster.png')" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Preparation',
  props: {},
  methods: {},
})
</script>
<style lang="stylus"></style>
