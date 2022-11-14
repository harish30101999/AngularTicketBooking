import { Component } from '@angular/core';

import { User } from '../_models';
import { AccountService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    myImage:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtDW6C65Xb6_W-ot54cP-h1bz8vh3K7QuzQ&usqp=CAU"

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}