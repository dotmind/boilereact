import { RootState } from 'internal/store';

export const selectDog = (state: RootState): string[] => state.exemple.dogs;
