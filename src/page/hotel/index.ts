import { Component } from '@vert/core'
import Vue from 'vue'

import { Hero } from '../../models/hero'
import { FriendService } from '../../services/friends'

@Component
export default class Hotel extends Vue {
  private friendList: Hero[] = []

  private getFriendList () {
    this.friendList = this.friendSrv.getFriendList()
  }

  created () {
    this.getFriendList()
  }

  constructor (
    private friendSrv: FriendService
  ) {
    super()
  }
}
