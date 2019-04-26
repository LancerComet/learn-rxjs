import 'reflect-metadata'

import Vue from 'vue'
import VueRx from 'vue-rx'
import { App } from '@vert/core'

import './style/index.styl'

import { router } from './router'
import { HeroService } from './services/hero'
import { Http } from './services/http'

import AppLayout from './layout/index.vue'

Vue.use(VueRx)

App.addTransient(Http, HeroService)

const appVm = new App({
  element: '#app-vm',
  RootComponent: AppLayout,
  router
})

appVm.start()
