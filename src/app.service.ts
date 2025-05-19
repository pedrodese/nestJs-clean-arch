import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getApplicationStatus(): string {
    return 'Application Up!'
  }

  getHello(): string {
    return 'Hello World!';
  }
}
