import { Component } from '@vert/core'
import { Observable, Subject } from 'rxjs'
import { map, scan, startWith } from 'rxjs/operators'
import Vue from 'vue'

import { Subscription } from '../../decorators/subscriptions'

import { Hero } from '../../models/hero'
import { HeroService } from '../../services/hero'

@Component<PubPage>({
  subscriptions () {
    return {
      count: this.addCount$.pipe(
        map(() => 1),
        startWith(0),
        scan((total, change) => total + change)
      )
    }
  }
})
export default class PubPage extends Vue {
  @Subscription(HeroService.createHeroList$())
  private readonly heroList$: Observable<Hero[]>

  private readonly addCount$: Subject<number> = new Subject()
  private readonly count: number

  private heroList: Hero[] = []

  private async getHeroList () {
    HeroService
      .createHeroList$()
      .subscribe(value => this.heroList = value)
  }

  created () {
    this.getHeroList()
  }

  constructor (
    private heroSrv: HeroService
  ) {
    super()
  }
}
