import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class PostCrudService {

  constructor(
    private db: AngularFirestore
  ) { }


  createPost(record) {
    return this.db.collection('posts').add(record);
  }

  readPosts() {
    return this.db.collection('posts').snapshotChanges();
  }


  // updatePost(recordID, record) {
  //   this.db.doc('posts/' + recordID).update(record);
  // }


  deletePost(recordId) {
    this.db.doc('posts/' + recordId).delete();
  }


  readFriendsIds(recordID) {

    return this.db.doc('friends/' + recordID).snapshotChanges();
  }

  readUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  updateFriend(userId, friendId) {
    return this.db.doc('friends/' + userId).update({
      Friends: firestore.FieldValue.arrayUnion(friendId)
    });
  }

  removeFriend(userId, friendId){
    return this.db.doc('friends/' + userId).update({
      Friends: firestore.FieldValue.arrayRemove(friendId)
    });
  }

}

