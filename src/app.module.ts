import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

/* 
AppModule을 살펴보면 가장 위에 일단 Module이라는 데코레이터가 있는데, 
앞으로 NestJS를 사용하면서 정말 많이 보게되는 것이니 익숙해지자!
이 데코레이터는 클래스에 함수 기능을 추가한다.
(클래스 위의 함수이고, 클래스를 위해 움직인다.)
아래의 AppModule은 비어있는 클래스인데, 실제는 Module 데코레이터에 들어있다.

ps. 데코레이터는 아직 자바스크립트의 정식기능은 아니고, 표준화 절차를 진행중이다.
하지만 TypeScript에서 데코레이터를 제공하고 있음

controllers는 Express의 라우터와 같은 존재이다.
url을 가져오고, 함수를 실행한다. 

*/
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
