import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* 
전체적인 흐름이 어떻게 흐르는거지?
일단 main.ts의 bootstrap 함수는 임의의 이름으로 정해진 함수이고 어떤 이름으로 바꿔도 상관이 없다.
그리고 이 함수에서 모든것이 처음 출발 되는데,
일단 NestFactory에 AppModule을 가져다가 app을 만들고 이 app은 port 3000번으로 listen을 하게 된다.
*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // pipe는 expressjs의 middleware 같은 것이다.
  // ValidationPipe의 transform 옵션은 api를 통해 보낸 값을 실제 값으로 변환한다.
  // api를 통해 받아온 값은 주소이기 때문에 string 값을 가지고 있다.
  // 그런데 이것을 받아와서 number로 바꿔줘야 하는데, transform 옵션을 사용하게 되면 해당 타입으로
  // 자동으로 변환해주게 된다.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
