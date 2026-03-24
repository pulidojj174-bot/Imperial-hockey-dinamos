import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-story',
  imports: [NgOptimizedImage],
  templateUrl: './about-story.html',
  styleUrl: './about-story.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutStory {}
