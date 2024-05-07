import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HideFeatureDirective } from '@cheveo-learning/auth/util';
import { FeatureKey } from '@cheveo-learning/shared/types';

@Component({
  selector: 'cl-home',
  standalone: true,
  imports: [RouterLink, HideFeatureDirective],
  template: `
    <h1>Home</h1>

    <!-- For HideFeature Directive Demonstration -->
    <div
      style="
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
    "
    >
      <button
        *authHideFeature="FeatureKey.FeatureA"
        (click)="onButtonClick('A')"
      >
        Button A
      </button>
      <button
        *authHideFeature="FeatureKey.FeatureB"
        (click)="onButtonClick('B')"
      >
        Button B
      </button>
    </div>

    <!-- For RouteGuard Demonstration -->
    <a style="margin-right: 8px;" [routerLink]="'feature-a'"> Feature A </a>
    <a [routerLink]="'feature-b'"> Feature B </a>
  `,
})
export class HomeComponent {
  protected FeatureKey = FeatureKey;

  onButtonClick(buttonName: string) {
    console.log(`Button Clicked: ${buttonName}`);
  }
}
