import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: '[app-dropdown]',
    templateUrl: './dropdown.component.html',
    host: {
        '(document:click)': 'onClick($event)',
    },
})
export class DropdownComponent implements OnInit {

    public dropped = false;

    constructor(private elRef: ElementRef) {
    }

    ngOnInit() {
    }

    onClick(event: Event) {
        if (!this.elRef.nativeElement.contains(event.target)) {
            this.dropped = false;
        } else {
            this.dropped = !this.dropped;
        }
    }

}
