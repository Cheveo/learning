import { Component } from '@angular/core';
import { TEST_CONSTANT } from '@cheveo-learning/auth/util';

@Component({
  selector: 'auth-unauthorized',
  standalone: true,
  template: `
    <h1 style="background:red;color:white;padding:8px;">Unauthorized</h1>
  `,
})
export class UnauthorizedComponent {
  test = TEST_CONSTANT;
}
