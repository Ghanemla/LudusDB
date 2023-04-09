import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private loginComponent: LoginComponent,
    private registerComponent: RegisterComponent,
    private userService: UserService
  ) {}

  // isLoggedIn: boolean = false;

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      this.userService.isLoggedIn = true;
      this.userService.username = user;
    }
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get username(): string {
    return this.userService.username;
  }

  login() {
    this.loginComponent.login();
  }

  logout() {
    this.loginComponent.logout();
    this.userService.isLoggedIn = false;
  }

  register() {
    this.registerComponent.register();
  }
}
