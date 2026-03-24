import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProjectInfo } from '../project-card/project-card';

@Component({
  selector: 'app-project-detail',
  imports: [NgOptimizedImage],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail {
  readonly project = input.required<ProjectInfo>();
  readonly closeDetail = output<void>();

  onClose(): void {
    this.closeDetail.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('project-detail')) {
      this.onClose();
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.onClose();
    }
  }
}
