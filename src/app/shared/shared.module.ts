import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { PreviewImageComponent } from './components/preview-image/preview-image.component';
import { SmartCardFormComponent } from './components/smart-card-form/smart-card-form.component';
import { CustomersComponent } from './components/customers/customers.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    CardComponent,
    FaqComponent,
    ProductListComponent,
    FilterProductComponent,
    PreviewImageComponent,
    SmartCardFormComponent,
    CustomersComponent,
    MenuComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CardComponent,
    FaqComponent,
    ProductListComponent,
    FilterProductComponent,
    PreviewImageComponent,
    SmartCardFormComponent,
    CustomersComponent,
    MenuComponent,
  ],
})
export class SharedModule {}
