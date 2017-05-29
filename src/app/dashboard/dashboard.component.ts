import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public currentUser: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser().subscribe(
      response => {
        this.currentUser = response;
        // localStorage.setItem('token', JSON.stringify(response));
        // this.router.navigate(['/admin/dashboard']);
      },
      error => {
        // this.toastr.error(error);
        console.log(error);
      });
  }

  logout() {
    this.authService.logout();
  }

}
