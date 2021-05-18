import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from 'src/app/modelSoketArij/chatMessageDto';
import { ChatSocketioService } from './chat-socketio.service';

@Component({
  selector: 'app-chat-socketio',
  templateUrl: './chat-socketio.component.html',
  styleUrls: ['./chat-socketio.component.css']
})
export class ChatSocketioComponent implements OnInit  {

  constructor(public webSocketService: ChatSocketioService ) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }

}
