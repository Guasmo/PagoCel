import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

/**
 * Content Service
 * Provides editable text content (hero copy, banners, legal texts).
 * TODO: connect to headless CMS (Strapi / Contentful) so Marketing can
 * edit copy without touching code.
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  constructor(private http: HttpClient) {}

  getContent(key: string): Observable<string> {
    // Placeholder — returns empty string until CMS is connected
    return of('');
  }
}
