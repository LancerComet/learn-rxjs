/* tslint:disable */

import { createDecorator } from 'vue-class-component'

function Subscription (value: any) {
  return createDecorator((componentOptions, key) => {
    if (typeof componentOptions['__subscriptions__'] === 'undefined') {
      componentOptions['__subscriptions__'] = {}
    }

    componentOptions['__subscriptions__'][key] = value

    if (typeof componentOptions.subscriptions === 'undefined') {
      componentOptions.subscriptions = function () {
        return componentOptions['__subscriptions__']
      }
    }
  })
}

export {
  Subscription
}
