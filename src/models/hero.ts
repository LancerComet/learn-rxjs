import { HeroType } from './hero.type'

class Hero implements IHero {
  attack: number
  avatar: string
  hp: number
  name: string
  type: HeroType

  get typeLabel (): string {
    switch (this.type) {
      case HeroType.Nightmare:
        return 'Nightmare'

      case HeroType.SnowWoman:
        return 'Snow Woman'

      case HeroType.Vampire:
        return 'Vampire'

      case HeroType.Witch:
        return 'Witch'
    }
  }

  constructor (data: IHero) {
    Object.keys(data).forEach(key => {
      this[key] = data[key]
    })
  }
}

interface IHero {
  attack: number
  avatar: string
  hp: number
  name: string
  type: HeroType
}

export {
  Hero,
  IHero
}
