import { AxiosInstance, AxiosRequestConfig } from 'axios';

import { RANDOM_DOG_ENDPOINT } from 'example/constants/endpoints';

export type ExempleApiType = {
  fetchDog: (options?: AxiosRequestConfig) => void,
};

const exempleApi = (apiExecutor: AxiosInstance): ExempleApiType => {
  function fetchDog(options: AxiosRequestConfig = {}) {
    return apiExecutor.get(RANDOM_DOG_ENDPOINT, options);
  }
  return {
    fetchDog,
  };
};

export default exempleApi;
