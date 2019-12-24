import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactList: any[];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  

  // ideal place for Ajax calls
  this.contactService.getContacts()
  .subscribe((res:any)=>{
    console.log(res);
    this.contactList = res;
    
  });
}

}
