import { animate, style, transition, trigger } from '@angular/animations';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-child-observable-async',
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss',
  standalone: true,
  imports: [CommonModule, ButtonModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('welcomeAnimation', [
      transition('* => *', [
        animate(
          '0.75s',
          style({
            opacity: 0,
          }),
        ),
      ]),
    ]),
  ],
})
export class OnpushObservableAsyncComponent {
  cd = inject(ChangeDetectorRef);

  @Input() user$?: Observable<User>;

  counter = 0;

  ngDoCheck() {
    this.counter++;
  }

  fakeClick() {}
}
