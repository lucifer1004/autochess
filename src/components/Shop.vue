<template>
  <v-card flat>
    <v-card-title>
      <h3 class="headline mb-0">Shop</h3>
    </v-card-title>
    <v-layout wrap justify-center>
      <v-flex v-for="i in 5" :key="`shop-slot-${i}`" xs12>
        <v-card flat color="transparent">
          <v-layout v-if="shop[i - 1]" justify-center align-center>
            <v-flex xs4>
              <v-img
                :alt="shop[i - 1].name"
                :src="require(`@/assets/heroes/${shop[i - 1].name}.png`)"
              />
            </v-flex>
            <v-flex xs4>💰{{ shop[i - 1].cost }}</v-flex>
            <v-btn
              icon
              color="green lighten-2"
              v-on:click="buyChess(i - 1)"
            >
              <v-icon>payment</v-icon>
            </v-btn>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex>
        <v-btn icon color="green lighten-2" v-on:click="refreshShop">
          <v-icon>refresh</v-icon>
        </v-btn>
        <v-btn icon color="grey" v-on:click="toggleLocked">
          <v-icon>{{ locked ? 'lock_open' : 'lock' }}</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import {BUY_CHESS, REFRESH_SHOP, TOGGLE_LOCKED} from '@/common/mutation-types'
import {Chess} from '@/common/types'

export default Vue.extend({
  name: 'Shop',
  computed: {
    locked(): boolean {
      return this.$store.state.gameInfo.locked
    },
    shop(): Chess[] {
      return this.$store.state.gameInfo.shop
    },
  },
  methods: {
    buyChess(num: number) {
      this.$store.commit(BUY_CHESS, num)
    },
    refreshShop() {
      this.$store.commit(REFRESH_SHOP)
    },
    toggleLocked() {
      this.$store.commit(TOGGLE_LOCKED)
    },
  },
})
</script>
