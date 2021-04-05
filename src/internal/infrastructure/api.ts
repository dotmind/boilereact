import axios, { AxiosRequestConfig } from 'axios';
import ApiExecutor from '@dotmind/utils/dist/react/ApiExecutor';

import { BASE_URL, TIMEOUT } from 'internal/constants/api';

export type RequestType = AxiosRequestConfig | Record<string, any>;

function apiInstance() {
  return axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });
}

function api() {
  const instance = apiInstance();
  return new ApiExecutor(instance);
}

export default api();
