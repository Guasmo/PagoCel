import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type DeviceType = 'ios' | 'android' | 'desktop';

/**
 * Device Detection Service
 * Detects whether the user is on iOS, Android, or Desktop.
 * Used by the Download page QR component to highlight the relevant store button.
 */
@Injectable({ providedIn: 'root' })
export class DeviceDetectionService {
  private platformId = inject(PLATFORM_ID);

  getDeviceType(): DeviceType {
    if (!isPlatformBrowser(this.platformId)) {
      return 'desktop'; // SSR fallback
    }
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
    if (/Android/.test(ua)) return 'android';
    return 'desktop';
  }

  isIos(): boolean { return this.getDeviceType() === 'ios'; }
  isAndroid(): boolean { return this.getDeviceType() === 'android'; }
  isDesktop(): boolean { return this.getDeviceType() === 'desktop'; }
}
