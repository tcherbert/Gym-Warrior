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
    return this.db.collection('posts', ref => ref.orderBy('timeCreated', 'desc')).snapshotChanges();
  }

  readFriendsIds(recordID) {
    return this.db.doc('friends/' + recordID).snapshotChanges();
  }

  readUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  readGyms(){
    return this.db.collection('gyms').snapshotChanges();
  }

  updateFriend(userId, friendId) {
    this.db.doc('friends/' + userId).update({
      Friends: firestore.FieldValue.arrayUnion(friendId)
    });

    this.db.doc('friends/' + friendId).update({
      Friends: firestore.FieldValue.arrayUnion(userId)
    });
  }

  removeFriend(userId, friendId){
    this.db.doc('friends/' + userId).update({
      Friends: firestore.FieldValue.arrayRemove(friendId)
    });

    this.db.doc('friends/' + friendId).update({
      Friends: firestore.FieldValue.arrayRemove(userId)
    });
  }

  addLike(postID, userID) {
    return this.db.doc('posts/' + postID).update({
      Likes: firestore.FieldValue.arrayUnion(userID)
    });
  }

  removeLike(postID, userID) {
    return this.db.doc('posts/' + postID).update({
      Likes: firestore.FieldValue.arrayRemove(userID)
    });
  }

  addComment(postID, comment) {
    return this.db.doc('posts/' + postID).update({
      Comments: firestore.FieldValue.arrayUnion(comment)
    });
  }


  readGymPosts() {
    return this.db.collection('gymposts', ref => ref.orderBy('timeCreated', 'desc')).snapshotChanges();
  }

  createGymPost(record) {
    return this.db.collection('gymposts').add(record);
  }

  addGymComment(postID, comment) {
    return this.db.doc('gymposts/' + postID).update({
      Comments: firestore.FieldValue.arrayUnion(comment)
    });
  }

  addGymLike(postID, userID) {
    return this.db.doc('gymposts/' + postID).update({
      Likes: firestore.FieldValue.arrayUnion(userID)
    });
  }

  removeGymLike(postID, userID) {
    return this.db.doc('gymposts/' + postID).update({
      Likes: firestore.FieldValue.arrayRemove(userID)
    });
  }

  readGymMembersIds(recordID) {
    return this.db.doc('gymMembers/' + recordID).snapshotChanges();
  }

  removeGymMember(userId, friendId){
    this.db.doc('gymMembers/' + userId).update({
      Members: firestore.FieldValue.arrayRemove(friendId)
    });

    // this.db.doc('gymMembers/' + friendId).update({
    //   Members: firestore.FieldValue.arrayRemove(userId)
    // });
  }

  addGymMember(userId, friendId){
    this.db.doc('gymMembers/' + userId).update({
      Members: firestore.FieldValue.arrayUnion(friendId)
    });
  }
  readGymMembers(){
    return this.db.collection('gymMembers').snapshotChanges();
  }
}

