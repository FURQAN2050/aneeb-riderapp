import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderCompeltePage } from './order-compelte.page';

describe('OrderCompeltePage', () => {
  let component: OrderCompeltePage;
  let fixture: ComponentFixture<OrderCompeltePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCompeltePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCompeltePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
