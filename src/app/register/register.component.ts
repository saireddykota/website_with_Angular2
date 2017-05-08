import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
errorMessage="";
successMessage="";
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
       
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    
                    
                      this.successMessage="New Admin user created successfully";
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                    this.errorMessage="Failed to register. Please try again";
                });
    }


  
}