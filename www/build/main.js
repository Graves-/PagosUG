webpackJsonp([9],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardarPagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GuardarPagoPage = (function () {
    function GuardarPagoPage(navCtrl, navParams, iab, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.pagoSuccess = true;
        this.idBeneficiario = this.navParams.get('idBeneficiario');
        this.concepto = this.navParams.get('concepto');
    }
    GuardarPagoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Registro de Pago',
            subTitle: 'El pago no pudo llevarse a cabo.',
            buttons: [{
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }]
        });
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].baseURL + "/Pagos?idArancel=" + this.concepto.Id_Arancel + "&idBenef=" + this.idBeneficiario + "&monto=" + this.concepto.Monto + "&obs=" + this.concepto.Observaciones).then(function (res) {
            console.log(res.data);
            if (res.data) {
                if (res.data[0] === "1") {
                    _this.idPagoAgrupado = res.data[2];
                    _this.idPago = res.data[3];
                    _this.pagoSuccess = true;
                }
                else {
                    console.log(res.data[1]);
                    alert.present();
                }
            }
        }).catch(function (err) {
            console.log('error al guardar pago ', err);
            alert.present();
        });
    };
    GuardarPagoPage.prototype.openPdfPage = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].baseURL + "/PDFPago?idPago=" + this.idPago;
        this.iab.create(url, '_system', {});
    };
    GuardarPagoPage.prototype.homeClicked = function () {
        this.navCtrl.popToRoot();
    };
    GuardarPagoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guardar-pago',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/guardar-pago/guardar-pago.html"*/'<ion-header>\n  <ion-navbar color=\'azulUG\'>\n    <ion-title>Guardar Pago</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf="pagoSuccess === true">\n    <ion-card-header text-center>\n      Nuevo Pago Registrado\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n          <strong>¡Su pago ha sido generado con éxito con el folio: {{idPago}}!</strong>\n      </p>\n      <p>\n          Para imprimir su formato de pago haga click en el botón de \'Ver Línea de Referencia\'\n      </p>\n      <br />\n      <button ion-button block (click)="openPdfPage()" color="secondary"><ion-icon name="document"></ion-icon>&nbsp; Ver Línea de Referencia</button>\n      <br />\n      <p>\n          Al dar clic se generara un archivo pdf con la información necesaria para realizar tu pago en sucursal.\n      </p>\n    </ion-card-content>\n\n    <button ion-button icon-left clear small item-end (click)="homeClicked()">\n      <ion-icon name="home"></ion-icon>\n      <div>Regresar al Inicio</div>\n    </button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/guardar-pago/guardar-pago.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GuardarPagoPage);
    return GuardarPagoPage;
}());

//# sourceMappingURL=guardar-pago.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeneficiariosPage = (function () {
    function BeneficiariosPage(navCtrl, navParams, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        //arrBeneficiarios: { idben: number, idTipo: number, nombre: string, clave: string, rfc: string, esTitular: string, foto: string }[] = [];
        this.arrBeneficiarios = [];
        this.arrFotos = [];
    }
    BeneficiariosPage.prototype.ionViewDidLoad = function () {
        this.getBeneficiarios();
    };
    BeneficiariosPage.prototype.getBeneficiarios = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].baseURL + "/Beneficiario", {
            params: { correo: 'oscar.salazar@ugto.mx' }
        }).then(function (res) {
            res.data.map(function (ben) {
                if (ben.idTipo === 1) {
                    _this.getFotosEmpleados(parseInt(ben.clave)).then(function (res) {
                        _this.arrBeneficiarios.push({
                            idben: ben.idben,
                            nombre: ben.nombre,
                            clave: ben.clave,
                            rfc: ben.rfc,
                            foto: "data:image/png;base64," + res.data,
                            tipo: 'Trabajador UG',
                            tipoClave: 'No. Empleado'
                        });
                    }).catch(function (err) {
                        _this.arrBeneficiarios.push({
                            idben: ben.idben,
                            nombre: ben.nombre,
                            clave: ben.clave,
                            rfc: ben.rfc,
                            foto: 'https://image.flaticon.com/icons/png/512/306/306473.png',
                            tipo: 'Trabajador UG',
                            tipoClave: 'No. Empleado'
                        });
                    });
                }
                else if (ben.idTipo === 2) {
                    _this.getFotosAlumnos(parseInt(ben.clave)).then(function (res) {
                        _this.arrBeneficiarios.push({
                            idben: ben.idben,
                            nombre: ben.nombre,
                            clave: ben.clave,
                            rfc: ben.rfc,
                            foto: "data:image/png;base64," + res.data,
                            tipo: 'Estudiante',
                            tipoClave: 'NUA'
                        });
                    }).catch(function (err) {
                        _this.arrBeneficiarios.push({
                            idben: ben.idben,
                            nombre: ben.nombre,
                            clave: ben.clave,
                            rfc: ben.rfc,
                            foto: 'https://image.flaticon.com/icons/png/512/306/306473.png',
                            tipo: 'Estudiante',
                            tipoClave: 'NUA'
                        });
                    });
                }
                else {
                    _this.arrBeneficiarios.push({
                        idben: ben.idben,
                        nombre: ben.nombre,
                        clave: ben.clave,
                        rfc: ben.rfc,
                        foto: 'https://image.flaticon.com/icons/png/512/306/306473.png',
                        tipo: 'Externo',
                        tipoClave: 'Externo'
                    });
                }
            });
        }).catch(function (err) {
            console.log('error ', err);
        });
    };
    BeneficiariosPage.prototype.getFotosEmpleados = function (idEmpleado) {
        return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].baseURL + "/FotosEmpleados?idEmpleado=" + idEmpleado);
    };
    BeneficiariosPage.prototype.getFotosAlumnos = function (NUA) {
        return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].baseURL + "/FotosAlumnos?NUA=" + NUA);
    };
    BeneficiariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-beneficiarios',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/beneficiarios/beneficiarios.html"*/'<ion-header>\n  <ion-navbar color=\'azulUG\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Beneficiarios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor="let itemBen of arrBeneficiarios;">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src={{itemBen.foto}}>\n        </ion-avatar>\n        <h2 text-wrap>{{itemBen.nombre}}</h2>\n        <p><strong>RFC: </strong>{{itemBen.rfc}}</p>\n      </ion-item>\n    \n      <ion-card-content>\n          <ion-item>\n              <ion-icon name="card"></ion-icon> {{itemBen.tipo}}\n            <ion-badge item-end>{{itemBen.clave}}</ion-badge>\n          </ion-item>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/beneficiarios/beneficiarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], BeneficiariosPage);
    return BeneficiariosPage;
}());

//# sourceMappingURL=beneficiarios.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosConceptoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guardar_pago_guardar_pago__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatosConceptoPage = (function () {
    function DatosConceptoPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.idBeneficiario = this.navParams.get('idBeneficiario');
        this.concepto = this.navParams.get('concepto');
    }
    DatosConceptoPage.prototype.ionViewDidLoad = function () {
    };
    DatosConceptoPage.prototype.GenerarPagoClicked = function () {
        var alert = this.alertCtrl.create({
            title: 'Monto Inválido',
            subTitle: 'Por favor ingresa un monto válido para el concepto seleciconado.',
            buttons: ['Ok']
        });
        var re = /^[0-9.,]+$/;
        if (this.concepto.Monto.toLowerCase() === 'a capturar') {
            if (this.inputConcepto !== undefined) {
                if (re.test(this.inputConcepto.toString())) {
                    this.concepto.Monto = this.inputConcepto;
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__guardar_pago_guardar_pago__["a" /* GuardarPagoPage */], {
                        idBeneficiario: this.idBeneficiario,
                        concepto: this.concepto
                    });
                }
                else {
                    alert.present();
                }
            }
            else {
                alert.present();
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__guardar_pago_guardar_pago__["a" /* GuardarPagoPage */], {
                idBeneficiario: this.idBeneficiario,
                concepto: this.concepto
            });
        }
    };
    DatosConceptoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-datos-concepto',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/datos-concepto/datos-concepto.html"*/'\n<ion-header>\n\n  <ion-navbar color=\'azulUG\'>\n    <ion-title>Datos del Concepto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n\n      <ion-item>\n        <h2 text-center text-warp>{{concepto.nombre_cuenta}}</h2>\n        <h3 text-center text-warp>{{concepto.sub_cuenta}}</h3>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="home" item-start large></ion-icon>\n        <h2>Campus</h2>\n        <p text-wrap>{{concepto.Campus}}</p>\n      </ion-item>\n      \n      <ion-item>\n        <ion-icon name="briefcase" item-start large></ion-icon>\n        <h2>División/Secretaría</h2>\n        <p text-wrap>{{concepto.Division}}</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="ios-book" item-start large></ion-icon>\n        <h2>Programa</h2>\n        <p text-wrap>{{concepto.Programa}}</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pricetags" item-start large></ion-icon>\n        <h2>Concepto</h2>\n        <p text-wrap>{{concepto.nombre_cuenta + \' - \' + concepto.ELEMENTO_PEP_DSC}}</p>\n      </ion-item>\n      \n      <ion-item *ngIf="concepto.Observaciones != \'\'">\n        <ion-icon name="attach" item-left large ></ion-icon>\n        <h2>Notas</h2>\n        <p text-wrap>{{concepto.Observaciones}}</p>\n      </ion-item>\n    \n      <ion-item>\n        <ion-icon name="logo-usd" item-left large ></ion-icon>\n        <h2>Monto</h2>\n        <p text-wrap *ngIf="concepto.Monto.toLowerCase() !== \'a capturar\'">{{concepto.Monto}}</p>\n        <ion-label floating *ngIf="concepto.Monto.toLowerCase() === \'a capturar\'">Ingresar Monto</ion-label>\n        <ion-input [(ngModel)]="inputConcepto" type="text" *ngIf="concepto.Monto.toLowerCase() === \'a capturar\'"></ion-input>\n      </ion-item>\n      <br />\n      <br />\n    </ion-card>\n\n    <button ion-button icon-left full color="secondary" (click)="GenerarPagoClicked()">\n      <ion-icon name="checkmark-circle"></ion-icon>\n      Generar Formato de Pago\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/datos-concepto/datos-concepto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], DatosConceptoPage);
    return DatosConceptoPage;
}());

//# sourceMappingURL=datos-concepto.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(58);
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
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
    };
    IntroPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/intro/intro.html"*/'<ion-slides pager="true">\n  <ion-slide>\n    <img src="assets/imgs/logo.png" />\n  </ion-slide>\n\n  <ion-slide>\n    <img src="assets/imgs/logo.png" />\n  </ion-slide>\n\n  <ion-slide>\n    <img src="assets/imgs/logo.png" />\n  </ion-slide>\n\n  <ion-slide>\n    <ion-row>\n      <ion-col>\n        <img src="assets/imgs/logo.png" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light" (click)="goToHome()">Start Using My App</button>\n      </ion-col>\n    </ion-row>\n  </ion-slide>\n</ion-slides>'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, platform, device, storage, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.device = device;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.usuario = '';
        this.password = '';
        this.imei = '';
        this.platform.ready().then(function () {
            _this.imei = _this.device.uuid;
        });
    }
    LoginPage.prototype.fnIniciarSesion = function () {
        var _this = this;
        if (this.usuario === '' || this.password === '') {
            this.alertCtrl.create({
                title: 'Inicio de Sesión',
                subTitle: 'Estimado usuario, debe ingresar su correo y contraseña institucionales.',
                buttons: ['Aceptar']
            }).present();
        }
        else {
            console.log('login');
            var loading_1 = this.loadingCtrl.create({
                content: 'Iniciando Sesión',
                spinner: 'dots'
            });
            loading_1.present();
            __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post("https://conector.ugto.mx/Servicios/api/LoginMovil?usuario=" + this.usuario + "&password=" + this.password + "&IMEI=" + (this, this.imei), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                    'Accept': 'application/json'
                },
                withCredentials: true
            }).then(function (res) {
                _this.storage.setItem('token', res.data);
                loading_1.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */], { token: res.data, imei: _this.imei, usuario: _this.usuario });
            }).catch(function (err) {
                console.log(err);
                loading_1.dismiss();
                var alertError = _this.alertCtrl.create({
                    message: 'Ocurrió un error al iniciar sesión. ' + err,
                    buttons: ['Aceptar'],
                    title: 'Error al Iniciar Sesión'
                });
                alertError.present();
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="azulUG">\n    <ion-title text-center>Iniciar Sesión</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div style="min-height:100px;background-color:#b7ae85"></div>\n    <div align="center" style="margin-top:-60px">\n      <img src="assets/imgs/login/escudo.png" style="max-width:60%; max-height:60%" />\n    </div>\n\n    <div style="padding-left:40px; padding-right:40px">\n      <ion-list>\n        <ion-item>\n          <ion-label floating>Correo Institucional</ion-label>\n          <ion-input [(ngModel)]="usuario" type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Contraseña</ion-label>\n          <ion-input [(ngModel)]="password"  type="password"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <div align="center">\n        <br />\n        <button ion-button (click)="fnIniciarSesion()" style="background-color:#01538b;border-radius:10px;min-width:200px; min-height:50px"> Ingresar </button>\n        <!--<button ion-button (click)="fnCloseSesionModal()"> Cerrar (provisional) </button>-->\n      </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisLineasReferenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__codigo_barras_codigo_barras__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MisLineasReferenciaPage = (function () {
    function MisLineasReferenciaPage(navCtrl, navParams, loadCtrl, iab, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.correoUsuario = 'oscar.salazar@ugto.mx';
    }
    MisLineasReferenciaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadCtrl.create({
            content: 'Cargando Pagos',
            spinner: 'dots'
        });
        loading.present();
        this.getIdRegistroByEmail(this.correoUsuario).then(function (res) {
            if (res.data != null) {
                _this.pagos = res.data;
                loading.dismiss();
                console.log(res.data);
            }
            else {
                _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'hubo un error al obtener el registro en Pagos. ' + res.data,
                    buttons: ['Ok']
                }).present();
            }
        }).catch(function (err) {
            _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'hubo un error al obtener el registro en Pagos. ' + err,
                buttons: ['Ok']
            }).present();
        });
    };
    MisLineasReferenciaPage.prototype.formatearFecha = function (fecha) {
        return __WEBPACK_IMPORTED_MODULE_6_moment___default()(fecha).format('DD-MM-YYYY');
    };
    MisLineasReferenciaPage.prototype.getIdRegistroByEmail = function (correo) {
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/FinRegistro?correo=" + correo);
    };
    MisLineasReferenciaPage.prototype.imprimirPago = function (idpago) {
        var url = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/PDFPago?idPago=" + idpago;
        this.iab.create(url, '_system', {});
    };
    MisLineasReferenciaPage.prototype.generarCodigoBarras = function (referencia) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__codigo_barras_codigo_barras__["a" /* CodigoBarrasPage */], {
            referencia: referencia
        });
    };
    MisLineasReferenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-lineas-referencia',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/mis-lineas-referencia/mis-lineas-referencia.html"*/'<ion-header>\n\n  <ion-navbar color=\'azulUG\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Lineas de Referencia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card color=\'azulUG\'>\n    <ion-card-content>\n      Desliza a la izquierda para ver las opciones de pagos.\n    </ion-card-content>\n  </ion-card>\n\n  <hr />\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let pago of pagos">\n      <ion-item>\n        <h2>{{pago.pago.nombre.toUpperCase()}}</h2>\n        <h2><strong>Monto: </strong>${{pago.pago.monto}}</h2>\n        <h3><strong>RFC: </strong>{{pago.pago.rfc}}</h3>\n        <h3><strong>Fecha: </strong> {{formatearFecha(pago.pago.fecha_pago)}}</h3>\n\n        <ion-badge item-end *ngIf="pago.pago.id_estatus === 1" color=\'warning\'>{{pago.pago.estatus}}</ion-badge>\n        <ion-badge item-end *ngIf="pago.pago.id_estatus === 2 || pago.pago.id_estatus === 4" color=\'secondary\'>{{pago.pago.estatus}}</ion-badge>\n        <ion-badge item-end *ngIf="pago.pago.id_estatus === 3 || pago.pago.id_estatus === 5" color=\'danger\'>{{pago.pago.estatus}}</ion-badge>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="secondary" (click)="imprimirPago(pago.pago.id_pago)">\n          <ion-icon name="print"></ion-icon>\n          Imprimir\n        </button>\n        <button ion-button color="primary" (click)="generarCodigoBarras(pago.pago.referenciado_ug)">\n          <ion-icon name="barcode"></ion-icon>\n          Código de Barras\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/mis-lineas-referencia/mis-lineas-referencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MisLineasReferenciaPage);
    return MisLineasReferenciaPage;
}());

//# sourceMappingURL=mis-lineas-referencia.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevopagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagoconepto_pagoconepto__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(46);
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
 * Generated class for the NuevopagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevopagoPage = (function () {
    function NuevopagoPage(navCtrl, navParams, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.arrBeneficiarios = [];
    }
    NuevopagoPage.prototype.ionViewDidLoad = function () {
        this.getBeneficiarios();
    };
    NuevopagoPage.prototype.getBeneficiarios = function () {
        var _this = this;
        var loading = this.loadCtrl.create({
            content: 'Cargando Beneficiarios',
            spinner: 'dots'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/Beneficiario", {
            params: { correo: 'oscar.salazar@ugto.mx' }
        }).then(function (res) {
            res.data.map(function (ben) {
                if (ben.idTipo === 1) {
                    _this.getFotosEmpleados(parseInt(ben.clave)).then(function (res) {
                        _this.arrBeneficiarios.push({
                            idben: ben.idben,
                            nombre: ben.nombre,
                            clave: ben.clave,
                            rfc: ben.rfc,
                            foto: "data:image/png;base64," + res.data,
                            tipo: 'Trabajador UG',
                            tipoClave: 'No. Empleado'
                        });
                    }).catch(function (err) {
                        _this.arrBeneficiarios.push({
                            idben: ben.idben,
                            nombre: ben.nombre,
                            clave: ben.clave,
                            rfc: ben.rfc,
                            foto: 'https://image.flaticon.com/icons/png/512/306/306473.png',
                            tipo: 'Trabajador UG',
                            tipoClave: 'No. Empleado'
                        });
                    });
                }
                else if (ben.idTipo === 2) {
                    _this.getFotosAlumnos(parseInt(ben.clave)).then(function (res) {
                        _this.arrBeneficiarios.push({
                            idben: ben.idben,
                            nombre: ben.nombre,
                            clave: ben.clave,
                            rfc: ben.rfc,
                            foto: "data:image/png;base64," + res.data,
                            tipo: 'Estudiante',
                            tipoClave: 'NUA'
                        });
                    }).catch(function (err) {
                        _this.arrBeneficiarios.push({
                            idben: ben.idben,
                            nombre: ben.nombre,
                            clave: ben.clave,
                            rfc: ben.rfc,
                            foto: 'https://image.flaticon.com/icons/png/512/306/306473.png',
                            tipo: 'Estudiante',
                            tipoClave: 'NUA'
                        });
                    });
                }
                else {
                    _this.arrBeneficiarios.push({
                        idben: ben.idben,
                        nombre: ben.nombre,
                        clave: ben.clave,
                        rfc: ben.rfc,
                        foto: 'https://image.flaticon.com/icons/png/512/306/306473.png',
                        tipo: 'Externo',
                        tipoClave: 'Externo'
                    });
                }
            });
            loading.dismiss();
        }).catch(function (err) {
            console.log('error ', err);
        });
    };
    NuevopagoPage.prototype.getFotosEmpleados = function (idEmpleado) {
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/FotosEmpleados?idEmpleado=" + idEmpleado);
    };
    NuevopagoPage.prototype.getFotosAlumnos = function (NUA) {
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/FotosAlumnos?NUA=" + NUA);
    };
    NuevopagoPage.prototype.beneficiarioClicked = function (idben) {
        console.log('beneficiario clicked: ', idben);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pagoconepto_pagoconepto__["a" /* PagoconeptoPage */], { idben: idben });
    };
    NuevopagoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-nuevopago',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/nuevopago/nuevopago.html"*/'<!--\n  Generated template for the NuevopagoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color=\'azulUG\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Pago</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-card color=\'azulUG\'>\n      <ion-card-content>\n        <p>Selecciona un beneficiario.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list>\n      <button ion-item *ngFor="let item of arrBeneficiarios" (click)="beneficiarioClicked(item.idben)">\n        <ion-avatar item-start>\n          <img src={{item.foto}}>\n        </ion-avatar>\n        <h2>{{item.nombre}}</h2>\n        <p><strong>RFC: </strong>{{item.rfc}}</p>\n      </button>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/nuevopago/nuevopago.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], NuevopagoPage);
    return NuevopagoPage;
}());

//# sourceMappingURL=nuevopago.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagoconeptoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datos_concepto_datos_concepto__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagoconeptoPage = (function () {
    function PagoconeptoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.idBeneficiario = this.navParams.get('idben');
    }
    PagoconeptoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getCampus().then(function (res) {
            if (res.data) {
                _this.arrCampus = res.data;
            }
        }).catch(function (err) {
            console.log('error al obtener campus ', err);
        });
    };
    PagoconeptoPage.prototype.getCampus = function () {
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/FinCampus");
    };
    PagoconeptoPage.prototype.getDivisiones = function () {
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/FinDivision");
    };
    PagoconeptoPage.prototype.getDepartamentos = function () {
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/FinDepartamento");
    };
    PagoconeptoPage.prototype.campusChanged = function () {
        var _this = this;
        this.getDivisiones().then(function (res) {
            _this.arrDivision = res.data.filter(function (div, index) {
                return div.Rectoria === _this.campusSelected;
            });
        }).catch(function (err) {
            console.log('hubo un error al obtener las divisiones ', err);
        });
    };
    PagoconeptoPage.prototype.divChanged = function () {
        var _this = this;
        this.getDepartamentos().then(function (res) {
            _this.arrDeptos = res.data.filter(function (dpto, index) {
                return dpto.Secretaria === _this.divSelected && dpto.Rectoria === _this.campusSelected;
            });
        }).catch(function (err) {
            console.log('hubo un error al obtener los departamentos ', err);
        });
        console.log('cam: ', this.campusSelected, ' div: ', this.divSelected);
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/Conceptos?cam=" + this.campusSelected + "&div=" + this.divSelected).then(function (res) {
            _this.displayConceptos = res.data;
        }).catch(function (err) {
            console.log('error al obtener conceptos ', err);
        });
    };
    PagoconeptoPage.prototype.depChanged = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/Conceptos?centro=" + this.depSelected).then(function (res) {
            _this.arrConceptos = res.data;
            _this.displayConceptos = res.data;
        }).catch(function (err) {
            console.log('hubo un error al obtener los conceptos ', err);
        });
    };
    PagoconeptoPage.prototype.searchChanged = function () {
        var _this = this;
        this.displayConceptos = this.arrConceptos.filter(function (concepto, index) {
            return concepto.Busqueda.toLowerCase().indexOf(_this.searchInput) !== -1;
        });
    };
    PagoconeptoPage.prototype.conceptoSelected = function (concepto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__datos_concepto_datos_concepto__["a" /* DatosConceptoPage */], {
            idBeneficiario: this.idBeneficiario,
            concepto: concepto
        });
    };
    PagoconeptoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-pagoconepto',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/pagoconepto/pagoconepto.html"*/'<!--\n  Generated template for the PagoconeptoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'azulUG\'>\n    <ion-title>Concepto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card color=\'azulUG\' style="margin-bottom: 0;">\n    <ion-card-content>\n      <p>Selecciona el concepto del pago.</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style="margin-top: 0;">\n      <ion-list>\n        <ion-item>\n            <ion-label stacked>Campus:</ion-label>\n            <ion-select [(ngModel)]="campusSelected" interface="action-sheet" (ionChange)="campusChanged()">\n              <ion-option *ngFor="let item of arrCampus" [value]="item.Rectoria">{{item.CentroBeneficio}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item *ngIf="campusSelected != null">\n            <ion-label stacked>División:</ion-label>\n            <ion-select [(ngModel)]="divSelected" interface="action-sheet" (ionChange)="divChanged()">\n              <ion-option *ngFor="let item of arrDivision" [value]="item.Secretaria">{{item.CentroBeneficio}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item *ngIf="divSelected != null">\n            <ion-label stacked>Departamento:</ion-label>\n            <ion-select [(ngModel)]="depSelected" interface="action-sheet" (ionChange)="depChanged()">\n              <ion-option *ngFor="let item of arrDeptos" [value]="item.Id_CentroBeneficio">{{item.CentroBeneficio}}</ion-option>\n            </ion-select>\n        </ion-item>\n      </ion-list>\n  </ion-card>\n\n\n  \n\n  <ion-card *ngIf="displayConceptos != null">\n    <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-label stacked><ion-icon name="search"></ion-icon> Buscar</ion-label>\n            <ion-input type="text" (ionChange)="searchChanged()" [(ngModel)]="searchInput"></ion-input>\n          </ion-item>\n      \n          <button ion-item *ngFor="let concepto of displayConceptos" (click)="conceptoSelected(concepto)">\n            <ion-avatar item-start>\n              <ion-icon name="card" *ngIf="concepto.Monto.toUpperCase() !== \'A CAPTURAR\'"></ion-icon>\n              <ion-icon name="log-in" *ngIf="concepto.Monto.toUpperCase() === \'A CAPTURAR\'"></ion-icon>\n            </ion-avatar>\n            <h2 text-wrap>{{concepto.nombre_cuenta}}</h2>\n            <h3 text-wrap>{{concepto.sub_cuenta}}</h3>\n            <h4 text-wrap>{{concepto.ELEMENTO_PEP_DSC}}</h4>\n            <p><strong>Monto: </strong> {{concepto.Monto}}</p>\n          </button>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/pagoconepto/pagoconepto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], PagoconeptoPage);
    return PagoconeptoPage;
}());

//# sourceMappingURL=pagoconepto.js.map

/***/ }),

/***/ 134:
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
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/beneficiarios/beneficiarios.module": [
		491,
		8
	],
	"../pages/codigo-barras/codigo-barras.module": [
		492,
		7
	],
	"../pages/datos-concepto/datos-concepto.module": [
		493,
		6
	],
	"../pages/guardar-pago/guardar-pago.module": [
		494,
		5
	],
	"../pages/intro/intro.module": [
		495,
		4
	],
	"../pages/login/login.module": [
		496,
		3
	],
	"../pages/mis-lineas-referencia/mis-lineas-referencia.module": [
		497,
		2
	],
	"../pages/nuevopago/nuevopago.module": [
		498,
		1
	],
	"../pages/pagoconepto/pagoconepto.module": [
		499,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_guardar_pago_guardar_pago__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_datos_concepto_datos_concepto__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pagoconepto_pagoconepto__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_nuevopago_nuevopago__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_beneficiarios_beneficiarios__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_list_list__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mis_lineas_referencia_mis_lineas_referencia__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_codigo_barras_codigo_barras__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_intro_intro__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_beneficiarios_beneficiarios__["a" /* BeneficiariosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_nuevopago_nuevopago__["a" /* NuevopagoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_pagoconepto_pagoconepto__["a" /* PagoconeptoPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_datos_concepto_datos_concepto__["a" /* DatosConceptoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_guardar_pago_guardar_pago__["a" /* GuardarPagoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mis_lineas_referencia_mis_lineas_referencia__["a" /* MisLineasReferenciaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_codigo_barras_codigo_barras__["a" /* CodigoBarrasPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/beneficiarios/beneficiarios.module#BeneficiariosPageModule', name: 'BeneficiariosPage', segment: 'beneficiarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/codigo-barras/codigo-barras.module#CodigoBarrasPageModule', name: 'CodigoBarrasPage', segment: 'codigo-barras', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datos-concepto/datos-concepto.module#DatosConceptoPageModule', name: 'DatosConceptoPage', segment: 'datos-concepto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guardar-pago/guardar-pago.module#GuardarPagoPageModule', name: 'GuardarPagoPage', segment: 'guardar-pago', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-lineas-referencia/mis-lineas-referencia.module#MisLineasReferenciaPageModule', name: 'MisLineasReferenciaPage', segment: 'mis-lineas-referencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevopago/nuevopago.module#NuevopagoPageModule', name: 'NuevopagoPage', segment: 'nuevopago', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagoconepto/pagoconepto.module#PagoconeptoPageModule', name: 'PagoconeptoPage', segment: 'pagoconepto', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_beneficiarios_beneficiarios__["a" /* BeneficiariosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_nuevopago_nuevopago__["a" /* NuevopagoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_pagoconepto_pagoconepto__["a" /* PagoconeptoPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_datos_concepto_datos_concepto__["a" /* DatosConceptoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_guardar_pago_guardar_pago__["a" /* GuardarPagoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mis_lineas_referencia_mis_lineas_referencia__["a" /* MisLineasReferenciaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_codigo_barras_codigo_barras__["a" /* CodigoBarrasPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__["a" /* Device */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    //baseURL: 'http://localhost:52300/api',
    //baseURL: 'https://www.colmena.ugto.mx/ApiMovil/api'
    baseURL: 'https://intranet2.ugto.mx/Servicios/api'
});
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 191,
	"./af.js": 191,
	"./ar": 192,
	"./ar-dz": 193,
	"./ar-dz.js": 193,
	"./ar-kw": 194,
	"./ar-kw.js": 194,
	"./ar-ly": 195,
	"./ar-ly.js": 195,
	"./ar-ma": 196,
	"./ar-ma.js": 196,
	"./ar-sa": 197,
	"./ar-sa.js": 197,
	"./ar-tn": 198,
	"./ar-tn.js": 198,
	"./ar.js": 192,
	"./az": 199,
	"./az.js": 199,
	"./be": 200,
	"./be.js": 200,
	"./bg": 201,
	"./bg.js": 201,
	"./bm": 202,
	"./bm.js": 202,
	"./bn": 203,
	"./bn.js": 203,
	"./bo": 204,
	"./bo.js": 204,
	"./br": 205,
	"./br.js": 205,
	"./bs": 206,
	"./bs.js": 206,
	"./ca": 207,
	"./ca.js": 207,
	"./cs": 208,
	"./cs.js": 208,
	"./cv": 209,
	"./cv.js": 209,
	"./cy": 210,
	"./cy.js": 210,
	"./da": 211,
	"./da.js": 211,
	"./de": 212,
	"./de-at": 213,
	"./de-at.js": 213,
	"./de-ch": 214,
	"./de-ch.js": 214,
	"./de.js": 212,
	"./dv": 215,
	"./dv.js": 215,
	"./el": 216,
	"./el.js": 216,
	"./en-au": 217,
	"./en-au.js": 217,
	"./en-ca": 218,
	"./en-ca.js": 218,
	"./en-gb": 219,
	"./en-gb.js": 219,
	"./en-ie": 220,
	"./en-ie.js": 220,
	"./en-il": 221,
	"./en-il.js": 221,
	"./en-nz": 222,
	"./en-nz.js": 222,
	"./eo": 223,
	"./eo.js": 223,
	"./es": 224,
	"./es-do": 225,
	"./es-do.js": 225,
	"./es-us": 226,
	"./es-us.js": 226,
	"./es.js": 224,
	"./et": 227,
	"./et.js": 227,
	"./eu": 228,
	"./eu.js": 228,
	"./fa": 229,
	"./fa.js": 229,
	"./fi": 230,
	"./fi.js": 230,
	"./fo": 231,
	"./fo.js": 231,
	"./fr": 232,
	"./fr-ca": 233,
	"./fr-ca.js": 233,
	"./fr-ch": 234,
	"./fr-ch.js": 234,
	"./fr.js": 232,
	"./fy": 235,
	"./fy.js": 235,
	"./gd": 236,
	"./gd.js": 236,
	"./gl": 237,
	"./gl.js": 237,
	"./gom-latn": 238,
	"./gom-latn.js": 238,
	"./gu": 239,
	"./gu.js": 239,
	"./he": 240,
	"./he.js": 240,
	"./hi": 241,
	"./hi.js": 241,
	"./hr": 242,
	"./hr.js": 242,
	"./hu": 243,
	"./hu.js": 243,
	"./hy-am": 244,
	"./hy-am.js": 244,
	"./id": 245,
	"./id.js": 245,
	"./is": 246,
	"./is.js": 246,
	"./it": 247,
	"./it.js": 247,
	"./ja": 248,
	"./ja.js": 248,
	"./jv": 249,
	"./jv.js": 249,
	"./ka": 250,
	"./ka.js": 250,
	"./kk": 251,
	"./kk.js": 251,
	"./km": 252,
	"./km.js": 252,
	"./kn": 253,
	"./kn.js": 253,
	"./ko": 254,
	"./ko.js": 254,
	"./ky": 255,
	"./ky.js": 255,
	"./lb": 256,
	"./lb.js": 256,
	"./lo": 257,
	"./lo.js": 257,
	"./lt": 258,
	"./lt.js": 258,
	"./lv": 259,
	"./lv.js": 259,
	"./me": 260,
	"./me.js": 260,
	"./mi": 261,
	"./mi.js": 261,
	"./mk": 262,
	"./mk.js": 262,
	"./ml": 263,
	"./ml.js": 263,
	"./mn": 264,
	"./mn.js": 264,
	"./mr": 265,
	"./mr.js": 265,
	"./ms": 266,
	"./ms-my": 267,
	"./ms-my.js": 267,
	"./ms.js": 266,
	"./mt": 268,
	"./mt.js": 268,
	"./my": 269,
	"./my.js": 269,
	"./nb": 270,
	"./nb.js": 270,
	"./ne": 271,
	"./ne.js": 271,
	"./nl": 272,
	"./nl-be": 273,
	"./nl-be.js": 273,
	"./nl.js": 272,
	"./nn": 274,
	"./nn.js": 274,
	"./pa-in": 275,
	"./pa-in.js": 275,
	"./pl": 276,
	"./pl.js": 276,
	"./pt": 277,
	"./pt-br": 278,
	"./pt-br.js": 278,
	"./pt.js": 277,
	"./ro": 279,
	"./ro.js": 279,
	"./ru": 280,
	"./ru.js": 280,
	"./sd": 281,
	"./sd.js": 281,
	"./se": 282,
	"./se.js": 282,
	"./si": 283,
	"./si.js": 283,
	"./sk": 284,
	"./sk.js": 284,
	"./sl": 285,
	"./sl.js": 285,
	"./sq": 286,
	"./sq.js": 286,
	"./sr": 287,
	"./sr-cyrl": 288,
	"./sr-cyrl.js": 288,
	"./sr.js": 287,
	"./ss": 289,
	"./ss.js": 289,
	"./sv": 290,
	"./sv.js": 290,
	"./sw": 291,
	"./sw.js": 291,
	"./ta": 292,
	"./ta.js": 292,
	"./te": 293,
	"./te.js": 293,
	"./tet": 294,
	"./tet.js": 294,
	"./tg": 295,
	"./tg.js": 295,
	"./th": 296,
	"./th.js": 296,
	"./tl-ph": 297,
	"./tl-ph.js": 297,
	"./tlh": 298,
	"./tlh.js": 298,
	"./tr": 299,
	"./tr.js": 299,
	"./tzl": 300,
	"./tzl.js": 300,
	"./tzm": 301,
	"./tzm-latn": 302,
	"./tzm-latn.js": 302,
	"./tzm.js": 301,
	"./ug-cn": 303,
	"./ug-cn.js": 303,
	"./uk": 304,
	"./uk.js": 304,
	"./ur": 305,
	"./ur.js": 305,
	"./uz": 306,
	"./uz-latn": 307,
	"./uz-latn.js": 307,
	"./uz.js": 306,
	"./vi": 308,
	"./vi.js": 308,
	"./x-pseudo": 309,
	"./x-pseudo.js": 309,
	"./yo": 310,
	"./yo.js": 310,
	"./zh-cn": 311,
	"./zh-cn.js": 311,
	"./zh-hk": 312,
	"./zh-hk.js": 312,
	"./zh-tw": 313,
	"./zh-tw.js": 313
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
webpackContext.id = 472;

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_mis_lineas_referencia_mis_lineas_referencia__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_nuevopago_nuevopago__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_beneficiarios_beneficiarios__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_codigo_barras_codigo_barras__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(120);
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
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */] },
            { title: 'Beneficiarios', component: __WEBPACK_IMPORTED_MODULE_2__pages_beneficiarios_beneficiarios__["a" /* BeneficiariosPage */] },
            { title: 'Nuevo Pago', component: __WEBPACK_IMPORTED_MODULE_1__pages_nuevopago_nuevopago__["a" /* NuevopagoPage */] },
            { title: 'Mis Lineas de Referencia', component: __WEBPACK_IMPORTED_MODULE_0__pages_mis_lineas_referencia_mis_lineas_referencia__["a" /* MisLineasReferenciaPage */] },
            { title: 'Código Barras', component: __WEBPACK_IMPORTED_MODULE_10__pages_codigo_barras_codigo_barras__["a" /* CodigoBarrasPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.storage.getItem('introShown').then(function (res) {
                if (res) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
                    console.log('home xD');
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */];
                    _this.storage.setItem('introShown', true);
                    console.log('Intro xD');
                }
            }, function (error) {
                console.log('error xD ', error.message);
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */];
                _this.storage.setItem('introShown', true);
                console.log('Intro xD');
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color=\'azulUG\'>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jwt_decode__);
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
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuario = '';
        this.imei = '';
        this.token = '';
        this.usuario = this.navParams.get('usuario');
        this.imei = this.navParams.get('imei');
        this.token = this.navParams.get('token');
        if (this.token) {
            if (this.token !== '') {
                var decoded = __WEBPACK_IMPORTED_MODULE_2_jwt_decode__(this.token);
                console.log(decoded.Id_Empleado);
                console.log(decoded.Id_Externo);
                console.log(decoded.NUA);
                console.log(decoded.Tipo);
                console.log(decoded.role);
            }
        }
        else {
            console.log('no hay token :c');
        }
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color=\'azulUG\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <p>{{token}}</p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n0'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodigoBarrasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsbarcode2__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsbarcode2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsbarcode2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CodigoBarrasPage = (function () {
    function CodigoBarrasPage(navCtrl, navParams, file, fileOpener, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.fileOpener = fileOpener;
        this.plt = plt;
        this.pdfObj = null;
        this.referenciaCodigo = this.navParams.get('referencia');
        __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
    }
    CodigoBarrasPage.prototype.ionViewDidLoad = function () {
        __WEBPACK_IMPORTED_MODULE_2_jsbarcode2___default()(document.getElementById('code128'), this.referenciaCodigo);
    };
    CodigoBarrasPage.prototype.imprimirPDF = function () {
        var _this = this;
        var docDefinition = {
            content: [
                { text: 'reminder', style: 'header' },
                { text: new Date().toTimeString(), alignment: 'right' },
                { text: 'From', style: 'subheader' },
                { text: 'Guillermo Ortiz' },
                { text: 'To', style: 'subheader' },
                { text: 'Jhon Doe' },
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id turpis at arcu consequat porttitor. Phasellus lobortis pharetra justo, eu laoreet eros finibus eu. Donec eget metus facilisis lacus rhoncus aliquet. Donec in dapibus leo. Aliquam auctor justo ac turpis hendrerit, vel blandit mauris lacinia. Etiam convallis dui eget dui sagittis, id sodales odio bibendum. Cras in lorem lorem. Cras felis nibh, scelerisque eget bibendum sed, scelerisque et lacus. Nulla rutrum est non magna tincidunt pretium. Donec a posuere libero, vitae facilisis dui. Suspendisse bibendum nulla et felis hendrerit imperdiet. Phasellus ut hendrerit lacus.', style: 'story', margin: [0, 20, 0, 20] },
                {
                    ul: [
                        'Bacon',
                        'Ribs',
                        'BBQ'
                    ]
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'justify',
                    width: '50%'
                }
            }
        };
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: 'application/pdf' });
                _this.file.writeFile(_this.file.dataDirectory, 'mypdf.pdf', blob, { replace: true }).then(function (fileEntry) {
                    _this.fileOpener.open(_this.file.dataDirectory + 'mypdf.pdf', 'application/pdf');
                });
            });
        }
        else {
            this.pdfObj.download();
        }
    };
    CodigoBarrasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-codigo-barras',template:/*ion-inline-start:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/codigo-barras/codigo-barras.html"*/'<ion-header>\n  <ion-navbar color=\'azulUG\'>\n    <ion-title>Codigo de Barras</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="main-cb">\n    <svg id="code128"></svg>\n  </div>\n\n  <div>\n    <button ion-button (click)="imprimirPDF()">Imprimir PDF</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/guillermo/Documents/ionic/PagosUG/src/pages/codigo-barras/codigo-barras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], CodigoBarrasPage);
    return CodigoBarrasPage;
}());

//# sourceMappingURL=codigo-barras.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map