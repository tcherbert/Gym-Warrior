import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  public gymId: string;

  constructor(
    private db: AngularFirestore
  ) { }

  createGym(credentials){
    console.log('Create Gym Credentials: ' + credentials);
    return this.db.collection('gyms').add(credentials);
  }


  createGymPosts(record) {
    return this.db.collection('gyposts').add(record);
  }

  readGymPosts() {
    return this.db.collection('gymposts').snapshotChanges();
  }

  updateGymPost(recordID,record){
    this.db.doc('gymposts/' + recordID).update(record);
  }

  deleteGymPost(recordId) {
    this.db.doc('gymposts/' + recordId).delete();
  }

  // readFriendsIds(recordID){
  //   return this.db.doc('friends/' + recordID).snapshotChanges();
  // }

  // readUsers() {
  //   return this.db.collection('users').snapshotChanges();
  // }
}