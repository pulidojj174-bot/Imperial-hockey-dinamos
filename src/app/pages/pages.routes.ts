import { Routes } from '@angular/router';

const BASE_URL = 'https://imperial-hockey-dinamos.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/assets/images/home/hero-1.jpg`;

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout-home/layout-home').then(m => m.LayoutHome),
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home),
        data: {
          title: 'Imperial Hockey Dinamo | Fabricantes de Dínamos, Billares y Mesas de Juego Premium',
          description:
            'Imperial Hockey Dinamo: fabricantes artesanales de mesas de juego de azar. Dínamos personalizados, billares profesionales y juegos de mesa premium. Diseño 100% a medida con materiales de primera calidad.',
          keywords: 'Imperial Hockey Dinamo, mesas de juego, dínamos personalizados, billares profesionales, mesas artesanales, fabricación a medida, mesas premium Colombia',
          image: DEFAULT_IMAGE,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Imperial Hockey Dinamo',
            url: BASE_URL,
            logo: DEFAULT_IMAGE,
            description: 'Fabricantes artesanales de mesas de juego de azar: dínamos, billares y juegos de mesa premium.',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: 'Spanish',
            },
          },
        },
      },
      {
        path: 'proyectos',
        loadComponent: () => import('./project/project').then(m => m.Project),
        data: {
          title: 'Proyectos Realizados | Imperial Hockey Dinamo',
          description:
            'Galería de proyectos reales: dínamos ejecutivos, billares clásicos y mesas de póker VIP. Cada pieza demuestra nuestra calidad artesanal y atención al detalle.',
          keywords: 'proyectos dínamos, galería billares, mesas artesanales realizadas, portafolio Imperial Hockey Dinamo, trabajos personalizados',
          image: `${BASE_URL}/assets/images/projects/proyecto-dinamo-1.jpg`,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Proyectos Realizados',
            description: 'Galería de proyectos reales de Imperial Hockey Dinamo: dínamos, billares y juegos de mesa.',
            url: `${BASE_URL}/proyectos`,
            isPartOf: { '@type': 'WebSite', name: 'Imperial Hockey Dinamo', url: BASE_URL },
          },
        },
      },
      {
        path: 'contacto',
        loadComponent: () => import('./contact/contact').then(m => m.Contact),
        data: {
          title: 'Contacto | Imperial Hockey Dinamo',
          description:
            'Solicita una cotización personalizada o resuelve tus dudas. Nuestro equipo te asesora en el diseño y fabricación de tu mesa de juego ideal.',
          keywords: 'contacto Imperial Hockey Dinamo, cotización mesas, presupuesto dínamos, solicitar información billares',
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contacto',
            description: 'Página de contacto de Imperial Hockey Dinamo.',
            url: `${BASE_URL}/contacto`,
            mainEntity: {
              '@type': 'Organization',
              name: 'Imperial Hockey Dinamo',
              url: BASE_URL,
            },
          },
        },
      },
      {
        path: 'nosotros',
        loadComponent: () => import('./about/about').then(m => m.About),
        data: {
          title: 'Nosotros | Imperial Hockey Dinamo - Nuestra Historia y Valores',
          description:
            'Conoce la historia de Imperial Hockey Dinamo: fabricantes artesanales con pasión por el detalle. Nuestra misión, visión, proceso de fabricación y compromiso con la calidad.',
          keywords: 'sobre Imperial Hockey Dinamo, historia, misión visión, fabricación artesanal, proceso creativo, valores empresa',
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'Nosotros',
            description: 'Historia, misión, visión y valores de Imperial Hockey Dinamo.',
            url: `${BASE_URL}/nosotros`,
            mainEntity: {
              '@type': 'Organization',
              name: 'Imperial Hockey Dinamo',
              url: BASE_URL,
              foundingDate: '2020',
              description: 'Fabricantes artesanales de mesas de juego de azar premium.',
            },
          },
        },
      },
      {
        path: 'categorias',
        loadComponent: () => import('./category/category').then(m => m.Category),
        data: {
          title: 'Categorías de Mesas | Imperial Hockey Dinamo',
          description:
            'Explora nuestro catálogo: dínamos personalizados, billares profesionales y juegos de mesa premium. Cada categoría con galería de fotos y opciones de personalización.',
          keywords: 'categorías mesas de juego, catálogo dínamos, billares profesionales, juegos de mesa premium, personalización mesas',
          image: `${BASE_URL}/assets/images/home/product-dinamos.jpg`,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Categorías de Mesas de Juego',
            description: 'Catálogo de mesas: dínamos, billares y juegos de mesa premium.',
            url: `${BASE_URL}/categorias`,
            isPartOf: { '@type': 'WebSite', name: 'Imperial Hockey Dinamo', url: BASE_URL },
          },
        },
      },
    ],
  },
];

export default pagesRoutes;
