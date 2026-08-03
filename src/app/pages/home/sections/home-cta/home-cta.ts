import { Component } from '@angular/core';
import { CtaBlock } from '../../../../components/cta-block/cta-block';
import { DownloadBadges } from '../../../../components/download-badges/download-badges';

@Component({
  selector: 'app-home-cta',
  imports: [DownloadBadges, CtaBlock],
  templateUrl: './home-cta.html',
  styleUrl: './home-cta.css'
})
export class HomeCta { }
