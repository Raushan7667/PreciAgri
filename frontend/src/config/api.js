
import axios from 'axios';

const LOCALHOST='http://localhost:5454'

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');
console.log("token in localStorage api file",token)

api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
