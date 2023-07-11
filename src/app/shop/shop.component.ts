import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  constructor(private router: Router) {}
  onBuisnessCard() {
    this.router.navigateByUrl('collections/smart-cards');
  }
  onCoins() {
    this.router.navigateByUrl('collections/smart-coins');
  }
  onSockets() {
    this.router.navigateByUrl('collections/smart-sockets');
  }
}
