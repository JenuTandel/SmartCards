import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) }, { path: 'media', loadChildren: () => import('./media/media.module').then(m => m.MediaModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
