import { InjectionToken, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { FeatureConfig } from '@cheveo-learning/shared/types';

export const FEATURE_CONFIG = new InjectionToken<FeatureConfig>(
  'FEATURE_CONFIG'
);

export const featureGuardFn = (route: ActivatedRouteSnapshot) => {
  const config = inject(FEATURE_CONFIG);
  const router = inject(Router);
  /**
   * you can ofcourse route to anywhere you want,
   * show a message or simply not route and
   * only return the boolean value
   */
  return (
    !!config[route.data['featureKey'] as keyof FeatureConfig] ||
    router.navigateByUrl('unauthorized')
  );
};
