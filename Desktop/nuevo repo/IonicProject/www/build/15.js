webpackJsonp([15],{

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaPageModule", function() { return EstadisticaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estadistica__ = __webpack_require__(978);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EstadisticaPageModule = (function () {
    function EstadisticaPageModule() {
    }
    return EstadisticaPageModule;
}());
EstadisticaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__estadistica__["a" /* EstadisticaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estadistica__["a" /* EstadisticaPage */]),
        ],
    })
], EstadisticaPageModule);

//# sourceMappingURL=estadistica.module.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
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
 * Generated class for the EstadisticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstadisticaPage = (function () {
    function EstadisticaPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.mostrar = false;
        this.perra = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
        this.perra4 = ["rivetti", "es", "rolo", "de ", "pargo", "si", "burda "];
        this.perra2 = [12, 19, 3, 5, 2, 3];
        this.perra3 = [10, 5, 2, 3, 2, 1];
        this.type = 'bar';
    }
    EstadisticaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstadisticaPage');
        this.pet();
    };
    EstadisticaPage.prototype.pet = function () {
        var _this = this;
        this.api.geta('Estadistica/Estadistica1').subscribe(function (data) {
            _this.respu = data.json();
            console.log(_this.respu);
        }, function (error) {
            console.error(error);
        });
    };
    EstadisticaPage.prototype.metodo = function (id) {
        if (id == 1) {
            this.mostrar = true;
            this.respu1 = this.respu;
            this.CrearGrafica();
            this.respu1 = [];
        }
        else if (id == 2) {
            this.mostrar = true;
            this.respu1.label = this.perra4;
            this.respu1.data = this.perra2;
            this.CrearGrafica();
        }
    };
    EstadisticaPage.prototype.CrearGrafica = function () {
        if (this.barChart != null) {
            this.barChart.destroy();
        }
        if (this.doughnutChart != null) {
            this.doughnutChart.destroy();
        }
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: this.type,
            data: {
                labels: this.respu1.label,
                datasets: [{
                        label: '# of Votes',
                        data: this.respu1.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        //
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: "doughnut",
            data: {
                labels: this.respu1.label,
                datasets: [{
                        label: '# of Votes',
                        data: this.respu1.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
    };
    return EstadisticaPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
    __metadata("design:type", Object)
], EstadisticaPage.prototype, "barCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('doughnutCanvas'),
    __metadata("design:type", Object)
], EstadisticaPage.prototype, "doughnutCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvas'),
    __metadata("design:type", Object)
], EstadisticaPage.prototype, "lineCanvas", void 0);
EstadisticaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-estadistica',template:/*ion-inline-start:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo 2\estadistica\estadistica.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-icon name="logo-youtube"> ViUCAB</ion-icon>\n\n      <ion-buttons class= \'centrado-porcentual\'  >\n\n          <button  >\n\n        <ion-icon name="videocam" color="primary"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item (click)="metodo(1)">\n\n      Estadistica1\n\n    </ion-item >\n\n    <ion-item >\n\n    Estadistica2\n\n    </ion-item>\n\n\n\n    <ion-item  (click)="metodo(2)">\n\n    Estadistica3a\n\n    </ion-item>\n\n  \n\n\n\n  </ion-list>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Cambiar Grafica </ion-label>\n\n    <ion-toggle (ionChange)="isDisabled = !isDisabled"></ion-toggle>\n\n  </ion-item>\n\n\n\n  <div [class.hide]="!mostrar">\n\n\n\n  <ion-card  [class.hide]="!isDisabled" >\n\n      <ion-card-header>\n\n        Bar Chart\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <canvas #barCanvas></canvas>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n\n\n\n\n    <ion-card [class.hide]="isDisabled">\n\n      <ion-card-header>\n\n        Doughnut Chart\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <canvas #doughnutCanvas></canvas>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia\Desktop\probando\ViUCAB\IonicProject\src\pages\Modulo 2\estadistica\estadistica.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]])
], EstadisticaPage);

//# sourceMappingURL=estadistica.js.map

/***/ })

});
//# sourceMappingURL=15.js.map