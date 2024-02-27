import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import { CharacterActionEnum } from '../../models/Character.action.enum';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class CharacterEffects {
  constructor(private action$: Actions, private api: ApiService) {}

  loadCharacters$ = createEffect(() =>
    this.action$.pipe(
      ofType(CharacterActionEnum.INIT),
      exhaustMap(() =>
        this.api.fetch({ endpoint: '/character' }).pipe(
          map((info) => ({
            type: CharacterActionEnum.SUCCESS,
            data: info.results,
          })),
          catchError(() => of({ type: CharacterActionEnum.ERROR }))
        )
      )
    )
  );
}
