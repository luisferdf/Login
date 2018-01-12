webpackJsonp([1],{

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistPageModule", function() { return PlaylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist__ = __webpack_require__(989);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlaylistPageModule = (function () {
    function PlaylistPageModule() {
    }
    return PlaylistPageModule;
}());
PlaylistPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__playlist__["a" /* PlaylistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__playlist__["a" /* PlaylistPage */]),
        ],
    })
], PlaylistPageModule);

//# sourceMappingURL=playlist.module.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_list_view_list__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_list_add_list__ = __webpack_require__(188);
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
 * Generated class for the ListasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlaylistPage = (function () {
    //constructor de todo
    function PlaylistPage(events, api, navCtrl, navParams, popoverCtrl, alertCtrl) {
        var _this = this;
        this.events = events;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.userid = 4;
        this.ListasDeReproduccion = [];
        this.VideosDeLista = [];
        this.events.subscribe('reloadPlaylists', function () {
            //call methods to refresh content
            console.log("RELOADEA");
            _this.getPlaylists(); //obtiene las listas
        });
        this.events.subscribe('deletePlaylist', function (data) {
            //call methods to refresh content
            console.log("BORRAR LISTA", data);
            _this.IdListaBorrar = data.id;
            _this.presentConfirm("Hey", "Estas seguro de querer eliminar esta lista?");
        });
    }
    PlaylistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListasPage');
        this.tab = 'mias';
        console.log("ENtre a playlist");
        this.getPlaylists();
    };
    //metodo para presentar una alerta
    PlaylistPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle
        });
        alert.present();
    };
    //metodo para presentar una confirmacion o cancelacion
    PlaylistPage.prototype.presentConfirm = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        console.log('delete clicked');
                        _this.deletePlayList();
                    }
                }
            ]
        });
        alert.present();
    };
    //metodo para eliminar una lista
    PlaylistPage.prototype.deletePlayList = function () {
        var _this = this;
        this.api.geta('playlist/deletePlaylist?lis_rep_id=' + this.IdListaBorrar).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                _this.getPlaylists();
            }
            else if (data.json() == false) {
                _this.presentAlert("Ups", "La lista no puedo ser eliminada");
                console.log("Lista no puede ser eliminada");
            }
        }, function (error) {
            console.error(error);
        });
    };
    //metodo para obtener las listas
    PlaylistPage.prototype.getPlaylists = function () {
        var _this = this;
        this.api.geta('playlist/getAllPlaylist?id_usu=' + this.userid).subscribe(function (data) {
            console.log(data.json());
            _this.ListasDeReproduccion = data.json();
        }, function (error) {
            console.error(error);
        });
    };
    //popover
    PlaylistPage.prototype.presentPopover = function (myEvent, lista) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__["a" /* PopOverListasReproduccionPage */], { listapopover: lista });
        popover.present({
            ev: myEvent
        });
    };
    //metodo para ver una lista
    PlaylistPage.prototype.goToViewList = function (id, name) {
        var _this = this;
        console.log("Lista que vere", id, name);
        this.api.geta('playlist/getVideosFromPlaylist?lis_rep_id=' + id).subscribe(function (data) {
            console.log(data.json());
            _this.VideosDeLista = data.json();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_list_view_list__["a" /* ViewListPage */], { VideosDeLista: _this.VideosDeLista, NombreLista: name, IdLista: id });
        }, function (error) {
            console.error(error);
        });
    };
    //metodo para agregar una lista
    PlaylistPage.prototype.goToAddList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_list_add_list__["a" /* AddListPage */], { listasAdd: this.ListasDeReproduccion });
    };
    return PlaylistPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */])
], PlaylistPage.prototype, "nav", void 0);
PlaylistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-playlist',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\playlist.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n\n\n      <ion-buttons class=\'centrado-porcentual\'>\n\n        <button>\n\n          <ion-icon name="videocam" color="primary"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      Listas de Reproducción\n\n\n\n\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n  <div>\n\n    <ion-segment [(ngModel)]="tab">\n\n      <ion-segment-button value="mias">\n\n        MIAS\n\n      </ion-segment-button>\n\n      <ion-segment-button value="sugeridas">\n\n        SUGERIDAS\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <!-- <button ion-button (click)="goToEditList()">Editar</button>\n\n\n\n -->\n\n\n\n\n\n\n\n<div [ngSwitch]="tab">\n\n  <ion-list *ngSwitchCase="\'mias\'">\n\n\n\n    <button ion-button (click)="goToAddList()" >Agregar Lista</button>\n\n\n\n    <ion-item *ngFor="let lista of ListasDeReproduccion" >\n\n      <ion-thumbnail item-start id="List-img">\n\n        <img [src]="lista.urlImg">\n\n      </ion-thumbnail>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10 class="nopadding" (click)="goToViewList(lista.idLista,lista.nombre)">\n\n            <ion-row >\n\n              <div class="ellipsis">\n\n                <span class="List-title">{{lista.nombre}}</span>\n\n              </div>\n\n\n\n            </ion-row>\n\n            <ion-row>\n\n              <span class="List-amount">{{lista.numReproducciones}} plays</span>\n\n            </ion-row>\n\n            <ion-row>\n\n              <span class="List-duration">{{lista.fechaCreacion}}</span>\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-2 class="nopadding" align="right">\n\n            <ion-icon class="f15 color-grey" (click)="presentPopover($event,lista)"  ios="ios-more" md="md-more"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list no-lines *ngSwitchCase="\'sugeridas\'">\n\n\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <ion-icon name="american-football" class="grande"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-9 class="paddingtop15">\n\n            <h1>Deportes</h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <ion-icon name="game-controller-b" class="grande"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-9 class="paddingtop15">\n\n            <h1>Videojuegos</h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <ion-icon ios="ios-musical-notes" md="md-musical-notes" class="grande"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-9 class="paddingtop15">\n\n            <h1>Música</h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <ion-icon name="happy" class="grande"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-9 class="paddingtop15">\n\n            <h1>Comedia</h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>\n\n            <ion-icon name="color-palette" class="grande"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-9 class="paddingtop15">\n\n            <h1>Arte</h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\playlist.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PlaylistPage);

//# sourceMappingURL=playlist.js.map

/***/ })

});
//# sourceMappingURL=1.js.map