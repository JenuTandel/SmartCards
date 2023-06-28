import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { PreviewImageComponent } from './components/preview-image/preview-image.component';
import { CardFormComponent } from './components/card-form/card-form.component';



@NgModule({
  declarations: [
    CardComponent,
    FaqComponent,
    ProductListComponent,
    FilterProductComponent,
    PreviewImageComponent,
    CardFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
