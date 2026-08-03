import { Component } from '@angular/core';
import { AboutHero } from './sections/hero/hero';
import { Description } from './sections/description/description';
import { AboutPillars } from './sections/pillars/pillars';
import { Clients } from './sections/clients/clients';

@Component({
  selector: 'app-about',
  imports: [AboutHero, Description, AboutPillars, Clients],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {}
