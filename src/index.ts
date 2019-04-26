import 'reflect-metadata'

import { App } from '@vert/core'
import Vue from 'vue'
import VueRx from 'vue-rx'

import './style/index.styl'

import { router } from './router'
import { FriendService } from './services/friends'
import { HeroService } from './services/hero'
import { Http } from './services/http'

import AppLayout from './layout/index.vue'

Vue.use(VueRx)

App.addSingleton(Http, HeroService, FriendService)

const appVm = new App({
  element: '#app-vm',
  RootComponent: AppLayout,
  router
})

appVm.start()
