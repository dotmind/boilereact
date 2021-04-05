import { RootState } from 'internal/store';

export const selectCount = (state: RootState): number => state.counter.value;
