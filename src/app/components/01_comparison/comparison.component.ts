import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from '../../models/user.model';
import { DefaultComponent } from './default/default.component';
import { OnpushComponent } from './onpush/onpush.component';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CommonModule, DefaultComponent, OnpushComponent, ButtonModule],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss',
})
export class ComparisonComponent {
  user: User = {
    name: 'Jon Snow',
  };

  changeNameMutation(): void {
    this.user.name = this.user.name === 'Jon Snow' ? 'Arya Stark' : 'Jon Snow';
  }

  changeNameReference(): void {
    this.user = { ...this.user, name: 'Daenerys Targaryen' };
  }

  fakeClick(): void {
    console.log('Button clicked!');
  }
}
