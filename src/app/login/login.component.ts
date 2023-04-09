import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  login() {
    const url = this.userService.configUrl + 'login';
    const data = { email: this.email, password: this.password };

    this.http.post(url, data).subscribe(
      (response: any) => {
        console.log('login success', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', response.user.name);
        this.userService.isLoggedIn = true;
        this.userService.username = response.user.name;
        this.router.navigate(['/index']);
      },
      (error) => {
        console.error('fail', error);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.userService.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
