import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export interface Contact {
  username: string;
  selected: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('inputUsername') inputUsername: ElementRef;
  public isLogged = false;
  public nameAlreadyExists = false;
  public nameEmpty = false;
  public bc = new BroadcastChannel("availableUsers");
  public contactList: Array<Contact> = [];
  public myUsername:string;

  constructor() { }

  ngOnInit() {
    this.bc.addEventListener("message", e => { 
      let newContact = {username:e.data, selected:false}
      this.contactList.push(newContact); 
    })
  }

  public login(){
    let username = this.inputUsername.nativeElement.value;
    
    if(this.contactList.map(x => x.username).indexOf(username) === -1){
      this.isLogged = true;
      this.myUsername = this.inputUsername.nativeElement.value
      this.bc.postMessage(this.inputUsername.nativeElement.value);
    } else if(username === ""){
      this.nameEmpty = true;
    }
      else {
      this.nameAlreadyExists = true;
    }
    
  }

}
