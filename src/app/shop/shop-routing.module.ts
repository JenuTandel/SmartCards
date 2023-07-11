import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { CardViewComponent } from '../card-view/card-view.component';
import { DesignYourCardComponent } from '../design-your-card/design-your-card.component';
import { CardFormComponent } from '../card-form/card-form.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: 'smart-cards',
        component: CardViewComponent,
      },
      {
        path: 'smart-coins',
        component: CardViewComponent,
      },
      {
        path: 'smart-sockets',
        component: CardViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
