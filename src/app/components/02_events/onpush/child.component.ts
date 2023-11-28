import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from '../../../models/user.model';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-child-events',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
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
export class OnpushEventsComponent {
  @Input() user?: User;

  counter = 0;

  ngDoCheck(changes: SimpleChanges): void {
    this.counter++;
  }

  fakeClick() {}
}
