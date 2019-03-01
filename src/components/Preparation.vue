<template>
  <v-layout row justify-center>
    <v-flex v-for="i in 8" :key="`1${i}`" xs1>
      <v-card dark color="secondary">
        <v-card-text class="px-0">{{ i }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout> </template
>>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Preparation',
  props: {},
  methods: {},
})
</script>
