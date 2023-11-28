import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from '../../models/user.model';
import { CounterComponent } from '../counter/counter.component';
import { OnpushManualComponent } from './onpush/child.component';

@Component({
  selector: 'app-manual',
  standalone: true,
  imports: [CommonModule, OnpushManualComponent, ButtonModule, CounterComponent],
  templateUrl: './manual.component.html',
  styleUrl: './manual.component.scss',
})
export class ManualComponent {
  user: User = {
    name: 'Jon Snow',
  };

  changeNameMutation(): void {
    this.user.name = this.user.name === 'Jon Snow' ? 'Arya Stark' : 'Jon Snow';
  }
}
