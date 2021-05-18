import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  reply(message: any) {
    throw new Error('Method not implemented.');
  }
  loadMessages(): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
