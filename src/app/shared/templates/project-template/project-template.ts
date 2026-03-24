import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectGallery } from '../../organisms/project-gallery/project-gallery';

@Component({
  selector: 'app-project-template',
  imports: [ProjectGallery],
  templateUrl: './project-template.html',
  styleUrl: './project-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTemplate {}
