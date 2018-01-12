webpackJsonp([4],{

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfovideoPageModule", function() { return InfovideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infovideo__ = __webpack_require__(987);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfovideoPageModule = (function () {
    function InfovideoPageModule() {
    }
    return InfovideoPageModule;
}());
InfovideoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__infovideo__["a" /* InfovideoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__infovideo__["a" /* InfovideoPage */]),
        ],
    })
], InfovideoPageModule);

//# sourceMappingURL=infovideo.module.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfovideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(187);
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
 * Generated class for the InfovideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfovideoPage = (function () {
    function InfovideoPage(navCtrl, navParams, camera, actionSheetCtrl, httpClient, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.URL = 'http://192.168.1.116:8080/';
        this.image = null;
        this.update = {
            titulo: '',
            descripcion: ''
        };
    }
    InfovideoPage.prototype.ngOnInit = function () {
        this.initializeItems();
    };
    InfovideoPage.prototype.initializeItems = function () {
        this.items = [{
                _id: this.navParams.get('_id'),
                _titulo: this.navParams.get('_titulo'),
                _descripcion: this.navParams.get('_descripcion'),
                _imagen: this.navParams.get('_imagen'),
            }];
        this.update.titulo = this.navParams.get('_titulo');
        this.update.descripcion = this.navParams.get('_descripcion');
    };
    InfovideoPage.prototype.updateVideo = function () {
        var _this = this;
        this.id = this.items[0]._id;
        this.titulo = this.update.titulo;
        this.descripcion = this.descripcion;
        this.imagen = this.items[0]._imagen;
        this.obs = this.httpClient.get('http://192.168.1.116:8080/viucab/Video/update?titulo=' + this.update.titulo + '&descripcion=' + this.update.descripcion + '&videoId=' + this.id);
        this.obs
            .subscribe(function (data) {
            if (data = 1) {
                _this.presentToast("Video modificado exitosamente");
                _this.navCtrl.pop();
            }
            else
                _this.presentToast("Error al modificar video");
            console.log('my data: ', data);
        });
    };
    InfovideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfovideoPage');
    };
    InfovideoPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return InfovideoPage;
}());
InfovideoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-infovideo',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\infovideo\infovideo.html"*/'<!--\n\n  Generated template for the InfovideoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="morado2">\n\n    <ion-title>infovideo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img *ngFor="let item of items" src="{{URL}}image/{{item._imagen}}">\n\n\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of items">\n\n        <ion-label stacked>Titulo</ion-label>\n\n        <ion-input type="text" [(ngModel)]="update.titulo"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item *ngFor="let item of items">\n\n        <ion-label stacked>Descripcion</ion-label>\n\n        <ion-input type="text" [(ngModel)]="update.descripcion"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button ion-button (click)="updateVideo()">Enviar</button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\infovideo\infovideo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
], InfovideoPage);

//# sourceMappingURL=infovideo.js.map

/***/ })

});
//# sourceMappingURL=4.js.map