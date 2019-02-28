interface Skill {
  name: string
}

interface Hero {
  name: string
  class: string[]
  cost: number
  skill: Skill
}

export const HEROES: Hero[] = [
  {
    name: 'Alchemist',
    class: ['Goblin', 'Warlock'],
    cost: 4,
    skill: {
      name: 'Chemical Rage',
    },
  },
]
