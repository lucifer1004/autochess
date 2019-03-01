<template>
  <v-card color="green darken-4">
    <v-card-title>
      <h3 class="headline mb-0">Preparation Room</h3>
    </v-card-title>
    <v-card-text>
      <v-layout wrap justify-space-between>
        <v-flex v-for="i in 8" :key="`preparation-slot-${i}`" xs6 md3 xl1>
          <v-card flat color="transparent">
            <v-img :src="require('@/assets/heroes/BeastMaster.png')" />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green lighten-2" icon>
                <v-icon>send</v-icon>
              </v-btn>
              <v-btn color="error" icon>
                <v-icon>delete</v-icon>
              </v-btn>
            </v-card-actions>
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
