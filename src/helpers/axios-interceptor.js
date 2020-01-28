import axios from 'axios'
import { CookieName } from './constants'
import { CookieService } from '../services/cookieService'
import router from '@/router'

// Add axios request interceptor
axios.interceptors.request.use((config) => {
  console.log('pppppppppp')
  const token = CookieService.get(CookieName.TOKEN)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

// Add axios response interceptor
axios.interceptors.response.use((response) => {
  if (response.headers.bearer) {
    CookieService.set(CookieName.TOKEN, response.headers.bearer)
  }
  return response.data
}, ({ response: { data, status } }) => {
  if (status === 401) {
    CookieService.delete(CookieName.TOKEN)
    router.push({ path: '/auth', query: { redirectTo: router.history.current.path } })
  }
  return Promise.reject(data)
})
