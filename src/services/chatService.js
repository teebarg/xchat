import { AxiosHttp } from '../helpers/axios-http'
import { ApiEndPoint } from '../helpers/constants'
import { Utility } from '../helpers/utilities'

export class ChatService {
  static async getMessages (id) {
    try {
      return await AxiosHttp.get(`${ApiEndPoint.CHAT}/${id}`)
    } catch (err) {
      Utility.handleError(err)
      throw err
    }
  }
  static async sendMessage (payload) {
    try {
      return await AxiosHttp.post(ApiEndPoint.CHAT, payload)
    } catch (err) {
      Utility.handleError(err)
      throw err
    }
  }
  static async getContacts () {
    try {
      return await AxiosHttp.get(ApiEndPoint.GET_CONTACTS)
    } catch (err) {
      Utility.handleError(err)
      throw err
    }
  }
}
