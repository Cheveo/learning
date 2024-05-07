import { featureGuardFn } from '@cheveo-learning/auth/util';
import { FeatureKey } from '@cheveo-learning/shared/types';

export const ROUTES = [
  {
    path: '',
    loadComponent: () =>
      import('@cheveo-learning/home/feature').then((m) => m.HomeComponent),
  },
  {
    path: 'feature-a',
    loadComponent: () =>
      import('@cheveo-learning/feature-a/feature').then(
        (m) => m.FeatureAComponent
      ),
    data: {
      featureKey: FeatureKey.FeatureA,
    },
    canActivate: [featureGuardFn],
  },
  {
    path: 'feature-b',
    loadComponent: () =>
      import('@cheveo-learning/feature-b/feature').then(
        (m) => m.FeatureBComponent
      ),
    data: {
      featureKey: FeatureKey.FeatureB,
    },
    canActivate: [featureGuardFn],
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('@cheveo-learning/auth/feature').then(
        (m) => m.UnauthorizedComponent
      ),
  },
];
