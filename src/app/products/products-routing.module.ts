import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { DesignYourCardComponent } from '../design-your-card/design-your-card.component';
import { CardFormComponent } from '../card-form/card-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'design-your-cards-now',
      },
      {
        path: 'design-your-cards-now',
        component: DesignYourCardComponent,
      },
      {
        path: ':productName',
        component: CardFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
