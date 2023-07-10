import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { OverlayService } from './services/overlay.service';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, OverlayModule],
  providers: [OverlayService],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
