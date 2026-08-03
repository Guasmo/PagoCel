import { Component } from '@angular/core';
import { Definition } from './sections/definition/definition';
import { MobileIdentifier } from './sections/mobile-identifier/mobile-identifier';
import { NotABankReplacement } from './sections/not-a-bank-replacement/not-a-bank-replacement';
import { WhoItConnects } from './sections/who-it-connects/who-it-connects';

@Component({
  selector: 'app-what-is-pagocel',
  imports: [Definition, MobileIdentifier, NotABankReplacement, WhoItConnects],
  templateUrl: './what-is-pagocel.html',
  styleUrl: './what-is-pagocel.css'
})
export class WhatIsPagocel {}
