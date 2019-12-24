import { Component, OnInit } from '@angular/core';
// import { getDiffieHellman } from 'crypto';
import { ActivatedRoute } from '@angular/router';
// import { ContactsComponent } from '../contacts.component';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id: any;
  contact: any;
  constructor(private router: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");

    this.contactService.getContactDetail(this.id)
      .subscribe((res: any) => {
      console.log(res);
      this.contact = res;

    });

}

}
