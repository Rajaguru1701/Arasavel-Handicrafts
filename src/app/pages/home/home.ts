import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- ===== HERO ===== -->
   <section class="relative overflow-hidden min-h-[88vh] flex items-center"
         style="background-image: url('banner.jpeg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      
           <div class="absolute inset-0" style="background: rgba(0, 0, 0, 0.65);"></div>
         <!-- Decorative background pattern -->
      <div class="absolute inset-0 opacity-10"
           style="background-image: repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%); background-size: 20px 20px;"></div>

      <!-- Radial glow -->
      <div class="absolute inset-0"
           style="background: radial-gradient(ellipse at center, rgba(128,0,32,0.4) 0%, transparent 70%);"></div>

      <div class="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <!-- Lamp icons -->
        <div class="text-5xl mb-6 animate-pulse">🪔</div>

        <p class="text-mustard font-serif text-sm tracking-[0.4em] uppercase mb-4">
          Sacred Craftsmanship Since Generations
        </p>

        <h1 class="font-serif text-4xl sm:text-5xl md:text-7xl text-gold leading-tight mb-4"
            style="text-shadow: 0 2px 20px rgba(212,175,55,0.4);">
          Arasavel<br>
          <span class="text-mustard">Handi Crafts</span>
        </h1>

        <hr class="gold-divider w-56 mx-auto my-6">

        <p class="text-gold/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Handcrafted Procession Items, Festival Flags & Deity Alankaram for grand Tamil Hindu Thiruvizha celebrations.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/products" class="btn-primary">View Our Catalog</a>
          <a routerLink="/contact"  class="btn-gold">Enquire Now</a>
        </div>

        <!-- Scroll cue -->
        <div class="mt-16 text-gold/30 animate-bounce text-2xl">↓</div>
      </div>
    </section>

    <!-- ===== GOLD BAND ===== -->
    <div class="bg-gold py-3 text-center text-navy font-serif text-xs tracking-[0.3em] uppercase">
      ✦ Authentic Zari Embroidery &nbsp;·&nbsp; Temple Grade Quality &nbsp;·&nbsp; Made to Order &nbsp;·&nbsp; Pan India Delivery ✦
    </div>

    <!-- ===== FEATURED CATEGORIES ===== -->
    <section class="py-20 bg-[#fdf8f0]">
      <div class="max-w-7xl mx-auto px-6">
        <p class="text-center text-crimson font-serif text-xs tracking-[0.4em] uppercase mb-2">Our Specialities</p>
        <h2 class="section-title mb-3">Sacred Collections</h2>
        <hr class="gold-divider w-40 mx-auto mb-14">

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let cat of categories" class="card-hover temple-border rounded-sm overflow-hidden bg-white">
            <div class="h-48 flex items-center justify-center text-6xl"
                 [style.background]="cat.bg">
              {{ cat.icon }}
            </div>
            <div class="p-6 text-center border-t-2 border-gold/30">
              <h3 class="font-serif text-crimson text-lg tracking-wide mb-2">{{ cat.name }}</h3>
              <p class="text-gray-600 font-body text-sm leading-relaxed mb-4">{{ cat.desc }}</p>
              <a routerLink="/products" class="text-gold font-serif text-xs tracking-widest uppercase hover:text-crimson transition-colors">
                Explore →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FESTIVAL BANNER ===== -->
    <section class="py-20 bg-crimson relative overflow-hidden">
      <div class="absolute inset-0 opacity-5"
           style="background-image: repeating-linear-gradient(0deg, #FFC30B 0, #FFC30B 1px, transparent 0, transparent 30px); background-size: 30px 30px;"></div>
      <div class="relative max-w-4xl mx-auto px-6 text-center">
        <div class="text-4xl mb-4">🕌</div>
        <h2 class="font-serif text-3xl md:text-5xl text-gold mb-4 leading-tight">
          Grand Brahmotsavam &<br>
          <span class="text-mustard">Karthigai Deepam</span> Ready
        </h2>
        <hr class="gold-divider w-40 mx-auto my-6">
        <p class="text-gold/80 font-body text-lg max-w-2xl mx-auto mb-10">
          From Aadi Thiruvizha to Panguni Uthiram — we supply complete festival regalia for temples and devotees across Tamil Nadu and beyond.
        </p>
        <a routerLink="/contact" class="btn-gold">Book for Your Festival</a>
      </div>
    </section>

    <!-- ===== WHY CHOOSE US ===== -->
    <section class="py-20 bg-[#fdf8f0]">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="section-title mb-3">The Artisan Promise</h2>
        <hr class="gold-divider w-40 mx-auto mb-14">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let p of promises" class="text-center p-6 temple-border rounded-sm bg-white card-hover">
            <div class="text-4xl mb-4">{{ p.icon }}</div>
            <h3 class="font-serif text-crimson text-base tracking-wide mb-2">{{ p.title }}</h3>
            <p class="text-gray-500 font-body text-sm leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="py-16 bg-navy text-center">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="font-serif text-2xl md:text-3xl text-gold mb-4">
          Ready to Adorn Your Temple with Splendour?
        </h2>
        <p class="text-gold/60 font-body mb-8">Contact us today for custom orders, bulk enquiries, and festival season specials.</p>
        <a routerLink="/contact" class="btn-primary">Contact Our Artisans</a>
      </div>
    </section>
  `
})
export class HomeComponent {
  categories = [
  {
    name: 'Kodai',
    icon: '☂️',
    bg: "linear-gradient(135deg, rgba(128, 0, 32, 0.75) 0%, rgba(90, 0, 21, 0.9) 100%), url('/44.jpeg') center/cover no-repeat",
    desc: 'Ceremonial umbrellas, palanquins, and divine procession accessories for grand Thiruvizha festivals.'
  },
  {
    name: 'Temple Flags (Kodi)',
    icon: '🚩',
    bg: "linear-gradient(135deg, rgba(0, 32, 96, 0.75) 0%, rgba(0, 16, 64, 0.9) 100%), url('/nine.jpeg') center/cover no-repeat",
    desc: 'Sacred Kovil Kodi in Shaivite, Vaishnavite, and Amman traditions — richly embroidered in zari.'
  },
  {
    name: 'Ther',
    icon: '🌺',
    bg: "linear-gradient(135deg, rgba(212, 175, 55, 0.8) 0%, rgba(255, 195, 11, 0.9) 100%), url('/45.jpeg') center/cover no-repeat",
    desc: 'Grand velvet chariot hangings adorned with hand-drawn peacocks, elephants, and sacred iconography tailored for majestic festival processions.'
  }
];

  promises = [
    { icon: '✋', title: 'Handcrafted',     desc: 'Every item made by skilled artisans using age-old embroidery techniques.' },
    { icon: '🧵', title: 'Authentic Zari',  desc: 'Genuine gold and silver zari thread sourced from certified weavers.' },
    { icon: '🛕', title: 'Temple Approved', desc: 'Trusted by temples across Tamil Nadu for decades of festival seasons.' },
    { icon: '📦', title: 'Custom Orders',   desc: 'Made-to-measure for your deity size, temple colour, and festival theme.' },
  ];
}