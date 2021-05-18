import { Injectable } from '@angular/core';
import { ChatMessageDto } from 'src/app/modelSoketArij/chatMessageDto';

@Injectable({
  providedIn: 'root'
})
export class ChatSocketioService {
  webSocket!: WebSocket;
  chatMessages: ChatMessageDto[] = [];
  

  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8081/SpringMVC/servlet/chat');

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(chatMessageDto: ChatMessageDto){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}