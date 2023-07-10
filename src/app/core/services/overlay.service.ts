import { ComponentRef, Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  public instance: any;

  constructor(private overlay: Overlay) {}

  openDialog(component: any): ComponentRef<any> {
    const positionStrategy = this.overlay.position().global();
    // .centerHorizontally()
    // .centerVertically();

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
    });

    const portal = new ComponentPortal(component);
    this.instance = overlayRef.attach(portal);

    // Close the dialog using backdropClick()
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    return this.instance;
  }
}
