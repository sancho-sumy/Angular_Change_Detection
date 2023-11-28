import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { User } from '../../../models/user.model';
import { CounterComponent } from '../../counter/counter.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
  standalone: true,
  imports: [CommonModule, CounterComponent],
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
export class DefaultComponent {
  @Input() user?: User;

  counter = 0;

  ngDoCheck(changes: SimpleChanges): void {
    this.counter++;
    console.log('Default DoCheck');
  }
}
