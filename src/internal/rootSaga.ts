// @flow

import { SagaIterator } from 'redux-saga';
import { spawn } from 'redux-saga/effects';


import exempleSaga from 'example/sagas/exempleSaga';
import api from 'internal/infrastructure/api';

function* rootSaga(): SagaIterator {
  yield spawn(exempleSaga(api));
}

export default rootSaga;
