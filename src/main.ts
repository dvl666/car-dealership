import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/**
 * El main es el punto de entrada de la aplicacion.
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Para usar el pipe de validacion en toda la aplicacion es necesario tener el siguiente codigo y tener instalado class-validator y class-transformer
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Elimina los campos que no esten en el dto
      forbidNonWhitelisted: true, //Manda un error si hay campos que no esten en el dto
      //transform: true //Transforma los datos a los tipos que se especifican en el dto
    })
  );
  //Puerto de la aplicacion
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
