import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { User } from '../shared/models/user.model';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    public user: User;
    public password: string;

    constructor() {
        this.user = new User();
    }

    ngOnInit() {}
}
