import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-navbar-toggle',
  imports: [],
  templateUrl: './navbar-toggle.html',
  styleUrl: './navbar-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarToggle {
  readonly isOpen = input(false);
  readonly toggled = output<void>();
}
