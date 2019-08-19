import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: any
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.user = {}
  }

  registerButtonClicked(){
    this.authService.register(this.user)
      .subscribe((data: any) => {
        console.log(data)
      })
  }

}
