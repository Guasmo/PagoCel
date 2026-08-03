import { Component } from '@angular/core';
import { SecurityHero } from './sections/hero/hero';
import { InstitutionalMessage } from './sections/institutional-message/institutional-message';
import { Pillars } from './sections/pillars/pillars';
import { BestPractices } from './sections/best-practices/best-practices';
import { Disclaimer } from './sections/disclaimer/disclaimer';

@Component({
  selector: 'app-security',
  imports: [SecurityHero, InstitutionalMessage, Pillars, BestPractices, Disclaimer],
  templateUrl: './security.html',
  styleUrl: './security.css'
})
export class Security {}
