import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './auth/login/login.module';
import { RegisterPageModule } from './auth/register/register.module';
import { ForgotPasswordPageModule } from './auth/forgot-password/forgot-password.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => LoginPageModule
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: () => LoginPageModule },
  { path: 'register', loadChildren: () => RegisterPageModule},
  { path: 'forgot-password', loadChildren: () => ForgotPasswordPageModule },
  { path: '**', redirectTo: '/login' },
  // { path: 'submit-review', loadChildren: './request/submit-review/submit-review.module#SubmitReviewPageModule' },
  // { path: 'request-detail', loadChildren: './request/request-detail/request-detail.module#RequestDetailPageModule' },
  // { path: 'service-detail', loadChildren: './category/service-detail/service-detail.module#ServiceDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
