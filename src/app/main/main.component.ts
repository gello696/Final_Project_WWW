import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class User {
  name: string;
  lastName: string;
  email: string;
  tag: string;
  constructor(name: string, lastName: string, email: string, tag: string) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.tag = tag;
  }
}