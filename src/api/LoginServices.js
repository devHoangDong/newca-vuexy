import apiClient from './apiClient'

const LoginServices = {
  loginByPhone: (params) => {
    const url = '/phoneLogin'
    return apiClient.get(url, { params })
  },
}

export default LoginServices
