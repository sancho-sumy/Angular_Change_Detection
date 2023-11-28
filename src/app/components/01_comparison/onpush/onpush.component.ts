import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';
import { User } from '../../../models/user.model';
import { CounterComponent } from '../../counter/counter.component';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrl: './onpush.component.scss',
  standalone: true,
  imports: [CommonModule, CounterComponent],
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
export class OnpushComponent {
  @Input() user?: User;

  blinkState: boolean = false;

  counter = 0;

  ngDoCheck(changes: SimpleChanges): void {
    this.counter++;
    console.log('OnPush DoCheck1');
  }

  bgBlink() {
    return this.blinkState ? { blinkGreen: true } : { blinkGreen: false };
  }
}
