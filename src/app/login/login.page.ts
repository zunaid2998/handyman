import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPage } from '../register/register.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickLogin() {
    this.router.navigate(['client'])
  }

}
