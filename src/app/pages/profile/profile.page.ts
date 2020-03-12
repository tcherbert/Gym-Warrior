import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';




@Component({
  selector: 'app-buyer-list',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

interface User {
  fname: string;
  lname: string;
}

export class ProfilePage implements OnInit {
  // user: Observable<any>;
  userCollection: AngularFirestoreCollection<User>;
  userData: Observable<User>;

  constructor(private auth: AuthService,
              private db: AngularFirestore,
              private afAuth: AngularFireAuth
  ) {

  }


  ngOnInit() {
    // this.db.doc(`users/${user.user.uid}`).valueChanges();
    this.pageSetup();
  }

  signOut() {
    this.auth.signOut();
  }

  pageSetup(){
    const id = this.afAuth.auth.currentUser.uid;
    this.userCollection = this.db.collection('users/${id}');
    this.db.collection('users');

    console.log('user id: ', id);
    console.log(this.userCollection);
  }

}