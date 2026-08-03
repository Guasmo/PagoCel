import { Component } from '@angular/core';
import { IndividualsHero } from './sections/hero/hero';
import { SendMoney } from './sections/send-money/send-money';
import { ReceiveMoney } from './sections/receive-money/receive-money';
import { PayQr } from './sections/pay-qr/pay-qr';
import { AllAccounts } from './sections/all-accounts/all-accounts';
import { DownloadCta } from './sections/download-cta/download-cta';

@Component({
  selector: 'app-individuals',
  imports: [IndividualsHero, SendMoney, ReceiveMoney, PayQr, AllAccounts, DownloadCta],
  templateUrl: './individuals.html',
  styleUrl: './individuals.css'
})
export class Individuals {}
