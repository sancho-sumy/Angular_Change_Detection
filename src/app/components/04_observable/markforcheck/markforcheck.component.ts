import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-child-observable-markforcheck',
  templateUrl: './markforcheck.component.html',
  styleUrl: './markforcheck.component.scss',
  standalone: true,
  imports: [CommonModule, ButtonModule],
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
export class OnpushObservableMarkforcheckComponent {
  cd = inject(ChangeDetectorRef);

  @Input() user$?: Observable<User>;
  user: User | null = null;

  counter = 0;

  ngOnChanges() {
    this.user$?.subscribe(user => {
      if (user !== this.user) {
        this.cd.markForCheck();
        this.user = user;
      }
    });
  }

  ngDoCheck() {
    this.counter++;
  }

  fakeClick() {}
}
