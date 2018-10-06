import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fieldstone Men';
  division1: any[];
  constructor() {

  }

  ngOnInit() {
    this.division1 = [
      {
        "name": "first team",
        "record": "2-1"
      },
      {
        "name": "second team",
        "record": "1-2"
      }
    ];
    console.log(this.division1);
  }

  showData() {
    console.log(this.division1);

  }
}
