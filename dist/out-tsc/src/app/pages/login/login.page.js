import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
let LoginPage = class LoginPage {
    constructor(fb, authService, loadingCtrl, toastCtrl, alertCtrl, router) {
        this.fb = fb;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            role: ['BUYER', Validators.required]
        });
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    navigateByRole(role) {
        if (role === 'USER') {
            this.router.navigateByUrl('/user/profile');
        }
    }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            this.authService.signIn(this.loginForm.value).subscribe(user => {
                loading.dismiss();
                console.log('after login: ', user);
                this.navigateByRole(user['role']);
            }, (err) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                loading.dismiss();
                let alert = yield this.alertCtrl.create({
                    header: 'Error',
                    message: err.message,
                    buttons: ['OK']
                });
                alert.present();
            }));
        });
    }
    register() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            this.authService.signUp(this.registerForm.value).then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield loading.dismiss();
                let toast = yield this.toastCtrl.create({
                    duration: 3000,
                    message: 'Successfully created new Account!'
                });
                toast.present();
                console.log('finished: ', res);
                this.navigateByRole(this.registerForm.value['role']);
            }), (err) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield loading.dismiss();
                let alert = yield this.alertCtrl.create({
                    header: 'Error',
                    message: err.message,
                    buttons: ['OK']
                });
                alert.present();
            }));
        });
    }
    toggleRegister() {
        this.flipcontainer.nativeElement.classList.toggle('flip');
    }
};
tslib_1.__decorate([
    ViewChild('flipcontainer', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], LoginPage.prototype, "flipcontainer", void 0);
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        AuthService,
        LoadingController,
        ToastController,
        AlertController,
        Router])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map