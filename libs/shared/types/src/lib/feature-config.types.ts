export enum FeatureKey {
  FeatureA = 'featureA',
  FeatureB = 'featureB',
}

/**
 * Your config, whatever it might look like
 */
export type FeatureConfig = {
  [K in FeatureKey]: boolean;
};

/**
 * Can look like whatever your needs are!
 */
export type FeaturePermissions = {
  [K in FeatureKey]: {
    show: boolean;
  };
};
