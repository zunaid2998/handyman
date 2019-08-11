import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './auth/login/login.module';
import { RegisterPageModule } from './auth/register/register.module';
import { ForgotPasswordPageModule } from './auth/forgot-password/forgot-password.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: () => LoginPageModule },
  { path: 'register', loadChildren: () => RegisterPageModule},
  { path: 'forgot-password', loadChildren: () => ForgotPasswordPageModule },
  { path: '**', redirectTo: '/login' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
