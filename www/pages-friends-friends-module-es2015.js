(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-friends-friends-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/friends/friends.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/friends/friends.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-app>\n    <ion-content overflow-scroll=\"true\">\n\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n        <ion-content>\n          <ion-list>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/feed\">Feed</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/groups\">Groups</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gyms</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/profile\">Profile</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n                <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-list>\n        </ion-content>\n      </ion-menu>\n      \n      <div id=\"main\">\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <a href=\"user/feed\">\n              <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n              </a>\n          </ion-toolbar>\n        </ion-header>\n      </div>   \n  \n    \n  \n  \n<main>\n  <section>\n    <p (click)=\"findFriendsToggle()\">\n      Find Friends \n      <span *ngIf=\"!findFriends\"><ion-icon name=\"arrow-forward\"></ion-icon></span>\n      <span *ngIf=\"findFriends\"><ion-icon name=\"arrow-down\"></ion-icon></span>\n    </p>\n    \n    \n    <div *ngIf=\"findFriends\" class=\"find-friends\">\n      <form (ngSubmit)=\"findFriend()\" *ngIf=\"toggleFindFriendsFlag\">\n        <!-- <ion-input type=\"text\" placeholder=\"Who are you looking for?\" [(ngModel)]=\"findFriendData.txt\" name=\"txt\"></ion-input> -->\n        <ion-searchbar animated [(ngModel)]=\"searchTerm.txt\" name=\"txt\" (ionChange)=\"setFilteredItems()\"></ion-searchbar>\n\n      </form>\n      \n      <ion-list class=\"friends\">\n        <ion-item *ngFor=\"let friend of filteredFriends\">\n          <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+friend.image+')'}\"></div>\n          <p>{{ friend.fname }} {{ friend.lname }}</p>\n          <ion-button (click)=\"addFriend(friend.id)\">Add Friend</ion-button>\n        </ion-item>\n      </ion-list>\n\n\n    </div>\n  </section>\n\n  <section>\n    <p>Current Friends</p>\n    <ion-list class=\"friends\" *ngIf=\"friendsReady\">\n      <ion-item *ngFor =\"let friend of friendsData\">\n        <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+friend.image+')'}\"></div>\n          <p>{{friend.fname}} {{friend.lname}}</p>\n          <ion-button (click)=\"removeFriend(friend.id)\">Remove Friend</ion-button>\n      </ion-item> \n    </ion-list>\n\n  </section>\n</main>"

/***/ }),

/***/ "./src/app/pages/friends/friends-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/friends/friends-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FriendsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageRoutingModule", function() { return FriendsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./friends.page */ "./src/app/pages/friends/friends.page.ts");




const routes = [
    {
        path: '',
        component: _friends_page__WEBPACK_IMPORTED_MODULE_3__["FriendsPage"]
    }
];
let FriendsPageRoutingModule = class FriendsPageRoutingModule {
};
FriendsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FriendsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/friends/friends.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/friends/friends.module.ts ***!
  \*************************************************/
/*! exports provided: FriendsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function() { return FriendsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _friends_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./friends-routing.module */ "./src/app/pages/friends/friends-routing.module.ts");
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friends.page */ "./src/app/pages/friends/friends.page.ts");







let FriendsPageModule = class FriendsPageModule {
};
FriendsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _friends_routing_module__WEBPACK_IMPORTED_MODULE_5__["FriendsPageRoutingModule"]
        ],
        declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]]
    })
], FriendsPageModule);



/***/ }),

/***/ "./src/app/pages/friends/friends.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/friends/friends.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.nav {\n  width: 32%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\np {\n  color: white;\n  text-align: center;\n}\n\n.friends p {\n  max-width: calc(100% - 200px);\n}\n\n.friends ion-button {\n  position: absolute;\n  right: 10px;\n}\n\n.friends .imageBg {\n  height: 75px;\n  width: 75px;\n  background-size: cover;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  background-position: 50% 50%;\n}\n\n.searchbar-left-aligned {\n  --color: #ffffff !important;\n}\n\n.searchbar-left-aligned .searchbar-search-icon {\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxsYWFtdW5kc29uL0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9mcmllbmRzL2ZyaWVuZHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mcmllbmRzL2ZyaWVuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUU7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ047O0FERUM7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDSDs7QURJSTtFQUNFLDZCQUFBO0FDRE47O0FER0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNETjs7QURJSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDRk47O0FETUM7RUFDRSwyQkFBQTtBQ0hIOztBREtHO0VBQ0UseUJBQUE7QUNITCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZyaWVuZHMvZnJpZW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbiAgfVxuXG4gIC5wcm9maWxlSW1hZ2UyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2d5bXByb2ZpbGUuanBlZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogNTUlO1xuXG4gIH1cbiAgLm5hdntcbiAgICB3aWR0aDogMzIlO1xuICB9XG5cbiAgLm5hdk1lbnUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIFxuICAgIGlvbi1saXN0IHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuIHAge1xuICAgY29sb3I6IHdoaXRlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiBcblxuICAuZnJpZW5kcyB7XG4gICAgcCB7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbiAgICB9IFxuICAgIGlvbi1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmltYWdlQmcge1xuICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICB9XG4gIH1cblxuIC5zZWFyY2hiYXItbGVmdC1hbGlnbmVkIHtcbiAgIC0tY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcblxuICAgLnNlYXJjaGJhci1zZWFyY2gtaWNvbiB7XG4gICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICB9XG4gfVxuXG4iLCIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG59XG5cbi5wcm9maWxlSW1hZ2UyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLm5hdiB7XG4gIHdpZHRoOiAzMiU7XG59XG5cbi5uYXZNZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLm5hdk1lbnUgaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mcmllbmRzIHAge1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbn1cbi5mcmllbmRzIGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xufVxuLmZyaWVuZHMgLmltYWdlQmcge1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiA3NXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuXG4uc2VhcmNoYmFyLWxlZnQtYWxpZ25lZCB7XG4gIC0tY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbi5zZWFyY2hiYXItbGVmdC1hbGlnbmVkIC5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/friends/friends.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/friends/friends.page.ts ***!
  \***********************************************/
/*! exports provided: FriendsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPage", function() { return FriendsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/firestore-api.service */ "./src/app/services/firestore-api.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");







let FriendsPage = class FriendsPage {
    constructor(auth, postCrudService, afAuth, db, storage) {
        this.auth = auth;
        this.postCrudService = postCrudService;
        this.afAuth = afAuth;
        this.db = db;
        this.storage = storage;
        this.friendsIds = {};
        this.friendsData = [];
        this.friendsCounter = 0;
        this.findUsersData = {};
        this.usersData = [];
        this.searchTerm = {};
        this.findFriends = false;
        this.friendsReady = false;
        this.toggleFindFriendsFlag = false;
    }
    ngOnInit() {
        this.getFriends();
        // this.findUsers();
    }
    findFriendsToggle() {
        if (this.findFriends === false) {
            this.findFriends = true;
            this.toggleFindFriendsFlag = true;
        }
        else {
            this.findFriends = false;
            this.toggleFindFriendsFlag = false;
        }
        // console.log('findFriendsToggle...');
        // console.log(this.findUsersData);
    }
    signOut() {
        this.auth.signOut();
    }
    getFriends() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = this.afAuth.auth.currentUser.uid;
            yield this.postCrudService.readFriendsIds(id).subscribe(data => {
                this.friendsIds = data.payload.data()['Friends'];
                // User_ID: e.payload.doc.data()['user_id'],
                this.getUserData();
            });
        });
    }
    getUserData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.friendsData = [];
            this.friendsCounter = 0;
            let friendsIdsLength;
            if (!this.isEmpty(this.friendsIds)) {
                friendsIdsLength = Object.keys(this.friendsIds).length;
            }
            else {
                friendsIdsLength = 0;
            }
            console.log('friendsIdsLength', friendsIdsLength);
            for (let i = 0; i < friendsIdsLength; i++) {
                const id = this.friendsIds[i];
                console.log(id);
                const friendData = yield this.db.collection('users')
                    .doc(id)
                    .ref
                    .get().then(doc => {
                    if (doc.exists) {
                        const userData = doc.data();
                        // return userData;
                        this.friendsData[this.friendsCounter] = userData;
                        this.friendsData[this.friendsCounter]['id'] = id;
                        this.friendsCounter++;
                        if (friendsIdsLength === this.friendsCounter) {
                            this.friendsReady = true;
                        }
                    }
                    else {
                        console.log('No such document!');
                    }
                });
            }
            this.findUsers();
        });
    }
    findUsers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.postCrudService.readUsers().subscribe(data => {
                this.findUsersData = data.map(e => {
                    return {
                        id: e.payload.doc.id,
                        isEdit: false,
                        fname: e.payload.doc.data()['fname'],
                        lname: e.payload.doc.data()['lname'],
                    };
                });
                console.log('this.findUsersData');
                console.log(this.findUsersData);
                // Filter out yourself and any other active friends.
                const findUsersDataLength = Object.keys(this.findUsersData).length;
                let findFriendsIdsLength;
                if (!this.isEmpty(this.friendsIds)) {
                    findFriendsIdsLength = Object.keys(this.friendsIds).length;
                }
                else {
                    findFriendsIdsLength = 0;
                }
                const id = this.afAuth.auth.currentUser.uid;
                let counter = 0;
                let foundFlag;
                for (let i = 0; i < findUsersDataLength; i++) {
                    foundFlag = 0;
                    for (let n = 0; n < findFriendsIdsLength; n++) {
                        if (this.findUsersData[i].id === this.friendsIds[n] || this.findUsersData[i].id === id) {
                            foundFlag = 1;
                        }
                    }
                    if (!foundFlag) {
                        this.usersData[counter] = this.findUsersData[i];
                        counter++;
                    }
                }
                this.findUsersImages();
            });
            // Find all users images.
        });
    }
    findUsersImages() {
        // Known friends
        const friendsDataLength = Object.keys(this.friendsData).length;
        for (let i = 0; i < friendsDataLength; i++) {
            this.friendsData[i].image = this.getProfileImage(this.friendsData[i].id, i, 'friendsData');
        }
        // For the find function
        const usersDataLength = Object.keys(this.usersData).length;
        for (let i = 0; i < usersDataLength; i++) {
            console.log(this.usersData[i]);
            this.usersData[i]['image'] = this.getProfileImage(this.usersData[i].id, i, 'usersData');
        }
    }
    setFilteredItems() {
        this.filteredFriends = this.filterItems(this.searchTerm);
    }
    filterItems(searchTerm) {
        // If search is empty make sure it empties the list.
        if (searchTerm.txt === '') {
            return [];
        }
        // Filter fname
        const filterFname = this.usersData.filter(user => {
            return user.fname.toLowerCase().indexOf(searchTerm.txt.toLowerCase()) > -1;
        });
        // Filter lname
        const filterLname = this.usersData.filter(user => {
            return user.lname.toLowerCase().indexOf(searchTerm.txt.toLowerCase()) > -1;
        });
        // Merge the 2 filter objects.
        return this.arrayUnique(filterFname.concat(filterLname)); // [...filterFname, ...filterLname];
    }
    getProfileImage(id, index, resultArray) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ref = this.storage.ref(id + '/image/profileImage');
            const profileImage = ref.getDownloadURL();
            profileImage.subscribe(result => {
                if (resultArray === 'usersData') {
                    this.usersData[index]['image'] = result;
                }
                else {
                    this.friendsData[index]['image'] = result;
                }
            });
        });
    }
    removeFriend(friendId) {
        const id = this.afAuth.auth.currentUser.uid;
        this.postCrudService.removeFriend(id, friendId);
        // console.log(resp);
        for (let i = 0; i < this.friendsData.length; i++) {
            if (this.friendsData[i].id === friendId) {
                this.friendsData.splice(i, 1);
            }
        }
    }
    addFriend(friendId) {
        const id = this.afAuth.auth.currentUser.uid;
        this.postCrudService.updateFriend(id, friendId);
    }
    /*
      async createPost() {
        const id = this.afAuth.auth.currentUser.uid;
        let record = {};
        record['user_id'] = id;
        this.postData['fname'] = this.fname;
        this.postData['lname'] = this.lname;
        record['data'] = this.postData;
        if (this.imageID !== undefined) {
          record['image'] = this.imageID;
        }
    
        this.postCrudService.createPost(record).then(resp => {
          // console.log(resp);
        })
          .catch(error => {
            // console.log(error);
          });
      }
    */
    // Utility function to add 2 arrays uniquely
    arrayUnique(array) {
        const a = array.concat();
        for (let i = 0; i < a.length; ++i) {
            for (let j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j]) {
                    a.splice(j--, 1);
                }
            }
        }
        return a;
    }
    isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
};
FriendsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__["PostCrudService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }
];
FriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyer-list',
        template: __webpack_require__(/*! raw-loader!./friends.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/friends/friends.page.html"),
        styles: [__webpack_require__(/*! ./friends.page.scss */ "./src/app/pages/friends/friends.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__["PostCrudService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
], FriendsPage);



/***/ })

}]);
//# sourceMappingURL=pages-friends-friends-module-es2015.js.map