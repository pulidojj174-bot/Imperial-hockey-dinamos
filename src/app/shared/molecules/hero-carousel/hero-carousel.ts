import { ChangeDetectionStrategy, Component, signal, OnDestroy, afterNextRender } from '@angular/core';

export interface HeroSlide {
  readonly image: string;
  readonly alt: string;
}

@Component({
  selector: 'app-hero-carousel',
  imports: [],
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroCarousel implements OnDestroy {
  readonly currentSlide = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  readonly slides: HeroSlide[] = [
    {
      image: 'assets/images/home/hero-1.jpg',
      alt: 'Mesa dínamo premium con acabado de lujo en sala VIP',
    },
    {
      image: 'assets/images/home/hero-2.jpg',
      alt: 'Mesa de billar artesanal con acabados en caoba',
    },
    {
      image: 'assets/images/home/hero-3.jpg',
      alt: 'Mesa de juego premium para entretenimiento de alto nivel',
    },
  ];

  constructor() {
    afterNextRender(() => {
      this.intervalId = setInterval(() => {
        this.currentSlide.update(i => (i + 1) % this.slides.length);
      }, 5000);
    });
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
    this.resetInterval();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private resetInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.currentSlide.update(i => (i + 1) % this.slides.length);
    }, 5000);
  }
}
