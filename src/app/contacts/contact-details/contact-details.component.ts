import { Component, OnInit } from '@angular/core';
// import { getDiffieHellman } from 'crypto';
import { ActivatedRoute } from '@angular/router';
// import { ContactsComponent } from '../contacts.component';
import { ContactService } from '../contact.service';
import { MatDialog } from '@angular/material';
import { EditContactDialogComponent } from './edit-contact-dialog/edit-contact-dialog.component';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id: any;
  contact: any;
  isSaved: boolean;
  constructor(private router: ActivatedRoute, private contactService: ContactService, public dialog: MatDialog) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");

    this.contactService.getContactByID(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.contact = res;

      });

  }
  openEditDialog() {
    const dialogRef = this.dialog.open(EditContactDialogComponent,
      {
        width: '400px',
        data: JSON.parse(JSON.stringify(this.contact))
      });

    dialogRef.afterClosed().subscribe(async (updatedContactData: any) => {
      alert('check');
      console.log(updatedContactData);

      if (updatedContactData != 'nope') {
        const status: any = await this.contactService.updateContact(updatedContactData)
        if (status && status.id) {
          this.contact = status;
          console.log('status');
          this.isSaved = true;
        } else {
          console.log('status');
        }

        console.log('The dialog was closed');

      } else {

      }

    });
  }


}
