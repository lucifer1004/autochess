import {CHESSES} from '@/common/chesses'
import {
  CHESS_CLASSES,
  LEVELUP_REQUIREMENT,
  PROBABILITY,
} from '@/common/constants'
import * as MUTATION from '@/common/mutation-types'
import {Chess, ChessStat, ClassStat, Position, State} from '@/common/types'

const getRandomChess = (level: number): Chess => {
  const rand = Math.random()
  let cost
  if (rand < PROBABILITY.ONE[level]) cost = 1
  else if (rand < PROBABILITY.TWO[level]) cost = 2
  else if (rand < PROBABILITY.THREE[level]) cost = 3
  else if (rand < PROBABILITY.FOUR[level]) cost = 4
  else cost = 5
  return Object.assign(
    {},
    CHESSES[0][cost - 1][
      Math.floor(Math.random() * CHESSES[0][cost - 1].length)
    ],
  )
}

// Satyr
const checkSatyr = (state: State): void => {
  const satyrCount = new Set(
    state.gameInfo.preparation
      .filter(chess => (chess as any).Satyr)
      .map(chess => chess.name),
  ).size

  if (satyrCount !== undefined) {
    if (satyrCount >= 1) state.gameInfo.effects.isSatyr = true
    else state.gameInfo.effects.isSatyr = false
  }
}

const checkEffects = (state: State): void => {
  const classStat: ClassStat = {}
  CHESS_CLASSES.map(chessClass => {
    ;(classStat as any)[chessClass] = new Set(
      state.gameInfo.battlefield
        .filter(chess => (chess as any)[chessClass])
        .map(chess => chess.name),
    ).size
  })

  // Beast
  if (classStat.Beast !== undefined) {
    state.gameInfo.effects.is2Beasts = false
    state.gameInfo.effects.is4Beasts = false
    state.gameInfo.effects.is6Beasts = false
    if (classStat.Beast >= 2) {
      state.gameInfo.effects.is2Beasts = true
      if (classStat.Beast >= 4) {
        state.gameInfo.effects.is4Beasts = true
        if (classStat.Beast >= 6) {
          state.gameInfo.effects.is6Beasts = true
        }
      }
    }
  }

  // DemonHunter

  if (classStat.DemonHunter !== undefined) {
    state.gameInfo.effects.isDemonHunter = false
    state.gameInfo.effects.is2DemonHunters = false
    if (classStat.DemonHunter >= 1) {
      state.gameInfo.effects.isDemonHunter = true
      if (classStat.DemonHunter >= 2) {
        state.gameInfo.effects.is2DemonHunters = true
      }
    }
  }

  // Demon
  if (classStat.Demon !== undefined) {
    state.gameInfo.effects.isDemon = false
    if (
      classStat.Demon === 1 ||
      (classStat.Demon > 1 && state.gameInfo.effects.is2DemonHunters)
    )
      state.gameInfo.effects.isDemon = true
  }

  // Dragon
  if (classStat.Dragon !== undefined) {
    state.gameInfo.effects.is3Dragons = false
    if (classStat.Dragon >= 3) state.gameInfo.effects.is3Dragons = true
  }

  // Dwarf
  if (classStat.Dwarf !== undefined) {
    state.gameInfo.effects.isDwarf = false
    if (classStat.Dwarf >= 1) state.gameInfo.effects.isDwarf = true
  }

  // Elemental
  if (classStat.Elemental !== undefined) {
    state.gameInfo.effects.is2Elementals = false
    state.gameInfo.effects.is4Elementals = false
    if (classStat.Elemental >= 2) {
      state.gameInfo.effects.is2Elementals = true
      if (classStat.Elemental >= 4) {
        state.gameInfo.effects.is4Elementals = true
      }
    }
  }

  // Elf
  if (classStat.Elf !== undefined) {
    state.gameInfo.effects.is3Elfs = false
    state.gameInfo.effects.is6Elfs = false
    state.gameInfo.effects.is9Elfs = false
    if (classStat.Elf >= 3) {
      state.gameInfo.effects.is3Elfs = true
      if (classStat.Elf >= 6) {
        state.gameInfo.effects.is6Elfs = true
        if (classStat.Elf >= 9) {
          state.gameInfo.effects.is9Elfs = true
        }
      }
    }
  }

  // Goblin
  if (classStat.Goblin !== undefined) {
    state.gameInfo.effects.is3Goblins = false
    state.gameInfo.effects.is6Goblins = false
    if (classStat.Goblin >= 3) {
      state.gameInfo.effects.is3Goblins = true
      if (classStat.Goblin >= 6) {
        state.gameInfo.effects.is6Goblins = true
      }
    }
  }

  // Human
  if (classStat.Human !== undefined) {
    state.gameInfo.effects.is2Humans = false
    state.gameInfo.effects.is4Humans = false
    state.gameInfo.effects.is6Humans = false
    if (classStat.Human >= 2) {
      state.gameInfo.effects.is2Humans = true
      if (classStat.Human >= 4) {
        state.gameInfo.effects.is4Humans = true
        if (classStat.Human >= 6) {
          state.gameInfo.effects.is6Humans = true
        }
      }
    }
  }

  // Naga
  if (classStat.Naga !== undefined) {
    state.gameInfo.effects.is2Nagas = false
    state.gameInfo.effects.is4Nagas = false
    if (classStat.Naga >= 2) {
      state.gameInfo.effects.is2Nagas = true
      if (classStat.Naga >= 4) {
        state.gameInfo.effects.is4Nagas = true
      }
    }
  }

  // Ogre
  if (classStat.Ogre !== undefined) {
    state.gameInfo.effects.isOgre = false
    if (classStat.Ogre >= 1) state.gameInfo.effects.isOgre = true
  }

  // Orc
  if (classStat.Orc !== undefined) {
    state.gameInfo.effects.is2Orcs = false
    state.gameInfo.effects.is4Orcs = false
    if (classStat.Orc >= 2) {
      state.gameInfo.effects.is2Orcs = true
      if (classStat.Orc >= 4) {
        state.gameInfo.effects.is4Orcs = true
      }
    }
  }

  // Troll
  if (classStat.Troll !== undefined) {
    state.gameInfo.effects.is2Trolls = false
    state.gameInfo.effects.is4Trolls = false
    if (classStat.Troll >= 2) {
      state.gameInfo.effects.is2Trolls = true
      if (classStat.Troll >= 4) {
        state.gameInfo.effects.is4Trolls = true
      }
    }
  }

  // Undead
  if (classStat.Undead !== undefined) {
    state.gameInfo.effects.is2Undeads = false
    state.gameInfo.effects.is4Undeads = false
    if (classStat.Undead >= 2) {
      state.gameInfo.effects.is2Undeads = true
      if (classStat.Undead >= 4) {
        state.gameInfo.effects.is4Undeads = true
      }
    }
  }

  // Assassin
  if (classStat.Assassin !== undefined) {
    state.gameInfo.effects.is3Assassins = false
    state.gameInfo.effects.is6Assassins = false
    state.gameInfo.effects.is9Assassins = false
    if (classStat.Assassin >= 3) {
      state.gameInfo.effects.is3Assassins = true
      if (classStat.Assassin >= 6) {
        state.gameInfo.effects.is6Assassins = true
        if (classStat.Assassin >= 9) {
          state.gameInfo.effects.is9Assassins = true
        }
      }
    }
  }

  // Druid
  if (classStat.Druid !== undefined) {
    state.gameInfo.effects.is2Druids = false
    state.gameInfo.effects.is4Druids = false
    if (classStat.Druid >= 2) {
      state.gameInfo.effects.is2Druids = true
      if (classStat.Druid >= 4) {
        state.gameInfo.effects.is4Druids = true
      }
    }
  }

  // Hunter
  if (classStat.Hunter !== undefined) {
    state.gameInfo.effects.is3Hunters = false
    state.gameInfo.effects.is6Hunters = false
    if (classStat.Hunter >= 3) {
      state.gameInfo.effects.is3Hunters = true
      if (classStat.Hunter >= 6) {
        state.gameInfo.effects.is6Hunters = true
      }
    }
  }

  // Knight
  if (classStat.Knight !== undefined) {
    state.gameInfo.effects.is2Knights = false
    state.gameInfo.effects.is4Knights = false
    state.gameInfo.effects.is6Knights = false
    if (classStat.Knight >= 2) {
      state.gameInfo.effects.is2Knights = true
      if (classStat.Knight >= 4) {
        state.gameInfo.effects.is4Knights = true
        if (classStat.Knight >= 6) {
          state.gameInfo.effects.is6Knights = true
        }
      }
    }
  }

  // Mage
  if (classStat.Mage !== undefined) {
    state.gameInfo.effects.is3Mages = false
    state.gameInfo.effects.is6Mages = false
    if (classStat.Mage >= 3) {
      state.gameInfo.effects.is3Mages = true
      if (classStat.Mage >= 6) {
        state.gameInfo.effects.is6Mages = true
      }
    }
  }

  // Mech
  if (classStat.Mech !== undefined) {
    state.gameInfo.effects.is2Mechs = false
    state.gameInfo.effects.is4Mechs = false
    if (classStat.Mech >= 2) {
      state.gameInfo.effects.is2Mechs = true
      if (classStat.Mech >= 4) {
        state.gameInfo.effects.is4Mechs = true
      }
    }
  }

  // Shaman
  if (classStat.Shaman !== undefined) {
    state.gameInfo.effects.is2Shamans = false
    if (classStat.Shaman >= 2) state.gameInfo.effects.is2Shamans = true
  }

  // Warlock
  if (classStat.Warlock !== undefined) {
    state.gameInfo.effects.is3Warlocks = false
    state.gameInfo.effects.is6Warlocks = false
    if (classStat.Warlock >= 3) {
      state.gameInfo.effects.is3Warlocks = true
      if (classStat.Warlock >= 6) {
        state.gameInfo.effects.is6Warlocks = true
      }
    }
  }

  // Warrior
  if (classStat.Warrior !== undefined) {
    state.gameInfo.effects.is3Warriors = false
    state.gameInfo.effects.is6Warriors = false
    state.gameInfo.effects.is9Warriors = false
    if (classStat.Warrior >= 3) {
      state.gameInfo.effects.is3Warriors = true
      if (classStat.Warrior >= 6) {
        state.gameInfo.effects.is6Warriors = true
        if (classStat.Warrior >= 9) {
          state.gameInfo.effects.is9Warriors = true
        }
      }
    }
  }
}

const mergeChess = (state: State): void => {
  const stats: ChessStat[] = []
  state.gameInfo.battlefield.forEach(chess => {
    const index = stats.findIndex(
      stat => stat.name === chess.name && stat.star === chess.star,
    )
    if (index === -1) {
      stats.push({
        name: chess.name,
        star: chess.star,
        cost: chess.cost,
        position: chess.position,
        Druid: !!chess.Druid,
        count: 1,
      })
    } else stats[index].count += 1
  })

  // No druid effect
  if (!state.gameInfo.effects.is2Druids) {
    const filteredStats = stats.filter(
      stat => stat.count === 3 && stat.star <= 2,
    )

    filteredStats.forEach(stat => {
      const {name, star, cost, position} = stat

      // Remove original chesses
      for (let i = 0; i < 3; i++) {
        const indexToRemove = state.gameInfo.battlefield.findIndex(
          chess => chess.name === name && chess.star === star,
        )
        state.gameInfo.battlefield.splice(indexToRemove, 1)
      }

      // Add upgraded chess
      const newChess = Object.assign(
        {},
        CHESSES[star][cost + 1 - 2 * star].find(chess => chess.name === name),
        {position: position},
      )
      state.gameInfo.battlefield.push(newChess)
    })
  }

  // 2-druid effect
  if (state.gameInfo.effects.is2Druids && !state.gameInfo.effects.is4Druids) {
    const filteredStats = stats.filter(
      stat =>
        (stat.count === 3 &&
          ((stat.star <= 2 && !stat.Druid) ||
            (stat.star === 2 && stat.Druid))) ||
        (stat.count >= 2 && stat.star === 1 && stat.Druid),
    )

    filteredStats.forEach(stat => {
      if (
        stat.count === 3 &&
        ((stat.star <= 2 && !stat.Druid) || (stat.star === 2 && stat.Druid))
      ) {
        const {name, star, cost, position} = stat

        // Remove original chesses
        for (let i = 0; i < 3; i++) {
          const indexToRemove = state.gameInfo.battlefield.findIndex(
            chess => chess.name === name && chess.star === star,
          )
          state.gameInfo.battlefield.splice(indexToRemove, 1)
        }

        // Add upgraded chess
        const newChess = Object.assign(
          {},
          CHESSES[star][cost + 1 - 2 * star].find(chess => chess.name === name),
          {position: position},
        )
        state.gameInfo.battlefield.push(newChess)
      }

      if (stat.count >= 2 && stat.star === 1 && stat.Druid) {
        const {name, star, cost, position} = stat

        // Remove original chesses
        for (let i = 0; i < 2; i++) {
          const indexToRemove = state.gameInfo.battlefield.findIndex(
            chess => chess.name === name && chess.star === star,
          )
          state.gameInfo.battlefield.splice(indexToRemove, 1)
        }

        // Add upgraded chess
        const newChess = Object.assign(
          {},
          CHESSES[star][cost + 1 - 2 * star].find(chess => chess.name === name),
          {position: position},
        )
        state.gameInfo.battlefield.push(newChess)
      }
    })
  }

  // 4-druid effect
  if (state.gameInfo.effects.is4Druids) {
    const filteredStats = stats.filter(
      stat =>
        stat.star <= 2 &&
        ((stat.count === 3 && !stat.Druid) || (stat.count >= 2 && stat.Druid)),
    )

    filteredStats.forEach(stat => {
      if (stat.count === 3 && !stat.Druid) {
        const {name, star, cost, position} = stat

        // Remove original chesses
        for (let i = 0; i < 3; i++) {
          const indexToRemove = state.gameInfo.battlefield.findIndex(
            chess => chess.name === name && chess.star === star,
          )
          state.gameInfo.battlefield.splice(indexToRemove, 1)
        }

        // Add upgraded chess
        const newChess = Object.assign(
          {},
          CHESSES[star][cost + 1 - 2 * star].find(chess => chess.name === name),
          {position: position},
        )
        state.gameInfo.battlefield.push(newChess)
      }

      if (stat.count >= 2 && stat.Druid) {
        const {name, star, cost, position} = stat

        // Remove original chesses
        for (let i = 0; i < 2; i++) {
          const indexToRemove = state.gameInfo.battlefield.findIndex(
            chess => chess.name === name && chess.star === star,
          )
          state.gameInfo.battlefield.splice(indexToRemove, 1)
        }

        // Add upgraded chess
        const newChess = Object.assign(
          {},
          CHESSES[star][cost + 1 - 2 * star].find(chess => chess.name === name),
          {position: position},
        )
        state.gameInfo.battlefield.push(newChess)
      }
    })
  }
}

export default {
  [MUTATION.TOGGLE_LOCKED](state: State) {
    state.gameInfo.locked = !state.gameInfo.locked
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.INCREASE_ROUND](state: State) {
    state.gameInfo.round += 1
    if (state.gameInfo.gold < 100) {
      // Interest
      state.gameInfo.gold += Math.min(Math.trunc(state.gameInfo.gold / 10), 5)

      // Basic income
      state.gameInfo.gold += Math.min(state.gameInfo.round, 5)

      // Set upper limit
      state.gameInfo.gold = Math.min(state.gameInfo.gold, 100)
    }

    // Automatically gain exp
    if (state.gameInfo.level < 10) {
      state.gameInfo.exp += 1
      if (state.gameInfo.exp >= LEVELUP_REQUIREMENT[state.gameInfo.level]) {
        state.gameInfo.level += 1
        state.gameInfo.exp = 0
      }
    }

    // Refresh shop unless locked
    if (!state.gameInfo.locked)
      state.gameInfo.shop = Array.from({length: 5}, (v, k) =>
        getRandomChess(state.gameInfo.level),
      )

    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.GAIN_EXP](state: State) {
    // Need enough gold to gain exp
    if (state.gameInfo.gold < 5) return

    // Gain exp
    if (state.gameInfo.level < 10) {
      state.gameInfo.exp += 4
      state.gameInfo.gold -= 5
      if (state.gameInfo.exp >= LEVELUP_REQUIREMENT[state.gameInfo.level]) {
        state.gameInfo.exp -= LEVELUP_REQUIREMENT[state.gameInfo.level]
        state.gameInfo.level += 1
        if (state.gameInfo.level === 10) state.gameInfo.exp = 0
      }
    }

    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.MOVE_CHESS](
    state: State,
    payload: {from: Position; targetPosition: Position},
  ) {
    // Return if there is already a chess at the target position
    if (
      state.gameInfo.battlefield.filter(
        chess =>
          chess.position &&
          chess.position.row === payload.targetPosition.row &&
          chess.position.col === payload.targetPosition.col,
      ).length > 0
    )
      return

    const chess = state.gameInfo.battlefield.filter(
      chess =>
        chess.position &&
        chess.position.row === payload.from.row &&
        chess.position.col === payload.from.col,
    )[0]
    chess.position = payload.targetPosition
    state.gameInfo.battlefield = state.gameInfo.battlefield.slice()

    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.DISPATCH_CHESS](
    state: State,
    payload: {num: number; targetPosition: Position},
  ) {
    const chess = state.gameInfo.preparation[payload.num]
    if (chess === null) return

    // Return if there is already a chess at the target position
    if (
      state.gameInfo.battlefield.filter(
        chess =>
          chess.position &&
          chess.position.row === payload.targetPosition.row &&
          chess.position.col === payload.targetPosition.col,
      ).length > 0
    )
      return

    chess.position = payload.targetPosition
    state.gameInfo.battlefield.push(chess)
    state.gameInfo.preparation.splice(payload.num, 1)
    state.gameInfo.preparation = state.gameInfo.preparation.slice()

    checkSatyr(state)
    checkEffects(state)

    // Merge twice in case there are consecutive upgrades
    mergeChess(state)
    mergeChess(state)
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.WITHDRAW_CHESS](state: State, from: Position) {
    // You should have room in the preparation room
    if (state.gameInfo.preparation.length >= 8) return

    const index = state.gameInfo.battlefield.findIndex(
      chess =>
        !!chess.position &&
        chess.position.row === from.row &&
        chess.position.col === from.col,
    )
    state.gameInfo.preparation.push(state.gameInfo.battlefield[index])
    state.gameInfo.battlefield.splice(index, 1)

    checkSatyr(state)
    checkEffects(state)

    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.BUY_CHESS](state: State, num: number) {
    const chess = state.gameInfo.shop[num]
    if (chess === null) return

    // You should have enough gold to buy the chess
    if (state.gameInfo.gold < chess.cost) return

    // You should have room in the preparation room
    if (state.gameInfo.preparation.length >= 8) return

    // Buying chess consumes gold
    state.gameInfo.gold -= chess.cost

    // The chess will go to preparation room first
    state.gameInfo.preparation.push(chess)

    // Remove the chess from the shop
    state.gameInfo.shop[num] = null
    state.gameInfo.shop = state.gameInfo.shop.slice()

    checkSatyr(state)

    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.SELL_CHESS](state: State, num: number) {
    const chess = state.gameInfo.preparation[num]
    if (chess === null) return
    state.gameInfo.gold = Math.min(state.gameInfo.gold + chess.cost, 100)
    state.gameInfo.preparation.splice(num, 1)
    state.gameInfo.preparation = state.gameInfo.preparation.slice()

    checkSatyr(state)

    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.REFRESH_SHOP](state: State) {
    if (state.gameInfo.gold < 2) return
    state.gameInfo.gold -= 2
    state.gameInfo.shop = Array.from({length: 5}, (v, k) =>
      getRandomChess(state.gameInfo.level),
    )
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
  [MUTATION.RESET](state: State) {
    state.gameInfo = {
      locked: false,
      gold: 0,
      round: 0,
      level: 0,
      exp: 0,
      hp: 100,
      effects: {},
      battlefield: [],
      preparation: [],
      shop: [],
    }
    sessionStorage.setItem(
      'autochess-game-info',
      JSON.stringify(state.gameInfo),
    )
  },
}
