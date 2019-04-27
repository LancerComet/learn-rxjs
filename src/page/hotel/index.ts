import { Component } from '@vert/core'
import Vue from 'vue'
import { Hero } from '../../models/hero'

@Component
export default class Hotel extends Vue {
  private myHeroList: Hero[] = []
}
