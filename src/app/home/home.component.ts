import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string  = '33';
  constructor() {}

  ngOnInit() {}

  updateTitle(value) {
    console.log(`updateTitle: ${value}`);
    this.title = value;
  }
}