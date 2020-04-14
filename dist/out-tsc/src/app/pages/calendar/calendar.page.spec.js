import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CalendarPage } from './Calendar.page';
describe('GymPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalendarPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CalendarPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=calendar.page.spec.js.map