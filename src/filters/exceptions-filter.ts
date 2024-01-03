import { ExceptionFilter, Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { WrappedErrorResponse } from 'src/_global/wrappers';
const logger = new Logger('GlobalExceptionFilter');
@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const msg = exception.message;
    logger.error(msg, exception.stack);

    const errorResponse = new WrappedErrorResponse({ msg });
    response.status(200);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
