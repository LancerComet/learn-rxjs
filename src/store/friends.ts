import { Observable } from 'rxjs'

const friends = new Observable(subscriber => {
  subscriber.next()
})

export {
  friends
}
