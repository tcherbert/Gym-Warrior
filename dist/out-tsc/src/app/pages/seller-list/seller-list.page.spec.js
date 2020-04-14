import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SellerListPage } from './seller-list.page';
describe('SellerListPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SellerListPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SellerListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=seller-list.page.spec.js.map