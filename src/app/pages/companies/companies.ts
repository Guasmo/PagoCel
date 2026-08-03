import { Component } from '@angular/core';
import { CompaniesHero } from './sections/hero/hero';
import { Benefits } from './sections/benefits/benefits';
import { UseCases } from './sections/use-cases/use-cases';
import { Referral } from './sections/referral/referral';

@Component({
  selector: 'app-companies',
  imports: [CompaniesHero, Benefits, UseCases, Referral],
  templateUrl: './companies.html',
  styleUrl: './companies.css'
})
export class Companies {}
