import { Component } from '@vert/core'
import Vue from 'vue'

import { Hero } from '../../models/hero'
import { FriendService } from '../../services/friends'
import { HeroService } from '../../services/hero'

@Component
export default class HeorPage extends Vue {
  private get heroName (): string {
    return this.$route.params.heroName
  }

  private inLoading: boolean = false
  private hero: Hero = Object.create(null)
  private isFriend: boolean = false

  private makeFriend () {
    this.friendService.makeFriend(this.hero)
    this.isFriend = true
  }

  private breakUp () {
    this.friendService.brokeUp(this.heroName)
    this.isFriend = false
  }

  private async getHeroData () {
    const heroName = this.heroName
    if (this.inLoading || !heroName) {
      return
    }

    this.inLoading = true
    const data = await this.heroService.getHeroByName(heroName)
    this.inLoading = false

    this.hero = data
  }

  private checkIsFriend () {
    this.isFriend = this.friendService
      .getFriendList()
      .some(item => item.name === this.heroName)
  }

  created () {
    this.checkIsFriend()
    this.getHeroData()
  }

  constructor (
    private heroService: HeroService,
    private friendService: FriendService
  ) {
    super()
  }
}
