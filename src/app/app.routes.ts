import { Routes } from '@angular/router';
import { developerAuthGuard } from './core/guards/developer-auth.guard';

export const routes: Routes = [
  /* Phase 1 — Launch */
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'que-es-pagocel', loadComponent: () => import('./pages/what-is-pagocel/what-is-pagocel').then(m => m.WhatIsPagocel) },
  { path: 'personas', loadComponent: () => import('./pages/individuals/individuals').then(m => m.Individuals) },
  { path: 'empresas', loadComponent: () => import('./pages/companies/companies').then(m => m.Companies) },
  { path: 'instituciones-financieras', loadComponent: () => import('./pages/financial-institutions/financial-institutions').then(m => m.FinancialInstitutions) },
  { path: 'comercios', loadComponent: () => import('./pages/merchants/merchants').then(m => m.Merchants) },
  { path: 'como-funciona', loadComponent: () => import('./pages/how-it-works/how-it-works').then(m => m.HowItWorks) },
  { path: 'seguridad', loadComponent: () => import('./pages/security/security').then(m => m.Security) },
  { path: 'nosotros', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'ayuda', loadComponent: () => import('./pages/help/help').then(m => m.Help) },
  { path: 'contacto', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: 'descargar', loadComponent: () => import('./pages/download/download').then(m => m.Download) },
  { path: 'privacidad', loadComponent: () => import('./pages/privacy/privacy').then(m => m.Privacy) },
  { path: 'terminos', loadComponent: () => import('./pages/terms/terms').then(m => m.Terms) },
  { path: 'seguridad-de-la-informacion', loadComponent: () => import('./pages/information-security/information-security').then(m => m.InformationSecurity) },

  /* Phase 2 — Integrations */
  { path: 'desarrolladores', loadComponent: () => import('./pages/developers/developers').then(m => m.Developers) },
  { path: 'desarrolladores/sandbox', loadComponent: () => import('./pages/developers/sandbox/sandbox').then(m => m.DevSandbox), canActivate: [developerAuthGuard] },

  /* Wildcard redirect */
  { path: '**', redirectTo: '' }
];
