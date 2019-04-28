import { Component } from '@vert/core'
import { fromEvent } from 'rxjs'
import { concatAll, map, takeUntil } from 'rxjs/operators'
import Vue from 'vue'

@Component
export default class AppLayout extends Vue {
  mounted () {
    // const btn = this.$refs.dragBtn as HTMLButtonElement
    // const mouseDown = fromEvent(btn, 'mousedown')
    // const mouseUp = fromEvent(btn, 'mouseup')
    // const mouseMove = fromEvent(btn, 'mousemove')
    //
    // mouseDown
    //   .pipe(
    //     map(event => event)
    //   ).subscribe(value => {
    //     console.log('mouseDown:', event)
    //   })
    //
    // mouseMove
    //   .pipe(map(event => event))
    //   .subscribe(event => {
    //     console.log('mouseMove:', event)
    //   })
  }
}
