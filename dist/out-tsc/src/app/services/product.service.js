import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
let ProductService = class ProductService {
    constructor(db, afAuth, storage) {
        this.db = db;
        this.afAuth = afAuth;
        this.storage = storage;
    }
    getAllProducts() {
        return this.db.collection('products').snapshotChanges().pipe(map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getOneProduct(id) {
        return this.db.doc(`products/${id}`).valueChanges();
    }
    addProduct(product) {
        product.creator = this.afAuth.auth.currentUser.uid;
        const imageData = product.img;
        delete product.image;
        let documentId = null;
        let storageRef = null;
        return this.db.collection('products').add(product).then(ref => {
            console.log('ref: ', ref);
            documentId = ref.id;
            storageRef = this.storage.ref(`products/${documentId}`);
            const uploadTask = storageRef.putString(imageData, 'base64', { contentType: 'image/png' });
            return uploadTask;
        }).then(task => {
            console.log('task: ', task);
            return storageRef.getDownloadURL().toPromise();
        }).then(imageUrl => {
            console.log('got url: ', imageUrl);
            return this.db.doc(`products/${documentId}`).update({ img: imageUrl });
        });
    }
    getSellerProducts() {
        const id = this.afAuth.auth.currentUser.uid;
        return this.db.collection('products', ref => ref.where('creator', '==', id)).snapshotChanges().pipe(map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    deleteProduct(id) {
        this.db.doc(`products/${id}`).delete();
        this.storage.ref(`products/${id}`).delete().subscribe(res => { });
    }
};
ProductService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore, AngularFireAuth, AngularFireStorage])
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map