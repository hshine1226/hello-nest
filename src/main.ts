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
  await app.listen(3000);
}
bootstrap();
