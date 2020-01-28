import axios from 'axios'
import { Utility } from './utilities'

export class AxiosHttp {
  static get (url, params = '') {
    return axios.get(url + Utility.getQueryParams(params))
  }
  static post (url, payload) {
    return axios.post(url, payload)
  }
  static patch (url, payload) {
    return axios.patch(url, payload)
  }
  static delete (url) {
    return axios.delete(url)
  }
}
