import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <!-- ===== NAVBAR ===== -->
    <nav class="bg-navy border-b-4 border-gold sticky top-0 z-50 shadow-xl">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-3">
          <span class="text-gold text-2xl">🪔</span>
          <div>
            <div class="font-serif text-gold text-sm tracking-[0.2em] leading-tight">ARASAVEL</div>
            <div class="font-serif text-mustard text-xs tracking-[0.3em] leading-tight">HANDICRAFTS</div>
          </div>
        </a>

        <!-- Desktop Nav -->
        <ul class="hidden md:flex gap-8 items-center">
          <li *ngFor="let link of navLinks">
            <a [routerLink]="link.path" routerLinkActive="text-mustard border-b-2 border-mustard"
               class="font-serif text-gold/80 hover:text-mustard text-xs tracking-[0.2em] uppercase transition-colors pb-1">
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile Hamburger -->
        <button (click)="menuOpen = !menuOpen" class="md:hidden text-gold text-2xl focus:outline-none">
          {{ menuOpen ? '✕' : '☰' }}
        </button>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="menuOpen" class="md:hidden bg-crimson-dark border-t border-gold px-4 py-4">
        <ul class="flex flex-col gap-4">
          <li *ngFor="let link of navLinks">
            <a [routerLink]="link.path" (click)="menuOpen = false"
               routerLinkActive="text-mustard"
               class="font-serif text-gold text-sm tracking-widest uppercase block hover:text-mustard transition-colors">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- ===== PAGE CONTENT ===== -->
    <main>
      <router-outlet></router-outlet>
    </main>

    <!-- ===== FOOTER ===== -->
    <footer class="bg-navy border-t-4 border-gold mt-0">
      <div class="max-w-7xl mx-auto px-4 py-10 text-center">
        <div class="text-gold font-serif text-xl tracking-widest mb-2">🪔 THIRUVIZHA REGALIA 🪔</div>
        <hr class="gold-divider w-48 mb-4">
        <p class="text-gold/60 font-body text-sm">Handcrafted Tamil Hindu Temple Festival Regalia & Deity Alankaram</p>
        <p class="text-gold/40 font-body text-xs mt-2">© {{ year }} Arasavel Handicrafts. Crafted with Devotion.</p>
      </div>
    </footer>
  `
})
export class AppComponent {
  menuOpen = false;
  year = new Date().getFullYear();

  navLinks = [
    { path: '/',         label: 'Home'     },
    { path: '/about',    label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/contact',  label: 'Contact'  },
  ];
}