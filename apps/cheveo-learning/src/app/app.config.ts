import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ROUTES } from '@cheveo-learning/app-config';
import {
  FEATURE_CONFIG,
  FEATURE_PERMISSIONS,
  FeatureService,
} from '@cheveo-learning/auth/util';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: (featureService: FeatureService) => () =>
        featureService.init(),
      deps: [FeatureService],
      multi: true,
    },
    {
      provide: FEATURE_CONFIG,
      useFactory: (featureService: FeatureService) => featureService.config,
      deps: [FeatureService],
    },
    {
      provide: FEATURE_PERMISSIONS,
      useFactory: (featureService: FeatureService) =>
        featureService.permissions,
      deps: [FeatureService],
    },
  ],
};
