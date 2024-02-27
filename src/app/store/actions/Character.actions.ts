import { createAction, props } from '@ngrx/store';
import { CharacterActionEnum } from '../../models/Character.action.enum';
import { Character } from '../../models/Character.model';

export const loadCharacters = createAction(CharacterActionEnum.INIT);
export const loadedSuccessCharacters = createAction(
  CharacterActionEnum.SUCCESS,
  props<{ data: Character[] }>()
);
