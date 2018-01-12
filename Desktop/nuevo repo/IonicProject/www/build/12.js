webpackJsonp([12],{

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(981);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
        ],
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modulo3_listarmisvideos_listarmisvideos__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notificaciones_notificaciones__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuracion_notificaciones_configuracion_notificaciones__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Modulo_8_channels_channels__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Modificado por Modulo 10


//Fin Modificado por Modulo 10

var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        // Basic root for our content view
        this.rootPage = 'TabsPage';
        this.pages = [
            { title: 'Inicio', pageName: 'TabsPage', tabComponent: 'InicioPage', index: 0, icon: 'home' },
            //Aqui van los links de las paginas principales de los demas grupos
            //{ title: 'Configuración de usuario', pageName: 'UsuarioPage', icon: 'contact' },
            { title: 'Mis listas', pageName: 'PlaylistPage', icon: 'star-half' },
            { title: 'Estadísticas', pageName: 'EstadisticaPage', icon: 'stats' }
        ];
        this.MyChannelSubmenu = false;
        this.SettingsSubmenu = false;
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'secondary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'secondary';
        }
        return;
    };
    MenuPage.prototype.MyChannelItemHandler = function () {
        this.MyChannelSubmenu = !this.MyChannelSubmenu;
        this.SettingsSubmenu = false;
    };
    MenuPage.prototype.SettingsItemHandler = function () {
        this.SettingsSubmenu = !this.SettingsSubmenu;
        this.MyChannelSubmenu = false;
    };
    //Modificado por Modulo 3
    MenuPage.prototype.openMisVideos = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_0__Modulo3_listarmisvideos_listarmisvideos__["a" /* ListarmisvideosPage */]);
    };
    //Fin modificado por Modulo 3
    //Modificado por Modulo 10
    MenuPage.prototype.openNotificaciones = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__notificaciones_notificaciones__["a" /* NotificacionesPage */]);
    };
    MenuPage.prototype.openConNotificaciones = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__configuracion_notificaciones_configuracion_notificaciones__["a" /* ConfiguracionNotificacionesPage */]);
    };
    //Fin Modificado por Modulo 10
    MenuPage.prototype.openSuscripciones = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__Modulo_8_channels_channels__["a" /* ChannelsPage */]); // llama a la pagina
        // this.nav.setRoot(pagina);// llama a la pagina
        this.MyChannelItemHandler(); //oculta el submenu
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo 2\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n      <ion-navbar color="morado2">\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n      <ion-list id="sidenav">\n\n          <!-- other menu items will go here -->\n\n            <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)" >\n\n                <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n                {{ p.title }}\n\n            </button>\n\n            <button ion-item (click)="MyChannelItemHandler()"> <ion-icon item-start name="contact" color="isActive(this)"></ion-icon> Mi canal</button>\n\n            <button ion-item menuClose submenu-item *ngIf="MyChannelSubmenu" (click)="openMisVideos()">Mis Videos</button>\n\n            <!--> Activacion de la pagina de suscripciones mediante el boton , abriendo la pagina de Channels, @Autor: Modulo 8, sabado 25/nov/2017</-->\n\n            <button ion-item menuClose submenu-item *ngIf="MyChannelSubmenu" (click)="openSuscripciones()">Suscripciones</button>\n\n            <!-- VERSION ORIGINAL <ion-item submenu-item *ngIf="MyChannelSubmenu" (click)="MyChannelItemHandler()">Suscripciones</ion-item><-->\n\n            <button ion-item submenu-item menuClose *ngIf="MyChannelSubmenu" (click)="openNotificaciones()">Notificaciones</button>\n\n            <button ion-item (click)="SettingsItemHandler()"> <ion-icon item-start name="settings"></ion-icon> Configuración de usuario</button>\n\n            <ion-item submenu-item *ngIf="SettingsSubmenu" (click)="SettingsItemHandler()">Configuración de perfil de usuario</ion-item>\n\n            <ion-item submenu-item *ngIf="SettingsSubmenu" (click)="SettingsItemHandler()">Configuración de filtros</ion-item>\n\n            <button ion-item submenu-item menuClose *ngIf="SettingsSubmenu" (click)="openConNotificaciones()">Configuración de Notificaciones</button>\n\n          <!-- other menu items will go here -->\n\n          </ion-list>\n\n    <ion-list>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- main navigation -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" ></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo 2\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=12.js.map