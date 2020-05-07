import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GymListingsPage } from './gymlistings.page';

describe('GymListingsPage', () => {
  let component: GymListingsPage;
  let fixture: ComponentFixture<GymListingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymListingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GymListingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
