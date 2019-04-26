import { Injectable } from "@vert/core";
import { Hero } from "../models/hero";
import { Http } from "./http";

@Injectable()
class HeroService {
  async getHeroList (): Promise<Hero[]> {
    const { data } = await this.http.get<Hero[]>('/data/heroes.json')
    return data
  }

  constructor (
    private http: Http
  ) {}
}

export {
  HeroService
}
