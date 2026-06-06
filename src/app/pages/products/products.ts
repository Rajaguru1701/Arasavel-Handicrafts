import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Page Header -->
    <div class="bg-navy py-16 text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-10"
           style="background-image: repeating-linear-gradient(45deg,#D4AF37 0,#D4AF37 1px,transparent 0,transparent 30px); background-size:30px 30px;"></div>
      <div class="relative">
        <p class="text-mustard font-serif text-xs tracking-[0.4em] uppercase mb-3">Sacred Inventory</p>
        <h1 class="font-serif text-4xl md:text-5xl text-gold">Our Products</h1>
        <hr class="gold-divider w-32 mx-auto mt-4">
      </div>
    </div>

    <!-- Filters + Search -->
    <section class="bg-white border-b-2 border-gold/30 py-6 sticky top-16 z-40 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <!-- Category Filters -->
        <div class="flex flex-wrap gap-2">
          <button *ngFor="let cat of categories"
                  (click)="setCategory(cat)"
                  [class.bg-crimson]="activeCategory === cat"
                  [class.text-gold]="activeCategory === cat"
                  [class.border-crimson]="activeCategory === cat"
                  class="px-4 py-2 border-2 border-gold/40 font-serif text-xs tracking-widest uppercase transition-all hover:bg-crimson hover:text-gold hover:border-crimson text-navy rounded-sm">
            {{ cat }}
          </button>
        </div>
        <!-- Search -->
        <div class="relative">
          <input [(ngModel)]="searchQuery"
                 placeholder="Search products..."
                 class="border-2 border-gold/40 focus:border-crimson outline-none px-4 py-2 pr-10 font-body text-sm rounded-sm w-64 bg-[#fdf8f0]">
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gold">🔍</span>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-16 bg-[#fdf8f0] min-h-screen">
      <div class="max-w-7xl mx-auto px-6">

        <p class="font-body text-gray-400 text-sm mb-8">
          Showing {{ filteredProducts.length }} item{{ filteredProducts.length !== 1 ? 's' : '' }}
          <span *ngIf="activeCategory !== 'All'"> in <strong class="text-crimson">{{ activeCategory }}</strong></span>
          <span *ngIf="searchQuery"> matching "<strong class="text-crimson">{{ searchQuery }}</strong>"</span>
        </p>

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" *ngIf="filteredProducts.length > 0">
          <div *ngFor="let product of filteredProducts"
               (click)="openModal(product)"
               class="card-hover temple-border rounded-sm bg-white overflow-hidden cursor-pointer group">

            <!-- Product Image -->
            <div class="h-56 overflow-hidden bg-gray-100 relative">
              <img [src]="product.imageUrl"
                   [alt]="product.name"
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   (error)="onImgError($event)">
              <!-- Category badge -->
              <span class="absolute top-3 left-3 bg-crimson text-mustard font-serif text-xs px-3 py-1 tracking-widest uppercase">
                {{ product.category }}
              </span>
            </div>

            <!-- Product Info -->
            <div class="p-5 border-t-2 border-gold/30">
              <h3 class="font-serif text-navy text-base leading-snug mb-2 group-hover:text-crimson transition-colors">
                {{ product.name }}
              </h3>
              <p class="font-body text-gray-500 text-sm line-clamp-2 mb-4">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-gold font-body text-xs tracking-widest uppercase">{{ product.material.split(',')[0] }}</span>
                <button class="text-crimson font-serif text-xs tracking-widest uppercase hover:text-gold transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- No results -->
        <div *ngIf="filteredProducts.length === 0" class="text-center py-24">
          <div class="text-5xl mb-4">🪔</div>
          <h3 class="font-serif text-crimson text-xl mb-2">No items found</h3>
          <p class="font-body text-gray-400">Try a different search term or category filter.</p>
        </div>
      </div>
    </section>

    <!-- ===== PRODUCT DETAIL MODAL ===== -->
    <div *ngIf="selectedProduct"
         class="fixed inset-0 z-50 flex items-center justify-center p-4"
         style="background:rgba(0,0,0,0.75);"
         (click)="closeModal()">

      <div class="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-sm temple-border"
           (click)="$event.stopPropagation()">

        <!-- Modal Image -->
        <div class="h-64 md:h-80 overflow-hidden bg-gray-100 relative">
          <img [src]="selectedProduct.imageUrl"
               [alt]="selectedProduct.name"
               class="w-full h-full object-cover"
               (error)="onImgError($event)">
          <button (click)="closeModal()"
                  class="absolute top-4 right-4 bg-crimson text-gold w-9 h-9 flex items-center justify-center font-serif text-lg hover:bg-crimson-dark transition-colors">
            ✕
          </button>
          <span class="absolute top-4 left-4 bg-navy text-mustard font-serif text-xs px-3 py-1 tracking-widest uppercase">
            {{ selectedProduct.category }}
          </span>
        </div>

        <!-- Modal Body -->
        <div class="p-6 md:p-8">
          <h2 class="font-serif text-crimson text-xl md:text-2xl leading-snug mb-2">{{ selectedProduct.name }}</h2>
          <hr class="gold-divider mb-5" style="margin-left:0; width:80px;">

          <p class="font-body text-gray-700 leading-relaxed mb-4">{{ selectedProduct.description }}</p>
          <p class="font-body text-gray-600 leading-relaxed mb-6">{{ selectedProduct.details }}</p>

          <!-- Details grid -->
          <div class="grid sm:grid-cols-2 gap-4 mb-6">
            <div class="bg-[#fdf8f0] p-4 border border-gold/30">
              <p class="font-serif text-xs text-gold tracking-widest uppercase mb-1">Materials</p>
              <p class="font-body text-sm text-gray-700">{{ selectedProduct.material }}</p>
            </div>
            <div class="bg-[#fdf8f0] p-4 border border-gold/30" *ngIf="selectedProduct.availableSizes">
              <p class="font-serif text-xs text-gold tracking-widest uppercase mb-1">Available Sizes</p>
              <p class="font-body text-sm text-gray-700">{{ selectedProduct.availableSizes?.join(' · ') }}</p>
            </div>
          </div>

          <!-- WhatsApp CTA -->
          <a [href]="getWhatsAppUrl(selectedProduct)"
             target="_blank"
             class="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-serif text-sm tracking-widest uppercase py-4 px-6 hover:bg-[#1ebe5d] transition-colors shadow-lg">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Enquire on WhatsApp
          </a>

          <p class="text-center text-gray-400 font-body text-xs mt-3">
            Our team typically responds within a few hours
          </p>
        </div>
      </div>
    </div>
  `
})
export class ProductsComponent implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  activeCategory = 'All';
  searchQuery = '';
  selectedProduct: Product | null = null;

  // =====================================================================
  //  WHATSAPP NUMBER — update this to your actual business WhatsApp number
  //  Format: country code + number (no + sign, no spaces)
  //  Example for India: 919876543210
  // =====================================================================
  private whatsappNumber = '919488653928';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.allProducts = this.productService.getAll();
    this.categories  = this.productService.getCategories();
    this.applyFilters();
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
    this.applyFilters();
  }

  applyFilters() {
    const q = this.searchQuery.toLowerCase().trim();
    this.filteredProducts = this.allProducts.filter(p => {
      const matchCat  = this.activeCategory === 'All' || p.category === this.activeCategory;
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }

  openModal(product: Product)  { this.selectedProduct = product; document.body.style.overflow = 'hidden'; }
  closeModal()                  { this.selectedProduct = null;    document.body.style.overflow = ''; }

  getWhatsAppUrl(product: Product): string {
    const msg = encodeURIComponent(product.whatsappMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${msg}`;
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23fdf8f0"/><text x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" fill="%23D4AF37" font-size="48">🪔</text><text x="50%25" y="62%25" dominant-baseline="middle" text-anchor="middle" fill="%23800020" font-size="14" font-family="serif">Image coming soon</text></svg>';
  }
}