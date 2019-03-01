<template>
  <v-card flat>
    <v-card-title>
      <h3 class="headline mb-0">Preparation</h3>
    </v-card-title>
    <v-layout wrap justify-center>
      <v-flex v-for="i in 8" :key="`preparation-slot-${i}`" xs12>
        <v-card flat color="transparent">
          <v-layout justify-center align-center>
            <v-flex xs4>
              <v-img
                alt="BeastMaster"
                draggable
                :src="require('@/assets/heroes/BeastMaster.png')"
              />
            </v-flex>
            <v-flex xs4>⭐️</v-flex>
            <v-btn icon color="error">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
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
