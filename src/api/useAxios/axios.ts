import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: process.env.REACT_APP_STRAPI_URL,
});

export default axiosInstance;