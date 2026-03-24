import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-project-hero',
  imports: [],
  templateUrl: './project-hero.html',
  styleUrl: './project-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHero {}
