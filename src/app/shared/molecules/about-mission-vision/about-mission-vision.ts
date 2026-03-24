import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-mission-vision',
  imports: [NgOptimizedImage],
  templateUrl: './about-mission-vision.html',
  styleUrl: './about-mission-vision.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMissionVision {}
