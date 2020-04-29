import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GymCreationPage} from './gym-creation.page';

describe('LoginPage', () => {
  let component: GymCreationPage;
  let fixture: ComponentFixture<GymCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymCreationPage ],
      imports: [IonicModule.forRoot()] 
    }).compileComponents();

    fixture = TestBed.createComponent(GymCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
