import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout-home/layout-home').then(m => m.LayoutHome),
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home),
        data: {
          title: 'Inicio | Imperial Hockey Dinamo',
          description:
            'Bienvenido a Imperial Hockey Dinamo, fabricantes artesanales de mesas de juego de azar. Dínamos, billares y juegos de mesa premium.',
          keywords: 'Imperial Hockey Dinamo, mesas de juego, dínamos, billares, mesas artesanales',
          ogTitle: 'Inicio | Imperial Hockey Dinamo',
          ogDescription:
            'Bienvenido a Imperial Hockey Dinamo, fabricantes artesanales de mesas de juego de azar. Dínamos, billares y juegos de mesa premium.',
        },
      },
      {
        path: 'proyectos',
        loadComponent: () => import('./project/project').then(m => m.Project),
        data: {
          title: 'Proyectos | Imperial Hockey Dinamo',
          description:
            'Explora nuestros proyectos destacados en Imperial Hockey Dinamo.',
          keywords: 'Imperial Hockey Dinamo, proyectos, mesas de juego',
          ogTitle: 'Proyectos | Imperial Hockey Dinamo',
          ogDescription:
            'Explora nuestros proyectos destacados en Imperial Hockey Dinamo.',
        },
      },
      {
        path: 'contacto',
        loadComponent: () => import('./contact/contact').then(m => m.Contact),
        data: {
          title: 'Contacto | Imperial Hockey Dinamo',
          description:
            '¿Tienes preguntas o necesitas más información? Contáctanos y nuestro equipo estará encantado de ayudarte.',
          keywords: 'Imperial Hockey Dinamo, contacto, información, soporte',
          ogTitle: 'Contacto | Imperial Hockey Dinamo',
          ogDescription:
            '¿Tienes preguntas o necesitas más información? Contáctanos y nuestro equipo estará encantado de ayudarte.',
        },
      },
      {
        path: 'nosotros',
        loadComponent: () => import('./about/about').then(m => m.About),
        data: {
          title: 'Nosotros | Imperial Hockey Dinamo',
          description:
            'Conoce más sobre Imperial Hockey Dinamo, nuestra misión, visión y valores.',
          keywords: 'Imperial Hockey Dinamo, nosotros, misión, visión, valores',
          ogTitle: 'Nosotros | Imperial Hockey Dinamo',
          ogDescription:
            'Conoce más sobre Imperial Hockey Dinamo, nuestra misión, visión y valores.',
        },
      },
      {
        path: 'categorias',
        loadComponent: () => import('./category/category').then(m => m.Category),
        data: {
          title: 'Categorías | Imperial Hockey Dinamo',
          description:
            'Explora nuestro catálogo de mesas de juego artesanales: dínamos personalizados, billares y juegos de mesa premium.',
          keywords: 'Imperial Hockey Dinamo, categorías, dínamos, billares, juegos de mesa, mesas artesanales',
          ogTitle: 'Categorías | Imperial Hockey Dinamo',
          ogDescription:
            'Explora nuestro catálogo de mesas de juego artesanales: dínamos personalizados, billares y juegos de mesa premium.',
        },
      },
    ],
  },
];

export default pagesRoutes;
