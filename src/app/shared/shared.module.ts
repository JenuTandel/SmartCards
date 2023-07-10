import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { PreviewImageComponent } from './components/preview-image/preview-image.component';
import { SmartCardFormComponent } from './components/smart-card-form/smart-card-form.component';
import { CustomersComponent } from './components/customers/customers.component';
@NgModule({
  declarations: [
    CardComponent,
    FaqComponent,
    ProductListComponent,
    FilterProductComponent,
    PreviewImageComponent,
    SmartCardFormComponent,
    CustomersComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    FaqComponent,
    ProductListComponent,
    FilterProductComponent,
    PreviewImageComponent,
    SmartCardFormComponent,
    CustomersComponent,
  ],
})
export class SharedModule {}
