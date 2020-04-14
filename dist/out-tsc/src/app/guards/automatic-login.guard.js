import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';
let AutomaticLoginGuard = class AutomaticLoginGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(route) {
        return this.auth.user.pipe(take(1), map(user => {
            // console.log('user in here: ', user);
            if (!user) {
                return true;
            }
            else {
                const role = user['role'];
                if (role == 'USER') {
                    this.router.navigateByUrl('/user');
                }
                // } else if (role == 'SELLER') {
                //   this.router.navigateByUrl('/seller');
                // }
                return false;
            }
        }));
    }
};
AutomaticLoginGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router, AuthService])
], AutomaticLoginGuard);
export { AutomaticLoginGuard };
//# sourceMappingURL=automatic-login.guard.js.map