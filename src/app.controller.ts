import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

/*
컨트롤러 내부에 보면 Get 데코레이터가 있다.
이 데코레이터는 Express의 get 라우터와 같은 역할을 한다.

(ExpressJS에서는 app.get() 이라는 함수를 사용함.)

+ 데코레이터는 함수나 클래스와 붙어있어야 한다.(Enter로 띄워서 작성하면 안됌!)

nestJS의 컨트롤러 덕분에 우리는 라우터를 세팅하지 않아도 된다.

아래의 getHello 함수에서 보면 return에 appService를 호출하고 있는데,
왜 서비스가 필요할까?
그냥 return 해버릴 수도 있는데, 서비스가 필요한 이유를 알아보자.

그 이유는 바로 구조와 아키텍쳐를 위해서이다.
nestJS는 컨트롤러와 서비스를 구분짓게 하려고 나왔다. 
컨트롤러는 단지 url을 가져오는 역할과 함수를 실행하는 역할을 하고,
나머지 비즈니스 로직은 서비스에서 처리하게 되는 것이다. 

서비스는 실제적으로 함수를 가지고 있는 부분이다. 

nestJS에서 권장하는 서비스명을 정하는 방법은 컨트롤러의 Get 데코레이터와 똑같은 이름으로 정하는 것이다.
하지만 이름이 달라도 상관은 없다.
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 아래의 Get Decorator는 hello라는 url로 요청을 받았을 때, "Hello Everybody!"라는 문자열의 값으로 반환해주는 데코레이터이다.
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }

  @Post('/post')
  sayPost(): string {
    return 'This is Post decorator';
  }
}
