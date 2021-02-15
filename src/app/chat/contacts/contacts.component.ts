import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/login/login.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() userInContact: string;
  @Input() contactList: Array<Contact>;
  @Output() selectedContactUsername = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log(this.contactList)
  }

  selectContact(value: string) {
    this.selectedContactUsername.emit(value);
  }

}
