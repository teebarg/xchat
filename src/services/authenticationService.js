import { AxiosHttp } from '../helpers/axios-http'
import { ApiEndPoint } from '../helpers/constants'
import { Utility } from '../helpers/utilities'

export class AuthenticationService {
  static async login (payload) {
    try {
      return await AxiosHttp.post(ApiEndPoint.LOGIN, payload)
    } catch (err) {
      Utility.handleError(err)
      throw err
    }
  }
  static async socialLogin (payload) {
    try {
      return await AxiosHttp.post(ApiEndPoint.SOCIAL, payload)
    } catch (err) {
      Utility.handleError(err)
      throw err
    }
  }
  static async signUp (payload) {
    try {
      return await AxiosHttp.post(ApiEndPoint.SIGNUP, payload)
    } catch (err) {
      Utility.handleError(err)
      throw err
    }
  }
  static async me () {
    try {
      return await AxiosHttp.get(ApiEndPoint.ME)
    } catch (err) {
      Utility.handleError(err)
      throw err
    }
  }
  static async logout () {
    try {
      return await AxiosHttp.post(ApiEndPoint.LOGOUT)
    } catch (err) {
      Utility.handleError(err)
      throw err
    }
  }
}
