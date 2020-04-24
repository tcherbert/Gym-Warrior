import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActionSheetController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
let CameraPage = class CameraPage {
    constructor(camera, webview, actionSheetController, sanitizer) {
        this.camera = camera;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.sanitizer = sanitizer;
        this.image = null;
    }
    ngOnInit() {
    }
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
        let options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            console.log('Path Before: ', imagePath);
            this.image = this.webview.convertFileSrc(imagePath);
            this.image = this.sanitizer.bypassSecurityTrustUrl(this.image);
            console.log('path: ', this.image);
        });
    }
};
CameraPage = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: './camera.page.html',
        styleUrls: ['./camera.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Camera, WebView,
        ActionSheetController,
        DomSanitizer])
], CameraPage);
export { CameraPage };
//# sourceMappingURL=camera.page.js.map