import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshJwtGuard } from './guard/refresh-jwt.guard';


@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {

    return this.authService.register(registerDto)

  }

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() loginDto: LoginDto) {

    return this.authService.login(loginDto)

  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  signRefreshToken(@Request() req: any) {

    return this.authService.signRefreshToken(req.user)

  }

}
