import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {
  private LOGO = require('./logo.png');
  constructor() { }

  ngOnInit() {
  }

}
