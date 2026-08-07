import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DevHero } from './sections/hero/hero';
import { TechNav } from './sections/tech-nav/tech-nav';
import { PublicPortal } from './sections/public-portal/public-portal';
import { DevCta } from './sections/dev-cta/dev-cta';

@Component({
  selector: 'app-developers',
  imports: [DevHero, TechNav, PublicPortal, DevCta],
  templateUrl: './developers.html',
  styleUrl: './developers.css'
})
export class Developers implements AfterViewInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  @ViewChild('brand') private brandRef!: ElementRef<HTMLElement>;
  @ViewChild('scene') private sceneRef!: ElementRef<HTMLElement>;
  @ViewChild('heading') private headingRef!: ElementRef<HTMLElement>;
  @ViewChild('copy') private copyRef!: ElementRef<HTMLElement>;

  private entrance?: gsap.core.Timeline;
  private floatTween?: gsap.core.Tween;
  private pingTween?: gsap.core.Tween;
  private tiltTween?: gsap.core.Tween;

  private readonly handlePointerMove = (event: PointerEvent): void => {
    const scene = this.sceneRef?.nativeElement;
    if (!scene) return;

    const tiltX = (event.clientY / window.innerHeight - 0.5) * -5;
    const tiltY = (event.clientX / window.innerWidth - 0.5) * 5;

    this.tiltTween?.kill();
    this.tiltTween = gsap.to(scene, {
      rotateX: tiltX,
      rotateY: tiltY,
      transformPerspective: 700,
      duration: 0.7,
      ease: 'power2.out',
    });
  };

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Deja todo visible en su estado final, sin animar ni escuchar el mouse.
      return;
    }

    const scene = this.sceneRef.nativeElement;
    const bars = scene.querySelectorAll('.load-bar');
    const ping = scene.querySelector('.gear-ping');

    // Secuencia de entrada: cada elemento aparece con su propio carácter,
    // no un simple fade genérico.
    this.entrance = gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .from(this.brandRef.nativeElement, { opacity: 0, y: -14, duration: 0.6 })
      .from(
        scene,
        { opacity: 0, scale: 0.82, duration: 0.75, ease: 'back.out(1.7)' },
        '-=0.25'
      )
      .from(bars, { opacity: 0, duration: 0.4, stagger: 0.12 }, '-=0.35')
      .from(this.headingRef.nativeElement, { opacity: 0, y: 18, duration: 0.55 }, '-=0.15')
      .from(this.copyRef.nativeElement, { opacity: 0, y: 14, duration: 0.5 }, '-=0.3');

    // Flotación ambiental sutil una vez terminada la entrada.
    this.floatTween = gsap.to(scene, {
      y: -8,
      rotate: 0.5,
      duration: 2.6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: this.entrance.duration(),
    });

    // "Ping" tipo radar detrás del engranaje: refuerza la idea de trabajo activo.
    if (ping) {
      gsap.set(ping, { transformOrigin: '196px 116px', opacity: 0.5, scale: 1 });
      this.pingTween = gsap.to(ping, {
        scale: 1.9,
        opacity: 0,
        duration: 2.2,
        ease: 'power1.out',
        repeat: -1,
        delay: this.entrance.duration() + 0.3,
      });
    }

    window.addEventListener('pointermove', this.handlePointerMove);
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('pointermove', this.handlePointerMove);
    }
    this.entrance?.kill();
    this.floatTween?.kill();
    this.pingTween?.kill();
    this.tiltTween?.kill();
  }
}
