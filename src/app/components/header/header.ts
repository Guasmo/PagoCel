import { Component, signal, inject, ElementRef, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from './components/logo/logo';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Logo],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: {
    '(window:scroll)': 'onWindowScroll()',
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class Header {
  isScrolled = signal(false);
  menuOpen = signal(false);
  moreOpen = signal(false);

  private elRef = inject(ElementRef);

  constructor() {
    this.onWindowScroll();

    effect(() => {
      if (typeof document === 'undefined') return;
      document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleMore(event: Event) {
    event.stopPropagation();
    this.moreOpen.update(v => !v);
  }

  closeMore() {
    this.moreOpen.set(false);
  }

  onDocumentClick(event: Event) {
    if (!this.moreOpen()) return;
    const target = event.target as HTMLElement;
    const clickedInsideMore = this.elRef.nativeElement.querySelector('.nav-more')?.contains(target);
    if (!clickedInsideMore) {
      this.closeMore();
    }
  }

  onWindowScroll() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    this.isScrolled.set(window.scrollY > 10);
  }
}
