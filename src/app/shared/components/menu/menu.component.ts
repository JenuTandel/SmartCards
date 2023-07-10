import { Component, Input, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  // @Input() isCompany!: boolean;
  public isCompany: boolean = false;
  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    if (this.overlayService.instance.name == 'company') {
      this.isCompany = true;
    } else {
      this.isCompany = false;
    }
  }

  closeDialog() {
    this.overlayService.closeDialog.next(true);
  }
}
