import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CameraPage } from './camera.page';
describe('CameraPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CameraPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CameraPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=camera.page.spec.js.map