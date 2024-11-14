import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * El main es el punto de entrada de la aplicacion.
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Puerto de la aplicacion
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
