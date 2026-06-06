// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <!-- Page Header -->
//     <div class="bg-crimson py-16 text-center relative overflow-hidden">
//       <div class="absolute inset-0 opacity-10"
//            style="background-image: repeating-linear-gradient(45deg,#D4AF37 0,#D4AF37 1px,transparent 0,transparent 30px); background-size:30px 30px;"></div>
//       <div class="relative">
//         <p class="text-mustard font-serif text-xs tracking-[0.4em] uppercase mb-3">Our Heritage</p>
//         <h1 class="font-serif text-4xl md:text-5xl text-gold">About Us</h1>
//         <hr class="gold-divider w-32 mx-auto mt-4">
//       </div>
//     </div>

//     <!-- Story Section -->
//     <section class="py-20 bg-[#fdf8f0]">
//       <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//         <div>
//           <p class="text-crimson font-serif text-xs tracking-[0.4em] uppercase mb-3">Who We Are</p>
//           <h2 class="font-serif text-3xl text-navy mb-6 leading-snug">
//             Woven with Devotion,<br>Born from the Sacred Looms of Tamil Nadu
//           </h2>
//           <hr class="gold-divider w-32 mb-6" style="margin-left:0;">
//           <p class="font-body text-gray-700 leading-relaxed mb-5">
//             Thiruvizha Regalia is a family-rooted artisan enterprise dedicated to preserving the living craft traditions of Tamil Hindu temple festivals. For generations, our master craftsmen have supplied festival regalia — from majestic procession umbrellas to intricately embroidered deity alankaram — to temples and devotees across Tamil Nadu.
//           </p>
//           <p class="font-body text-gray-700 leading-relaxed mb-5">
//             We are not merely manufacturers. We are custodians of a sacred visual language — the language of silk, zari, colour, and devotion that speaks during grand Brahmotsavam celebrations, Karthigai Deepam nights, and Panguni Uthiram processions.
//           </p>
//           <p class="font-body text-gray-700 leading-relaxed">
//             Every thread we embroider, every flag we stitch, and every Kavacham we craft is offered as a <em>seva</em> to the divine — a labour of love that honours centuries of Tamil cultural heritage.
//           </p>
//         </div>

//         <!-- Decorative panel -->
//         <div class="temple-border rounded-sm bg-navy p-8 text-center">
//           <div class="text-6xl mb-6">🪔</div>
//           <h3 class="font-serif text-gold text-xl tracking-wide mb-4">Our Core Values</h3>
//           <hr class="gold-divider w-24 mx-auto mb-6">
//           <ul class="text-gold/70 font-body text-sm space-y-3">
//             <li *ngFor="let v of values" class="flex items-start gap-3">
//               <span class="text-mustard text-base mt-0.5">✦</span>
//               <span class="leading-relaxed text-left">{{ v }}</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>

//     <!-- Craft Process -->
//     <section class="py-20 bg-white">
//       <div class="max-w-6xl mx-auto px-6">
//         <p class="text-center text-crimson font-serif text-xs tracking-[0.4em] uppercase mb-2">The Sacred Process</p>
//         <h2 class="section-title mb-3">How We Create</h2>
//         <hr class="gold-divider w-40 mx-auto mb-14">

//         <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div *ngFor="let step of craftSteps; let i = index" class="text-center">
//             <div class="w-14 h-14 rounded-full bg-crimson flex items-center justify-center text-gold font-serif text-xl mx-auto mb-4 border-2 border-gold">
//               {{ i + 1 }}
//             </div>
//             <div class="text-3xl mb-3">{{ step.icon }}</div>
//             <h3 class="font-serif text-crimson text-sm tracking-widest uppercase mb-2">{{ step.title }}</h3>
//             <p class="text-gray-500 font-body text-sm leading-relaxed">{{ step.desc }}</p>
//           </div>
//         </div>
//       </div>
//     </section>

//     <!-- Materials Section -->
//     <section class="py-20 bg-navy">
//       <div class="max-w-6xl mx-auto px-6">
//         <h2 class="font-serif text-3xl text-gold text-center tracking-widest mb-3">Authentic Materials We Use</h2>
//         <hr class="gold-divider w-40 mx-auto mb-14">

//         <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <div *ngFor="let m of materials"
//                class="temple-border rounded-sm p-6 bg-navy/50 card-hover">
//             <div class="text-3xl mb-3">{{ m.icon }}</div>
//             <h3 class="font-serif text-mustard text-sm tracking-widest uppercase mb-2">{{ m.name }}</h3>
//             <p class="text-gold/60 font-body text-sm leading-relaxed">{{ m.desc }}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   `
// })
// export class AboutComponent {
//   values = [
//     'Authenticity in every thread and technique',
//     'Devotion as the foundation of all craftsmanship',
//     'Preservation of Tamil temple visual tradition',
//     'Transparent, fair sourcing of all materials',
//     'Custom service tailored to each temple\'s tradition'
//   ];

//   craftSteps = [
//     { icon: '📐', title: 'Design',    desc: 'Our artisans sketch sacred motifs based on temple tradition, deity iconography, and festival requirements.' },
//     { icon: '🧵', title: 'Sourcing',  desc: 'Pure silk, genuine zari, and embellishment materials are sourced from certified Kanchipuram and Surat weavers.' },
//     { icon: '🪡', title: 'Embroidery',desc: 'Master embroiderers work the zari thread by hand using traditional aari and maggam techniques across multiple sessions.' },
//     { icon: '✅', title: 'Blessing',  desc: 'Finished items are reviewed for quality, blessed, and packaged with sacred care before dispatch.' }
//   ];

//   materials = [
//     { icon: '🟨', name: 'Kanchipuram Silk',   desc: 'The finest pure mulberry silk from Tamil Nadu\'s legendary weaving capital, known for its lustrous sheen and durability.' },
//     { icon: '🥇', name: 'Gold Zari Thread',    desc: 'Real gold and silver-plated copper wire zari from certified Surat suppliers — the hallmark of authentic temple textiles.' },
//     { icon: '💠', name: 'Mirror Work',         desc: 'Hand-set glass mirrors and sequins applied using traditional Kutchi embroidery techniques for dazzling festival brilliance.' },
//     { icon: '🔴', name: 'Velvet & Brocade',    desc: 'Rich velvet and Banarasi brocade used for deity alankaram bases, lending regal depth and texture to sacred adornments.' },
//     { icon: '🥈', name: 'Silver Zari',         desc: 'Pure silver-plated thread used in Vaishnavite and Amman tradition items for the distinctive white-silver luminance.' },
//     { icon: '🔵', name: 'Temple Navy Silks',   desc: 'Deep navy and royal blue ceremonial silks sourced for Vaishnavite deity kavacham and Vishnu-related festival flags.' },
//   ];
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html', // Moved template to separate file below for cleaner management
})
export class AboutComponent {
  values = [
    'Bridging engineering precision with centuries-old spiritual art form',
    'Hand-stitched authenticity using traditional white thread tailoring on premium velvet',
    'Preserving the divine iconography of Tamil Nadu—from majestic Yalis to sacred vahanams',
    'Spreading Tamil culture globally through traditional festival crafts',
    'Ensuring absolute community trust through high-quality materials and deep scriptural respect'
  ];

  craftSteps = [
    { icon: '📐', title: 'Iconographic Design', desc: 'Sourcing authentic layout blueprints detailing traditional shapes like Yalis, elephants, toranams, and divine temple tower figures.' },
    { icon: '🧵', title: 'Velvet Base Prep', desc: 'Selecting rich, heavyweight crimson, navy, and multi-colored velvet fabrics capable of enduring grand outdoor festival processions.' },
    { icon: '🪡', title: 'Hand Tailoring', desc: 'Master artisans meticulously hand-stitch every design border and icon outline using distinctive white thread work.' },
    { icon: '🪔', title: 'Festival Deployment', desc: 'Assembling the full tapestry ensembles onto massive wooden temple cars (Ther) and sacred deity palanquins (Pallakku).' }
  ];

  milestones = [
    { year: '2016', title: 'Thiruvannamalai Deepam', desc: 'Crafted sprawling traditional alankaram hangings for the world-renowned Deepam festival chariot.' },
    { year: '2021', title: 'Madurai Meenakshi Amman Chariot', desc: 'Honored with creating the intricate "Pannangam" decorations for the Chithirai Festival deity palanquin.' },
    { year: 'Recent', title: 'Pandiyan Kondai Crown', desc: 'Recreated a historically inspired royal crown tapestry design for the Thiruvadhauoor Manikkavasagar temple.' },
    { year: 'Global', title: 'International Crossings', desc: 'Exported specialized temple festival decorations to Malaysia, Singapore, USA, and Maha Mariamman Temple festivals in Thailand.' }
  ];
}