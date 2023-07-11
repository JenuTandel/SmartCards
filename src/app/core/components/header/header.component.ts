import { Component, ElementRef, ViewChild } from '@angular/core';
import { OverlayService } from '../../services/overlay.service';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('company', { static: false }) company!: ElementRef;
  constructor(private overlayService: OverlayService) {}
  openMenu(event: any, name: string) {
    this.overlayService.openDialog(MenuComponent, event.target, name);
  }

  onShop() {}
}
