import { Component } from '@angular/core';
import { IndividualsHero } from './sections/hero/hero';
import { SendMoney } from './sections/send-money/send-money';
import { AllAccounts } from './sections/all-accounts/all-accounts';
import { DownloadCta } from './sections/download-cta/download-cta';

@Component({
  selector: 'app-individuals',
  imports: [IndividualsHero, SendMoney, AllAccounts, DownloadCta],
  templateUrl: './individuals.html',
  styleUrl: './individuals.css'
})
export class Individuals {}
