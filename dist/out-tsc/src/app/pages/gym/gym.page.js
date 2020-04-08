import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geofence } from '@ionic-native/geofence/ngx';
let GymPage = class GymPage {
    constructor(auth, productService, geolocation, geofence) {
        this.auth = auth;
        this.productService = productService;
        this.geolocation = geolocation;
        this.geofence = geofence;
    }
    getLocation() {
        this.geolocation.getCurrentPosition().then((location) => {
            this.lat = location.coords.latitude;
            this.long = location.coords.longitude;
            console.log('Latitude: ' + location.coords.latitude);
            console.log('Longitude: ' + location.coords.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    addGeofence() {
        let fence = {
            id: 'testID',
            latitude: 46.411662,
            longitude: -117.026571,
            radius: 100,
            transitionType: 3,
            notification: {
                id: 1,
                title: 'You crossed a fence',
                text: 'You just arrived at LCSC',
                openAppOnClick: true
            }
        };
        this.geofence.addOrUpdate(fence).then(() => console.log("Geofence added"), (err) => console.log('Geofence failed to add'));
    }
    ngOnInit() {
        this.products = this.productService.getSellerProducts();
    }
    delete(id) {
        this.productService.deleteProduct(id);
    }
    signOut() {
        this.auth.signOut();
    }
};
GymPage = tslib_1.__decorate([
    Component({
        selector: 'app-buyer-list',
        templateUrl: './gym.page.html',
        styleUrls: ['./gym.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService, ProductService, Geolocation, Geofence])
], GymPage);
export { GymPage };
//# sourceMappingURL=gym.page.js.map