import { Routes } from '@angular/router';
import { Home } from './home/home';
import { LayoutHome } from './layot/layout-home/layout-home';
import { Project } from './project/project';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Category } from './category/category';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: LayoutHome,
    children: [
      {
        path: '',
        component: Home,
        data: {
          title: 'Inicio | Senova',
          description:
            'Bienvenido a Senova, tu plataforma de gestión de proyectos y tareas. Organiza tu trabajo de manera eficiente y colabora con tu equipo en tiempo real.',
          keywords: 'Senova, gestión de proyectos, tareas, colaboración, productividad',
          ogTitle: 'Inicio | Senova',
          ogDescription:
            'Bienvenido a Senova, tu plataforma de gestión de proyectos y tareas. Organiza tu trabajo de manera eficiente y colabora con tu equipo en tiempo real.',
          ogImage: 'https://senova.com/assets/images/og-image.png',
          ogUrl: 'https://senova.com/',
          twitterTitle: 'Inicio | Senova',
          twitterDescription:
            'Bienvenido a Senova, tu plataforma de gestión de proyectos y tareas. Organiza tu trabajo de manera eficiente y colabora con tu equipo en tiempo real.',
          twitterImage: 'https://senova.com/assets/images/twitter-image.png',
          twitterUrl: 'https://senova.com/',
        },
      },
      {
        path: 'projectos',
        component: Project,
        data: {
          title: 'Proyectos | Senova',
          description:
            'Explora nuestros proyectos destacados en Senova. Descubre cómo nuestras soluciones innovadoras pueden ayudarte a gestionar tus proyectos de manera eficiente y alcanzar el éxito.',
          keywords: 'Senova, proyectos, gestión de proyectos, soluciones innovadoras, éxito',
          ogTitle: 'Proyectos | Senova',
          ogDescription:
            'Explora nuestros proyectos destacados en Senova. Descubre cómo nuestras soluciones innovadoras pueden ayudarte a gestionar tus proyectos de manera eficiente y alcanzar el éxito.',
          ogImage: 'https://senova.com/assets/images/og-projects.png',
          ogUrl: 'https://senova.com/proyectos',
          twitterTitle: 'Proyectos | Senova',
          twitterDescription:
            'Explora nuestros proyectos destacados en Senova. Descubre cómo nuestras soluciones innovadoras pueden ayudarte a gestionar tus proyectos de manera eficiente y alcanzar el éxito.',
          twitterImage: 'https://senova.com/assets/images/twitter-projects.png',
          twitterUrl: 'https://senova.com/proyectos',
        }
      },
      {
        path: 'contacto',
        component: Contact,
        data: {
          title: 'Contacto | Senova',
          description:
            '¿Tienes preguntas o necesitas más información sobre Senova? Contáctanos hoy mismo y nuestro equipo estará encantado de ayudarte. Estamos aquí para brindarte el soporte que necesitas.',
          keywords: 'Senova, contacto, preguntas, información, soporte',
          ogTitle: 'Contacto | Senova',
          ogDescription:
            '¿Tienes preguntas o necesitas más información sobre Senova? Contáctanos hoy mismo y nuestro equipo estará encantado de ayudarte. Estamos aquí para brindarte el soporte que necesitas.',
          ogImage: 'https://senova.com/assets/images/og-contact.png',
          ogUrl: 'https://senova.com/contacto',
          twitterTitle: 'Contacto | Senova',
          twitterDescription:
            '¿Tienes preguntas o necesitas más información sobre Senova? Contáctanos hoy mismo y nuestro equipo estará encantado de ayudarte. Estamos aquí para brindarte el soporte que necesitas.',
          twitterImage: 'https://senova.com/assets/images/twitter-contact.png',
          twitterUrl: 'https://senova.com/contacto',
        }
      },
      {
        path: 'nosotros',
        component: About,
        data: {
          title: 'Nosotros | Senova',
          description:
            'Conoce más sobre Senova, nuestra misión, visión y valores. Descubre cómo estamos comprometidos en ofrecer soluciones innovadoras para la gestión de proyectos y tareas, ayudando a nuestros clientes a alcanzar el éxito.',
          keywords: 'Senova, nosotros, misión, visión, valores, soluciones innovadoras, gestión de proyectos',
          ogTitle: 'Nosotros | Senova',
          ogDescription:
            'Conoce más sobre Senova, nuestra misión, visión y valores. Descubre cómo estamos comprometidos en ofrecer soluciones innovadoras para la gestión de proyectos y tareas, ayudando a nuestros clientes a alcanzar el éxito.',
          ogImage: 'https://senova.com/assets/images/og-about.png',
          ogUrl: 'https://senova.com/nosotros',
          twitterTitle: 'Nosotros | Senova',
          twitterDescription:
            'Conoce más sobre Senova, nuestra misión, visión y valores. Descubre cómo estamos comprometidos en ofrecer soluciones innovadoras para la gestión de proyectos y tareas, ayudando a nuestros clientes a alcanzar el éxito.',
          twitterImage: 'https://senova.com/assets/images/twitter-about.png',
          twitterUrl: 'https://senova.com/nosotros',
        }
      },
      {
        path: 'categorias',
        component: Category,
        data: {
          title: 'Categorías | Senova',
          description:
            'Explora nuestras categorías de servicios en Senova. Descubre cómo nuestras soluciones innovadoras pueden ayudarte a gestionar tus proyectos de manera eficiente y alcanzar el éxito.',
          keywords: 'Senova, categorías, servicios, soluciones innovadoras, gestión de proyectos, éxito',
          ogTitle: 'Categorías | Senova',
          ogDescription:
            'Explora nuestras categorías de servicios en Senova. Descubre cómo nuestras soluciones innovadoras pueden ayudarte a gestionar tus proyectos de manera eficiente y alcanzar el éxito.',
          ogImage: 'https://senova.com/assets/images/og-categories.png',
          ogUrl: 'https://senova.com/categorias',
          twitterTitle: 'Categorías | Senova',
          twitterDescription:
            'Explora nuestras categorías de servicios en Senova. Descubre cómo nuestras soluciones innovadoras pueden ayudarte a gestionar tus proyectos de manera eficiente y alcanzar el éxito.',
          twitterImage: 'https://senova.com/assets/images/twitter-categories.png',
          twitterUrl: 'https://senova.com/categorias',
        }
      }
    ],
  },
];

export default pagesRoutes;
