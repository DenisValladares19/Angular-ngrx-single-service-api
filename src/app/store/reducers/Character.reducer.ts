import { createReducer, on } from '@ngrx/store';
import { CharacterState } from '../../models/CharacterState.model';
import * as characterActions from '../actions/Character.actions';

const initialState: CharacterState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  characters: [],
};

export const characterReducer = createReducer(
  initialState,
  on(characterActions.loadCharacters, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(characterActions.loadedSuccessCharacters, (state, action) => {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      characters: action.data,
    };
  })
);
