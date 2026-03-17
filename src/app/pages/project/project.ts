import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectTemplate } from "../../shared/templates/project-template/project-template";

@Component({
  selector: 'app-project',
  imports: [ProjectTemplate],
  templateUrl: './project.html',
  styleUrl: './project.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Project {}
