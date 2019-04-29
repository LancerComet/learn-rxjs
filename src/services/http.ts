import { Injectable } from '@vert/core'
import Axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'

@Injectable()
class Http {
  private readonly axios: AxiosInstance = Axios.create()

  get <T = any> (url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axios.get(url, config)
  }

  post <T = any> (url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.axios.post(url, data, config)
  }
}

export {
  Http
}
