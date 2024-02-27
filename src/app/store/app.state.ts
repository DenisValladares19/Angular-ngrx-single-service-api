import { ActionReducerMap } from '@ngrx/store';
import { CharacterState } from '../models/CharacterState.model';
import { characterReducer } from './reducers/Character.reducer';

export interface AppState {
  characterState: CharacterState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  characterState: characterReducer,
};
