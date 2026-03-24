import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { ProjectHero } from '../../molecules/project-hero/project-hero';
import { ProjectFilter, ProjectFilterType } from '../../molecules/project-filter/project-filter';
import { ProjectCard, ProjectInfo } from '../../molecules/project-card/project-card';
import { ProjectDetail } from '../../molecules/project-detail/project-detail';
import { RevealDirective } from '../../../core/directives/reveal.directive';

@Component({
  selector: 'app-project-gallery',
  imports: [ProjectHero, ProjectFilter, ProjectCard, ProjectDetail, RevealDirective],
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectGallery {
  readonly activeFilter = signal<ProjectFilterType>('todos');
  readonly selectedProject = signal<ProjectInfo | null>(null);

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'todos') {
      return this.projects;
    }
    return this.projects.filter(p => p.type === filter);
  });

  onFilterChange(filter: ProjectFilterType): void {
    this.activeFilter.set(filter);
  }

  onProjectSelect(project: ProjectInfo): void {
    this.selectedProject.set(project);
  }

  onCloseDetail(): void {
    this.selectedProject.set(null);
  }

  readonly projects: ProjectInfo[] = [
    {
      id: 'dinamo-ejecutivo',
      name: 'Dínamo Ejecutivo Premium',
      type: 'dinamos',
      typeLabel: 'Dínamo',
      description:
        'Mesa dínamo de lujo diseñada para la sala VIP del Casino Royale. Acabado en ébano con detalles dorados y tapizado en cuero premium.',
      image: 'assets/images/projects/proyecto-dinamo-1.jpg',
      imageAlt: 'Mesa dínamo ejecutivo premium con acabado ébano y detalles dorados',
      materials: ['Madera de ébano', 'Cuero premium', 'Herrajes dorados', 'Paño italiano'],
      customization: 'Grabado láser del logotipo del cliente en las esquinas, iluminación LED perimetral en tono ámbar y portavasos integrados de acero inoxidable.',
      designStory: 'El cliente buscaba una pieza que reflejara exclusividad y sofisticación. Trabajamos con su equipo de diseño durante 3 semanas para lograr una mesa que combinara la funcionalidad de juego con la elegancia de un mueble de lujo.',
      result: 'Una mesa dínamo que se convirtió en la pieza central de la sala VIP, elogiada por visitantes y generando múltiples pedidos adicionales del mismo establecimiento.',
    },
    {
      id: 'dinamo-rustico',
      name: 'Dínamo Rústico Artesanal',
      type: 'dinamos',
      typeLabel: 'Dínamo',
      description:
        'Estilo vintage industrial para un bar temático. Madera de roble envejecida con herrajes de hierro forjado y acabado rústico artesanal.',
      image: 'assets/images/projects/proyecto-dinamo-2.jpg',
      imageAlt: 'Mesa dínamo rústico artesanal con madera de roble envejecida',
      materials: ['Roble envejecido', 'Hierro forjado', 'Tinte natural', 'Paño resistente'],
      customization: 'Envejecimiento manual de la madera, marcas de quemado decorativas con sello del bar, patas de hierro forjado con diseño personalizado.',
      designStory: 'Un bar temático steampunk necesitaba una mesa que pareciera sacada de otra época. Utilizamos técnicas de envejecimiento artesanal y hierro forjado para lograr un aspecto auténtico pero con rendimiento moderno.',
      result: 'La mesa se integró perfectamente en la estética del bar, recibiendo elogios de clientes y revistas de diseño de interiores especializadas.',
    },
    {
      id: 'dinamo-moderno',
      name: 'Dínamo Minimalista LED',
      type: 'dinamos',
      typeLabel: 'Dínamo',
      description:
        'Diseño contemporáneo con líneas puras e iluminación LED RGB. Ideal para espacios modernos con tecnología integrada.',
      image: 'assets/images/projects/proyecto-dinamo-3.jpg',
      imageAlt: 'Mesa dínamo minimalista con iluminación LED integrada',
      materials: ['MDF lacado', 'Aluminio anodizado', 'LEDs RGB', 'Vidrio templado'],
      customization: 'Sistema de iluminación LED controlable por app, superficie de vidrio templado con serigrafiado personalizado y sistema de sonido integrado.',
      designStory: 'Un salón de juegos moderno solicitó una mesa que fuera tanto un mueble de diseño como un centro de entretenimiento. Integramos tecnología LED y audio sin comprometer la experiencia de juego.',
      result: 'La mesa ha sido destacada en redes sociales por su diseño innovador, atrayendo un público más joven al establecimiento.',
    },
    {
      id: 'billar-clasico',
      name: 'Billar Clásico Imperial',
      type: 'billares',
      typeLabel: 'Billar',
      description:
        'Mesa de billar profesional modelo clásico con acabados en caoba y paño de competición oficial. La elegancia atemporal del billar tradicional.',
      image: 'assets/images/projects/proyecto-billar-1.jpg',
      imageAlt: 'Mesa de billar clásico Imperial con acabados en caoba',
      materials: ['Caoba sólida', 'Pizarra italiana', 'Paño Simonis', 'Cuero para troneras'],
      customization: 'Tallado a mano en las patas con motivos florales, placa de identificación personalizada en bronce y set de bolas premium con numeración grabada.',
      designStory: 'Diseñado para un club privado que buscaba revivir la tradición del billar clásico. Seleccionamos caoba de primera y aplicamos técnicas de ebanistería tradicional para cada detalle.',
      result: 'El club reportó un incremento del 40% en reservas de la sala de billar tras la instalación, convirtiendo la mesa en un punto de referencia del establecimiento.',
    },
    {
      id: 'billar-deportivo',
      name: 'Billar Pool Tournament',
      type: 'billares',
      typeLabel: 'Billar',
      description:
        'Mesa de pool reglamentaria para torneos profesionales. Pizarra de primera calidad y estructura reforzada para competición de alto nivel.',
      image: 'assets/images/projects/proyecto-billar-2.jpg',
      imageAlt: 'Mesa de billar pool para torneos con estructura profesional',
      materials: ['Arce duro', 'Pizarra brasileña', 'Paño Championship', 'Acero reforzado'],
      customization: 'Logos del torneo bordados en el paño, sistema de nivelación micrométrica, banda de caucho de competición K-66 y marcadores electrónicos laterales.',
      designStory: 'Un organizador de torneos regionales necesitaba mesas que cumplieran estrictos estándares de competición. Diseñamos y fabricamos 4 mesas idénticas con las especificaciones exactas de la federación.',
      result: 'Las mesas superaron la inspección oficial de la federación y fueron utilizadas en el campeonato regional, recibiendo felicitaciones de jugadores profesionales.',
    },
    {
      id: 'billar-luxury',
      name: 'Billar Luxury Convertible',
      type: 'billares',
      typeLabel: 'Billar',
      description:
        'Mesa de billar convertible con tapa de comedor. Solución perfecta para hogares que desean una mesa de billar sin sacrificar espacio.',
      image: 'assets/images/projects/proyecto-billar-3.jpg',
      imageAlt: 'Mesa de billar luxury convertible con tapa de comedor',
      materials: ['Nogal americano', 'Pizarra portuguesa', 'Paño Iwan Simonis', 'Tapa de nogal'],
      customization: 'Tapa convertible con acabado espejo en nogal, sistema de elevación asistida, almacenamiento oculto para tacos y accesorios, y cubierta protectora a medida.',
      designStory: 'Una familia apasionada del billar quería una mesa profesional en su comedor sin perder funcionalidad. Desarrollamos un sistema convertible que permite transformar la mesa en menos de 2 minutos.',
      result: 'La familia usa la mesa diariamente tanto para cenas como para partidas de billar, y ha recomendado el producto a varios conocidos que también realizaron pedidos.',
    },
    {
      id: 'poker-vip',
      name: 'Mesa Póker VIP Octagonal',
      type: 'juegos',
      typeLabel: 'Juego de Mesa',
      description:
        'Mesa de póker octagonal para 8 jugadores con portavasos, portafichas individuales y reposabrazos acolchado en cuero.',
      image: 'assets/images/projects/proyecto-juego-1.jpg',
      imageAlt: 'Mesa de póker VIP octagonal para 8 jugadores',
      materials: ['Cedro rojo', 'Cuero italiano', 'Fieltro profesional', 'Acero inoxidable'],
      customization: 'Portafichas individuales con divisores, portavasos de acero empotrados, dealer button integrado y reposabrazos con costura diamante personalizada.',
      designStory: 'Un grupo de amigos coleccionistas encargó la mesa de póker definitiva. Visitamos salones de Las Vegas para inspirarnos en los diseños más exclusivos y adaptarlos a un formato residencial.',
      result: 'La mesa se convirtió en el centro de reuniones semanales del grupo y recibe constantes halagos de invitados. El cliente publicó reseñas en foros de póker elogiando la calidad.',
    },
    {
      id: 'multijuego-familia',
      name: 'Multijuego Familiar Premium',
      type: 'juegos',
      typeLabel: 'Juego de Mesa',
      description:
        'Mesa multifuncional con superficies intercambiables para ajedrez, dominó, backgammon y cartas. El centro de entretenimiento familiar perfecto.',
      image: 'assets/images/projects/proyecto-juego-2.jpg',
      imageAlt: 'Mesa multijuego familiar con superficies intercambiables',
      materials: ['Maple canadiense', 'Mármol para ajedrez', 'Felt profesional', 'Bronce'],
      customization: '4 superficies intercambiables magnéticas, cajones laterales para piezas, tablero de ajedrez en mármol bicolor y sistema de almacenaje integrado.',
      designStory: 'Una familia numerosa quería un mueble que uniera a todas las generaciones. Diseñamos una mesa con superficies intercambiables para que abuelos y nietos pudieran disfrutar juntos de sus juegos favoritos.',
      result: 'La familia reporta que la mesa se usa todas las noches y que ha reforzado los vínculos familiares. Recibimos fotos de sus reuniones que usamos con su permiso como referencia.',
    },
    {
      id: 'domino-club',
      name: 'Mesa Dominó Club Social',
      type: 'juegos',
      typeLabel: 'Juego de Mesa',
      description:
        'Mesa de dominó profesional para club social. Superficie antideslizante y compartimentos integrados para fichas y accesorios.',
      image: 'assets/images/projects/proyecto-juego-3.jpg',
      imageAlt: 'Mesa de dominó profesional para club social',
      materials: ['Roble blanco', 'Superficie antideslizante', 'Herrajes de bronce', 'Tapizado velvet'],
      customization: 'Compartimentos empotrados para fichas, superficie con acabado suave al tacto, escudo del club grabado en el centro y sillas a juego opcionales.',
      designStory: 'Un club social con 50 años de tradición necesitaba renovar sus mesas de dominó manteniendo el espíritu clásico. Respetamos la estética original añadiendo funcionalidad moderna y mayor comodidad.',
      result: 'Los socios del club elogiaron el equilibrio entre tradición y modernidad. El club renovó las 12 mesas restantes con nuestro diseño en los meses siguientes.',
    },
  ];
}
