import { Component } from '@angular/core';
import { DownloadSection } from '../../../../components/download-section/download-section';

@Component({
  selector: 'app-home-cta',
  imports: [DownloadSection],
  templateUrl: './home-cta.html',
  styleUrl: './home-cta.css'
})
export class HomeCta { }
