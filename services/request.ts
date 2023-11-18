import { ENVIRONMENT } from '@/config';
import { KEYS } from '@/constants';
import axios, { AxiosInstance } from 'axios';

const apiRequest: AxiosInstance = axios.create({
  baseURL: ENVIRONMENT.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { apiRequest };
