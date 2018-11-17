import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'week-item',
    templateUrl: './week-item.component.html',
    styleUrls: ['./week-item.component.css']
})
export class WeekItemComponent {
    @Input() weekTitle: string;
    @Input() weekDate: string;
    constructor() { }


}
