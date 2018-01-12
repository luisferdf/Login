webpackJsonp([6],{

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarVideoPageModule", function() { return CargarVideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cargar_video__ = __webpack_require__(986);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CargarVideoPageModule = (function () {
    function CargarVideoPageModule() {
    }
    return CargarVideoPageModule;
}());
CargarVideoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cargar_video__["a" /* CargarVideoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cargar_video__["a" /* CargarVideoPage */]),
        ],
    })
], CargarVideoPageModule);

//# sourceMappingURL=cargar-video.module.js.map

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargarVideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_rest_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(496);
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
 * Generated class for the CargarVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CargarVideoPage = (function () {
    function CargarVideoPage(navCtrl, transfer, file, filePath, camera, fileChooser, platform, actionSheetCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.camera = camera;
        this.fileChooser = fileChooser;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    CargarVideoPage.prototype.takePhoto = function () {
        var _this = this;
        this.camera.getPicture().then(function (imageData) {
            _this.imageURL = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    CargarVideoPage.prototype.upload = function () {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'file',
            fileName: 'filename.jpg',
            params: {}
        };
        fileTransfer.upload(this.imageURL, encodeURI("http://192.168.1.116:8080/viucab/Resources/uploadImage"), options)
            .then(function (data) {
            // success
            alert("Image send:" + _this.imageURL);
        }, function (err) {
            // error
            alert("err: " + JSON.stringify(err));
        });
    };
    return CargarVideoPage;
}());
CargarVideoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cargar-video',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\cargar-video\cargar-video.html"*/'<!--\n\n  Generated template for the CargarVideoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n\n\n  <ion-content padding>\n\n    <img src="{{pathForImage(lastImage)}}" style="width: 100%" [hidden]="lastImage === null">\n\n    <h3 [hidden]="lastImage !== null">Please Select Image!</h3>\n\n  </ion-content>\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>cargar-video</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-buttons>\n\n      <button ion-button icon-left (click)="takePhoto()">\n\n        <ion-icon name="camera"></ion-icon>Select Image\n\n      </button>\n\n      <button ion-button icon-left (click)="upload()" >\n\n        <ion-icon name="cloud-upload"></ion-icon>Upload\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\cargar-video\cargar-video.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__["a" /* FileChooser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
], CargarVideoPage);

//# sourceMappingURL=cargar-video.js.map

/***/ })

});
//# sourceMappingURL=6.js.map