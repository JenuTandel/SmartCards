import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignYourCardComponent } from './design-your-card.component';

describe('DesignYourCardComponent', () => {
  let component: DesignYourCardComponent;
  let fixture: ComponentFixture<DesignYourCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignYourCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignYourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
