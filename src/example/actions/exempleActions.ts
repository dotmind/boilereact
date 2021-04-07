import { FetchDogFailureType, FetchDogStartType, FetchDogSuccessType } from 'example/types/actions';

export const FETCH_DOG_START = 'FETCH_DOG_START';
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_DOG_FAILURE = 'FETCH_DOG_FAILURE';

export const fetchDog = (): FetchDogStartType => ({
  type: FETCH_DOG_START,
});

export const fetchDogSuccess = (dog: string): FetchDogSuccessType => ({
  type: FETCH_DOG_SUCCESS,
  payload: {
    dog,
  },
});

export const fetchDogFailure = (error: string): FetchDogFailureType => ({
  type: FETCH_DOG_FAILURE,
  payload: {
    error,
  },
});
