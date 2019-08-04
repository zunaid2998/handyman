import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RequestPage } from '../request/request.page';
import { NotificationPage } from '../notification/notification.page';
import { CategoryPage } from '../category/category.page';
import { AccountPage } from '../account/account.page';
import { ChatPage } from '../chat/chat.page';
import { AuthguardService } from '../service/authguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/client/category',
    pathMatch: 'full',
    canActivate: [AuthguardService]
  },
  {
    path: 'client',
    component: TabsPage,
    canActivate: [AuthguardService],
    children: [
      {
        path: '',
        redirectTo: '/client/category',
        pathMatch: 'full'
      },
      {
        path: 'request',
        children: [
          {
            path: '',
            loadChildren: ()=> import('../request/request.module').then(m => m.RequestPageModule)
          }
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
          }
        ]
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            loadChildren: ()=> import('../category/category.module').then(m => m.CategoryPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: ()=> import('../account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: ()=> import('../chat/chat.module').then(m => m.ChatPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
