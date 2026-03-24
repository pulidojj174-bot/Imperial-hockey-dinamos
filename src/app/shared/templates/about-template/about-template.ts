import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSection } from '../../organisms/about-section/about-section';

@Component({
  selector: 'app-about-template',
  imports: [AboutSection],
  templateUrl: './about-template.html',
  styleUrl: './about-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutTemplate {}
