import {Injectable} from '@angular/core';

@Injectable()
export class SidebarService {
    public toggled: boolean;

    constructor() {
    }

    toggle() {
        this.toggled = !this.toggled;
    }
}
