import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    /* Sandbox is client-rendered (authenticated area) */
    path: 'desarrolladores/sandbox',
    renderMode: RenderMode.Client
  },
  {
    /* All other public routes are prerendered */
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
