import { Component } from '@angular/core';
import { DownloadBadges } from '../download-badges/download-badges';
import { CtaBlock } from '../cta-block/cta-block';

@Component({
  selector: 'app-download-section',
  standalone: true,
  templateUrl: './download-section.html',
  styleUrl: './download-section.css',
  imports: [DownloadBadges, CtaBlock]
})
export class DownloadSection { }
