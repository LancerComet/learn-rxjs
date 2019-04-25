import { fromEvent, Observable } from 'rxjs'
import { map, scan, throttle, throttleTime } from 'rxjs/operators'

fromEvent(
  document.querySelector('#button-1') as HTMLButtonElement,
  'click'
).pipe(
    throttleTime(500),
    map(() => 1),
    scan((prev, clickDelta, index) => clickDelta + prev, 0),
  )
  .subscribe(count => console.log(count))

  const observable = new Observable(subscriber => {
    let count = 0
    const exec = () => {
      subscriber.next(count++)
      setTimeout(exec, 1000)
    }
    exec()
  })

  console.log('invoke subscribe')
  observable.subscribe({
    next (value) {
      console.log('next:', value)
    },
    error (error) {
      console.error('On error:', error)
    },
    complete () {
      console.log('complete')
    }
  })
  console.log('invoke done')
