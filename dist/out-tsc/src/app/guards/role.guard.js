import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';
let RoleGuard = class RoleGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(route) {
        const expectedRole = route.data.role;
        return this.auth.user.pipe(take(1), map(user => {
            // console.log('user in here: ', user);
            if (!user) {
                return false;
            }
            else {
                const role = user['role'];
                if (expectedRole == role) {
                    return true;
                }
                else {
                    this.router.navigateByUrl('/');
                    return false;
                }
            }
        }));
    }
};
RoleGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router, AuthService])
], RoleGuard);
export { RoleGuard };
//# sourceMappingURL=role.guard.js.map