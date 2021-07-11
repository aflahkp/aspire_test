import axios from 'axios';
import {base_url} from '../constants/urls';

const axiosInstance = axios.create({
  baseURL: base_url,
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
  timeout: 10000,
});

export default axiosInstance;
