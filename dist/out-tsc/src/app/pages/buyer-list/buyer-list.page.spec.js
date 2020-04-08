import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BuyerListPage } from './buyer-list.page';
describe('BuyerListPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BuyerListPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(BuyerListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=buyer-list.page.spec.js.map