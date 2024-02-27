import { Character } from './Character.model';

export interface CharacterState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  characters: Character[];
}
