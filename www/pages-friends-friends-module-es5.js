(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-friends-friends-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/friends/friends.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/friends/friends.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-app>\r\n    <ion-content overflow-scroll=\"true\">\r\n\r\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\r\n        <ion-content>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/profile\">Profile Page</ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gym Page</ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups Page</ion-button>\r\n            </ion-item>\r\n       \r\n          </ion-list>\r\n        </ion-content>\r\n      </ion-menu>\r\n      \r\n      <div id=\"main\">\r\n        <ion-header>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-buttons>\r\n            <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n      </div>   \r\n  \r\n    \r\n  \r\n  \r\n<main>\r\n  <section>\r\n    <p (click)=\"findFriendsToggle()\">\r\n      Find Friends \r\n      <span *ngIf=\"!findFriends\"><ion-icon name=\"arrow-forward\"></ion-icon></span>\r\n      <span *ngIf=\"findFriends\"><ion-icon name=\"arrow-down\"></ion-icon></span>\r\n    </p>\r\n    \r\n    \r\n    <div *ngIf=\"findFriends\" class=\"find-friends\">\r\n      <form (ngSubmit)=\"findFriend()\" *ngIf=\"toggleFindFriendsFlag\">\r\n        <!-- <ion-input type=\"text\" placeholder=\"Who are you looking for?\" [(ngModel)]=\"findFriendData.txt\" name=\"txt\"></ion-input> -->\r\n        <ion-searchbar animated [(ngModel)]=\"searchTerm.txt\" name=\"txt\" (ionChange)=\"setFilteredItems()\"></ion-searchbar>\r\n        <p>all users here.. filter them as we can..</p>        \r\n        <!-- <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\r\n          Search\r\n        </ion-button> -->\r\n      </form>\r\n    </div>\r\n  </section>\r\n\r\n  <section>\r\n    <p>Friends</p>\r\n    <div *ngIf=\"friendsReady\">\r\n      <ion-card  *ngFor =\"let friend of friendsData\">\r\n        <div>\r\n          <p>{{friend.fname}} {{friend.lname}}</p>\r\n        </div>\r\n      </ion-card> \r\n    </div>\r\n  </section>\r\n</main>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./friends.page */ "./src/app/pages/friends/friends.page.ts");




var routes = [
    {
        path: '',
        component: _friends_page__WEBPACK_IMPORTED_MODULE_3__["FriendsPage"]
    }
];
var FriendsPageRoutingModule = /** @class */ (function () {
    function FriendsPageRoutingModule() {
    }
    FriendsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FriendsPageRoutingModule);
    return FriendsPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _friends_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./friends-routing.module */ "./src/app/pages/friends/friends-routing.module.ts");
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friends.page */ "./src/app/pages/friends/friends.page.ts");







var FriendsPageModule = /** @class */ (function () {
    function FriendsPageModule() {
    }
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
    return FriendsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/friends/friends.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/friends/friends.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.nav {\n  width: 32%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\np {\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnJpZW5kcy9DOlxcVXNlcnNcXHRjYXJ2XFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltLVdhcnJpb3Ivc3JjXFxhcHBcXHBhZ2VzXFxmcmllbmRzXFxmcmllbmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZnJpZW5kcy9mcmllbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVFO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NOOztBREVDO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mcmllbmRzL2ZyaWVuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWFnZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDU1JTtcclxufVxyXG5cclxuI25hbWVTdGF0dXMge1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZUltYWdlMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2d5bXByb2ZpbGUuanBlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogNTUlO1xyXG5cclxuICB9XHJcbiAgLm5hdntcclxuICAgIHdpZHRoOiAzMiU7XHJcbiAgfVxyXG5cclxuICAubmF2TWVudSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gcHtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAiLCIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG59XG5cbi5wcm9maWxlSW1hZ2UyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLm5hdiB7XG4gIHdpZHRoOiAzMiU7XG59XG5cbi5uYXZNZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLm5hdk1lbnUgaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/firestore-api.service */ "./src/app/services/firestore-api.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






var FriendsPage = /** @class */ (function () {
    function FriendsPage(auth, postCrudService, afAuth, db) {
        this.auth = auth;
        this.postCrudService = postCrudService;
        this.afAuth = afAuth;
        this.db = db;
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
    FriendsPage.prototype.ngOnInit = function () {
        this.getFriends();
        // this.findUsers();
    };
    FriendsPage.prototype.findFriendsToggle = function () {
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
    };
    FriendsPage.prototype.signOut = function () {
        this.auth.signOut();
    };
    FriendsPage.prototype.getFriends = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.afAuth.auth.currentUser.uid;
                        return [4 /*yield*/, this.postCrudService.readFriendsIds(id).subscribe(function (data) {
                                _this.friendsIds = data.payload.data()['Friends'];
                                // User_ID: e.payload.doc.data()['user_id'],
                                // console.log(this.friendsIds);
                                _this.getUserData();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FriendsPage.prototype.getUserData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var friendsIdsLength, i, id, friendData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        friendsIdsLength = Object.keys(this.friendsIds).length;
                        console.log('friendsIdsLength', friendsIdsLength);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < friendsIdsLength)) return [3 /*break*/, 4];
                        id = this.friendsIds[i];
                        console.log(id);
                        return [4 /*yield*/, this.db.collection('users')
                                .doc(id)
                                .ref
                                .get().then(function (doc) {
                                if (doc.exists) {
                                    var userData = doc.data();
                                    // return userData;
                                    _this.friendsData[_this.friendsCounter] = userData;
                                    _this.friendsCounter++;
                                    if (friendsIdsLength === _this.friendsCounter) {
                                        _this.friendsReady = true;
                                        // console.log('final friends log');
                                        // console.log(this.friendsData);
                                    }
                                }
                                else {
                                    console.log('No such document!');
                                }
                            })];
                    case 2:
                        friendData = _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.findUsers();
                        return [2 /*return*/];
                }
            });
        });
    };
    FriendsPage.prototype.findUsers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.postCrudService.readUsers().subscribe(function (data) {
                    _this.findUsersData = data.map(function (e) {
                        return {
                            id: e.payload.doc.id,
                            isEdit: false,
                            fname: e.payload.doc.data()['fname'],
                            lname: e.payload.doc.data()['lname'],
                        };
                    });
                    // Filter out yourself and any other active friends.
                    var findUsersDataLength = Object.keys(_this.findUsersData).length;
                    var findFriendsIdsLength = Object.keys(_this.friendsIds).length;
                    var id = _this.afAuth.auth.currentUser.uid;
                    var counter = 0;
                    var foundFlag;
                    for (var i = 0; i < findUsersDataLength; i++) {
                        foundFlag = 0;
                        for (var n = 0; n < findFriendsIdsLength; n++) {
                            if (_this.findUsersData[i].id === _this.friendsIds[n] || _this.findUsersData[i].id === id) {
                                foundFlag = 1;
                            }
                        }
                        if (!foundFlag) {
                            _this.usersData[counter] = _this.findUsersData[i];
                            counter++;
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    FriendsPage.prototype.setFilteredItems = function () {
        console.log(this.searchTerm);
        var search = this.filterItems(this.searchTerm);
        console.log(search);
    };
    FriendsPage.prototype.filterItems = function (searchTerm) {
        console.log(searchTerm);
        return this.usersData.filter(function (user) {
            console.log(user.fname.toLowerCase());
            // return user.fname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    FriendsPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__["PostCrudService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
    ]; };
    FriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-list',
            template: __webpack_require__(/*! raw-loader!./friends.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/friends/friends.page.html"),
            styles: [__webpack_require__(/*! ./friends.page.scss */ "./src/app/pages/friends/friends.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__["PostCrudService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], FriendsPage);
    return FriendsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-friends-friends-module-es5.js.map