import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GymAdminPage } from './gym-admin.page';

describe('GymAdminPage', () => {
  let component: GymAdminPage;
  let fixture: ComponentFixture<GymAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymAdminPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GymAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
