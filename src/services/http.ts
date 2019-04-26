import Axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import { Injectable } from '@vert/core';

const axios = Axios.create()

@Injectable()
class Http {

  get <T = any> (url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.get(url, config)
  }

  post <T = any> (url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axios.post(url, data, config)
  }
}

export {
  Http
}
