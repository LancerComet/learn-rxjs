import { Component } from '@vert/core'
import Vue from 'vue'
import { Hero } from '../../models/hero'
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
    const data = await this.heroSrv.getHeroList()
    this.inLoading = false

    this.heroList = data
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
