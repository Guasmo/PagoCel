export interface Lead {
  name: string;
  institution: string;
  position: string;
  email: string;
  phone: string;
  institutionType: string;
  approximateUsers: string;
  message: string;
  /** UTM / campaign tracking */
  origin: string;
  campaign: string;
  /** Privacy consent checkbox */
  privacyConsent: boolean;
}
