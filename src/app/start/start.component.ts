import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  constructor(
    private loginComponent: LoginComponent,
    private registerComponent: RegisterComponent,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.userService.isLoggedIn = true;
      this.router.navigate(['/index']);
    }
  }
}
