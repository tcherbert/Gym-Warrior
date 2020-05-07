import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GymMembersPage } from './gymmembers.page';

describe('GymMembersPage', () => {
  let component: GymMembersPage;
  let fixture: ComponentFixture<GymMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GymMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
