import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  if (process.env.NODE_ENV == 'development') await app.listen(3000);
  else await app.listen(80);
}
bootstrap();
