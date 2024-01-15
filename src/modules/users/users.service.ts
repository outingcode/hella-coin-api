import { Injectable } from '@nestjs/common';
import { GetTokenDto } from './users.dto';
import { CacheService } from '@services/cache.service';

@Injectable()
export class UsersService {
  constructor(private readonly cacheService: CacheService) {}

  async getToken(reqBody: GetTokenDto) {}
}
