import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { ActionSheetController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DomSanitizer } from '@angular/platform-browser';
let FeedPage = class FeedPage {
    constructor(auth, productService, actionSheetController, camera, db, afAuth, storage, webview, sanitizer) {
        this.auth = auth;
        this.productService = productService;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.db = db;
        this.afAuth = afAuth;
        this.storage = storage;
        this.webview = webview;
        this.sanitizer = sanitizer;
        this.postData = {};
        this.togglePostFlag = false;
    }
    ngOnInit() {
    }
    togglePost() {
        if (this.togglePostFlag === false) {
            this.togglePostFlag = true;
        }
        else {
            this.togglePostFlag = false;
        }
    }
    createPost() {
        console.log(this.postData);
        console.log(this.profileImage);
    }
    // Image Handlers
    selectSource() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image Source',
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.captureImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.captureImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            actionSheet.present();
        });
    }
    captureImage(sourceType) {
        let storageRef = null;
        const id = this.afAuth.auth.currentUser.uid;
        const options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            storageRef = this.storage.ref(id);
            // Convert url to safe url and set the state of new profileImage
            console.log(imagePath);
            this.profileImage = this.webview.convertFileSrc(imagePath);
            console.log(this.profileImage);
            this.imageReady = true;
            // Upload image
            // this.uploadImage(this.profileImage, 'profileImage');
        });
    }
    uploadImage(imageURI, imageName) {
        return new Promise((resolve, reject) => {
            const id = this.afAuth.auth.currentUser.uid;
            let storageRef = this.storage.ref(id);
            let imageRef = storageRef.child('image').child(imageName);
            this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(snapshot => {
                    resolve(snapshot.downloadURL);
                    this.profileImage = snapshot.downloadURL;
                }, err => {
                    reject(err);
                });
            });
        });
    }
    encodeImageUri(imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext('2d');
        var img = new Image();
        img.crossOrigin = 'anonymous'; // This enables CORS
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL('image/jpeg');
            callback(dataURL);
        };
        img.src = imageUri;
    }
    removeImage() {
        this.profileImage = '';
        this.imageReady = false;
    }
};
FeedPage = tslib_1.__decorate([
    Component({
        selector: 'app-buyer-list',
        templateUrl: './feed.page.html',
        styleUrls: ['./feed.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        ProductService,
        ActionSheetController,
        Camera,
        AngularFirestore,
        AngularFireAuth,
        AngularFireStorage,
        WebView,
        DomSanitizer])
], FeedPage);
export { FeedPage };
//# sourceMappingURL=feed.page.js.map