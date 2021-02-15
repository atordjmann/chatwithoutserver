import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Message } from '../chat.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @Input() messages: Array<Message>;
  @Input() myUsername: string;
  @Output() newMessage = new EventEmitter<string>();
  @ViewChild('inputMessage') inputMessage: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public onEnter(value: string){    
    this.newMessage.emit(value);   
    this.inputMessage.nativeElement.value = ""; 
  }

}
