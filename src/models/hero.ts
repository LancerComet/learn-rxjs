import { HeroType } from "./hero.type";

class Hero implements IHero {
  attack: number
  avatar: string
  hp: number
  name: string
  type: HeroType

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
