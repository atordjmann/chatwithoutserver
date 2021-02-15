import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../login/login.component';

export interface Message {
  writeBy: string;
  receivedBy: string;
  content: string;
  date: Date;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() myUsername: string;
  @Input() contactList: Array<Contact> 
  public messagesList: Array<Message> = []
  public messagesToDisplay: Array<Message> = []
  public userInContact: string;
  public bc = new BroadcastChannel("helloChat");

  constructor() {}

  ngOnInit() {
    this.bc.addEventListener("message", e => { 
      this.messagesList.push(e.data); 
      if(e.data.receivedBy == this.myUsername) {
        this.messagesToDisplay.push(e.data);
      }       
    })
  }

  selectContact(username: string) {
    this.userInContact = username;
    this.contactList.find(x => x.username === username).selected = true;
    console.log(this.contactList)
    this.messagesToDisplay = this.messagesList.filter(x => (x.writeBy == this.myUsername && x.receivedBy == username) 
    || (x.receivedBy == this.myUsername && x.writeBy == username))
    .sort((a,b) => a.date.getTime() - b.date.getTime());
  }

  addMessage(messageContent: string){
    let message: Message = {writeBy: this.myUsername, receivedBy:this.userInContact, content: messageContent, date: new Date()}
    this.messagesList.push(message);   
    this.messagesToDisplay.push(message);
    this.bc.postMessage(message);
  }

}
