import { Component } from '@vert/core'
import Vue from 'vue'

import { Hero } from '../../models/hero'
import { FriendService } from '../../services/friends'
import { HeroService } from '../../services/hero'

@Component
export default class PubPage extends Vue {
  private inLoading: boolean = false
  private heroList: Hero[] = []

  private async getHeroList () {
    if (this.inLoading) {
      return
    }

    this.inLoading = true
    const heroList = await this.heroSrv.getHeroList()
    const friendList = this.friendSrv.getFriendList()
    this.inLoading = false

    this.heroList = heroList.filter(hero =>
      !friendList.some(friend => hero.name === friend.name)
    )
  }

  created () {
    this.getHeroList()
  }

  constructor (
    private friendSrv: FriendService,
    private heroSrv: HeroService
  ) {
    super()
  }
}
