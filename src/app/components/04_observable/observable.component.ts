import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { produce } from 'immer';
import { ButtonModule } from 'primeng/button';
import { BehaviorSubject } from 'rxjs';
import { CounterComponent } from '../counter/counter.component';
import { OnpushObservableMarkforcheckComponent } from './markforcheck/markforcheck.component';
import { OnpushObservableAsyncComponent } from './async/async.component';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [
    CommonModule,
    OnpushObservableMarkforcheckComponent,
    ButtonModule,
    CounterComponent,
    OnpushObservableAsyncComponent,
  ],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
})
export class ObservableComponent {
  user$ = new BehaviorSubject({ name: 'Jon Snow' });

  changeName() {
    const user = this.user$.getValue();
    this.user$.next(
      produce(user, draft => {
        draft.name = this.user$.getValue().name === 'Jon Snow' ? 'Arya Stark' : 'Jon Snow';
      }),
    );
  }
}
