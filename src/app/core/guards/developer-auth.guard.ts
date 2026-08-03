import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

/**
 * Guard that protects the /desarrolladores/sandbox route.
 * TODO: implement actual token/session check in Phase 2.
 */
export const developerAuthGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  // Placeholder: always redirect to /desarrolladores until auth is implemented
  const isAuthenticated = false; // replace with actual auth check
  if (!isAuthenticated) {
    return router.parseUrl('/desarrolladores');
  }
  return true;
};
