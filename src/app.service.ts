import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is NestJS world';
  }

  getHi(): string {
    return 'Hi!™';
  }
}
