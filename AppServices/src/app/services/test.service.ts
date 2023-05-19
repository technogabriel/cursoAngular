import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }
  getDate(): Date {
    return new Date();
  }
}
