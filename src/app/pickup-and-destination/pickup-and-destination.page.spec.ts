import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickupAndDestinationPage } from './pickup-and-destination.page';

describe('PickupAndDestinationPage', () => {
  let component: PickupAndDestinationPage;
  let fixture: ComponentFixture<PickupAndDestinationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupAndDestinationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupAndDestinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
