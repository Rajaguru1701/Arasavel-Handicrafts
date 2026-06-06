import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- Page Header -->
    <div class="bg-crimson py-16 text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-10"
           style="background-image: repeating-linear-gradient(45deg,#D4AF37 0,#D4AF37 1px,transparent 0,transparent 30px); background-size:30px 30px;"></div>
      <div class="relative">
        <p class="text-mustard font-serif text-xs tracking-[0.4em] uppercase mb-3">Get In Touch</p>
        <h1 class="font-serif text-4xl md:text-5xl text-gold">Contact Us</h1>
        <hr class="gold-divider w-32 mx-auto mt-4">
      </div>
    </div>

    <section class="py-20 bg-[#fdf8f0]">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <!-- LEFT: Info -->
        <div>
          <p class="text-crimson font-serif text-xs tracking-[0.4em] uppercase mb-3">Our Details</p>
          <h2 class="font-serif text-3xl text-navy mb-5 leading-snug">
            Speak to Our<br>Artisan Team
          </h2>
          <hr class="gold-divider w-24 mb-8" style="margin-left:0;">

          <div class="space-y-6 mb-10">
            <div *ngFor="let info of contactInfo"
                 class="flex items-start gap-4 p-4 bg-white temple-border rounded-sm">
              <span class="text-2xl mt-0.5">{{ info.icon }}</span>
              <div>
                <p class="font-serif text-crimson text-xs tracking-widest uppercase mb-1">{{ info.label }}</p>
                <p class="font-body text-gray-700 text-sm leading-relaxed" [innerHTML]="info.value"></p>
              </div>
            </div>
          </div>

          <!-- Festival Season Notice -->
          <div class="bg-navy p-6 temple-border rounded-sm">
            <h3 class="font-serif text-mustard text-sm tracking-widest uppercase mb-3">🗓️ Festival Season Availability</h3>
            <hr class="gold-divider mb-4">
            <ul class="space-y-2">
              <li *ngFor="let f of festivals" class="flex gap-3 font-body text-sm text-gold/80">
                <span class="text-mustard font-serif">✦</span>
                <span><strong class="text-gold">{{ f.name }}</strong> — {{ f.note }}</span>
              </li>
            </ul>
            <p class="text-gold/50 font-body text-xs mt-4">
              * For festival season orders, please place enquiries at least 4–6 weeks in advance.
            </p>
          </div>
        </div>

        <!-- RIGHT: Contact Form -->
        <div>
          <p class="text-crimson font-serif text-xs tracking-[0.4em] uppercase mb-3">Send a Message</p>
          <h2 class="font-serif text-3xl text-navy mb-5">Enquiry Form</h2>
          <hr class="gold-divider w-24 mb-8" style="margin-left:0;">

          <!-- Success Message -->
          <div *ngIf="submitted"
               class="bg-green-50 border-2 border-green-400 p-6 mb-6 rounded-sm text-center">
            <div class="text-3xl mb-2">🙏</div>
            <h3 class="font-serif text-green-800 text-lg mb-1">Vanakkam! Message Received.</h3>
            <p class="font-body text-green-700 text-sm">We will reach out to you soon. Nandri!</p>
          </div>

          <form *ngIf="!submitted" [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-5">

            <!-- Name -->
            <div>
              <label class="font-serif text-navy text-xs tracking-widest uppercase block mb-1">Full Name *</label>
              <input formControlName="name"
                     placeholder="Your name"
                     class="w-full border-2 border-gold/40 focus:border-crimson outline-none px-4 py-3 font-body text-sm bg-white rounded-sm transition-colors">
              <p *ngIf="f['name'].invalid && f['name'].touched" class="text-crimson font-body text-xs mt-1">Please enter your name.</p>
            </div>

            <!-- Email -->
            <div>
              <label class="font-serif text-navy text-xs tracking-widest uppercase block mb-1">Email Address *</label>
              <input formControlName="email" type="email"
                     placeholder="you@email.com"
                     class="w-full border-2 border-gold/40 focus:border-crimson outline-none px-4 py-3 font-body text-sm bg-white rounded-sm transition-colors">
              <p *ngIf="f['email'].invalid && f['email'].touched" class="text-crimson font-body text-xs mt-1">Please enter a valid email.</p>
            </div>

            <!-- Phone -->
            <div>
              <label class="font-serif text-navy text-xs tracking-widest uppercase block mb-1">Phone / WhatsApp</label>
              <input formControlName="phone"
                     placeholder="+91 XXXXX XXXXX"
                     class="w-full border-2 border-gold/40 focus:border-crimson outline-none px-4 py-3 font-body text-sm bg-white rounded-sm transition-colors">
            </div>

            <!-- Item of Interest -->
            <div>
              <label class="font-serif text-navy text-xs tracking-widest uppercase block mb-1">Item / Category of Interest</label>
              <select formControlName="interest"
                      class="w-full border-2 border-gold/40 focus:border-crimson outline-none px-4 py-3 font-body text-sm bg-white rounded-sm transition-colors">
                <option value="">— Select a category —</option>
                <option value="Procession Items">Procession Items (Kovil Kudai, etc.)</option>
                <option value="Temple Flags">Temple Flags (Kovil Kodi)</option>
                <option value="Deity Decoration">Deity Alankaram & Decoration</option>
                <option value="Custom Order">Custom / Bulk Order</option>
                <option value="Other">Other Enquiry</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label class="font-serif text-navy text-xs tracking-widest uppercase block mb-1">Message *</label>
              <textarea formControlName="message"
                        placeholder="Tell us about your requirements — deity, size, festival occasion, quantity..."
                        rows="5"
                        class="w-full border-2 border-gold/40 focus:border-crimson outline-none px-4 py-3 font-body text-sm bg-white rounded-sm transition-colors resize-none"></textarea>
              <p *ngIf="f['message'].invalid && f['message'].touched" class="text-crimson font-body text-xs mt-1">Please enter your message.</p>
            </div>

            <button type="submit"
                    [disabled]="contactForm.invalid"
                    class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
              🪔 Send Enquiry
            </button>

            <p class="text-center text-gray-400 font-body text-xs">
              We typically respond within 24 hours. For urgent enquiries, WhatsApp us directly.
            </p>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  contactInfo = [
    { icon: '📍', label: 'Address',        value: '11B, Mina Noordeen Pallivasal Street, Southveli Street,<br>Madurai – 625 001, Tamil Nadu, India' },
    { icon: '📞', label: 'Phone / WhatsApp', value: '+91 9488653928' },
    { icon: '📧', label: 'Email',           value: 'arasavelaravinth90@gmail.com' },
    { icon: '🕐', label: 'Working Hours',   value: 'Mon – Sun: 9:00 AM – 7:00 PM IST<br>Sunday: By Appointment Only' },
  ];

  festivals = [
    { name: 'Aadi Thiruvizha',      note: 'Orders open from Panguni (3 months prior)' },
    { name: 'Karthigai Deepam',     note: 'Orders open from Purattasi (2 months prior)' },
    { name: 'Brahmotsavam',         note: 'Custom orders accepted year-round' },
    { name: 'Panguni Uthiram',      note: 'Orders open from Thai (2 months prior)' },
    { name: 'Temple Consecrations', note: 'Special project quotes on request' },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name:     ['', Validators.required],
      email:    ['', [Validators.required, Validators.email]],
      phone:    [''],
      interest: [''],
      message:  ['', Validators.required],
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // TODO: connect to your backend / EmailJS / Formspree here
      this.submitted = true;
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}