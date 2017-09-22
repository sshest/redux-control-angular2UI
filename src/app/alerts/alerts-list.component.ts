import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'alerts-list',
    templateUrl: 'alerts-list.component.html',
})
export class AlertListComponent {
    @Input() alerts:any;
    @Output() closeAlert = new EventEmitter();

    constructor(){}
}
