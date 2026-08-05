import { Component } from '@angular/core';
import { Definition } from './sections/definition/definition';
import { MobileIdentifier } from './sections/mobile-identifier/mobile-identifier';
import { NotABankReplacement } from './sections/not-a-bank-replacement/not-a-bank-replacement';
import { WhoItConnects } from './sections/who-it-connects/who-it-connects';
import { DownloadSection } from '../../components/download-section/download-section';

@Component({
  selector: 'app-what-is-pagocel',
  imports: [Definition, MobileIdentifier, NotABankReplacement, WhoItConnects, DownloadSection],
  templateUrl: './what-is-pagocel.html',
  styleUrl: './what-is-pagocel.css'
})
export class WhatIsPagocel {}
