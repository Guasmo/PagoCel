import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FaqItem } from '../models/faq-item.model';

/**
 * FAQ Service
 * Provides FAQ items for the Help page.
 * TODO: replace static data with CMS headless API call (Strapi / Contentful).
 */
@Injectable({ providedIn: 'root' })
export class FaqService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<FaqItem[]> {
    // Placeholder — returns empty array until CMS is connected
    return of([]);
  }

  getByCategory(category: string): Observable<FaqItem[]> {
    return of([]);
  }
}
