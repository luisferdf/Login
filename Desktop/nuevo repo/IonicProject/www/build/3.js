webpackJsonp([3],{

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisVideosPageModule", function() { return MisVideosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_videos__ = __webpack_require__(988);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MisVideosPageModule = (function () {
    function MisVideosPageModule() {
    }
    return MisVideosPageModule;
}());
MisVideosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mis_videos__["a" /* MisVideosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mis_videos__["a" /* MisVideosPage */]),
        ],
    })
], MisVideosPageModule);

//# sourceMappingURL=mis-videos.module.js.map

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisVideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HTTP } from '@ionic-native/http';
/**
 * Generated class for the MisVideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisVideosPage = (function () {
    function MisVideosPage(navCtrl, navParams, alertCtrl, actionSheetCtrl, api, toastCtrl, httpClient, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.httpClient = httpClient;
        this.http = http;
        this.buscarQuery = '';
        this.errorMessage = '';
        //this.presentToast("antes llamada");
        /*this.subscription = this.api.getVideos('Video/getAll?userId=1')
          .subscribe(this.data,
          error => this.errorMessage = error);
        this.errorMessage = '';
        this.presentToast(this.data);*/
        /*this.api.getVideos('Video/getAll?userId=1').subscribe((data) => {
        
        this.items.push(data);
        });*/
        //this.presentToast("Depsues llamada"+this.items[0]);
        //this.initializeItems();
    }
    MisVideosPage.prototype.ngOnInit = function () {
        this.initializeItems();
    };
    /*
        _titulo: '',
          _descripcion: '',
          _id: '0',
          _imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa',
          _url: '',
          _fecha: '',
          _visitas: ''
    */
    MisVideosPage.prototype.presionado = function () {
        var _this = this;
        this.films = this.httpClient.get('http://192.168.1.116:8080/viucab/Video/getAll?userId=1');
        this.films
            .subscribe(function (data) {
            console.log('my data: ', data);
            _this.items = data;
            _this.presentToast(_this.items[0]['_id']);
        });
    };
    MisVideosPage.prototype.updateImagen = function () {
        var fd = new FormData();
        fd.append('titulo', "titulo");
        var reqOpt;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'multipart/form-data');
        headers.append('accept-encoding', 'gzip');
        reqOpt = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
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
    /*this.presentToast("entro");
    let data = {
        "titulo": "la senora verga de triana",
        "descripcion": "penetones",
        "oldImgUrl":"ooolaksjdo",
        "videoId": "42",
    }
    this.json = this.apix.postTodovid('http://192.168.1.116:8080/viucab/Video',data,'');
    this.presentToast(this.json);
    //let files = event.srcElement.files;
    //this.form.append("0",files,"imagen.jpg");
    //this.form.append("data", JSON.stringify(data));
    /*this.form.append('titulo',"la senora verga de triana");
    this.form.append('descripcion',"penetones");
    this.form.append('oldImgUrl',"ooolaksjdo");
    this.form.append('videoId',"42");*/
    //this.form.append('data', JSON.stringify(data));
    //this.presentToast("prepeticion");
    //this.httpClient.post('http://192.168.1.116:8080/viucab/Video', JSON.stringify(data)).map(res => res).subscribe(data => {
    //this.presentToast("respuesta" + data);
    //});
    //this.httpClient.post("http://192.168.1.116:8080/viucab/Video", this.form).subscribe(
    //(r) => { this.presentToast("respuesta"+r) }
    //)*/
    MisVideosPage.prototype.initializeItems = function () {
        {
            this.items = [{
                    nombre: 'Marty',
                    suscritos: '133',
                    color: this.color,
                    estado: 'Suscrito',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa'
                },
                {
                    nombre: 'Martin',
                    suscritos: '133',
                    color: this.color,
                    estado: 'Suscrito',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa'
                }];
        }
    };
    MisVideosPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: 'Editar',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'idVideo',
                    role: 'destructive',
                    handler: function () {
                        //Llamada al ws para eliminar el videin
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    MisVideosPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 15000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MisVideosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MisVideosPage');
    };
    return MisVideosPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */])
], MisVideosPage.prototype, "nav", void 0);
MisVideosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mis-videos',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\mis-videos\mis-videos.html"*/'<!--\n\n  Generated template for the MisVideosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="morado2">\n\n    <ion-title>Mis Videos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-item>\n\n    <button ion-button icon-left clear small (click)="presionado()">presionameeeee</button>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <button ion-button icon-left clear small (click)="updateImagen()">subilalalalla</button>\n\n  </ion-item>\n\n \n\n  <ion-item>\n\n    <input type="file" (change)="updateImagen($event)" style="display:none" multiple/>\n\n    <a mat-raised-button color="primary">\n\n      <ion-icon name="eye"></ion-icon>\n\n      Select Documents\n\n    </a>\n\n  </ion-item>\n\n  <ion-card *ngFor="let item of items">\n\n  \n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/marty-avatar.png">\n\n      </ion-avatar>\n\n  \n\n      <h2>{{item.usuario}}</h2>\n\n      <!--Nombre de usuario-->\n\n      <p>{{item.fecha}}</p>\n\n      <!--fecha-->\n\n  \n\n    </ion-item>\n\n  \n\n    <img src="assets/imgs/advance-card-bttf.png">\n\n  \n\n    <ion-card-content>\n\n      <p>{{item.nombre}}</p>\n\n      <!--Titulo del video-->\n\n    </ion-card-content>\n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="eye"></ion-icon>\n\n          <div>{{item.visitas}} visita/as</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col align="right">\n\n        <button ion-button icon-only clear small (click)="presentActionSheet()">\n\n          <ion-icon name="more"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\mis-videos\mis-videos.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], MisVideosPage);

//# sourceMappingURL=mis-videos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map