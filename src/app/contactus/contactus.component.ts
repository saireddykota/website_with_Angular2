import { Component, OnInit } from '@angular/core';
import { Contactus } from './contactus';
import { ContactusService } from './contactus.service';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk';
import { Credentials, S3 }   from 'aws-sdk';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [ContactusService]
})
export class ContactusComponent implements OnInit {
 
 post: Contactus = new Contactus();
 errorMessage = ""; 
  constructor(
  private contactusservice: ContactusService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.contactusservice.createPost(this.post).subscribe(res => {
      console.log(res.id);
      this.post ="Successfully posted the message";
    }, err => {
      console.log(err);
      this.errorMessage = "An error saving the post";
    })
    
  }

}
