import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  signal,
  viewChildren,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface HeroSlideBase {
  readonly id: string;
  readonly alt: string;
}

export interface HeroImageSlide extends HeroSlideBase {
  readonly type: 'image';
  readonly src: string;
}

export interface HeroVideoSlide extends HeroSlideBase {
  readonly type: 'video';
  readonly src: string;
}

export type HeroSlide = HeroImageSlide | HeroVideoSlide;

@Component({
  selector: 'app-hero-carousel',
  imports: [NgOptimizedImage],
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroCarousel implements OnDestroy {
  readonly currentSlide = signal(0);
  private readonly videoElements = viewChildren<ElementRef<HTMLVideoElement>>('heroVideo');
  private intervalId: ReturnType<typeof setInterval> | null = null;

  readonly slides: HeroSlide[] = [
    {
      id: 'hero-video-1',
      type: 'video',
      src: 'assets/images/projects/video/video_5.mp4',
      alt: 'Video de una mesa dínamo premium en funcionamiento',
    },
    {
      id: 'hero-image-2',
      type: 'image',
      src: 'assets/images/home/hero-2.jpg',
      alt: 'Mesa de billar artesanal con acabados en caoba',
    },
    {
      id: 'hero-image-3',
      type: 'image',
      src: 'assets/images/projects/carpeta_3/imagen_3-27.png',
      alt: 'Mesa de juego premium para entretenimiento de alto nivel',
    },
  ];

  constructor() {
    afterNextRender(() => {
      this.startInterval();
      this.syncVideoPlayback();
    });
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
    this.syncVideoPlayback();
    this.resetInterval();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.videoElements().forEach(videoRef => {
      const video = this.getSafeVideoElement(videoRef);
      video?.pause();
    });
  }

  private startInterval(): void {
    this.intervalId = setInterval(() => {
      this.currentSlide.update(i => (i + 1) % this.slides.length);
      this.syncVideoPlayback();
    }, 9000);
  }

  private resetInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.startInterval();
  }

  private syncVideoPlayback(): void {
    const activeSlide = this.currentSlide();

    this.videoElements().forEach(videoRef => {
      const video = this.getSafeVideoElement(videoRef);

      if (!video) {
        return;
      }

      const slideIndexAttr = video.dataset?.['slideIndex'];

      if (slideIndexAttr === undefined) {
        return;
      }

      const slideIndex = Number(slideIndexAttr);

      if (Number.isNaN(slideIndex)) {
        return;
      }

      if (slideIndex === activeSlide) {
        const playAttempt = video.play();
        playAttempt?.catch(() => undefined);
        return;
      }

      video.pause();
      video.currentTime = 0;
    });
  }

  private getSafeVideoElement(videoRef: ElementRef<HTMLVideoElement>): HTMLVideoElement | null {
    const nativeElement = videoRef?.nativeElement as
      | (Partial<HTMLVideoElement> & { dataset?: DOMStringMap })
      | undefined;

    if (!nativeElement) {
      return null;
    }

    if (typeof nativeElement.pause !== 'function' || typeof nativeElement.play !== 'function') {
      return null;
    }

    return nativeElement as HTMLVideoElement;
  }
}
