import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostCrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  createPost(record) {
    return this.firestore.collection('posts').add(record);
    // return this.firestore.collection('posts').add(record);
  }

  readPosts() {
    return this.firestore.collection('posts').snapshotChanges();
  }

  updatePost(recordID,record){
    this.firestore.doc('posts/' + recordID).update(record);
  }

  deletePost(record_id) {
    this.firestore.doc('posts/' + record_id).delete();
  }
}