webpackJsonp([5],{

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfocargarvideoPageModule", function() { return InfocargarvideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infocargarvideo__ = __webpack_require__(985);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfocargarvideoPageModule = (function () {
    function InfocargarvideoPageModule() {
    }
    return InfocargarvideoPageModule;
}());
InfocargarvideoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__infocargarvideo__["a" /* InfocargarvideoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__infocargarvideo__["a" /* InfocargarvideoPage */]),
        ],
    })
], InfocargarvideoPageModule);

//# sourceMappingURL=infocargarvideo.module.js.map

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfocargarvideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(186);
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
 * Generated class for the InfocargarvideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfocargarvideoPage = (function () {
    function InfocargarvideoPage(navCtrl, navParams, camera, toastCtrl, http, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imageUrl = '';
    }
    /*tomarFoto(){
      this.camera.getPicture(this.options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.imageUrl=imageData;
        this.presentToast(this.imageUrl);
        let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
    }*/
    InfocargarvideoPage.prototype.uploadImagen = function () {
        var fd = new FormData();
        fd.append('titulo', "titulo");
        fd.append('data', this.cameraData);
        var reqOpt;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'multipart/form-data');
        reqOpt = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            titulo: "la senora verga de triana",
        };
        this.presentToast("antes");
        this.http.post("http://192.168.1.116:8080/viucab/Resources/test", fd, reqOpt).subscribe(function (data) {
            console.log(data);
            //this.presentToast(JSON.stringify(data.json()));
        }, function (error) {
            console.log(error);
            //this.presentToast(JSON.stringify(error.json()));
        });
    };
    InfocargarvideoPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraData = 'data:image/jpeg;base64,' + imageData;
            _this.photoTaken = true;
            _this.photoSelected = false;
        }, function (err) {
            // Handle error
        });
    };
    InfocargarvideoPage.prototype.selectFromGallery = function () {
        var _this = this;
        var options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.cameraUrl = 'data:image/jpeg;base64,' + imageData;
            _this.photoSelected = true;
            _this.photoTaken = false;
        }, function (err) {
            // Handle error
        });
    };
    InfocargarvideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfocargarvideoPage');
    };
    InfocargarvideoPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: 'Tomar Foto',
                    handler: function () {
                        //Editar el video
                        _this.openCamera();
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Elegir Foto',
                    handler: function () {
                        _this.selectFromGallery();
                        console.log(' clicked');
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    InfocargarvideoPage.prototype.presentToast = function (msg) {
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
    return InfocargarvideoPage;
}());
InfocargarvideoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-infocargarvideo',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\infocargarvideo\infocargarvideo.html"*/'<!--\n\n  Generated template for the InfovideoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="morado2">\n\n    <ion-title>infocargarvideo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n      <img [src]="(cameraData)" *ngIf="photoTaken">\n\n      <img [src]="(cameraUrl)" *ngIf="photoSelected">\n\n      <ion-list>\n\n      <ion-item>\n\n        <button (click)="presentActionSheet()" large>\n\n          <ion-icon name="camera" color="primary"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n      <ion-item >\n\n        <ion-label stacked>Titulo</ion-label>\n\n        <ion-input type="text" placeholder="Titulo"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item >\n\n        <ion-label stacked>Descripcion</ion-label>\n\n        <ion-input type="text" placeholder="Descripcion"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label stacked>Tags</ion-label>\n\n          <ion-input type="text" placeholder="*etiqueta1 *etiqueta2"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label>Categoria</ion-label>\n\n          <ion-select [(ngModel)]="categories1" multiple="false">\n\n            <ion-option value="c1">Terror</ion-option>\n\n            <ion-option value="c2">Accion</ion-option>\n\n            <ion-option value="c3">Video Juegos</ion-option>\n\n            <ion-option value="c4">Sexo</ion-option>\n\n            <ion-option value="c5">Musica</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-item>\n\n      <button ion-button >Enviar</button>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\infocargarvideo\infocargarvideo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], InfocargarvideoPage);

//# sourceMappingURL=infocargarvideo.js.map

/***/ })

});
//# sourceMappingURL=5.js.map