(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gymmembers-gymmembers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gymmembers/gymmembers.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gymmembers/gymmembers.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-content overflow-scroll=\"true\">\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n        <ion-content>\n          <ion-list>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/feed\">Feed</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/profile\">Profile</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym-admin/{{gymID}}\">Gym Admin</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n                <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-list>\n        </ion-content>\n      </ion-menu>\n      <div id=\"main\">\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <a href=\"user/feed\">\n              <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n              </a>\n          </ion-toolbar>\n        </ion-header>\n      </div>   \n    <main>\n      <section>\n        <p>Current Members</p>\n        <ion-list class=\"friends\" *ngIf=\"friendsReady\">\n          <ion-item *ngFor =\"let friend of friendsData\">\n            <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+friend.image+')'}\"></div>\n              <p>{{friend.fname}} {{friend.lname}}</p>\n              <ion-button *ngIf=\"adminFlag\" (click)=\"removeFriend(friend.id)\">Remove Member</ion-button>\n          </ion-item> \n        </ion-list>\n      </section>\n    </main>\n  </ion-content>\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/gymmembers/gymmembers-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/gymmembers/gymmembers-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: GymMembersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymMembersPageRoutingModule", function() { return GymMembersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gymmembers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gymmembers.page */ "./src/app/pages/gymmembers/gymmembers.page.ts");




var routes = [
    {
        path: '',
        component: _gymmembers_page__WEBPACK_IMPORTED_MODULE_3__["GymMembersPage"]
    }
];
var GymMembersPageRoutingModule = /** @class */ (function () {
    function GymMembersPageRoutingModule() {
    }
    GymMembersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GymMembersPageRoutingModule);
    return GymMembersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/gymmembers/gymmembers.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/gymmembers/gymmembers.module.ts ***!
  \*******************************************************/
/*! exports provided: GymMembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymMembersPageModule", function() { return GymMembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gymmembers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gymmembers-routing.module */ "./src/app/pages/gymmembers/gymmembers-routing.module.ts");
/* harmony import */ var _gymmembers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gymmembers.page */ "./src/app/pages/gymmembers/gymmembers.page.ts");







var GymMembersPageModule = /** @class */ (function () {
    function GymMembersPageModule() {
    }
    GymMembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _gymmembers_routing_module__WEBPACK_IMPORTED_MODULE_5__["GymMembersPageRoutingModule"]
            ],
            declarations: [_gymmembers_page__WEBPACK_IMPORTED_MODULE_6__["GymMembersPage"]]
        })
    ], GymMembersPageModule);
    return GymMembersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/gymmembers/gymmembers.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/gymmembers/gymmembers.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.nav {\n  width: 32%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\np {\n  color: white;\n  text-align: center;\n}\n\n.friends p {\n  max-width: calc(100% - 200px);\n}\n\n.friends ion-button {\n  position: absolute;\n  right: 10px;\n}\n\n.friends .imageBg {\n  height: 75px;\n  width: 75px;\n  background-size: cover;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  background-position: 50% 50%;\n}\n\n.searchbar-left-aligned {\n  --color: #ffffff !important;\n}\n\n.searchbar-left-aligned .searchbar-search-icon {\n  color: #ffffff !important;\n}\n\n#main {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9neW1tZW1iZXJzL2d5bW1lbWJlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9neW1tZW1iZXJzL2d5bW1lbWJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUU7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ047O0FERUM7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDSDs7QURJSTtFQUNFLDZCQUFBO0FDRE47O0FER0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNETjs7QURJSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDRk47O0FETUM7RUFDRSwyQkFBQTtBQ0hIOztBREtHO0VBQ0UseUJBQUE7QUNITDs7QURPQztFQUNDLGlCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9neW1tZW1iZXJzL2d5bW1lbWJlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6d2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG4gIH1cblxuICAucHJvZmlsZUltYWdlMiB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDU1JTtcblxuICB9XG4gIC5uYXZ7XG4gICAgd2lkdGg6IDMyJTtcbiAgfVxuXG4gIC5uYXZNZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBcbiAgICBpb24tbGlzdCB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiBwIHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gXG5cbiAgLmZyaWVuZHMge1xuICAgIHAge1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XG4gICAgfSBcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5pbWFnZUJnIHtcbiAgICAgIGhlaWdodDogNzVweDtcbiAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgfVxuICB9XG5cbiAuc2VhcmNoYmFyLWxlZnQtYWxpZ25lZCB7XG4gICAtLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG5cbiAgIC5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xuICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgfVxuIH1cblxuICNtYWluIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59IiwiLnByb2ZpbGVJbWFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAycHggNnB4IGJsYWNrO1xufVxuXG4ucHJvZmlsZUltYWdlMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5uYXYge1xuICB3aWR0aDogMzIlO1xufVxuXG4ubmF2TWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cbi5uYXZNZW51IGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZnJpZW5kcyBwIHtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XG59XG4uZnJpZW5kcyBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbn1cbi5mcmllbmRzIC5pbWFnZUJnIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cblxuLnNlYXJjaGJhci1sZWZ0LWFsaWduZWQge1xuICAtLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoYmFyLWxlZnQtYWxpZ25lZCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuI21haW4ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/gymmembers/gymmembers.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/gymmembers/gymmembers.page.ts ***!
  \*****************************************************/
/*! exports provided: GymMembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymMembersPage", function() { return GymMembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/firestore-api.service */ "./src/app/services/firestore-api.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");








var GymMembersPage = /** @class */ (function () {
    function GymMembersPage(auth, postCrudService, db, storage, route, afAuth) {
        this.auth = auth;
        this.postCrudService = postCrudService;
        this.db = db;
        this.storage = storage;
        this.route = route;
        this.afAuth = afAuth;
        this.friendsIds = {};
        this.friendsData = [];
        this.friendsCounter = 0;
        this.findUsersData = {};
        this.usersData = [];
        this.searchTerm = {};
        this.findFriends = false;
        this.friendsReady = false;
        this.toggleFindFriendsFlag = false;
        this.adminFlag = false;
    }
    GymMembersPage.prototype.ngOnInit = function () {
        this.gymID = this.route.snapshot.params.id;
        this.getGymMembers();
    };
    GymMembersPage.prototype.findFriendsToggle = function () {
        if (this.findFriends === false) {
            this.findFriends = true;
            this.toggleFindFriendsFlag = true;
        }
        else {
            this.findFriends = false;
            this.toggleFindFriendsFlag = false;
        }
    };
    GymMembersPage.prototype.signOut = function () {
        this.auth.signOut();
    };
    GymMembersPage.prototype.getGymMembers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.gymID;
                        return [4 /*yield*/, this.postCrudService.readGymMembersIds(id).subscribe(function (data) {
                                _this.friendsIds = data.payload.data()['Members'];
                                _this.getUserData();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GymMembersPage.prototype.getUserData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var friendsIdsLength, _loop_1, this_1, i;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.friendsData = [];
                        this.friendsCounter = 0;
                        if (!this.isEmpty(this.friendsIds)) {
                            friendsIdsLength = Object.keys(this.friendsIds).length;
                        }
                        else {
                            friendsIdsLength = 0;
                        }
                        _loop_1 = function (i) {
                            var id, friendData;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        id = this_1.friendsIds[i];
                                        return [4 /*yield*/, this_1.db.collection('users')
                                                .doc(id)
                                                .ref
                                                .get().then(function (doc) {
                                                if (doc.exists) {
                                                    var userData = doc.data();
                                                    _this.friendsData[_this.friendsCounter] = userData;
                                                    _this.friendsData[_this.friendsCounter]['id'] = id;
                                                    _this.friendsCounter++;
                                                    if (friendsIdsLength === _this.friendsCounter) {
                                                        _this.friendsReady = true;
                                                    }
                                                }
                                                else {
                                                    console.log('No such document!');
                                                }
                                            })];
                                    case 1:
                                        friendData = _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < friendsIdsLength)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
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
    GymMembersPage.prototype.findUsers = function () {
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
                    var findFriendsIdsLength;
                    if (!_this.isEmpty(_this.friendsIds)) {
                        findFriendsIdsLength = Object.keys(_this.friendsIds).length;
                    }
                    else {
                        findFriendsIdsLength = 0;
                    }
                    var id = _this.gymID;
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
                    _this.findUsersImages();
                });
                return [2 /*return*/];
            });
        });
    };
    GymMembersPage.prototype.findUsersImages = function () {
        // Known friends
        var friendsDataLength = Object.keys(this.friendsData).length;
        for (var i = 0; i < friendsDataLength; i++) {
            this.friendsData[i].image = this.getProfileImage(this.friendsData[i].id, i, 'friendsData');
        }
        // For the find function
        var usersDataLength = Object.keys(this.usersData).length;
        for (var i = 0; i < usersDataLength; i++) {
            console.log(this.usersData[i]);
            this.usersData[i]['image'] = this.getProfileImage(this.usersData[i].id, i, 'usersData');
        }
    };
    GymMembersPage.prototype.setFilteredItems = function () {
        this.filteredFriends = this.filterItems(this.searchTerm);
    };
    GymMembersPage.prototype.filterItems = function (searchTerm) {
        // If search is empty make sure it empties the list.
        if (searchTerm.txt === '') {
            return [];
        }
        // Filter fname
        var filterFname = this.usersData.filter(function (user) {
            return user.fname.toLowerCase().indexOf(searchTerm.txt.toLowerCase()) > -1;
        });
        // Filter lname
        var filterLname = this.usersData.filter(function (user) {
            return user.lname.toLowerCase().indexOf(searchTerm.txt.toLowerCase()) > -1;
        });
        // Merge the 2 filter objects.
        return this.arrayUnique(filterFname.concat(filterLname)); // [...filterFname, ...filterLname];
    };
    GymMembersPage.prototype.getProfileImage = function (id, index, resultArray) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ref, profileImage;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ref = this.storage.ref(id + '/image/profileImage');
                profileImage = ref.getDownloadURL();
                profileImage.subscribe(function (result) {
                    if (resultArray === 'usersData') {
                        _this.usersData[index]['image'] = result;
                    }
                    else {
                        _this.friendsData[index]['image'] = result;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    GymMembersPage.prototype.removeFriend = function (friendId) {
        var id = this.gymID;
        this.postCrudService.removeGymMember(id, friendId);
        // console.log(resp);
        for (var i = 0; i < this.friendsData.length; i++) {
            if (this.friendsData[i].id === friendId) {
                this.friendsData.splice(i, 1);
            }
        }
    };
    GymMembersPage.prototype.addFriend = function (friendId) {
        var id = this.gymID;
        this.postCrudService.updateFriend(id, friendId);
    };
    // Utility function to add 2 arrays uniquely
    GymMembersPage.prototype.arrayUnique = function (array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j]) {
                    a.splice(j--, 1);
                }
            }
        }
        return a;
    };
    GymMembersPage.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    };
    GymMembersPage.prototype.getGymData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, userData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.afAuth.auth.currentUser.uid;
                        return [4 /*yield*/, this.db.collection('gyms')
                                .doc(this.gymID)
                                .ref
                                .get().then(function (doc) {
                                if (doc.exists) {
                                    // this.gymData = doc.data().name;
                                    // this.gymAdminID = doc.id;
                                    if (doc.data().admins.includes(id)) {
                                        _this.adminFlag = true;
                                    }
                                    else {
                                        // this.gymMemberFlag = true;
                                    }
                                }
                                else {
                                    // this.gymFlag = false;
                                    // this.noGymFlag = true;
                                }
                            })];
                    case 1:
                        userData = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GymMembersPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__["PostCrudService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] }
    ]; };
    GymMembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-list',
            template: __webpack_require__(/*! raw-loader!./gymmembers.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/gymmembers/gymmembers.page.html"),
            styles: [__webpack_require__(/*! ./gymmembers.page.scss */ "./src/app/pages/gymmembers/gymmembers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__["PostCrudService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])
    ], GymMembersPage);
    return GymMembersPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-gymmembers-gymmembers-module-es5.js.map