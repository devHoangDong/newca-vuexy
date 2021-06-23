import apiClient from './apiClient'

const infoBank = {
  getBankInfo:(params) => {
    const url = '/getBankInfo'
    return apiClient.get(url, {params})
  },
  updateBankInfo:(params) => {
    const url = '/updateBankInfo'
    return apiClient.get(url, {params})
  }
}

export default infoBank
