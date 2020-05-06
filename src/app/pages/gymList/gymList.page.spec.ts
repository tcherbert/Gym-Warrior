import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GymListPage } from './gymList.page';

describe('GymListPage', () => {
  let component: GymListPage;
  let fixture: ComponentFixture<GymListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GymListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
