import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private alrtCtrl: AlertController) { }

  ngOnInit() {
  }

  onClickRegister(){
    this.alrtCtrl.create({
      message: 'Registration Successful',
      buttons: [{
        text: 'OK',
        handler: () => this.router.navigate(['login'])
      }]
    }).then(alert => {
      alert.present()
    })
  }

}
