import { useRef, useState, useEffect, useCallback } from 'react';

import api, { RequestType } from 'internal/infrastructure/api';
import Status from 'internal/constants/status';

export enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'del',
}

type Response = {
  success: boolean;
  data: Record<string, any>;
};

type Query = {
  method: Methods;
  endpoint: string;
};

const useApi = (method: Methods, endpoint: string): { request: () => void, response: Response | null, status: Status } => {
  const query = useRef<Query>({ method, endpoint });
  const [status, setStatus] = useState<Status>(Status.DEFAULT);
  const [response, setResponse] = useState<Response | null>(null);

  useEffect(() => {
    query.current = { method, endpoint };
  }, [method, endpoint]);

  const request = useCallback(async (options: RequestType = {}) => {
    let cancelled = false;
    try {
      setStatus(Status.LOADING);
      const { method, endpoint } = query.current;
      // @XXX: change in function of api return;
      const { status, message: data } = await api[method](endpoint, options);

      if (status !== 'success') {
        throw new Error(data);
      }

      if (!cancelled) {
        setStatus(Status.SUCCESS);
        setResponse({ success: true, data: { dog: data } });
      }
    } catch (e) {
      if (!cancelled) {
        setStatus(Status.FAILURE);
        setResponse({ success: false, data: e?.response?.data?.data });
      }
    }

    return () => { cancelled = true; };
  }, [query]);

  return {
    request,
    response,
    status,
  };
};

export default useApi;
