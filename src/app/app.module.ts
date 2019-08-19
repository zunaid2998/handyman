import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthguardService } from './service/authguard.service';
import { CategoryService } from './service/category.service';
import { ContractorService } from './service/contractor.service';
import { NotificationService } from './service/notificaton.service';
import { PusherService } from './service/pusher.service';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthguardService,
    CategoryService,
    ContractorService,
    NotificationService,
    PusherService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
