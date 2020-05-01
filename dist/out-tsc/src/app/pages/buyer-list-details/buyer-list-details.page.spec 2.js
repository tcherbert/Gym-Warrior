import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BuyerListDetailsPage } from './buyer-list-details.page';
describe('BuyerListDetailsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BuyerListDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(BuyerListDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=buyer-list-details.page.spec.js.map