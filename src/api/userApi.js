import apiClient from './apiClient'
import axios from 'axios'
const userApi = {
  getUsers:(params) => {
    const url = '/getUserInfo'
    return apiClient.get(url, {params})
  },
  editUser: (params) => {
    const url = '/updateUserInfo'
    return apiClient.get(url, {params})
  },
  getToken: (params) => {
    const url = '/listToken'
    return apiClient.get(url, {params})
  },
  loginToken: () => {
    const url = '/loginToken'
    return apiClient.get(url, {})
  },
  addTicket: (params) => {
    const url = '/addTicket'
    return apiClient.get(url, {params})
  },
  callOtherApi: (url,params) => {
    const instance = axios.create({
      baseURL: url,
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    });
    instance.post(url,params)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
  }

}

export default userApi
