<template>
  <v-card color="green darken-4">
    <v-card-title primary-title>
      <h3 class="headline mb-0">Chess Shop</h3>
    </v-card-title>
    <v-layout wrap justify-center>
      <v-flex v-for="i in 5" :key="`shop-slot-${i}`" xs12>
        <v-card flat color="green lighten-2">
          <v-layout justify-center align-center>
            <v-flex xs4>
              <v-img alt="Alchemist" :src="require('@/assets/heroes/Alchemist.png')" />
            </v-flex>
            <v-flex xs4>Alchemist (4)</v-flex>
            <v-btn icon>
              <v-icon>cloud_download</v-icon>
            </v-btn>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex>
        <v-btn block depressed color="green darken-4">
          <v-icon>refresh</v-icon>
        </v-btn>
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
