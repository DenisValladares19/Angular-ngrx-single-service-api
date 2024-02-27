import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CharacterState } from '../../models/CharacterState.model';

export const selectCharacterFeature = (state: AppState) => state.characterState;

export const selectListCharacterFeature = createSelector(
  selectCharacterFeature,
  (state: CharacterState) => state.characters
);

export const selectLoadingCharacterFeature = createSelector(
  selectCharacterFeature,
  (state: CharacterState) => state.isLoading
);
