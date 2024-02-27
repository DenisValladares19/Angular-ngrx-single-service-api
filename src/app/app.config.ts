import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideStore } from '@ngrx/store';
import { ROOT_REDUCERS } from './store/app.state';
import { provideEffects } from '@ngrx/effects';
import { CharacterEffects } from './store/effects/Character.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    CommonModule,
    provideStore(ROOT_REDUCERS),
    provideEffects(CharacterEffects),
  ],
};
