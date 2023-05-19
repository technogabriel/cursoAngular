import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestStatusService {
  sendMessage: EventEmitter<string> = new EventEmitter<string>();

}
