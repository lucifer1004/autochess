export interface Position {
  row: number
  col: number
}

export interface Chess {
  name: string
  cost: number
  star: number
  health?: number
  mana?: number
  healthRemaining?: number
  manaRemaining?: number
  attack?: number
  attackSpeed?: number
  defence?: number
  resistance?: number
  dodge?: number
  position?: Position
  Beast?: boolean
  Demon?: boolean
  Dragon?: boolean
  Dwarf?: boolean
  Elemental?: boolean
  Elf?: boolean
  Goblin?: boolean
  Human?: boolean
  Naga?: boolean
  Ogre?: boolean
  Orc?: boolean
  Satyr?: boolean
  Troll?: boolean
  Undead?: boolean
  Assassin?: boolean
  DemonHunter?: boolean
  Druid?: boolean
  Hunter?: boolean
  Knight?: boolean
  Mage?: boolean
  Mech?: boolean
  Shaman?: boolean
  Warlock?: boolean
  Warrior?: boolean
}

export interface ClassStat {
  Beast?: number
  Demon?: number
  Dragon?: number
  Dwarf?: number
  Elemental?: number
  Elf?: number
  Goblin?: number
  Human?: number
  Naga?: number
  Ogre?: number
  Orc?: number
  Satyr?: number
  Troll?: number
  Undead?: number
  Assassin?: number
  DemonHunter?: number
  Druid?: number
  Hunter?: number
  Knight?: number
  Mage?: number
  Mech?: number
  Shaman?: number
  Warlock?: number
  Warrior?: number
}

export interface Effect {
  is2Beasts?: boolean
  is4Beasts?: boolean
  is6Beasts?: boolean
  isDemon?: boolean
  is3Dragons?: boolean
  isDwarf?: boolean
  is2Elementals?: boolean
  is4Elementals?: boolean
  is3Elfs?: boolean
  is6Elfs?: boolean
  is9Elfs?: boolean
  is3Goblins?: boolean
  is6Goblins?: boolean
  is2Humans?: boolean
  is4Humans?: boolean
  is6Humans?: boolean
  is2Nagas?: boolean
  is4Nagas?: boolean
  isOgre?: boolean
  is2Orcs?: boolean
  is4Orcs?: boolean
  isSatyr?: boolean
  is2Trolls?: boolean
  is4Trolls?: boolean
  is2Undeads?: boolean
  is4Undeads?: boolean
  is3Assassins?: boolean
  is6Assassins?: boolean
  is9Assassins?: boolean
  isDemonHunter?: boolean
  is2DemonHunters?: boolean
  is2Druids?: boolean
  is4Druids?: boolean
  is2Knights?: boolean
  is4Knights?: boolean
  is6Knights?: boolean
  is3Hunters?: boolean
  is6Hunters?: boolean
  is3Mages?: boolean
  is6Mages?: boolean
  is2Mechs?: boolean
  is4Mechs?: boolean
  is2Shamans?: boolean
  is3Warlocks?: boolean
  is6Warlocks?: boolean
  is3Warriors?: boolean
  is6Warriors?: boolean
  is9Warriors?: boolean
}

export interface GameInfo {
  locked: boolean
  gold: number
  level: number
  exp: number
  round: number
  effects: Effect
  battlefield: Chess[]
  preparation: Chess[]
  shop: Array<Chess | null>
}

export interface State {
  gameInfo: GameInfo
}

export interface Skill {
  name: string
}

export interface ChessStat {
  name: string
  star: number
  cost: number
  position?: Position
  count: number
}
