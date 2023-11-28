import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
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
export class CounterComponent {
  counter = 0;

  ngDoCheck(changes: SimpleChanges): void {
    this.counter++;
  }
}
