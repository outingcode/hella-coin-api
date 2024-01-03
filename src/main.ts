import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WrappedResponseInterceptor } from './interceptors/wrapped-response-interceptor';
import { ExceptionsFilter } from './filters/exceptions-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new WrappedResponseInterceptor());
  app.useGlobalFilters(new ExceptionsFilter());
  const options = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`SwaggerDoc: ${await app.getUrl()}/api-doc`);
}
bootstrap();
