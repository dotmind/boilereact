import { combineReducers } from '@reduxjs/toolkit';

import exempleState from 'example/reducers/exempleReducer';

const rootReducer = combineReducers({
  exempleState,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
