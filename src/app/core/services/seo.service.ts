import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

interface SeoData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = 'https://imperial-hockey-dinamos.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/assets/images/home/hero-1.jpg`;
const SITE_NAME = 'Imperial Hockey Dinamo';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);

  init(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
      )
      .subscribe((data: SeoData) => {
        this.updateSeo(data);
      });
  }

  private updateSeo(data: SeoData): void {
    const pageTitle = data.title || SITE_NAME;
    const description = data.description || '';
    const keywords = data.keywords || '';
    const ogTitle = data.ogTitle || pageTitle;
    const ogDescription = data.ogDescription || description;
    const ogImage = data.ogImage || DEFAULT_IMAGE;
    const currentUrl = `${BASE_URL}${this.router.url}`;
    const ogUrl = data.ogUrl || currentUrl;
    const ogType = data.ogType || 'website';

    this.title.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });

    this.meta.updateTag({ property: 'og:title', content: ogTitle });
    this.meta.updateTag({ property: 'og:description', content: ogDescription });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:url', content: ogUrl });
    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });

    this.meta.updateTag({ name: 'twitter:card', content: data.twitterCard || 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: ogTitle });
    this.meta.updateTag({ name: 'twitter:description', content: ogDescription });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    this.updateCanonicalUrl(data.canonicalUrl || ogUrl);
    this.updateJsonLd(data, pageTitle, description, ogImage, ogUrl);
  }

  private updateCanonicalUrl(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private updateJsonLd(data: SeoData, title: string, description: string, image: string, url: string): void {
    const existingScript = this.document.querySelector('script[data-seo="jsonld"]');
    if (existingScript) {
      existingScript.remove();
    }

    const jsonLd = data.jsonLd || this.buildDefaultJsonLd(title, description, image, url);

    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo', 'jsonld');
    script.textContent = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
  }

  private buildDefaultJsonLd(title: string, description: string, image: string, url: string): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
      image,
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/assets/images/home/hero-1.jpg`,
        },
      },
    };
  }
}
