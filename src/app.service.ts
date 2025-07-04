import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {

  getApplicationStatus(): HttpStatus {
    return HttpStatus.OK
  }
}
