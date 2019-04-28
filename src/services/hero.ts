import { Injectable } from '@vert/core'
import { Observable } from 'rxjs'
import { ajaxGetJSON } from 'rxjs/internal-compatibility'
import { Hero, IHero } from '../models/hero'
import { Http } from './http'

@Injectable()
class HeroService {
  async getHeroList (): Promise<Hero[]> {
    const { data } = await this.http.get<IHero[]>('/data/heroes.json')
    return data.map(item => new Hero(item))
  }

  async getHeroByName (name: string): Promise<Hero> {
    const heroList = await this.getHeroList()
    return heroList
      .filter(item => item.name === name)
      .shift()
  }

  static createHeroList$ (): Observable<Hero[]> {
    return ajaxGetJSON<Hero[]>('/data/heroes.json')
  }

  constructor (
    private http: Http
  ) {}
}

export {
  HeroService
}
