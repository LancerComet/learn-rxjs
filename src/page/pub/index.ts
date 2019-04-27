import { Component } from '@vert/core'
import { interval, Observable } from 'rxjs'
import Vue from 'vue'

import { Hero } from '../../models/hero'
import { HeroService } from '../../services/hero'

@Component<PubPage>({
  subscriptions () {
    return {
      count$: interval(1000),
      heroList$: this.heroSrv.createHeroList$()
    }
  }
})
export default class PubPage extends Vue {
  private readonly count$: Observable<number>
  private readonly heroList$: Hero[]

  constructor (
    private heroSrv: HeroService
  ) {
    super()
  }
}
