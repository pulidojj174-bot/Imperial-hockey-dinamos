import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutHero } from '../../molecules/about-hero/about-hero';
import { AboutStory } from '../../molecules/about-story/about-story';
import { AboutMissionVision } from '../../molecules/about-mission-vision/about-mission-vision';
import { AboutValues } from '../../molecules/about-values/about-values';
import { AboutProcess } from '../../molecules/about-process/about-process';
import { AboutGallery } from '../../molecules/about-gallery/about-gallery';
import { RevealDirective } from '../../../core/directives/reveal.directive';

@Component({
  selector: 'app-about-section',
  imports: [
    AboutHero,
    AboutStory,
    AboutMissionVision,
    AboutValues,
    AboutProcess,
    AboutGallery,
    RevealDirective,
  ],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {}
