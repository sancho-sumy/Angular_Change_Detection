import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { ComparisonComponent } from './components/01_comparison/comparison.component';
import { EventsComponent } from './components/02_events/events.component';
import { ManualComponent } from './components/03_manual/manual.component';
import { ObservableComponent } from './components/04_observable/observable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ComparisonComponent,
    TabViewModule,
    EventsComponent,
    ManualComponent,
    ObservableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-change-detection-app';
}
