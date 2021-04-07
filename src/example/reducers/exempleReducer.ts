import {
  FETCH_DOG_START,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_FAILURE,
} from 'example/actions/exempleActions';
import { ExempleActionTypes } from 'example/types/actions';

import Status from 'internal/constants/status';

export type ExempleStateType = {
  status: Status,
  dogs: string[],
  error: string,
};

const initialState: ExempleStateType = {
  status: Status.DEFAULT,
  dogs: [],
  error: '',
};

function exempleReducer(state = initialState, action: ExempleActionTypes): ExempleStateType {
  switch (action.type) {
    case FETCH_DOG_START:
      return {
        ...state,
        status: Status.LOADING,
      };
    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        dogs: [
          ...state.dogs,
          action.payload.dog,
        ],
      };
    case FETCH_DOG_FAILURE:
      return {
        ...state,
        status: Status.FAILURE,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default exempleReducer;
