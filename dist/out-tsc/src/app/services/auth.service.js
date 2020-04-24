import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
let AuthService = class AuthService {
    constructor(afAuth, db, navCtrl) {
        this.afAuth = afAuth;
        this.db = db;
        this.navCtrl = navCtrl;
        this.user = this.afAuth.authState.pipe(switchMap(user => {
            if (user) {
                return this.db.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return of(null);
            }
        }));
    }
    signIn(credentials) {
        return from(this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(switchMap(user => {
            console.log('real user: ', user);
            if (user) {
                console.log('Login Working...??');
                console.log(this.db.doc(`users/${user.user.uid}`).valueChanges());
                return this.db.doc(`users/${user.user.uid}`).valueChanges();
            }
            else {
                console.log('Login Not Working...');
                return of(null);
            }
        }));
    }
    signUp(credentials) {
        console.log('signUp Credentials: ' + credentials);
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(data => {
            console.log('after register: ', data);
            return this.db.doc(`users/${data.user.uid}`).set({
                fname: credentials.fname,
                lname: credentials.lname,
                email: credentials.email,
                role: 'USER',
                created: firebase.firestore.FieldValue.serverTimestamp()
            });
        });
    }
    signOut() {
        this.afAuth.auth.signOut().then(() => {
            this.navCtrl.navigateRoot('/');
        });
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth, AngularFirestore, NavController])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map