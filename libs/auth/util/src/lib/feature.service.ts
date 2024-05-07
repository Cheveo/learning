import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  FeatureConfig,
  FeatureKey,
  FeaturePermissions,
} from '@cheveo-learning/shared/types';
import { Observable, combineLatest, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeatureService {
  private readonly API_URL = 'http://localhost:3000/api';
  private readonly http = inject(HttpClient);

  /**
   * Is hardcoded here and provided on the main.ts
   * In a real world application this should
   * be coming from some backend
   * or Env Variable
   */
  public config: FeatureConfig = {
    [FeatureKey.FeatureA]: true,
    [FeatureKey.FeatureB]: false,
  };
  public permissions: FeaturePermissions = {
    [FeatureKey.FeatureA]: {
      show: true,
    },
    [FeatureKey.FeatureB]: {
      show: true,
    },
  };

  /**
   * It is actually debateable whether u need both observables to finish
   * or if it makes sense to have 2 api calls to fetch an app config and (user)-permissions
   * which will for sure depend on authentication and some sort of user management.
   * This case is vastly over simplified to showcase how the code might look like.
   */
  init(): Observable<[FeatureConfig, FeaturePermissions]> {
    return combineLatest([this.getFeatureConfig(), this.getPermissions()]).pipe(
      tap(([config, permissions]) => {
        this.config = config;
        this.permissions = permissions;
        console.log('Feature', this.config, this.permissions);
      })
    );
  }

  private getFeatureConfig(): Observable<FeatureConfig> {
    return this.http.get<FeatureConfig>(`${this.API_URL}/auth/feature-config`);
  }

  private getPermissions(): Observable<FeaturePermissions> {
    return this.http.get<FeaturePermissions>(
      `${this.API_URL}/auth/feature-permissions`
    );
  }
}
