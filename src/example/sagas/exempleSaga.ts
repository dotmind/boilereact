import { call, put, takeLatest } from 'redux-saga/effects';
import { Saga } from 'redux-saga';
import { AxiosInstance } from 'axios';

import Status from 'internal/constants/status';

import ExempleApi from 'example/api/exempleApi';
import { fetchDogFailure, fetchDogSuccess, FETCH_DOG_START } from 'example/actions/exempleActions';
import { ApiResponseType } from 'example/types/api';

export default function exempleSaga(apiExecutor: AxiosInstance): Saga {
  const exempleApi = ExempleApi(apiExecutor);

  function* dogWorker() {
    try {
      const { status, message: dog }: ApiResponseType = yield call(exempleApi.fetchDog);

      if (status === Status.SUCCESS && dog) {
        yield put(fetchDogSuccess(dog));
      }
    } catch (error) {
      yield put(fetchDogFailure(error.message));
    }
  }

  return function* dogWatcher() {
    yield takeLatest(FETCH_DOG_START, dogWorker);
  };
}
