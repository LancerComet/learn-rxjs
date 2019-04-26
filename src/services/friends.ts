import { Injectable } from '@vert/core'

import { Hero } from '../models/hero'

@Injectable()
class FriendService {
  private friendList: Hero[] = []

  makeFriend (hero: Hero) {
    this.friendList.push(hero)
  }
}

export {
  FriendService
}
