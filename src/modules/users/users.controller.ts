import { Body, Controller, Post } from '@nestjs/common';
import { GetTokenDto } from './users.dto';
import { UsersService } from './users.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async getToken(@Body() reqBody: GetTokenDto) {
    return this.usersService.getToken(reqBody);
  }
}
