import { TestBed, inject } from '@angular/core/testing';
import { AutomaticLoginGuard } from './automatic-login.guard';
describe('AutomaticLoginGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AutomaticLoginGuard]
        });
    });
    it('should ...', inject([AutomaticLoginGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=automatic-login.guard.spec.js.map