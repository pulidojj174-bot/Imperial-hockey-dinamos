import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavbarBrand } from '../../molecules/navbar-brand/navbar-brand';
import { NavbarLinks, NavLink } from '../../molecules/navbar-links/navbar-links';
import { NavbarToggle } from '../../molecules/navbar-toggle/navbar-toggle';

@Component({
  selector: 'app-navbar',
  imports: [NavbarBrand, NavbarLinks, NavbarToggle],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Navbar {
  readonly isMenuOpen = signal(false);

  readonly navLinks: NavLink[] = [
    { label: 'Inicio', route: '/' },
    { label: 'Proyectos', route: '/proyectos' },
    /* { label: 'Categorías', route: '/categorias' }, */
    { label: 'Nosotros', route: '/nosotros' },
    { label: 'Contacto', route: '/contacto' },
  ];

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
