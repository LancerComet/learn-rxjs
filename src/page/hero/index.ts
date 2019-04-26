import { Component, Prop } from '@vert/core'
import Vue from 'vue'

import { Hero } from '../../models/hero'

@Component
export default class HeorPage extends Vue {
  @Prop({
    type: Object,
    default: () => ({})
  })
  private readonly hero: Hero

  private inLoading: boolean = false

  private async getHeroData () {
  }
}
