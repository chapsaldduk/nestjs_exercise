import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3600;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`running: ${port}`);
}
bootstrap();
