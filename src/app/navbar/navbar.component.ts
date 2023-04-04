import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import {  UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private loginComponent: LoginComponent, private registerComponent: RegisterComponent, private userService: UserService){}


  // isLoggedIn: boolean = false;

  ngOnInit(): void {
  }

  get isLoggedIn(): boolean{
    return this.userService.isLoggedIn;
  }

  login(){
    this.loginComponent.login();
    // this.isLoggedIn = true;
  }

  logout(){
    this.loginComponent.logout();
    this.userService.isLoggedIn = false
    // this.isLoggedIn = false;
  }

  register(){
    this.registerComponent.register();
    // this.isLoggedIn = false
  }

}
