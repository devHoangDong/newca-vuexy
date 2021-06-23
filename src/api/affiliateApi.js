import apiClient from './apiClient'

const affiliateApi = {
  getAffiliate:(params) => {
    const url = '/updateAffiliateInfo'
    return apiClient.get(url, {params})
  },
}

export default affiliateApi
