<template>
  <v-card flat>
    <v-card-title>
      <h3 class="headline mb-0">Shop</h3>
    </v-card-title>
    <v-layout wrap justify-center>
      <v-flex v-for="i in 5" :key="`shop-slot-${i}`" xs12>
        <v-card flat color="transparent">
          <v-layout justify-center align-center>
            <v-flex xs4>
              <v-img
                alt="Alchemist"
                :src="require('@/assets/heroes/Alchemist.png')"
              />
            </v-flex>
            <v-flex xs4>💰4</v-flex>
            <v-btn icon color="green lighten-2">
              <v-icon>payment</v-icon>
            </v-btn>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex>
        <v-btn icon color="green lighten-2">
          <v-icon>refresh</v-icon>
        </v-btn>
        <v-btn icon color="grey">
          <v-icon>lock</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import {Chess} from '@/common/types'

export default Vue.extend({
  name: 'Shop',
  computed: {
    shop(): Chess[] {
      return this.$store.state.gameInfo.shop
    },
  },
  methods: {},
})
</script>
