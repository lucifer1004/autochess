<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">Hero Shop</h3>
    </v-card-title>
    <v-layout wrap justify-center>
      <v-flex v-for="i in 5" :key="`shop-slot-${i}`" xs12>
        <v-card color="grey darken-4">
          <v-layout justify-center align-center>
            <v-flex xs4>
              <v-img :src="require('@/assets/heroes/Alchemist.png')" />
            </v-flex>
            <v-flex xs4>Alchemist (4)</v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Shop',
  props: {},
  methods: {},
})
</script>
