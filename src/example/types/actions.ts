import { FETCH_DOG_FAILURE, FETCH_DOG_START, FETCH_DOG_SUCCESS } from 'example/actions/exempleActions';

export type FetchDogStartType = {
  type: typeof FETCH_DOG_START,
};

export type FetchDogSuccessType = {
  type: typeof FETCH_DOG_SUCCESS,
  payload: {
    dog: string
  },
};

export type FetchDogFailureType = {
  type: typeof FETCH_DOG_FAILURE,
  payload: {
    error: string,
  },
};

export type ExempleActionTypes =
FetchDogStartType
| FetchDogSuccessType
| FetchDogFailureType;
