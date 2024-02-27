import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character.model';
import { FormatNamePipe } from '../../pipes/formatName.pipe';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { loadCharacters } from '../../store/actions/Character.actions';
import { Observable } from 'rxjs';
import { selectListCharacterFeature } from '../../store/selectors/Character.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormatNamePipe, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  characters$: Observable<Character[]> = this.store.select(
    selectListCharacterFeature
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCharacters());
  }
}
