import { Component } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: string = "";
  email: string = "";
  password: string = "";
  password_confirmation: string = "";
  // isLoggedIn: boolean = false;
  
  constructor(private http: HttpClient, private router: Router,private userService: UserService){}

  register(){
    const url = 'http://127.0.0.1:8000/api/register'
    const data = { email: this.email, password: this.password, name: this.name, password_confirmation: this.password_confirmation }

    this.http.post(url,data).subscribe((response: any) =>{
      console.log('register success', response)
      localStorage.setItem('token',response.access_token)
      this.userService.isLoggedIn = true;
      this.router.navigate(['/login'])
    },
    (error) => {
      console.error('fail', error)
    }

    );

  }
}
