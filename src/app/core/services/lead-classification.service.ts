import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Lead Classification Service
 * Captures UTM parameters and campaign data before form submission.
 * Used by the Contact page to register lead origin for future CRM integration.
 */
@Injectable({ providedIn: 'root' })
export class LeadClassificationService {
  private origin = '';
  private campaign = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.origin = params['utm_source'] || params['origin'] || '';
      this.campaign = params['utm_campaign'] || params['campaign'] || '';
    });
  }

  getOrigin(): string {
    return this.origin;
  }

  getCampaign(): string {
    return this.campaign;
  }

  getLeadMetadata(): { origin: string; campaign: string } {
    return { origin: this.origin, campaign: this.campaign };
  }
}
