import {
  Directive,
  TemplateRef,
  effect,
  input,
  ViewContainerRef,
  Inject,
  InjectionToken,
  computed,
} from '@angular/core';
import { FeatureKey, FeaturePermissions } from '@cheveo-learning/shared/types';

export const FEATURE_PERMISSIONS = new InjectionToken<FeaturePermissions>(
  'FEATURE_PERMISSIONS'
);

@Directive({
  selector: '[authHideFeature]',
  standalone: true,
})
export class HideFeatureDirective {
  public featureKey = input<FeatureKey | null>(null, {
    alias: 'authHideFeature',
  });
  private readonly shouldShow = computed(() => {
    const fk = this.featureKey();

    return fk ? this.permissions[fk]?.show : false;
  });

  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainer: ViewContainerRef,
    // Change the permissions in the service to see the changes
    @Inject(FEATURE_PERMISSIONS)
    private readonly permissions: FeaturePermissions
  ) {
    effect(() =>
      this.shouldShow()
        ? this.viewContainer.createEmbeddedView(this.templateRef)
        : this.viewContainer.clear()
    );
  }
}
