webpackJsonp([7],{

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarvideoPageModule", function() { return AgregarvideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregarvideo__ = __webpack_require__(984);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgregarvideoPageModule = (function () {
    function AgregarvideoPageModule() {
    }
    return AgregarvideoPageModule;
}());
AgregarvideoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__agregarvideo__["a" /* AgregarvideoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agregarvideo__["a" /* AgregarvideoPage */]),
        ],
    })
], AgregarvideoPageModule);

//# sourceMappingURL=agregarvideo.module.js.map

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarvideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media_capture__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AgregarvideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregarvideoPage = (function () {
    function AgregarvideoPage(navCtrl, navParams, camera, mediaCapture) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.mediaCapture = mediaCapture;
        this.imageUrl = '';
    }
    AgregarvideoPage.prototype.startrecording = function () {
        var _this = this;
        var options = { limit: 1 };
        this.mediaCapture.captureVideo(options).then(function (data) { return _this.cargarVideo(); }, function (err) { return console.error(err); });
    };
    AgregarvideoPage.prototype.selectFromGallery = function () {
        var _this = this;
        var options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.VIDEO
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraUrl = 'data:image/jpeg;base64,' + imageData;
            _this.photoSelected = true;
            _this.photoTaken = false;
            _this.cargarVideo();
        }, function (err) {
            // Handle error
        });
    };
    AgregarvideoPage.prototype.cargarVideo = function () {
        this.navCtrl.push('InfocargarvideoPage');
    };
    AgregarvideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarvideoPage');
    };
    return AgregarvideoPage;
}());
AgregarvideoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-agregarvideo',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\agregarvideo\agregarvideo.html"*/'<!--\n\n  Generated template for the AgregarvideoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Cargar Video</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-item >\n\n    <button ion-button icon-start (click)="startrecording()">\n\n      <ion-icon name="camera"></ion-icon>\n\n      Grabar Video\n\n    </button>\n\n  </ion-item>\n\n  <ion-item>\n\n    <button ion-button icon-start (click)="selectFromGallery()">\n\n      <ion-icon name="folder"></ion-icon>\n\n      Elegir Video\n\n    </button>\n\n  </ion-item>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\agregarvideo\agregarvideo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_media_capture__["a" /* MediaCapture */]])
], AgregarvideoPage);

//# sourceMappingURL=agregarvideo.js.map

/***/ })

});
//# sourceMappingURL=7.js.map