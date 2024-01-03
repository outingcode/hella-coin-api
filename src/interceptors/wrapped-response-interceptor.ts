import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WrappedOkResponse } from 'src/_global/wrappers';

@Injectable()
export class WrappedResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const res = ctx.getResponse();
    return next.handle().pipe(
      map((data) => {
        res.status(HttpStatus.OK);
        return new WrappedOkResponse(data);
      }),
    );
  }
}
