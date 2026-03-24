import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-specialty',
  imports: [NgOptimizedImage],
  templateUrl: './home-specialty.html',
  styleUrl: './home-specialty.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSpecialty {}
