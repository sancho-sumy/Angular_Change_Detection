import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from '../../models/user.model';
import { CounterComponent } from '../counter/counter.component';
import { OnpushEventsComponent } from './onpush/child.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, OnpushEventsComponent, ButtonModule, CounterComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  user: User = {
    name: 'Jon Snow',
  };

  fakeClick(): void {
    console.log('Button clicked!');
  }
}
