import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SellerListDetailsPage } from './seller-list-details.page';
describe('SellerListDetailsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SellerListDetailsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SellerListDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=seller-list-details.page.spec.js.map