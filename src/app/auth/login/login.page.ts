import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.user = {}
  }

  loginButtonClicked(f: NgForm){
    this.user = {
      email: f.value.email,
      password: f.value.password
    }
    this.authService.login(this.user)
      .subscribe((res: any) => {
        if(res && res.token){
          localStorage.setItem('token', res.token)
          this.router.navigate(['client', 'category'])
        }
      }, error => console.log(error))
  }

}
