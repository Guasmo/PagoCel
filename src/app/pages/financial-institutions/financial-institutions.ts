import { Component } from '@angular/core';
import { FinancialHero } from './sections/hero/hero';
import { Audiences } from './sections/audiences/audiences';
import { Proposal } from './sections/proposal/proposal';
import { Architecture } from './sections/architecture/architecture';
import { Capabilities } from './sections/capabilities/capabilities';
import { OwnAppIntegration } from './sections/own-app-integration/own-app-integration';

@Component({
  selector: 'app-financial-institutions',
  imports: [FinancialHero, Audiences, Proposal, Architecture, Capabilities, OwnAppIntegration],
  templateUrl: './financial-institutions.html',
  styleUrl: './financial-institutions.css'
})
export class FinancialInstitutions {}
