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
          title: 'Inicio | Imperial Hockey Dinamos',
          description:
            'Bienvenido a Imperial Hockey Dinamos, tu club de hockey sobre hielo. Descubre nuestros equipos, eventos y más.',
          keywords: 'Imperial Hockey Dinamos, hockey, club deportivo',
          ogTitle: 'Inicio | Imperial Hockey Dinamos',
          ogDescription:
            'Bienvenido a Imperial Hockey Dinamos, tu club de hockey sobre hielo. Descubre nuestros equipos, eventos y más.',
        },
      },
      {
        path: 'proyectos',
        loadComponent: () => import('./project/project').then(m => m.Project),
        data: {
          title: 'Proyectos | Imperial Hockey Dinamos',
          description:
            'Explora nuestros proyectos destacados en Imperial Hockey Dinamos.',
          keywords: 'Imperial Hockey Dinamos, proyectos, iniciativas',
          ogTitle: 'Proyectos | Imperial Hockey Dinamos',
          ogDescription:
            'Explora nuestros proyectos destacados en Imperial Hockey Dinamos.',
        },
      },
      {
        path: 'contacto',
        loadComponent: () => import('./contact/contact').then(m => m.Contact),
        data: {
          title: 'Contacto | Imperial Hockey Dinamos',
          description:
            '¿Tienes preguntas o necesitas más información? Contáctanos y nuestro equipo estará encantado de ayudarte.',
          keywords: 'Imperial Hockey Dinamos, contacto, información, soporte',
          ogTitle: 'Contacto | Imperial Hockey Dinamos',
          ogDescription:
            '¿Tienes preguntas o necesitas más información? Contáctanos y nuestro equipo estará encantado de ayudarte.',
        },
      },
      {
        path: 'nosotros',
        loadComponent: () => import('./about/about').then(m => m.About),
        data: {
          title: 'Nosotros | Imperial Hockey Dinamos',
          description:
            'Conoce más sobre Imperial Hockey Dinamos, nuestra misión, visión y valores.',
          keywords: 'Imperial Hockey Dinamos, nosotros, misión, visión, valores',
          ogTitle: 'Nosotros | Imperial Hockey Dinamos',
          ogDescription:
            'Conoce más sobre Imperial Hockey Dinamos, nuestra misión, visión y valores.',
        },
      },
      {
        path: 'categorias',
        loadComponent: () => import('./category/category').then(m => m.Category),
        data: {
          title: 'Categorías | Imperial Hockey Dinamos',
          description:
            'Explora nuestras categorías de servicios en Imperial Hockey Dinamos.',
          keywords: 'Imperial Hockey Dinamos, categorías, servicios',
          ogTitle: 'Categorías | Imperial Hockey Dinamos',
          ogDescription:
            'Explora nuestras categorías de servicios en Imperial Hockey Dinamos.',
        },
      },
    ],
  },
];

export default pagesRoutes;
