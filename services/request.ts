import { ENVIRONMENT } from '@/config';
import { KEYS } from '@/constants';
import { getCookie } from '@/helpers';
import axios, { AxiosInstance } from 'axios';

const apiRequest: AxiosInstance = axios.create({
  baseURL: ENVIRONMENT.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/** interceptors */

export const requestManager = [
  (config: any) => {
    const authToken = getCookie(KEYS.AUTH_TOKEN);
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  },
];

apiRequest.interceptors.request.use(...requestManager);
// apiRequest.interceptors.response.use(...responseManager);

export { apiRequest };
