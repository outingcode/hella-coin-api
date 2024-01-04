import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApplicationError } from 'src/_global/errors';

export class NeedOpenidGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { session, headers } = request;

    if (!session) {
      throw new ApplicationError({ msg: '需要openid' });
    }

    return true;
  }
}
