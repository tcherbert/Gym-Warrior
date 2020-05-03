import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class GymPostCrudService {

  constructor(
    private db: AngularFirestore
  ) { }


  createGymPost(record) {
    return this.db.collection('gymposts').add(record);
  }

  readGymPosts() {
    return this.db.collection('gymposts', ref => ref.orderBy('timeCreated', 'desc')).snapshotChanges();
  }


  updatePost(recordID, record) {
    this.db.doc('gymposts/' + recordID).update(record);
  }


  deleteGymPost(recordId) {
    this.db.doc('gymposts/' + recordId).delete();
  }


//   readFriendsIds(recordID) {

//     return this.db.doc('friends/' + recordID).snapshotChanges();
//   }

readMemberIds(recordID) {
    return this.db.doc('gymMembers/' + recordID).snapshotChanges();
}

  readGyms() {
    return this.db.collection('gyms').snapshotChanges();
  }

//   updateFriend(userId, friendId) {
//     this.db.doc('friends/' + userId).update({
//       Friends: firestore.FieldValue.arrayUnion(friendId)
//     });

//     this.db.doc('friends/' + friendId).update({
//       Friends: firestore.FieldValue.arrayUnion(userId)
//     });
//   }

//   removeFriend(userId, friendId){
//     this.db.doc('friends/' + userId).update({
//       Friends: firestore.FieldValue.arrayRemove(friendId)
//     });

//     this.db.doc('friends/' + friendId).update({
//       Friends: firestore.FieldValue.arrayRemove(userId)
//     });
//   }

  addLike(postID, userID) {
    return this.db.doc('gymposts/' + postID).update({
      Likes: firestore.FieldValue.arrayUnion(userID)
    });
  }

  removeLike(postID, userID) {
    return this.db.doc('gymposts/' + postID).update({
      Likes: firestore.FieldValue.arrayRemove(userID)
    });
  }

  addComment(postID, comment) {
    return this.db.doc('gymposts/' + postID).update({
      Comments: firestore.FieldValue.arrayUnion(comment)
    });
  }

}