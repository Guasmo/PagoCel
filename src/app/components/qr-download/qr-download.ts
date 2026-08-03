import { Component } from '@angular/core';
import { DeviceDetectionService } from '../../core/services/device-detection.service';

@Component({
  selector: 'app-qr-download',
  templateUrl: './qr-download.html',
  styleUrl: './qr-download.css'
})
export class QrDownload {
  constructor(public deviceDetection: DeviceDetectionService) {}
}
