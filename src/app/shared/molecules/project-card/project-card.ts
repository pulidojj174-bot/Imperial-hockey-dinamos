import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProjectFilterType } from '../project-filter/project-filter';

export interface ProjectInfo {
  readonly id: string;
  readonly name: string;
  readonly type: ProjectFilterType;
  readonly typeLabel: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly materials: string[];
  readonly customization: string;
  readonly designStory: string;
  readonly result: string;
}

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<ProjectInfo>();
  readonly projectClick = output<ProjectInfo>();

  onSelect(): void {
    this.projectClick.emit(this.project());
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onSelect();
    }
  }
}
