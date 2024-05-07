import { Injectable } from '@nestjs/common';
import {
  FeatureConfig,
  FeaturePermissions,
} from '@cheveo-learning/shared/types';

@Injectable()
export class AuthService {
  getPermissions(): FeaturePermissions {
    return {
      featureA: {
        show: true,
      },
      featureB: {
        show: false,
      },
    };
  }
  getConfig(): FeatureConfig {
    return { featureA: true, featureB: false };
  }
}
