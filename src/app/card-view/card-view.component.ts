import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
  public productTitle: string | undefined;
  public title: string = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.productTitle = this.activatedRoute.routeConfig?.path;
    const name = this.productTitle?.split('-');
    if (name) {
      const a = name[0].charAt(0).toUpperCase() + name[0].slice(1);
      const b = name[1].charAt(0).toUpperCase() + name[1].slice(1);
      const c = a + ' ' + b;
      this.title = c;
    }
  }
}
