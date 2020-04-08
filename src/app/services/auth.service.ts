import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable, from, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { User } from 'firebase';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  // user: User = null;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private navCtrl: NavController) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  // constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
  //   this.afAuth.authState.subscribe(res => {
  //     this.user = res;
  //     if (this.user) {
  //       console.log('authenticated user: ', this.user);
  //       this.db.doc(`users/${this.currentUserId}`).valueChanges().pipe(
  //         tap(res => {
  //           // this.nickname = res['nickname'];
  //           console.log(res);
  //         })
  //       ).subscribe();
  //     }
  //   })
  //  }

  signIn(credentials): Observable<any> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      switchMap(user => {
        console.log('real user: ', user);
        if (user) {
          console.log('Login Working...??');
          console.log(this.db.doc(`users/${user.user.uid}`).valueChanges());
          return this.db.doc(`users/${user.user.uid}`).valueChanges();
        } else {
          console.log('Login Not Working...');
          return of(null);
        }
      })
    )
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

  get authenticated(): boolean {
    return this.user !== null;
  }
  get currentUser(): any {
    return this.authenticated ? this.user : null;
  }

  get currentUserId(): string {
    const user = this.user.subscribe(event => {
      console.log('currentUserId...');
      console.log(event);
      // this.user = event;
      // return this.user;
    });

    return 'hello';

    // return this.authenticated ? this.user.uid : '';
  }
}
