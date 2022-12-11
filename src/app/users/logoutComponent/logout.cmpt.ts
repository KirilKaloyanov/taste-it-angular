import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../users.service";

@Component({
    template: ''
})
export class LogoutComponent implements OnInit {
    constructor(private usersService: UsersService, private router: Router) {}
    ngOnInit(){
        this.usersService.logout();
        this.router.navigate(['/'])
    }
}