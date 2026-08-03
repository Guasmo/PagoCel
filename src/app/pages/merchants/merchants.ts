import { Component } from '@angular/core';
import { MerchantsHero } from './sections/hero/hero';
import { StaticQr } from './sections/static-qr/static-qr';
import { DynamicQr } from './sections/dynamic-qr/dynamic-qr';
import { IdealFor } from './sections/ideal-for/ideal-for';
import { FutureManagement } from './sections/future-management/future-management';

@Component({
  selector: 'app-merchants',
  imports: [MerchantsHero, StaticQr, DynamicQr, IdealFor, FutureManagement],
  templateUrl: './merchants.html',
  styleUrl: './merchants.css'
})
export class Merchants {}
