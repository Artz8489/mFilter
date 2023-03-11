import axios from 'axios'
import {TOKEN} from '../app/utils/const'

export const SESSION = {
  TOKEN: 'token',
  EXPIRED: 'session_expired',
  EXPIRED_ERROR_CODE: 310,
  PLAYER_ID: 'playerId',
  RESET_TOKEN: 'resetToken'
}

export const ERROR = {
  INVALID_RESPONSE: 'Invalid response',
  MSG: 'error'
}

export const HEADER = {
  TOKEN: 'Authorization',
  CONTENT_TYPE: 'application/json',
  MULTIPART_CONTENT_TYPE: 'multipart/form-data,boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL',
  TIMEOUT: 40000
}

export default function setupAxios(axios, store) {
  axios.interceptors.request.use(
    config => {
      const {
        auth: { authToken }
      } = store.getState();

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }

      return config;
    },
    err => Promise.reject(err)
  );
}

export const API = axios.create({
  mode : 'cors',
  headers: { "Content-Type": "application/json",'Access-Control-Allow-Origin':'*','authorization': TOKEN.token },
  timeout: HEADER.TIMEOUT
})

API.interceptors.response.use(
  response => {
    if (typeof response.data !== 'object') {
      return Promise.error({ message: ERROR.INVALID_RESPONSE })
    }
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

// download 
export const API_DOWNLOAD_CALL = axios.create({
  mode : 'cors',
            headers: { 'Access-Control-Allow-Origin':'*','authorization': TOKEN.token },
})

API_DOWNLOAD_CALL.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)
