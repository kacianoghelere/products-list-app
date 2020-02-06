import axios from 'axios'

const httpClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  timeout: 30000,
})

httpClient.interceptors.request.use(async (config) => {
  if (! config.url.endsWith('sign-in') || ! config.url.endsWith('sign-up')) {
    const authToken = localStorage.getItem('PRODUCT_LIST_AUTH_TOKEN')

    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error)
})

export default httpClient

export function httpRequestWithToken(url = '', method = 'GET', params = {}) {
  return (token) => {
    let queryString = ''

    if (method === 'GET') {
      queryString = new URLSearchParams(params).toString()

      params = {}
    }

    return httpClient.request({
      url: `${url}?${queryString}`,
      method,
      headers: { 'Authorization': `Bearer ${token}` },
      params
    })
  }
}