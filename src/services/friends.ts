import { Injectable } from '@vert/core'

import { Hero } from '../models/hero'

@Injectable()
class FriendService {
  private readonly STORAGE_KEY = 'FriendList'

  private getFriendListFromStorage (): Hero[] {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || []
    } catch (e) {
      console.error(e)
      return []
    }
  }

  private saveFriendListToStorage (friendList: Hero[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(friendList))
  }

  getFriendList (): Hero[] {
    return this.getFriendListFromStorage()
  }

  makeFriend (hero: Hero) {
    const friendList = this.getFriendList()
    if (friendList.indexOf(hero) > -1) {
      return
    }

    const newFriendList = friendList.concat(hero)
    this.saveFriendListToStorage(newFriendList)
  }

  brokeUp (name: string) {
    const newFriendList = this.getFriendList()
      .filter(item => item.name !== name)
    this.saveFriendListToStorage(newFriendList)
  }
}

export {
  FriendService
}
