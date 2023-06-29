import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';
import { DesignYourCardComponent } from './design-your-card/design-your-card.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CareerComponent } from './career/career.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    FeaturesComponent,
    DesignYourCardComponent,
    CardViewComponent,
    CardFormComponent,
    CareerComponent,
    TestimonialComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
