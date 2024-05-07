import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('feature-config')
  getConfig() {
    return this.authService.getConfig();
  }

  @Get('feature-permissions')
  getPermissions() {
    return this.authService.getPermissions();
  }
}
