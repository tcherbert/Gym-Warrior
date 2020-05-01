import { TestBed, inject } from '@angular/core/testing';
import { RoleGuard } from './role.guard';
describe('RoleGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RoleGuard]
        });
    });
    it('should ...', inject([RoleGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=role.guard.spec.js.map