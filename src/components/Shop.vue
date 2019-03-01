<template>
  <v-card dark color="secondary">
    <v-card-title primary-title>
      <h3 class="headline mb-0">Hero Shop</h3>
    </v-card-title>
    <v-card v-for="i in 5" :key="`1${i}`">
      <v-card-text class="px-0">{{ i }}</v-card-text>
    </v-card>
  </v-card> </template
>>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Shop',
  props: {},
  methods: {},
})
</script>
