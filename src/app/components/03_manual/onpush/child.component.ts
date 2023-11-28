import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, SimpleChanges, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-child-manual',
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
export class OnpushManualComponent {
  cd = inject(ChangeDetectorRef);

  @Input() user?: User;

  counter = 0;
  previousUserName = '';

  ngDoCheck(changes: SimpleChanges): void {
    // if (this.user!.name !== this.previousUserName) {
    //   this.cd.markForCheck();
    //   this.previousUserName = this.user!.name;
    // }
    this.counter++;
  }

  fakeClick() {}
}
