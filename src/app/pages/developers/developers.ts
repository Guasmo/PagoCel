import { Component } from '@angular/core';
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
export class Developers {}
