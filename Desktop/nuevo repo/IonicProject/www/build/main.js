webpackJsonp([30],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__olvidar_contrase_a_olvidar_contrase_a__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registrarse_registrarse__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homecable_homecable__ = __webpack_require__(149);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//
var LoginPage = (function () {
    function LoginPage(fire, navCtrl, navParams, alertCtrl, formBuilder) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.myForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/)]]
        });
    }
    LoginPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    //Funcion que nos permite validar los usuaios que ya estan registrados en el sistema por firebase
    LoginPage.prototype.IniciarS = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.usu.value, this.passw.value)
            .then(function (data) {
            console.log('agarra la data', _this.fire.auth.currentUser);
            _this.alert('Exito! tu te logeaste');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__homecable_homecable__["a" /* HomecablePage */]);
            //el usuario es logeado
        })
            .catch(function (error) {
            console.log('encontramos error', error);
            _this.alert(error.message);
        });
        console.log('Iniciar sesion con', this.usu.value, this.passw.value);
        // console.log(this.usu.value, this.passw.value)
        // -------codigo para validacion-----
        /*
      if(this.usu.value == "luis" && this.passw.value == "admin"){
        let alert = this.alertCtrl.create({
    
          title: 'Logeaste correctamentes',
          subTitle: 'Excelente!',
          buttons: ['OK']
        
        });
        alert.present();
        this.navCtrl.push(HomecablePage);
      }else{
    
        let alert = this.alertCtrl.create({
          
              title: 'ERROR!!!',
              subTitle: 'Usuario o contraseña incorrectas!',
              buttons: ['OK']
            
            });
            alert.present();
    
      }*/
    };
    LoginPage.prototype.goPaginaOlvidarcontra = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__olvidar_contrase_a_olvidar_contrase_a__["a" /* OlvidarContraseñaPage */]);
    };
    LoginPage.prototype.goPaginaRegistrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registrarse_registrarse__["a" /* RegistrarsePage */]);
        {
        }
    };
    //Funcion mostrar confirmacion
    LoginPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('email'),
    __metadata("design:type", Object)
], LoginPage.prototype, "usu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('password'),
    __metadata("design:type", Object)
], LoginPage.prototype, "passw", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n  <ion-navbar color="primary">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- <ion-input formControlName="name" type="text" ></ion-input>-->\n\n\n\n<ion-content padding >\n\n  <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate> \n\n    \n\n      <ion-img width="200" height="200" class="center" src="assets/imgs/Logo1.png"></ion-img>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-icon name="mail" item-start></ion-icon>\n\n        <ion-label floating>Correo electronico</ion-label>\n\n        <ion-input formControlName="email" type="email" value="" #Usuario></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon name="eye" item-start></ion-icon>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input formControlName="password" type="password" value="" #Contraseña></ion-input>    \n\n      </ion-item>\n\n\n\n    </ion-list>\n\n    \n\n    <div padding>\n\n        <button ion-button block type="submit"  clear (click)=\'IniciarS()\' >Iniciar sesion</button>\n\n    </div>\n\n    <div padding>\n\n        <button ion-button block clear (click)=\'goPaginaRegistrar()\'  >Crear una cuenta</button>\n\n    </div>\n\n    <div padding>\n\n        <button ion-button block clear (click)=\'goPaginaOlvidarcontra()\'  >Olvidaste tu contraseña ?</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__ = __webpack_require__(39);
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
 * Generated class for the EditListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditListPage = (function () {
    function EditListPage(navCtrl, navParams, api, alertCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.Lista = this.navParams.get('ListaEdit');
        console.log(this.Lista);
        this.nombreLista = this.Lista.nombre;
        this.descripcionLista = this.Lista.descripcion;
    }
    EditListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditListPage');
    };
    /*
      presentAlert(title,subTitle) {
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: subTitle
        });
        alert.present();
      }*/
    EditListPage.prototype.guardarLista = function () {
        var _this = this;
        this.api.geta('playlist/editPlaylist?lis_rep_id=' + this.Lista.idLista + '&lis_rep_nombre=' + this.nombreLista +
            '&lis_rep_descripcion=' + this.descripcionLista + '&list_rep_img=' + this.Lista.urlImg).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                // this.presentAlert("Exito","Lista editada");
                _this.events.publish('reloadPlaylists');
                _this.navCtrl.pop();
            }
        }, function (error) {
            console.error(error);
        });
    };
    return EditListPage;
}());
EditListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edit-list',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\edit-list\edit-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n        <ion-row>\n\n            <ion-col col-10 class="nopadding">\n\n                Editar {{Lista.nombre}}\n\n   \n\n            </ion-col>\n\n            <ion-col col-2 class="nopadding" align="right">\n\n                <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nombre de la Lista</ion-label>\n\n      <ion-input type="text" [(ngModel)]="nombreLista"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Descripcion</ion-label>\n\n      <ion-textarea [(ngModel)]="descripcionLista"></ion-textarea>\n\n    </ion-item>\n\n\n\n\n\n  </ion-list>\n\n\n\n\n\n      <button (click)="guardarLista()" class="botonGuardarEditado" ion-button color="light">GUARDAR</button>\n\n\n\n  \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\edit-list\edit-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
], EditListPage);

//# sourceMappingURL=edit-list.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomecablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomecablePage = (function () {
    function HomecablePage(fire, navCtrl, navParams, app) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        //
        this.email = fire.auth.currentUser.email;
    }
    HomecablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomecablePage');
    };
    //
    /**
  Se usa para devolverte a una pagina
   */
    HomecablePage.prototype.logout = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    return HomecablePage;
}());
HomecablePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-homecable',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\homecable\homecable.html"*/'<!--\n\n  Generated template for the HomecablePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>HOMEEEEE</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n   {{email}}\n\n    <!--    <button ion-button block outline (click)="logout()" >lOG OUT</button>\n\n  -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\homecable\homecable.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], HomecablePage);

//# sourceMappingURL=homecable.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionNotificacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'Notificaciones/configuracion';
var ConfiguracionNotificacionesPage = (function () {
    function ConfiguracionNotificacionesPage(navCtrl, navParams, restApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restApi = restApi;
        this.configuracion = {
            id: 0,
            notificaciones: true,
            boletin: true,
            recomendados: true,
            etiquetados: true,
            subscripciones: true,
            estadisticas: true,
        };
        this.restApi.getTodo(URL).subscribe(function (data) {
            _this.response = data[0];
            _this.configuracion = {
                id: _this.response.id,
                notificaciones: _this.response.activado,
                boletin: _this.response.boletin,
                recomendados: _this.response.preferencias,
                etiquetados: _this.response.etiquetados,
                subscripciones: _this.response.subscripciones,
                estadisticas: _this.response.estadisticas,
            };
        });
    }
    ConfiguracionNotificacionesPage.prototype.enableToggle = function (condition) {
        this.configuracion.recomendados = condition;
        this.configuracion.etiquetados = condition;
        this.configuracion.subscripciones = condition;
        this.configuracion.estadisticas = condition;
    };
    ConfiguracionNotificacionesPage.prototype.cambiarNotificaciones = function () {
        this.configuracion.notificaciones = !this.configuracion.notificaciones;
        this.enableToggle(this.configuracion.notificaciones);
    };
    ConfiguracionNotificacionesPage.prototype.guardar = function () {
        var _this = this;
        this.restApi.postUno(URL, 1, JSON.stringify(this.configuracion), 1).subscribe(function (data) {
            _this.response = data;
            console.log(_this.response);
        });
        // this.toast.show(`Guardado con Exito`, '5000', 'bottom').subscribe(
        //   (toast) => {
        //    console.log(toast);
        //    },
        //  );
    };
    return ConfiguracionNotificacionesPage;
}());
ConfiguracionNotificacionesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-configuracion-notificaciones',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\configuracion-notificaciones\configuracion-notificaciones.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n    <ion-title>\n\n      Configuración\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <div id="titulo" class="show-list-numbers-and-dots">\n\n      <strong>\n\n        Configuración de Notificaciones\n\n      </strong>\n\n  </div>\n\n  <form id="configuracion-form">\n\n    <ion-item id="notificaciones">\n\n      <ion-label>\n\n        Notificaciones\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="{{configuracion.notificaciones}}"  (click)="cambiarNotificaciones();" ></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="boletin-toggle">\n\n      <ion-label>\n\n        Boletín Semanal\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="{{configuracion.boletin}}"></ion-toggle>\n\n    </ion-item>\n\n    <div id="mensaje" class="show-list-numbers-and-dots">\n\n        <strong>\n\n          Acepto recibir notificaciones a mi correo electrónico\n\n        </strong>\n\n    </div>\n\n    <ion-item id="recomendados-toggle">\n\n      <ion-label>\n\n        Videos Recomendados\n\n      </ion-label>\n\n    <ion-toggle color="positive" checked="{{configuracion.recomendados}}" disabled="{{!configuracion.notificaciones}}"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="subscripciones-toggle">\n\n      <ion-label>\n\n        Videos de Subscripciones\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="{{configuracion.subscripciones}}" disabled="{{!configuracion.notificaciones}}"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="etiquetados-toggle">\n\n      <ion-label>\n\n        Videos Etiquetados\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="{{configuracion.etiquetados}}" disabled="{{!configuracion.notificaciones}}"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="estadisticas-toggle"> \n\n      <ion-label>\n\n        Estadísticas de Usuario\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="{{configuracion.estadisticas}}"disabled="{{!configuracion.notificaciones}}"></ion-toggle>\n\n    </ion-item>\n\n    <button  (click)="guardar()" ion-button block>Guardar</button>    \n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\configuracion-notificaciones\configuracion-notificaciones.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]])
], ConfiguracionNotificacionesPage);

//# sourceMappingURL=configuracion-notificaciones.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_new_list_create_new_list__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AddListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddListPage = (function () {
    function AddListPage(api, navCtrl, navParams, alertCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ListasDeReproduccion = [];
        this.ListasDeReproduccion = this.navParams.get('listasAdd');
        console.log(this.ListasDeReproduccion);
    }
    AddListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddListPage');
    };
    /*  showAddListPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Crear Lista',
        message: "Introduzca datos de la Lista a crear",
        inputs: [
          {
            name: 'title',
            placeholder: 'Titulo'
          },
          {
            name: 'description',
            placeholder: 'Descripcion'
          }
        ],
  
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }*/
    AddListPage.prototype.goToCreateNewList = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_new_list_create_new_list__["a" /* CreateNewListPage */]);
    };
    AddListPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle
        });
        alert.present();
    };
    AddListPage.prototype.addVideoToList = function (idLista) {
        var _this = this;
        console.log("video agregado a esta lista", idLista);
        this.api.geta('playlist/addVideoToPlaylist?vid_id=' + 1
            + '&?lis_rep_id=' + idLista).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                _this.navCtrl.pop();
            }
            else if (data.json() == false) {
                _this.presentAlert("Ups", "El video no pudo ser agregado a la lista");
            }
        }, function (error) {
            console.error(error);
        });
    };
    return AddListPage;
}());
AddListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-list',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\add-list\add-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-row>\n\n        <ion-col col-10 class="nopadding">\n\n          Agregar a lista\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let lista of ListasDeReproduccion" >\n\n      <ion-grid >\n\n        <ion-row>\n\n            <ion-row >\n\n              <div class="ellipsis">\n\n                <ion-icon name="list" padding-right="30dpx"></ion-icon>\n\n                <span class="List-title-soft">{{lista.nombre}}</span>\n\n              </div>\n\n            </ion-row>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n \n\n    <div class="ellipsis" padding-left="100dpx" padding-top="15dpx" (click)="goToCreateNewList()">\n\n      <ion-icon class="custom-icon" name="add" padding-right="20dpx" ></ion-icon>\n\n      <span class="List-title">Crear Lista</span>\n\n    </div>\n\n\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\add-list\add-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AddListPage);

//# sourceMappingURL=add-list.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__ = __webpack_require__(39);
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
 * Generated class for the CreateNewListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewListPage = (function () {
    function CreateNewListPage(events, navCtrl, api, navParams, alertCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.api = api;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CreateNewListPage.prototype.guardarListaNueva = function () {
        var _this = this;
        this.api.geta('playlist/createPlaylist?id_usu=' + 4 + '&lis_rep_nombre=' + this.nombreLista + '&lis_rep_descripcion=' + this.descripcionLista).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                _this.events.publish('reloadPlaylists');
                _this.navCtrl.pop();
            }
            else if (data.json() == false) {
            }
        }, function (error) {
            console.error(error);
        });
    };
    CreateNewListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewListPage');
    };
    return CreateNewListPage;
}());
CreateNewListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-create-new-list',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\create-new-list\create-new-list.html"*/'<!--\n\n  Generated template for the CreateNewListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-row>\n\n        <ion-col col-9 class="nopadding">\n\n          Crear Lista Nueva\n\n        </ion-col>\n\n        <!-- <ion-col col-3 class="nopadding" align="right"> \n\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n\n          <ion-icon style="margin-left:15px;" ios="ios-trash" md="md-trash"></ion-icon>\n\n        </ion-col>-->\n\n\n\n      </ion-row>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Nombre</ion-label>\n\n        <ion-input type="text" [(ngModel)]="nombreLista"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Descripción</ion-label>\n\n        <ion-input type="text" [(ngModel)]="descripcionLista"></ion-input>\n\n      </ion-item>\n\n\n\n\n\n    </ion-list>\n\n  </div>\n\n  <br>\n\n  <br>\n\n\n\n\n\n\n\n  <button class="botonCrearLista" color="secondary" ion-button (click)="guardarListaNueva()"> GUARDAR </button>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\create-new-list\create-new-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CreateNewListPage);

//# sourceMappingURL=create-new-list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/M01-Login/categoria/categoria.module": [
		941,
		0
	],
	"../pages/M01-Login/homecable/homecable.module": [
		272
	],
	"../pages/M01-Login/invitacion-google/invitacion-google.module": [
		944,
		18
	],
	"../pages/M01-Login/invitacion-twitter/invitacion-twitter.module": [
		317
	],
	"../pages/M01-Login/login/login.module": [
		280
	],
	"../pages/M01-Login/olvidar-contraseña/olvidar-contraseña.module": [
		319
	],
	"../pages/M01-Login/registrarse/registrarse.module": [
		320
	],
	"../pages/M01-Login/signup/signup.module": [
		945,
		17
	],
	"../pages/M01-Login/sugerencia/sugerencia.module": [
		946,
		16
	],
	"../pages/Modulo 2/canal/canal.module": [
		947,
		29
	],
	"../pages/Modulo 2/estadistica/estadistica.module": [
		950,
		15
	],
	"../pages/Modulo 2/inicio/inicio.module": [
		949,
		14
	],
	"../pages/Modulo 2/listas/listas.module": [
		948,
		13
	],
	"../pages/Modulo 2/menu/menu.module": [
		953,
		12
	],
	"../pages/Modulo 2/suscripciones/suscripciones.module": [
		952,
		11
	],
	"../pages/Modulo 2/tabs/tabs.module": [
		951,
		10
	],
	"../pages/Modulo 2/tendencias/tendencias.module": [
		955,
		9
	],
	"../pages/Modulo 2/usuario/usuario.module": [
		954,
		8
	],
	"../pages/Modulo 8/channels/channels.module": [
		956,
		28
	],
	"../pages/Modulo3/agregarvideo/agregarvideo.module": [
		957,
		7
	],
	"../pages/Modulo3/cargar-video/cargar-video.module": [
		959,
		6
	],
	"../pages/Modulo3/infocargarvideo/infocargarvideo.module": [
		958,
		5
	],
	"../pages/Modulo3/infovideo/infovideo.module": [
		960,
		4
	],
	"../pages/Modulo3/listarmisvideos/listarmisvideos.module": [
		961,
		27
	],
	"../pages/Modulo3/mis-videos/mis-videos.module": [
		963,
		3
	],
	"../pages/configuracion-contenido/configuracion-contenido.module": [
		943,
		2
	],
	"../pages/configuracion-notificaciones/configuracion-notificaciones.module": [
		942,
		26
	],
	"../pages/notificaciones/notificaciones.module": [
		962,
		25
	],
	"../pages/playlist/add-list/add-list.module": [
		964,
		24
	],
	"../pages/playlist/create-new-list/create-new-list.module": [
		965,
		23
	],
	"../pages/playlist/edit-list/edit-list.module": [
		966,
		22
	],
	"../pages/playlist/playlist.module": [
		967,
		1
	],
	"../pages/playlist/pop-over-listas-reproduccion/pop-over-listas-reproduccion.module": [
		969,
		21
	],
	"../pages/playlist/view-list/view-list.module": [
		968,
		20
	],
	"../pages/reproductor/reproductor.module": [
		970,
		19
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomecablePageModule", function() { return HomecablePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homecable__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomecablePageModule = (function () {
    function HomecablePageModule() {
    }
    return HomecablePageModule;
}());
HomecablePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__homecable__["a" /* HomecablePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__homecable__["a" /* HomecablePage */]),
        ],
    })
], HomecablePageModule);

//# sourceMappingURL=homecable.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlvidarContraseñaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(101);
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
 * Generated class for the OlvidarContraseñaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OlvidarContraseñaPage = (function () {
    function OlvidarContraseñaPage(fire, navCtrl, navParams, alertCtrl, formBuilder) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.myForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]]
        });
    }
    OlvidarContraseñaPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    OlvidarContraseñaPage.prototype.alert = function (info, message) {
        this.alertCtrl.create({
            title: info,
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    OlvidarContraseñaPage.prototype.verificacion = function () {
        if (this.email.value == "fer@gmail.com") {
            this.alert('Recuperacion de contraseña', 'Hemos enviado tu contraseña a tu correo');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        else {
            this.alert('Datos incorrectos', 'El correo no esta registrado');
        }
    };
    OlvidarContraseñaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OlvidarContraseñaPage');
    };
    return OlvidarContraseñaPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('email'),
    __metadata("design:type", Object)
], OlvidarContraseñaPage.prototype, "email", void 0);
OlvidarContraseñaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-olvidar-contrasena',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\olvidar-contraseña\olvidar-contraseña.html"*/'<!--\n\n  Generated template for the OlvidarContraseñaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Recuperar contraseña</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form > \n\n        <ion-img width="200" height="200" class="center1"  src="assets/imgs/Logo candado.jpg"></ion-img>\n\n        <h4 style="color:#000000;font-weight:600;text-align:center;">¿No recuerdas tu contraseña? </h4>\n\n        <p style="color:#000000;font-weight:600;text-align:center;">Ingresa tu correo electronico y te enviaremos tu contraseña </p>\n\n    </form>\n\n    <form [formGroup]="myForm" (ngSubmit)="saveData()" novalidate>             \n\n        <ion-list id="recuperarContraseA-list4">\n\n            <ion-item>\n\n                <ion-label style="text-align:center;" floating>Correo electronico</ion-label>\n\n                <ion-input formControlName="email" type="email" value="" #email></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="myForm.get(\'email\').errors && myForm.get(\'email\').dirty">\n\n                <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'required\')">Field is required</p>\n\n                <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'email\')">It is not an email</p>\n\n            </ion-item>\n\n    \n\n            </ion-list>\n\n            <div padding>\n\n                    <button ion-button block type="submit" [disabled]="myForm.invalid" clear (click)=\'verificacion()\' icon-end >Enviar Correo</button>\n\n            </div>\n\n     \n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\olvidar-contraseña\olvidar-contraseña.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], OlvidarContraseñaPage);

//# sourceMappingURL=olvidar-contraseña.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homecable_homecable__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_rest_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegistrarsePage = (function () {
    function RegistrarsePage(alertCtrl, fire, navCtrl, navParams, formbuilder, api) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.api = api;
        //objeto para facebook
        //
        //
        //
        /////
        this.provider = {
            name: '',
            profilePicture: '',
            email: '',
            loggedin: false
        };
        this.userData = null;
        this.myForm = this.formbuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            Contraseña: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/)]],
            RepetirContraseña: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/)]],
        });
        this.email = this.myForm.controls['email'];
        this.Contraseña = this.myForm.controls['Contraseña'];
        this.RepetirContraseña = this.myForm.controls['RepetirContraseña'];
    }
    RegistrarsePage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    RegistrarsePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrarsePage');
    };
    //
    //PARA EL WS
    //----para los mensajes de alerta
    RegistrarsePage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    //--Registrar usuario normal 
    RegistrarsePage.prototype.registerUser = function () {
        var _this = this;
        console.log('QUE RECI', this.username, this.useremail, this.claveusu);
        this.api.geta('Login/RegistrarUsuario?username=' + this.username + '&claveusu=' + this.claveusu + '&correousu=' + this.useremail).subscribe(function (data) {
            console.log('registrar normal', data);
        }, function (error) {
            console.error(error);
        });
        //---La funcion pr llamar y validar el usuario con firebase 
        this.fire.auth.createUserWithEmailAndPassword(this.usu.value, this.passw.value)
            .then(function (data) {
            //Console vemos que nos devuelve
            console.log('agarre  data ', data);
            _this.alert('Registrado!');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__homecable_homecable__["a" /* HomecablePage */]);
        })
            .catch(function (error) {
            console.log('got error', error);
            _this.alert(error.message);
        });
        console.log('registrar con', this.usu.value, this.passw.value);
    };
    //--Registrar por facebook google twitter 
    RegistrarsePage.prototype.loginWithFacebook = function () {
        var _this = this;
        //La funcion llama validar usuario por firebase en la redes sociales
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.FacebookAuthProvider())
            .then(function (res) {
            _this.provider.loggedin = true;
            _this.provider.name = res.user.displayName;
            _this.provider.email = res.user.email;
            _this.provider.profilePicture = res.user.photoURL;
            console.log(res);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__homecable_homecable__["a" /* HomecablePage */]);
            _this.alert('Exito! tu te logeaste');
        })
            .catch(function (error) {
            console.log('encontramos error', error);
            _this.alert(error.message);
        });
    };
    //Funcion que nos permite ingresa por google 
    RegistrarsePage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.GoogleAuthProvider())
            .then(function (res) {
            console.log('fdesde --google--');
            console.log(res);
            _this.provider.loggedin = true;
            _this.provider.name = res.user.displayName;
            _this.provider.email = res.user.email;
            _this.provider.profilePicture = res.user.photoURL;
            console.log(res);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__homecable_homecable__["a" /* HomecablePage */]);
            _this.alert('Exito! tu te logeaste');
        })
            .catch(function (error) {
            console.log('encontramos error', error);
            _this.alert(error.message);
        });
    };
    //Funcion que nos permite ingresa por twitter 
    RegistrarsePage.prototype.loginWithTwitter = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.TwitterAuthProvider())
            .then(function (res) {
            console.log('fdesde --twitter--');
            console.log(res);
            _this.provider.loggedin = true;
            _this.provider.name = res.user.displayName;
            _this.provider.email = res.user.email;
            _this.provider.profilePicture = res.user.photoURL;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__homecable_homecable__["a" /* HomecablePage */]);
            _this.alert('Exito! tu te logeaste');
        })
            .catch(function (error) {
            console.log('encontramos error', error);
            _this.alert(error.message);
        });
    };
    //--deslogear desde fb twtter y google
    RegistrarsePage.prototype.logout = function () {
        this.fire.auth.signOut();
        this.provider.loggedin = false;
    };
    //-Primer login de fb sin firebase---------------
    //loginWithFB() {
    // this.facebook.login(['email', 'public_profile','user_friends']).then((Response: FacebookLoginResponse)=>	 {
    //  this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[]).then(profile =>{
    //  this.userData ={email: profile['email'], first_name: profile['first_name'],picture: profile['picture_large']['data']['url'], username:profile['name'] };
    //  }  )
    // } )
    //}
    /*
    loginWithFB() {
      
      this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
    
    
    this.facebook.logEvent(this.facebook.EVENTS.EVENT_NAME_ADDED_TO_CART);
    
    }
    
    */
    RegistrarsePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__homecable_homecable__["a" /* HomecablePage */]);
    };
    return RegistrarsePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('email'),
    __metadata("design:type", Object)
], RegistrarsePage.prototype, "usu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Contraseña'),
    __metadata("design:type", Object)
], RegistrarsePage.prototype, "passw", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('RepetirContraseña'),
    __metadata("design:type", Object)
], RegistrarsePage.prototype, "passw2", void 0);
RegistrarsePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-registrarse',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\registrarse\registrarse.html"*/'<!--\n\n  Generated template for the RegistrarsePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar color="primary">\n\n      <ion-title>Registrarse</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <form [formGroup]="myForm" (ngSubmit)="saveData()"> \n\n      <ion-list >\n\n          <h4 style="color:#000000;font-weight:600;text-align:center;">Ingresa todos los datos: </h4>\n\n             \n\n    \n\n          <ion-item>\n\n            <ion-icon name="mail" item-start> </ion-icon>\n\n            <ion-label floating>Usuaio</ion-label>\n\n            <ion-input formControlName="email" type="text" [(ngModel)]=\'username\' ></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="myForm.get(\'email\').errors && myForm.get(\'email\').dirty">\n\n            <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'required\')">Campo requerido</p>\n\n            <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'email\')">INo es un formato email</p>\n\n        </ion-item>\n\n\n\n\n\n   \n\n          <ion-item>\n\n              <ion-icon name="mail" item-start> </ion-icon>\n\n              <ion-label floating>Correo electronico</ion-label>\n\n              <ion-input formControlName="email" type="email" [(ngModel)]=\'useremail\' #email></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="myForm.get(\'email\').errors && myForm.get(\'email\').dirty">\n\n              <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'required\')">Campo requerido</p>\n\n              <p color="danger" ion-text *ngIf="myForm.get(\'email\').hasError(\'email\')">INo es un formato email</p>\n\n          </ion-item>\n\n  \n\n          \n\n          <ion-item>\n\n            <ion-icon name="eye" item-start></ion-icon>\n\n            <ion-label floating>Contraseña</ion-label>\n\n            <ion-input formControlName="Contraseña" type="password" [(ngModel)]=\'claveusu\' #Contraseña></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="myForm.get(\'Contraseña\').errors && myForm.get(\'Contraseña\').dirty">\n\n            <p color="danger" ion-text *ngIf="myForm.get(\'Contraseña\').hasError(\'required\')">Campo requerido</p>\n\n            <p color="danger" ion-text *ngIf="myForm.get(\'Contraseña\').hasError(\'pattern\')">Minimo 6 caracteres</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="eye" item-start></ion-icon>\n\n            <ion-label floating>Confirmar contraseña</ion-label>\n\n            <ion-input formControlName="RepetirContraseña" type="password"  #RepetirContraseña></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="myForm.get(\'RepetirContraseña\').errors && myForm.get(\'RepetirContraseña\').dirty">\n\n            <p color="danger" ion-text *ngIf="myForm.get(\'RepetirContraseña\').hasError(\'required\')">Campo requerido</p>\n\n            <p color="danger" ion-text *ngIf="myForm.get(\'RepetirContraseña\').hasError(\'pattern\')">Minimo 6 caracteres</p>\n\n          </ion-item>\n\n    \n\n          \n\n      </ion-list>\n\n  \n\n          <div padding>\n\n              <button ion-button block type="submit" [disabled]="!myForm.valid" clear (click)="registerUser()">Continuar</button>\n\n          </div>\n\n          <h6 style="color:#000000;font-weight:600;text-align:center;">Tambien puedes ingresar a traves de : </h6>\n\n          \n\n        <div padding>\n\n                <!-- Float the icon left -->\n\n          <button ion-button block type="submit" clear (click)="loginWithGoogle()" *ngIf ="!provider.loggedin">\n\n            <ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon>\n\n            Google+\n\n          </button>\n\n        </div>\n\n\n\n        <div padding>\n\n          <!-- Float the icon right -->\n\n          <button ion-button block type="submit" clear  (click)="loginWithTwitter()" *ngIf ="!provider.loggedin">\n\n            <ion-icon ios="logo-twitter" md="logo-twitter"></ion-icon>\n\n            TWITTER\n\n          </button>\n\n        </div>\n\n\n\n        <div padding>\n\n          <button ion-button block type="submit" clear  (click)="loginWithFacebook()" *ngIf ="!provider.loggedin">\n\n            <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n\n             Facebook\n\n          </button>\n\n        </div>\n\n\n\n    <ion-card  *ngIf ="provider.loggedin">   \n\n        <img src="{{ provider.profilePicture }}"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n           {{ provider.name }}\n\n            </ion-card-title>\n\n          <p style="text-align: center">\n\n       {{provider.email }}\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n    <button ion-button inline (click)="logout()" *ngIf ="provider.loggedin"><ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon> salir </button>\n\n    \n\n  </form>\n\n  \n\n</ion-content>\n\n    \n\n    \n\n    \n\n    <!--\n\n  <ion-card *ngIf="userData" >\n\n    <ion-card-header>{{ userData.username }}</ion-card-header>\n\n    <img [src]="userData.picture">\n\n    <ion-card-content>\n\n      <p> Email: {{ userData.email }} </p>\n\n      <p> First Name: {{ userData.first_name }} </p>\n\n    </ion-card-content>\n\n  </ion-card> -->\n\n\n\n\n\n  <!-- Only icon (no text) -->\n\n  <!--<button ion-button icon-left   inline (click)="loginwithFB()" >\n\n    <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n\n    Facebook\n\n  </button>\n\n  <ion-card *ngIf="userData" >\n\n      <ion-card-header>{{userData.username }}</ion-card-header>\n\n//\n\n  </ion-card>-->'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\registrarse\registrarse.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__app_rest_api_service__["a" /* RestApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_rest_api_service__["a" /* RestApiService */]) === "function" && _f || Object])
], RegistrarsePage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=registrarse.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitacionTwitterPageModule", function() { return InvitacionTwitterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invitacion_twitter__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvitacionTwitterPageModule = (function () {
    function InvitacionTwitterPageModule() {
    }
    return InvitacionTwitterPageModule;
}());
InvitacionTwitterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__invitacion_twitter__["a" /* InvitacionTwitterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invitacion_twitter__["a" /* InvitacionTwitterPage */]),
        ],
    })
], InvitacionTwitterPageModule);

//# sourceMappingURL=invitacion-twitter.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitacionTwitterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the InvitacionTwitterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitacionTwitterPage = (function () {
    function InvitacionTwitterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InvitacionTwitterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitacionTwitterPage');
    };
    return InvitacionTwitterPage;
}());
InvitacionTwitterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-invitacion-twitter',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\invitacion-twitter\invitacion-twitter.html"*/'<!--\n\n  Generated template for the InvitacionTwitterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Invitar amigos twitter</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list >\n\n    <h4 style="color:#000000;font-weight:600;text-align:center;">Cuentales a tus amigos de nosotros : </h4>\n\n    <ion-icon aling="left" ios="logo-twitter" md="logo-twitter"></ion-icon>\n\n  \n\n    </ion-list>\n\n    \n\n    <div padding>\n\n      <button ion-button block outline  >Invitar</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\invitacion-twitter\invitacion-twitter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], InvitacionTwitterPage);

//# sourceMappingURL=invitacion-twitter.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidarContraseñaPageModule", function() { return OlvidarContraseñaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__olvidar_contrase_a__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OlvidarContraseñaPageModule = (function () {
    function OlvidarContraseñaPageModule() {
    }
    return OlvidarContraseñaPageModule;
}());
OlvidarContraseñaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__olvidar_contrase_a__["a" /* OlvidarContraseñaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__olvidar_contrase_a__["a" /* OlvidarContraseñaPage */]),
        ],
    })
], OlvidarContraseñaPageModule);

//# sourceMappingURL=olvidar-contraseña.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarsePageModule", function() { return RegistrarsePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrarse__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistrarsePageModule = (function () {
    function RegistrarsePageModule() {
    }
    return RegistrarsePageModule;
}());
RegistrarsePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__registrarse__["a" /* RegistrarsePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registrarse__["a" /* RegistrarsePage */]),
        ],
    })
], RegistrarsePageModule);

//# sourceMappingURL=registrarse.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
//Clase que se encarga de enviar las solicitudes al servidor Rest Java
//En periodo de prueba, no se ha validado que funciona, pero es la estructura basica.




//Direccion del servidor donde esta la BDD
var URL = 'http://localhost:8080/viucab';
var RestApiService = (function () {
    function RestApiService(http) {
        this.http = http;
    }
    //Metodo GET: /direccion
    //Accede al metodo que se encuentra en direccion y devuelve la respuesta
    RestApiService.prototype.getTodo = function (direccion) {
        return this.http
            .get(URL + '/' + direccion)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo GET: /direccion/id_objeto
    //Accede al metodo que se encuentra en direccion, enviando un id y devuelve la respuesta
    RestApiService.prototype.getUno = function (direccion, idObjeto) {
        return this.http
            .get(URL + '/' + direccion + '/' + idObjeto)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo GET: /direccion + (param)
    //Accede al metodo que se encuentra en direccion, enviando parametros y devuelve la respuesta
    RestApiService.prototype.getTodoParam = function (direccion, param) {
        return this.http
            .get(URL + '/' + direccion, param)
            .map(function (data) { return data.json(); })
            .subscribe();
    };
    //Metodo GET: /direccion + (param)
    //Accede al metodo que se encuentra en direccion, enviando un id y parametros y devuelve la respuesta
    RestApiService.prototype.getUnoParam = function (direccion, idObjeto, param) {
        return this.http
            .get(URL + '/' + direccion + '/' + idObjeto, param)
            .map(function (data) { return data.json(); })
            .subscribe();
    };
    //Metodo POST: /direccion
    //Actualiza o envia datos mas parametros a una direccion
    RestApiService.prototype.postTodo = function (direccion, datos, param) {
        return this.http
            .post(URL + '/' + direccion, datos, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo POST: /direccion/id_objeto
    //Actualiza el objeto id en una direccion. Es necesario el enviar el dato nuevo y los parametros
    RestApiService.prototype.postUno = function (direccion, idObjeto, dato, param) {
        return this.http
            .post(URL + '/' + direccion + "/" + idObjeto, dato, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo PUT: /direccion
    //Agrega en una direccion, envia los datos y el parametro
    RestApiService.prototype.putTodo = function (direccion, datos, param) {
        return this.http
            .put(URL + '/' + direccion, datos, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo PUT: /direccion/id_objeto
    //Agrega el objeto id en una direccion, envia los datos y el parametro
    RestApiService.prototype.putUno = function (direccion, idObjeto, dato, param) {
        return this.http
            .put(URL + '/' + direccion + '/' + idObjeto, dato, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo DELETE: /direccion
    //Elimina en una direccion, enviando parametros
    RestApiService.prototype.deleteTodo = function (direccion, param) {
        return this.http
            .delete(URL + '/' + direccion, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo DELETE: /direccion/id_objeto
    //Elimina un objeto en una direccion, es necesario el id y los parametros
    RestApiService.prototype.deleteUno = function (direccion, idObjeto, param) {
        return this.http
            .delete(URL + '/' + direccion + "/" + idObjeto, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo DELETE: /direccion
    //Elimina varios objetos en una direccion, es necesario la lista de objetos a eliminar y los parametros
    RestApiService.prototype.deleteVarios = function (direccion, dato, param) {
        return this.http
            .delete(URL + '/' + direccion, dato)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Manejo de erorres
    RestApiService.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error);
    };
    //Metodo para obtener todos los videos
    RestApiService.prototype.getVideos = function (direccion) {
        return this.http.get(URL + '/' + direccion)
            .map(function (data) { return data.json(); })
            .do(function (data) { return console.log("get Videos from json: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    RestApiService.prototype.geta = function (direccion) {
        return this.http
            .get(URL + '/' + direccion);
    };
    RestApiService.prototype.getReproduccion = function (direccion) {
        return this.http
            .get(URL + '/' + direccion);
    };
    /////////////////
    //Metodo DELETE: /direccion
    //Elimina en una direccion
    RestApiService.prototype.deleteSus = function (direccion) {
        return this.http
            .get(URL + '/' + direccion)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    return RestApiService;
}());
RestApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], RestApiService);

//# sourceMappingURL=rest-api.service.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarmisvideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(441);
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
 * Generated class for the ListarmisvideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListarmisvideosPage = (function () {
    function ListarmisvideosPage(navCtrl, toastCtrl, navParams, http, actionSheetCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.httpClient = httpClient;
        this.URL = 'http://192.168.1.116:8080/';
    }
    ListarmisvideosPage.prototype.ngOnInit = function () {
        this.initializeItems();
    };
    ListarmisvideosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListarmisvideosPage');
    };
    ListarmisvideosPage.prototype.initializeItems = function () {
        var _this = this;
        this.obs = this.httpClient.get('http://192.168.1.116:8080/viucab/Video/getAll?userId=2');
        this.obs
            .subscribe(function (data) {
            console.log('my data: ', data);
            _this.items = data;
        });
        //DATOS PRUEBA LOCAL
        /*{
          this.items = [{
            id: '0',
            nombre: 'Marty',
            suscritos: '133',
            color: this.color,
            estado: 'Suscrito',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa'
          },
          {
            id: '1',
            nombre: 'Martin',
            suscritos: '133',
            color: this.color,
            estado: 'Suscrito',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa'
          }]
        }*/
    };
    ListarmisvideosPage.prototype.presentActionSheet = function (index) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: 'Editar',
                    handler: function () {
                        //Editar el video
                        _this.navCtrl.push('InfovideoPage', _this.items[index]);
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: 'Eliminar',
                    role: 'destructive',
                    handler: function () {
                        _this.deleteVideo(_this.items[index]._id);
                        console.log(index + ' clicked');
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
    ListarmisvideosPage.prototype.deleteVideo = function (id) {
        var _this = this;
        this.obs = this.httpClient.delete('http://192.168.1.116:8080/viucab/Video?videoId=' + id);
        this.obs
            .subscribe(function (data) {
            if (data == 0) {
                _this.presentToast("Video eliminado exitosamente");
                _this.initializeItems();
            }
            else {
                _this.presentToast("Error eliminando video");
            }
            console.log('my data: ', data);
        });
    };
    ListarmisvideosPage.prototype.presentToast = function (msg) {
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
    return ListarmisvideosPage;
}());
ListarmisvideosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-listarmisvideos',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\listarmisvideos\listarmisvideos.html"*/'<!--\n\n  Generated template for the ListarmisvideosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="morado2">\n\n    <ion-title>Mis Videos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card *ngFor="let item of items; let i = index">\n\n  \n\n    <ion-item>\n\n      <p>{{item._titulo}}</p>\n\n    </ion-item>\n\n  \n\n    <img src="{{URL}}image/{{item._imagen}}">\n\n  \n\n    <ion-card-content>\n\n      <p>{{item._descripcion}}</p>\n\n      <p>{{item._fecha}}</p>\n\n    </ion-card-content>\n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="eye"></ion-icon>\n\n          <div>{{item._visitas}} visita/as</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col align="right">\n\n        <button ion-button icon-only clear small (click)="presentActionSheet(i)">\n\n          <ion-icon name="more"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo3\listarmisvideos\listarmisvideos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
], ListarmisvideosPage);

//# sourceMappingURL=listarmisvideos.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracion_notificaciones_configuracion_notificaciones__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modulo_2_canal_canal__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'Notificaciones/notificacion';
var URLdes = 'Notificaciones/notificacionDes';
var NotificacionesPage = (function () {
    function NotificacionesPage(navCtrl, navParams, restApi) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restApi = restApi;
        this.notificacionList = Array();
        this.vacio = true;
        this.restApi.getTodo(URL).subscribe(function (data) {
            _this.notificacionList = data;
            if (_this.notificacionList.length > 0) {
                _this.vacio = false;
            }
        });
    }
    NotificacionesPage.prototype.goToConfiguracionNotificaciones = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configuracion_notificaciones_configuracion_notificaciones__["a" /* ConfiguracionNotificacionesPage */]);
    };
    NotificacionesPage.prototype.goToVideo = function (n) {
        // console.log(n);
        // this.restApi.getUno(URLdes, n.id).subscribe((data) => {
        //  console.log(n.id);
        //  console.log(data);
        // });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Modulo_2_canal_canal__["a" /* CanalPage */]);
    };
    return NotificacionesPage;
}());
NotificacionesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notificaciones',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\notificaciones\notificaciones.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Notificaciones\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page1">\n\n  <button id="notificaciones-button1" ion-button color="light" block icon-right style="text-align:left;" (click)="goToConfiguracionNotificaciones()">\n\n    Configuración\n\n    <ion-icon name="settings"></ion-icon>\n\n  </button>\n\n  <ion-item *ngIf="vacio">\n\n    <p style="text-align: center">No tiene Notificaciones Pendientes</p>\n\n\n\n  </ion-item>\n\n  <ion-list *ngIf="!vacio">\n\n    <ion-item *ngFor="let n of notificacionList" color="none" (click)="goToVideo(n)">\n\n      <ion-thumbnail item-left>\n\n        <img src="{{n.video.imagen}}">\n\n      </ion-thumbnail>\n\n      <h2>\n\n        {{n.video.nombre}}\n\n      </h2>\n\n      <p>\n\n        {{n.fecha}}\n\n      </p>\n\n      <p>\n\n       {{n.usuario._name_user}} ha subido un nuevo video!\n\n      </p>\n\n      <p>\n\n        {{n.video.descripcion}}\n\n      </p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\notificaciones\notificaciones.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]])
], NotificacionesPage);

//# sourceMappingURL=notificaciones.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelsPage = (function () {
    function ChannelsPage(navCtrl, navParams, alertCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.buscarQuery = '';
        this.color = 'primary';
        this.estadoSus = 'Suscrito';
        this.suscrito = true;
        this.idUser = 1;
        this.prue();
        //  this.cargarUsuarios(); //---------------------------probando
    }
    // pendiente arreglar el metodo buscar lun 18/ dic/2017
    // realizacion de busqueda mediante arreglos
    ChannelsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChannelsPage');
        this.prue();
        this.cargarUsuarios();
    };
    /**
     *  metodo que carga a lista de usuarios suscritos
     *
     */
    ChannelsPage.prototype.prue = function () {
        var _this = this;
        this.estadoSus = 'Suscrito';
        this.mostrarSuscripciones = true;
        this.mostrarUsuarios = false;
        this.api.geta('Suscripcion/GetSuscripcion?id=' + this.idUser)
            .subscribe(function (data) {
            _this.listaSuscripcion = data.json();
            console.log(_this.listaSuscripcion);
        }, function (error) {
            console.error(error);
        });
    };
    ChannelsPage.prototype.borrar = function (idSuscriptor) {
        this.api.deleteSus('Suscripcion/UpdateSuscripcion?idLogueado=' + this.idUser + '&idSuscriptor=' + idSuscriptor)
            .subscribe(function (data) {
        }, function (error) {
            console.error(error);
        });
    };
    //---------------------------- 4/ 01/2018 -----------
    ChannelsPage.prototype.cargarUsuarios = function () {
        var _this = this;
        this.mostrarSuscripciones = true;
        this.mostrarUsuarios = false;
        this.api.geta('Suscripcion/GetUsuarios')
            .subscribe(function (data) {
            _this.listaUsuarios = data.json();
            console.log(_this.listaUsuarios);
        }, function (error) {
            console.error(error);
        });
        this.estadoSus = 'Suscrito';
    };
    //---------------------------------------------------------------
    /**
     * @author Modulo 08
     * @param refresher :
     *  8/ene/2018
     */
    ChannelsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
            _this.prue();
        }, 1500);
    };
    //-------------------------------------------------------------------------------------------------
    // pendiente por arreglar
    ChannelsPage.prototype.getItems1 = function (ev) {
        this.estadoSus = 'Suscribirse';
        //Reset items back to all of the items
        // this.initializeItems();
        this.mostrarSuscripciones = false;
        this.mostrarUsuarios = true;
        this.items = this.listaUsuarios;
        // this.prue();
        var i;
        console.log('hola');
        console.log(this.listaUsuarios);
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(val);
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item._name_user.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.listaUsuarios = this.items;
            console.log('chao ');
            console.log(this.listaUsuarios);
        }
        else {
            this.cargarUsuarios();
        }
    };
    //------------------------------------------------------------------------------------------------
    // Realizacion del mensaje de confirmacion 19/dic/2017
    //showConfirm(usuarioSelected : any,idx : number){
    /**
     *
     * @param nombreSelected
     * @param idSuscriptor
     */
    ChannelsPage.prototype.showConfirm = function (nombreSelected, idSuscriptor, idx) {
        var _this = this;
        // if(this.items[idx].flag)
        // {
        var confirm = this.alertCtrl.create({
            title: 'Cancelar suscripcion ?',
            message: 'Deseas cancelar la suscripcion a ' + nombreSelected,
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('presiono no');
                        // console.log(idx);
                        //this.items[idx].color = 'primary';
                        _this.estadoSus = 'Suscrito';
                        //this.items[idx].estado = this.estadoSus
                    }
                },
                {
                    text: 'Eliminar Suscripcion',
                    handler: function () {
                        _this.borrar(idSuscriptor);
                        console.log('presiono si suscripcion cancelada');
                        _this.listaSuscripcion.splice(idx, 1);
                        // console.log(idx);
                        // this.items[idx].color = 'claro';
                        //this.estadoSus = 'Suscribirse';
                        // this.items[idx].estado = this.estadoSus;
                    }
                }
            ]
        });
        confirm.present();
        console.log(idx);
    };
    //--------------------------------------------------------------------------
    /**
     *
     * @param nombreSelected
     * @param idSuscriptor
     * @param idx
     */
    ChannelsPage.prototype.showAlert = function (nombreSelected, idSuscriptor, idx) {
        var alert = this.alertCtrl.create({
            title: 'Suscripcion Realizada! ',
            subTitle: 'Usted se ha suscrito al canal de ' + nombreSelected + '. Presione OK para Continuar',
            buttons: ['OK']
        });
        this.suscribirUsuario(this.idUser, idSuscriptor);
        this.listaUsuarios.splice(idx, 1); //elimina el usuario de la lista
        alert.present();
    };
    // ---------------------------------------------------------------------------
    /**
     * Pendiente cambiar get por put o post ---------------******** en la ws tambn
     * @param usuarioLogueado
     * @param usuarioCanal
     */
    ChannelsPage.prototype.suscribirUsuario = function (usuarioLogueado, usuarioCanal) {
        this.api.geta('Suscripcion/SetSuscripcion?idLogueado=' + usuarioLogueado + '&idSuscriptor=' + usuarioCanal)
            .subscribe(function (data) {
        }, function (error) {
            console.error(error);
        });
    };
    return ChannelsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], ChannelsPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('NAV'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */])
], ChannelsPage.prototype, "nav", void 0);
ChannelsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-channels',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo 8\channels\channels.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-icon name="logo-youtube"> ViUCAB</ion-icon>\n\n      <ion-buttons class= \'centrado-porcentual\'  >\n\n          <button  >\n\n        <ion-icon name="videocam" color="primary"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n  <ion-searchbar placeholder="Nombre del usuario a buscar " (ionInput)="getItems1($event)"></ion-searchbar> <!--> Creacion</!-->\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Deslice para Actualizar"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Actualizando...">\n\n    </ion-refresher-content>\n\n</ion-refresher>\n\n  <ion-list *ngIf= "mostrarSuscripciones">\n\n        <ion-item *ngFor="let item of listaSuscripcion ; let i = index " >\n\n            <ion-avatar item-start > \n\n                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa">\n\n            </ion-avatar>\n\n            <h2> {{ item._name_user }} </h2>\n\n             <!-->    <p>Suscritos {{item.suscritos}}  this.items[i].suscritos</p></-->\n\n            <button ion-button color= {{item.color}} item-right (click)="showConfirm(item._name_user, item._id_user, i )" > {{ estadoSus }}</button>  \n\n        </ion-item>            \n\n  </ion-list>\n\n \n\n  <ion-list *ngIf= "mostrarUsuarios">\n\n    <ion-item  *ngFor="let item of listaUsuarios ; let ix = index  " >\n\n        <ion-avatar item-start > \n\n            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa">\n\n        </ion-avatar>\n\n        <h2> {{ item._name_user }} </h2>\n\n        <!-->    <p>Suscritos {{item.suscritos}}  this.items[i].suscritos</p></-->\n\n        <button ion-button color= {{item.color}} item-right (click)="showAlert(item._name_user, item._id_user, ix )" > {{ estadoSus }}</button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo 8\channels\channels.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]])
], ChannelsPage);

//# sourceMappingURL=channels.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_list_edit_list__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__ = __webpack_require__(39);
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
 * Generated class for the ViewListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewListPage = (function () {
    function ViewListPage(alertCtrl, api, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.VideosDeLista = [];
        this.VideosDeLista = this.navParams.get('VideosDeLista');
        this.NombreLista = this.navParams.get('NombreLista');
        this.idLista = this.navParams.get('IdLista');
        console.log(this.VideosDeLista, this.VideosDeLista);
    }
    ViewListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewListPage');
    };
    ViewListPage.prototype.goToEditList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_list_edit_list__["a" /* EditListPage */]);
    };
    ViewListPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle
        });
        alert.present();
    };
    ViewListPage.prototype.presentConfirm = function (title, message) {
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
                        _this.confirmdeleteVideo();
                    }
                }
            ]
        });
        alert.present();
    };
    ViewListPage.prototype.getAllVideos = function () {
        var _this = this;
        this.api.geta('playlist/getVideosFromPlaylist?lis_rep_id=' + this.idLista).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                _this.VideosDeLista = data.json();
            }
        }, function (error) {
            console.error(error);
        });
    };
    ViewListPage.prototype.confirmdeleteVideo = function () {
        var _this = this;
        this.api.geta('playlist/deleteVideoFromPlaylist?vid_id=' + this.idVideo
            + '&?lis_rep_id=' + this.idLista).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                _this.getAllVideos();
            }
            else if (data.json() == false) {
                _this.presentAlert("Ups", "El video no pudo ser agregado a la lista");
            }
        }, function (error) {
            console.error(error);
        });
    };
    ViewListPage.prototype.deleteVideo = function (idVideo) {
        console.log(idVideo);
        this.idVideo = idVideo;
        this.presentConfirm("Hey", "Estas seguro de querer eliminar este video?");
    };
    return ViewListPage;
}());
ViewListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-view-list',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\view-list\view-list.html"*/'<!--\n\n  Generated template for the ViewListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>\n\n          <ion-row>\n\n              <ion-col col-9 class="nopadding">\n\n                  {{ NombreLista }}\n\n     \n\n              </ion-col>\n\n              <ion-col col-3 class="nopadding" align="right">\n\n                  <ion-icon (click)="goToEditList()"  ios="ios-create" md="md-create"></ion-icon>\n\n                  <ion-icon style="margin-left:15px;" ios="ios-trash" md="md-trash"></ion-icon>\n\n              </ion-col>\n\n              \n\n            </ion-row>\n\n      </ion-title>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h2 class="TituloLista">{{ NombreLista }}</h2>\n\n\n\n    <ion-list >\n\n        <ion-item *ngFor="let video of VideosDeLista" >\n\n          <ion-thumbnail item-start id="List-img">\n\n            <img [src]="video.imagen">\n\n          </ion-thumbnail>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10 class="nopadding" >\n\n                <ion-row >\n\n                  <div class="ellipsis">\n\n                    <span class="List-title">{{video.nombre}}</span>\n\n                  </div>\n\n    \n\n                </ion-row>\n\n                <ion-row>\n\n                  <span class="List-amount">{{video.visitas}} plays</span>\n\n                </ion-row>\n\n               <!-- <ion-row>\n\n                  <span class="List-duration">{{video.duration}}</span>\n\n                </ion-row> -->\n\n              </ion-col>\n\n              <ion-col (click)="deleteVideo(video.id)" col-2 class="nopadding" align="right">\n\n                <ion-icon class="f15 color-grey"  ios="ios-trash" md="md-trash"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-item>\n\n    \n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\view-list\view-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ViewListPage);

//# sourceMappingURL=view-list.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopOverListasReproduccionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_list_edit_list__ = __webpack_require__(117);
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
 * Generated class for the PopOverListasReproduccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopOverListasReproduccionPage = (function () {
    function PopOverListasReproduccionPage(events, navCtrl, navParams) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Lista = this.navParams.get('listapopover');
        console.log("Mi lista aqui:", this.Lista);
    }
    PopOverListasReproduccionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopOverListasReproduccionPage');
    };
    PopOverListasReproduccionPage.prototype.goToEditList = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_list_edit_list__["a" /* EditListPage */], { ListaEdit: this.Lista });
    };
    PopOverListasReproduccionPage.prototype.goToDeleteList = function () {
        this.navCtrl.pop();
        setTimeout(function () {
        }, 1000);
        this.events.publish('deletePlaylist', { id: this.Lista.idLista });
    };
    return PopOverListasReproduccionPage;
}());
PopOverListasReproduccionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pop-over-listas-reproduccion',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\pop-over-listas-reproduccion\pop-over-listas-reproduccion.html"*/'<ion-list >\n\n        <ion-item (click)="goToEditList()">\n\n      <ion-grid>\n\n        <ion-row > \n\n          <ion-col col-4 class="nopadding">\n\n              <ion-icon class="f21 color-blue" ios="ios-create" md="md-create"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-8 class="nopadding" align="right">\n\n              Editar lista \n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    \n\n    </ion-item>\n\n    <ion-item (click)="goToDeleteList()">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-4 class="nopadding">\n\n                <ion-icon class="f21 color-blue" ios="ios-trash" md="md-trash"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-8 class="nopadding" align="right">\n\n                Eliminar lista \n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      \n\n      </ion-item>\n\n    \n\n  </ion-list>'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\playlist\pop-over-listas-reproduccion\pop-over-listas-reproduccion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], PopOverListasReproduccionPage);

//# sourceMappingURL=pop-over-listas-reproduccion.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the CanalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CanalPage = (function () {
    function CanalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CanalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CanalPage');
    };
    return CanalPage;
}());
CanalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-canal',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo 2\canal\canal.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-icon name="logo-youtube"> ViUCAB</ion-icon>\n\n      <ion-buttons class= \'centrado-porcentual\'  >\n\n          <button  >\n\n        <ion-icon name="videocam" color="primary"></ion-icon>   \n\n      </button>\n\n      </ion-buttons>   \n\n    \n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content padding>\n\n   \n\n  \n\n\n\n     \n\n</ion-content>'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo 2\canal\canal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], CanalPage);

//# sourceMappingURL=canal.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReproductorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playlist_add_list_add_list__ = __webpack_require__(188);
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
var ReproductorPage = ReproductorPage_1 = (function () {
    //    public video =                //PRUEBA CON DATOS ESTATICOS
    //    {
    //        title: 'Subiendo a Galipan',
    //        url: 'http://localhost:2018/video.mp4',
    //        visitas: '58',
    //        likes: '23',
    //        dislikes: '54',
    //        owner: 'Cher',
    //        imgowner: '../../assets/imgs/advance-card-bttf.png',
    //        subscripciones: '100',
    //        relacionados: [
    //            {
    //                id: '34',
    //                urlimg: 'http://localhost:2018/foto.jpeg',
    //                nombre: 'La Bebe de Erbin junto a la gorda del Negro',
    //                canal: 'meruvzla4wd'
    //            },
    //            {
    //                id: '34',
    //                urlimg: 'http://localhost:2018/foto.jpeg',
    //                nombre: 'La Bebe de Erbin junto a la gorda del Negro',
    //                canal: 'meruvzla4wd'
    //            },
    //            {
    //                id: '34',
    //                urlimg: 'http://localhost:2018/foto.jpeg',
    //                nombre: 'La Bebe de Erbin junto a la gorda del Negro',
    //                canal: 'meruvzla4wd'
    //            }
    //        ],
    //        comentarios: [
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            },
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            },
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            },
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            },
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            },
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            }
    //        ],
    //        listas: [
    //            {
    //                id: '25',
    //                nombre: 'Lista rustica'
    //            },
    //            {
    //                id: '25',
    //                nombre: 'Lista rustica'
    //            },
    //            {
    //                id: '25',
    //                nombre: 'Lista rustica'
    //            }
    //        ]
    //    };
    function ReproductorPage(navCtrl, navParams, alertCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.comentario = '';
        this.path = 'Reproductor';
        this.usuario = 'aledavid21@gmail.com';
        //    public response: any[];
        this.color = 'black';
        this.likes = 0;
    }
    ReproductorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getReproduccion(this.path + '/addVisita?idvideo=' + this.navParams.data).subscribe();
        this.api.getReproduccion(this.path + '/getVideoInfo?idvideo=' + this.navParams.data).subscribe(function (data) {
            _this.video = data.json();
            _this.likes = data.json().likes;
        }, function (error) {
            console.error(error);
        });
        if (this.usuario) {
            this.api.getReproduccion(this.path + '/getIfLike?idvideo=' + this.navParams.data + '&usuario=' + this.usuario).subscribe(function (data) {
                if (data.json().result != '0') {
                    _this.color = 'primary';
                }
            });
        }
    };
    ReproductorPage.prototype.openVideo = function (id) {
        this.navCtrl.setRoot(ReproductorPage_1, id);
    };
    ReproductorPage.prototype.sentComment = function () {
        var _this = this;
        if (this.comentario) {
            this.api.getReproduccion(this.path + '/addComentario?idvideo=' + this.navParams.data + '&usuario=' + this.usuario + '&comentario=' + this.comentario).subscribe(function (data) {
                if (data.json().result != '0') {
                    _this.showAlert('Comentario agregado exitosamente!');
                    _this.openVideo(_this.navParams.data);
                }
                else {
                    _this.showAlert('Hubo un error enviando tu comentario :(. Intentelo de nuevo');
                }
            });
        }
    };
    ReproductorPage.prototype.addToList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__playlist_add_list_add_list__["a" /* AddListPage */]);
    };
    ReproductorPage.prototype.showAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            buttons: ['OK']
        });
        alert.present();
    };
    ReproductorPage.prototype.updateLike = function () {
        var _this = this;
        this.api.getReproduccion(this.path + '/updateLike?idvideo=' + this.navParams.data + '&usuario=' + this.usuario).subscribe(function (data) {
            if (data.json().result != '-1') {
                _this.likes = data.json().result;
                if (_this.color == 'black') {
                    _this.color = 'primary';
                }
                else {
                    _this.color = 'black';
                }
            }
        });
        //        this.openVideo(this.navParams.data);
    };
    ReproductorPage.prototype.deleteComentario = function (idcom, com) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '¿Seguro que desea eliminar este comentario?',
            message: com,
            buttons: [
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.api.getReproduccion(_this.path + '/deleteComentario?idcomentario=' + idcom).subscribe(function (data) {
                            if (data.json().result == '0') {
                                _this.showAlert('Comentario eliminado exitosamente!');
                                _this.openVideo(_this.navParams.data);
                            }
                            else {
                                _this.showAlert('Hubo un error intentando eliminar su comentario :(. Intentelo de nuevo');
                            }
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    return ReproductorPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */])
], ReproductorPage.prototype, "nav", void 0);
ReproductorPage = ReproductorPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reproductor',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\reproductor\reproductor.html"*/'<ion-header>\n\n    <ion-navbar color="primary" hide-tabs>\n\n        <ion-buttons start>\n\n            <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            <ion-icon name="logo-youtube"> ViUCAB</ion-icon>\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content *ngIf="video">\n\n\n\n    <ion-list>\n\n        <ion-item> \n\n            <ion-row>\n\n                <video  width="100%"  src="{{video.url}}" controls  height="250" ></video>\n\n                <h4>\n\n                    {{video.title}} <br>\n\n\n\n                </h4> \n\n            </ion-row>\n\n            <ion-row>\n\n                <p>\n\n                    {{video.visitas}} visitas\n\n\n\n                </p> \n\n            </ion-row>\n\n            <ion-row *ngIf="usuario">\n\n                <ion-col text-center col-6 (click)="updateLike()">\n\n                    <ion-icon name="thumbs-up" color="{{color}}"></ion-icon><br> \n\n                    {{likes}}\n\n                </ion-col>\n\n                <ion-col text-center col-6 (click)="addToList()"> \n\n                         <ion-icon name="add"></ion-icon><br>\n\n                    <p style="white-space: normal; color: black">\n\n\n\n                        Añadir a lista\n\n                    </p>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf="!usuario">\n\n                <ion-col text-center col-12 >\n\n                    {{video.likes}} &nbsp;\n\n                    <ion-icon name="thumbs-up" color="{{color}}"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="{{video.imgowner}}">\n\n            </ion-avatar>\n\n            <h2>{{video.owner}}</h2>\n\n            <p>{{video.subscripciones}} Subscripciones</p>\n\n        </ion-item>\n\n\n\n        <ion-item-divider   color="light">Videos Relacionados</ion-item-divider>\n\n\n\n        <ion-item *ngFor="let relacion of video.relacionados" (click)="openVideo(relacion.id)">\n\n            \n\n                <ion-thumbnail item-start>\n\n                    <img src="{{relacion.urlimg}}">\n\n                </ion-thumbnail>\n\n                <h2>{{relacion.nombre}}</h2>\n\n                <p>{{relacion.canal}}</p>\n\n         \n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n\n\n    <ion-list>\n\n        <ion-item-divider color="light">Comentarios</ion-item-divider>\n\n\n\n        <ion-item *ngFor="let comentario of video.comentarios">\n\n            <ion-avatar item-start>\n\n                <img src="{{comentario.urlimg}}">\n\n            </ion-avatar>\n\n            <div>\n\n\n\n                <h2 style="white-space: normal">{{comentario.nombre}}</h2>\n\n                <p style="white-space: normal; padding-left: 5px; font-size: 11px">\n\n                    {{comentario.comentario}}\n\n                </p>\n\n            </div>\n\n             <ion-icon name="trash" item-end color="danger" *ngIf="comentario.correo==usuario"  (click)="deleteComentario(comentario.idcomentario, comentario.comentario)"></ion-icon>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf="usuario">\n\n        <ion-list-header>\n\n            <h5>Escribir Comentario</h5>\n\n\n\n            <button ion-button clear item-end (click)="sentComment()">\n\n                    <ion-icon name="add"></ion-icon>Enviar\n\n            </button>\n\n        </ion-list-header>\n\n        <ion-item>\n\n            <ion-label fixed>Comentario:</ion-label>\n\n            <ion-input type="text" value="" [value]="comentario" [(ngModel)]="comentario"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\reproductor\reproductor.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]])
], ReproductorPage);

var ReproductorPage_1;
//# sourceMappingURL=reproductor.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(503);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_chooser__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_playlist_edit_list_edit_list__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_playlist_view_list_view_list__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_playlist_create_new_list_create_new_list__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_playlist_add_list_add_list__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_media_capture__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Modulo3_listarmisvideos_listarmisvideos__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_notificaciones_notificaciones__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_configuracion_notificaciones_configuracion_notificaciones__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Modulo_8_channels_channels__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_M01_Login_home_home__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_M01_Login_login_login_module__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_M01_Login_olvidar_contrase_a_olvidar_contrase_a_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_M01_Login_registrarse_registrarse_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_M01_Login_invitacion_twitter_invitacion_twitter_module__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_M01_Login_homecable_homecable_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_reproductor_reproductor__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//Fin Modificado
//Modificado Grupo 10



//Fin Modificado
//Modificado Grupo 8

//Fin modificado
//M01









//FIN
//

// Necesario para M01
var firebaseAuth = {
    apiKey: "AIzaSyD5QOpTS7_8zgRSu3dBaG-V6B9QmQpD_Uc",
    authDomain: "test-project-9ca72.firebaseapp.com",
    databaseURL: "https://test-project-9ca72.firebaseio.com",
    projectId: "test-project-9ca72",
    storageBucket: "test-project-9ca72.appspot.com",
    messagingSenderId: "438129532489"
};
//fin
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_playlist_edit_list_edit_list__["a" /* EditListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__["a" /* PopOverListasReproduccionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_playlist_view_list_view_list__["a" /* ViewListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_playlist_add_list_add_list__["a" /* AddListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_playlist_create_new_list_create_new_list__["a" /* CreateNewListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_configuracion_notificaciones_configuracion_notificaciones__["a" /* ConfiguracionNotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_Modulo_8_channels_channels__["a" /* ChannelsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_Modulo3_listarmisvideos_listarmisvideos__["a" /* ListarmisvideosPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_reproductor_reproductor__["a" /* ReproductorPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_M01_Login_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/M01-Login/categoria/categoria.module#CategoriaPageModule', name: 'CategoriaPage', segment: 'categoria', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/configuracion-notificaciones/configuracion-notificaciones.module#ConfiguracionNotificacionesPageModule', name: 'ConfiguracionNotificacionesPage', segment: 'configuracion-notificaciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/configuracion-contenido/configuracion-contenido.module#ConfiguracionContenidoPageModule', name: 'ConfiguracionContenidoPage', segment: 'configuracion-contenido', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/M01-Login/invitacion-google/invitacion-google.module#InvitacionGooglePageModule', name: 'InvitacionGooglePage', segment: 'invitacion-google', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/M01-Login/homecable/homecable.module#HomecablePageModule', name: 'HomecablePage', segment: 'homecable', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/M01-Login/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/M01-Login/invitacion-twitter/invitacion-twitter.module#InvitacionTwitterPageModule', name: 'InvitacionTwitterPage', segment: 'invitacion-twitter', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/M01-Login/olvidar-contraseña/olvidar-contraseña.module#OlvidarContraseñaPageModule', name: 'OlvidarContraseñaPage', segment: 'olvidar-contraseña', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/M01-Login/registrarse/registrarse.module#RegistrarsePageModule', name: 'RegistrarsePage', segment: 'registrarse', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/M01-Login/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/M01-Login/sugerencia/sugerencia.module#SugerenciaPageModule', name: 'SugerenciaPage', segment: 'sugerencia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/canal/canal.module#CanalPageModule', name: 'CanalPage', segment: 'canal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/listas/listas.module#ListasPageModule', name: 'ListasPage', segment: 'listas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/estadistica/estadistica.module#EstadisticaPageModule', name: 'EstadisticaPage', segment: 'estadistica', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/suscripciones/suscripciones.module#SuscripcionesPageModule', name: 'SuscripcionesPage', segment: 'suscripciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/usuario/usuario.module#UsuarioPageModule', name: 'UsuarioPage', segment: 'usuario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/tendencias/tendencias.module#TendenciasPageModule', name: 'TendenciasPage', segment: 'tendencias', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 8/channels/channels.module#ChannelsPageModule', name: 'ChannelsPage', segment: 'channels', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo3/agregarvideo/agregarvideo.module#AgregarvideoPageModule', name: 'AgregarvideoPage', segment: 'agregarvideo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo3/infocargarvideo/infocargarvideo.module#InfocargarvideoPageModule', name: 'InfocargarvideoPage', segment: 'infocargarvideo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo3/cargar-video/cargar-video.module#CargarVideoPageModule', name: 'CargarVideoPage', segment: 'cargar-video', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo3/infovideo/infovideo.module#InfovideoPageModule', name: 'InfovideoPage', segment: 'infovideo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo3/listarmisvideos/listarmisvideos.module#ListarmisvideosPageModule', name: 'ListarmisvideosPage', segment: 'listarmisvideos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notificaciones/notificaciones.module#NotificacionesPageModule', name: 'NotificacionesPage', segment: 'notificaciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo3/mis-videos/mis-videos.module#MisVideosPageModule', name: 'MisVideosPage', segment: 'mis-videos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/add-list/add-list.module#AddListPageModule', name: 'AddListPage', segment: 'add-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/create-new-list/create-new-list.module#CreateNewListPageModule', name: 'CreateNewListPage', segment: 'create-new-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/edit-list/edit-list.module#EditListPageModule', name: 'EditListPage', segment: 'edit-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/playlist.module#PlaylistPageModule', name: 'PlaylistPage', segment: 'playlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/view-list/view-list.module#ViewListPageModule', name: 'ViewListPage', segment: 'view-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/pop-over-listas-reproduccion/pop-over-listas-reproduccion.module#PopOverListasReproduccionPageModule', name: 'PopOverListasReproduccionPage', segment: 'pop-over-listas-reproduccion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reproductor/reproductor.module#InicioPageModule', name: 'ReproductorPage', segment: 'reproductor', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"],
            //m01
            __WEBPACK_IMPORTED_MODULE_26__pages_M01_Login_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_27__pages_M01_Login_olvidar_contrase_a_olvidar_contrase_a_module__["OlvidarContraseñaPageModule"],
            __WEBPACK_IMPORTED_MODULE_28__pages_M01_Login_registrarse_registrarse_module__["RegistrarsePageModule"],
            __WEBPACK_IMPORTED_MODULE_29__pages_M01_Login_invitacion_twitter_invitacion_twitter_module__["InvitacionTwitterPageModule"],
            __WEBPACK_IMPORTED_MODULE_30__pages_M01_Login_homecable_homecable_module__["HomecablePageModule"],
            __WEBPACK_IMPORTED_MODULE_31_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
            __WEBPACK_IMPORTED_MODULE_32_angularfire2_auth__["b" /* AngularFireAuthModule */]
            //fin m01
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_playlist_edit_list_edit_list__["a" /* EditListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__["a" /* PopOverListasReproduccionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_playlist_view_list_view_list__["a" /* ViewListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_playlist_add_list_add_list__["a" /* AddListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_playlist_create_new_list_create_new_list__["a" /* CreateNewListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_configuracion_notificaciones_configuracion_notificaciones__["a" /* ConfiguracionNotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_Modulo_8_channels_channels__["a" /* ChannelsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_Modulo3_listarmisvideos_listarmisvideos__["a" /* ListarmisvideosPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_reproductor_reproductor__["a" /* ReproductorPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_M01_Login_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_32_angularfire2_auth__["a" /* AngularFireAuth */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 326,
	"./af.js": 326,
	"./ar": 327,
	"./ar-dz": 328,
	"./ar-dz.js": 328,
	"./ar-kw": 329,
	"./ar-kw.js": 329,
	"./ar-ly": 330,
	"./ar-ly.js": 330,
	"./ar-ma": 331,
	"./ar-ma.js": 331,
	"./ar-sa": 332,
	"./ar-sa.js": 332,
	"./ar-tn": 333,
	"./ar-tn.js": 333,
	"./ar.js": 327,
	"./az": 334,
	"./az.js": 334,
	"./be": 335,
	"./be.js": 335,
	"./bg": 336,
	"./bg.js": 336,
	"./bn": 337,
	"./bn.js": 337,
	"./bo": 338,
	"./bo.js": 338,
	"./br": 339,
	"./br.js": 339,
	"./bs": 340,
	"./bs.js": 340,
	"./ca": 341,
	"./ca.js": 341,
	"./cs": 342,
	"./cs.js": 342,
	"./cv": 343,
	"./cv.js": 343,
	"./cy": 344,
	"./cy.js": 344,
	"./da": 345,
	"./da.js": 345,
	"./de": 346,
	"./de-at": 347,
	"./de-at.js": 347,
	"./de-ch": 348,
	"./de-ch.js": 348,
	"./de.js": 346,
	"./dv": 349,
	"./dv.js": 349,
	"./el": 350,
	"./el.js": 350,
	"./en-au": 351,
	"./en-au.js": 351,
	"./en-ca": 352,
	"./en-ca.js": 352,
	"./en-gb": 353,
	"./en-gb.js": 353,
	"./en-ie": 354,
	"./en-ie.js": 354,
	"./en-nz": 355,
	"./en-nz.js": 355,
	"./eo": 356,
	"./eo.js": 356,
	"./es": 357,
	"./es-do": 358,
	"./es-do.js": 358,
	"./es.js": 357,
	"./et": 359,
	"./et.js": 359,
	"./eu": 360,
	"./eu.js": 360,
	"./fa": 361,
	"./fa.js": 361,
	"./fi": 362,
	"./fi.js": 362,
	"./fo": 363,
	"./fo.js": 363,
	"./fr": 364,
	"./fr-ca": 365,
	"./fr-ca.js": 365,
	"./fr-ch": 366,
	"./fr-ch.js": 366,
	"./fr.js": 364,
	"./fy": 367,
	"./fy.js": 367,
	"./gd": 368,
	"./gd.js": 368,
	"./gl": 369,
	"./gl.js": 369,
	"./gom-latn": 370,
	"./gom-latn.js": 370,
	"./he": 371,
	"./he.js": 371,
	"./hi": 372,
	"./hi.js": 372,
	"./hr": 373,
	"./hr.js": 373,
	"./hu": 374,
	"./hu.js": 374,
	"./hy-am": 375,
	"./hy-am.js": 375,
	"./id": 376,
	"./id.js": 376,
	"./is": 377,
	"./is.js": 377,
	"./it": 378,
	"./it.js": 378,
	"./ja": 379,
	"./ja.js": 379,
	"./jv": 380,
	"./jv.js": 380,
	"./ka": 381,
	"./ka.js": 381,
	"./kk": 382,
	"./kk.js": 382,
	"./km": 383,
	"./km.js": 383,
	"./kn": 384,
	"./kn.js": 384,
	"./ko": 385,
	"./ko.js": 385,
	"./ky": 386,
	"./ky.js": 386,
	"./lb": 387,
	"./lb.js": 387,
	"./lo": 388,
	"./lo.js": 388,
	"./lt": 389,
	"./lt.js": 389,
	"./lv": 390,
	"./lv.js": 390,
	"./me": 391,
	"./me.js": 391,
	"./mi": 392,
	"./mi.js": 392,
	"./mk": 393,
	"./mk.js": 393,
	"./ml": 394,
	"./ml.js": 394,
	"./mr": 395,
	"./mr.js": 395,
	"./ms": 396,
	"./ms-my": 397,
	"./ms-my.js": 397,
	"./ms.js": 396,
	"./my": 398,
	"./my.js": 398,
	"./nb": 399,
	"./nb.js": 399,
	"./ne": 400,
	"./ne.js": 400,
	"./nl": 401,
	"./nl-be": 402,
	"./nl-be.js": 402,
	"./nl.js": 401,
	"./nn": 403,
	"./nn.js": 403,
	"./pa-in": 404,
	"./pa-in.js": 404,
	"./pl": 405,
	"./pl.js": 405,
	"./pt": 406,
	"./pt-br": 407,
	"./pt-br.js": 407,
	"./pt.js": 406,
	"./ro": 408,
	"./ro.js": 408,
	"./ru": 409,
	"./ru.js": 409,
	"./sd": 410,
	"./sd.js": 410,
	"./se": 411,
	"./se.js": 411,
	"./si": 412,
	"./si.js": 412,
	"./sk": 413,
	"./sk.js": 413,
	"./sl": 414,
	"./sl.js": 414,
	"./sq": 415,
	"./sq.js": 415,
	"./sr": 416,
	"./sr-cyrl": 417,
	"./sr-cyrl.js": 417,
	"./sr.js": 416,
	"./ss": 418,
	"./ss.js": 418,
	"./sv": 419,
	"./sv.js": 419,
	"./sw": 420,
	"./sw.js": 420,
	"./ta": 421,
	"./ta.js": 421,
	"./te": 422,
	"./te.js": 422,
	"./tet": 423,
	"./tet.js": 423,
	"./th": 424,
	"./th.js": 424,
	"./tl-ph": 425,
	"./tl-ph.js": 425,
	"./tlh": 426,
	"./tlh.js": 426,
	"./tr": 427,
	"./tr.js": 427,
	"./tzl": 428,
	"./tzl.js": 428,
	"./tzm": 429,
	"./tzm-latn": 430,
	"./tzm-latn.js": 430,
	"./tzm.js": 429,
	"./uk": 431,
	"./uk.js": 431,
	"./ur": 432,
	"./ur.js": 432,
	"./uz": 433,
	"./uz-latn": 434,
	"./uz-latn.js": 434,
	"./uz.js": 433,
	"./vi": 435,
	"./vi.js": 435,
	"./x-pseudo": 436,
	"./x-pseudo.js": 436,
	"./yo": 437,
	"./yo.js": 437,
	"./zh-cn": 438,
	"./zh-cn.js": 438,
	"./zh-hk": 439,
	"./zh-hk.js": 439,
	"./zh-tw": 440,
	"./zh-tw.js": 440
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 899;

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_M01_Login_login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_M01_Login_login_login__["a" /* LoginPage */]; /// por cambiar a MenuPages
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invitacion_twitter_invitacion_twitter__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goPaginaLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goPaginaPrueba = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__invitacion_twitter_invitacion_twitter__["a" /* InvitacionTwitterPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Bienvenidos\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-buttom (click)=\'goPaginaLogin()\'> ir a login</button>\n\n  <button ion-buttom (click)=\'goPaginaPrueba()\'> pRUEBAn</button>\n\n  \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\M01-Login\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[498]);
//# sourceMappingURL=main.js.map