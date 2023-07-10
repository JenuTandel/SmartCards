import { ComponentRef, ElementRef, Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  public instance: any;
  public closeDialog: Subject<boolean>;

  constructor(private overlay: Overlay) {
    this.closeDialog = new Subject();
  }

  openDialog(component: any, el: ElementRef, name: string): ComponentRef<any> {
    // const positionStrategy = this.overlay.position().global();

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(el)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 10,
          },
        ]),
    });
    const portal = new ComponentPortal(component);
    this.instance = overlayRef.attach(portal);
    this.instance.name = name;

    // Close the dialog using backdropClick()
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
    this.closeDialog.subscribe((res) => {
      if (res == true) {
        overlayRef.detach();
      }
    });

    return this.instance;
  }
}
