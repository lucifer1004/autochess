<template>
  <v-card flat color="transparent">
    <v-card-title>
      <h3 class="headline mb-0">Game Info</h3>
    </v-card-title>
    <v-layout justify-center wrap>
      <v-flex xs4>
        <v-icon large>timer</v-icon>
        <h4>{{ round }}</h4>
      </v-flex>
      <v-flex xs4>
        <v-icon large>attach_money</v-icon>
        <h4>{{ gold }}</h4>
      </v-flex>
      <v-flex xs4>
        <v-icon large>person</v-icon>
        <h4 :style="onBattlefield > level ? 'color: red' : ''">
          {{ `${onBattlefield}/${level}` }}
        </h4>
      </v-flex>
      <v-flex xs3>
        <v-progress-circular
          :value="hp"
          color="red lighten-2"
          size="60"
          width="10"
          >{{ hp }}</v-progress-circular
        >
      </v-flex>
      <v-flex xs3>
        <v-progress-circular
          :value="level < 10 ? (exp / levelUpRequirement[level]) * 100 : 100"
          color="blue darken-2"
          size="60"
          width="10"
          >{{
            level !== 10 ? `${exp}/${levelUpRequirement[level]}` : 'Max'
          }}</v-progress-circular
        >
      </v-flex>
    </v-layout>
    <v-card-text>
      <h4>Next round</h4>
      <p>Basic: +{{ Math.min(round, 5) }}</p>
      <p>Interest: +{{ Math.min(Math.trunc(gold / 10), 5) }}</p>
    </v-card-text>
    <v-card-text>
      <h4>Enabled effects</h4>
      <p
        v-for="entry in Object.entries(effects).filter(entry => entry[1])"
        :key="entry[0]"
      >
        {{ entry[0].substring(2) }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-layout justify-center>
        <v-flex xs3>
          <v-btn color="green lighten-2" v-on:click="increaseRound" icon>
            <v-icon>play_arrow</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn
            color="green lighten-2"
            v-on:click="gainExp"
            :disabled="level >= 10 || gold < 5"
            icon
          >
            <v-icon>book</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn color="primary" v-on:click="showHelp = true" icon>
            <v-icon>build</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn color="warning" v-on:click="reset" icon>
            <v-icon>autorenew</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
    <v-dialog v-model="showHelp" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Help</v-card-title>
        <v-card-text>
          <ul>
            <li>Buy chesses from the shop.</li>
            <li>Sell chesses you do not want.</li>
            <li>
              Drag chesses to the battlefield (mouse only), or use the dispatch
              button.
            </li>
            <li>
              Move chesses for better positioning (touch support is poor).
            </li>
            <li>
              Double-click on chesses to withdraw them (mouse only), or move the
              chess out of the valid area (on touch screen).
            </li>
            <li>Collect similar chesses to upgrade.</li>
            <li>
              Collect chesses of the same class to enable powerful effects.
            </li>
            <li>Read the Book to gain EXP.</li>
            <li>Reset the game if you do not want to continue.</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-layout justify-center>
            <v-btn @click="showHelp = false">Close</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import {LEVELUP_REQUIREMENT} from '@/common/constants'
import {INCREASE_ROUND, RESET, GAIN_EXP} from '@/common/mutation-types'
import {Effect} from '@/common/types'

export default Vue.extend({
  name: 'GameInfo',
  data() {
    return {
      showHelp: false,
      levelUpRequirement: LEVELUP_REQUIREMENT,
    }
  },
  computed: {
    gold(): number {
      return this.$store.state.gameInfo.gold
    },
    round(): number {
      return this.$store.state.gameInfo.round
    },
    level(): number {
      return this.$store.state.gameInfo.level
    },
    effects(): Effect {
      return this.$store.state.gameInfo.effects
    },
    onBattlefield(): number {
      return this.$store.state.gameInfo.battlefield.length
    },
    exp(): number {
      return this.$store.state.gameInfo.exp
    },
    hp(): number {
      return this.$store.state.gameInfo.hp
    },
  },
  methods: {
    increaseRound() {
      this.$store.dispatch(INCREASE_ROUND)
    },
    gainExp() {
      this.$store.commit(GAIN_EXP)
    },
    reset() {
      this.$store.commit(RESET)
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
p
  margin 0
</style>
