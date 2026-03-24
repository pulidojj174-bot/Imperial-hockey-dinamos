import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeSection } from '../../organisms/home-section/home-section';

@Component({
  selector: 'app-home-template',
  imports: [HomeSection],
  templateUrl: './home-template.html',
  styleUrl: './home-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTemplate {}
