import apiClient from './apiClient'

const support = {
  getTicket: (params) => {
    const url = '/getTicket'
    return apiClient.get(url, { params })
  },
  addTicket: (params) => {
    const url = '/addTicket'
    return apiClient.get(url, { params })
  },
}

export default support
