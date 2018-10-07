import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'display-division',
  templateUrl: './display-division.component.html',
  styleUrls: ['./display-division.component.css']
})
export class DisplayDivisionComponent implements OnInit {
  @Input() division: any;
  constructor() { }

  ngOnInit() {
  }

}
