webpackJsonp([6],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardarPagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(81);
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
        this.iab.create(url, '_self', {});
    };
    GuardarPagoPage.prototype.homeClicked = function () {
        this.navCtrl.popToRoot();
    };
    GuardarPagoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guardar-pago',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\guardar-pago\guardar-pago.html"*/'<ion-header>\n  <ion-navbar color=\'azulUG\'>\n    <ion-title>Guardar Pago</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf="pagoSuccess === true">\n    <ion-card-header text-center>\n      Nuevo Pago Registrado\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n          <strong>¡Su pago ha sido generado con éxito con el folio: {{idPago}}!</strong>\n      </p>\n      <p>\n          Para imprimir su formato de pago haga click en el botón de \'Ver Línea de Referencia\'\n      </p>\n      <br />\n      <button ion-button block (click)="openPdfPage()" color="secondary"><ion-icon name="document"></ion-icon>&nbsp; Ver Línea de Referencia</button>\n      <br />\n      <p>\n          Al dar clic se generara un archivo pdf con la información necesaria para realizar tu pago en sucursal.\n      </p>\n    </ion-card-content>\n\n    <button ion-button icon-left clear small item-end (click)="homeClicked()">\n      <ion-icon name="home"></ion-icon>\n      <div>Regresar al Inicio</div>\n    </button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\guardar-pago\guardar-pago.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GuardarPagoPage);
    return GuardarPagoPage;
}());

//# sourceMappingURL=guardar-pago.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(42);
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
 * Generated class for the BeneficiariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeneficiariosPage = (function () {
    function BeneficiariosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
            selector: 'page-beneficiarios',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\beneficiarios\beneficiarios.html"*/'<ion-header>\n  <ion-navbar color=\'azulUG\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Beneficiarios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor="let itemBen of arrBeneficiarios;">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src={{itemBen.foto}}>\n        </ion-avatar>\n        <h2 text-wrap>{{itemBen.nombre}}</h2>\n        <p><strong>RFC: </strong>{{itemBen.rfc}}</p>\n      </ion-item>\n    \n      <ion-card-content>\n          <ion-item>\n              <ion-icon name="card"></ion-icon> {{itemBen.tipo}}\n            <ion-badge item-end>{{itemBen.clave}}</ion-badge>\n          </ion-item>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\beneficiarios\beneficiarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BeneficiariosPage);
    return BeneficiariosPage;
}());

//# sourceMappingURL=beneficiarios.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosConceptoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guardar_pago_guardar_pago__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the DatosConceptoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
            selector: 'page-datos-concepto',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\datos-concepto\datos-concepto.html"*/'<!--\n  Generated template for the DatosConceptoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'azulUG\'>\n    <ion-title>Datos del Concepto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n\n      <ion-item>\n        <h2 text-center text-warp>{{concepto.nombre_cuenta}}</h2>\n        <h3 text-center text-warp>{{concepto.sub_cuenta}}</h3>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="home" item-start large></ion-icon>\n        <h2>Campus</h2>\n        <p text-wrap>{{concepto.Campus}}</p>\n      </ion-item>\n      \n      <ion-item>\n        <ion-icon name="briefcase" item-start large></ion-icon>\n        <h2>División/Secretaría</h2>\n        <p text-wrap>{{concepto.Division}}</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="ios-book" item-start large></ion-icon>\n        <h2>Programa</h2>\n        <p text-wrap>{{concepto.Programa}}</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pricetags" item-start large></ion-icon>\n        <h2>Concepto</h2>\n        <p text-wrap>{{concepto.nombre_cuenta + \' - \' + concepto.ELEMENTO_PEP_DSC}}</p>\n      </ion-item>\n      \n      <ion-item *ngIf="concepto.Observaciones != \'\'">\n        <ion-icon name="attach" item-left large ></ion-icon>\n        <h2>Notas</h2>\n        <p text-wrap>{{concepto.Observaciones}}</p>\n      </ion-item>\n    \n      <ion-item>\n        <ion-icon name="logo-usd" item-left large ></ion-icon>\n        <h2>Monto</h2>\n        <p text-wrap *ngIf="concepto.Monto.toLowerCase() !== \'a capturar\'">{{concepto.Monto}}</p>\n        <ion-label floating *ngIf="concepto.Monto.toLowerCase() === \'a capturar\'">Ingresar Monto</ion-label>\n        <ion-input [(ngModel)]="inputConcepto" type="text" *ngIf="concepto.Monto.toLowerCase() === \'a capturar\'"></ion-input>\n      </ion-item>\n      <br />\n      <br />\n    </ion-card>\n\n    <button ion-button icon-left full color="secondary" (click)="GenerarPagoClicked()">\n      <ion-icon name="checkmark-circle"></ion-icon>\n      Generar Formato de Pago\n    </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\datos-concepto\datos-concepto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], DatosConceptoPage);
    return DatosConceptoPage;
}());

//# sourceMappingURL=datos-concepto.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisLineasReferenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(42);
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
    function MisLineasReferenciaPage(navCtrl, navParams, loadCtrl, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.iab = iab;
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
            }
            else {
                console.log('hubo un error al obtener el registro en Pagos. ', res.data);
            }
        }).catch(function (err) {
            console.log('hubo un error al obtener el registro en Pagos. Error:', err);
        });
    };
    MisLineasReferenciaPage.prototype.getIdRegistroByEmail = function (correo) {
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/FinRegistro?correo=" + correo);
    };
    MisLineasReferenciaPage.prototype.imprimirPago = function (idpago) {
        var url = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].baseURL + "/PDFPago?idPago=" + idpago;
        this.iab.create(url, '_self', {});
    };
    MisLineasReferenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-lineas-referencia',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\mis-lineas-referencia\mis-lineas-referencia.html"*/'<ion-header>\n\n  <ion-navbar color=\'azulUG\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Lineas de Referencia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card color=\'azulUG\'>\n    <ion-card-content>\n      Desliza a la izquierda para ver las opciones de pagos.\n    </ion-card-content>\n  </ion-card>\n\n  <hr />\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let pago of pagos">\n      <ion-item>\n        <h2>{{pago.pago.nombre.toUpperCase()}}</h2>\n        <h2><strong>Monto: </strong>${{pago.pago.monto}}</h2>\n        <h3><strong>RFC: </strong>{{pago.pago.rfc}}</h3>\n        <h3><strong>Fecha: </strong> {{pago.pago.fecha}}</h3>\n\n        <ion-badge item-end *ngIf="pago.pago.id_estatus === 1" color=\'warning\'>{{pago.pago.estatus}}</ion-badge>\n        <ion-badge item-end *ngIf="pago.pago.id_estatus === 2 || pago.pago.id_estatus === 4" color=\'secondary\'>{{pago.pago.estatus}}</ion-badge>\n        <ion-badge item-end *ngIf="pago.pago.id_estatus === 3 || pago.pago.id_estatus === 5" color=\'danger\'>{{pago.pago.estatus}}</ion-badge>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="secondary" (click)="imprimirPago(pago.pago.id_pago)">\n          <ion-icon name="print"></ion-icon>\n          Imprimir\n        </button>\n      </ion-item-options>\n      \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\mis-lineas-referencia\mis-lineas-referencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MisLineasReferenciaPage);
    return MisLineasReferenciaPage;
}());

//# sourceMappingURL=mis-lineas-referencia.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevopagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagoconepto_pagoconepto__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(42);
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
            selector: 'page-nuevopago',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\nuevopago\nuevopago.html"*/'<!--\n  Generated template for the NuevopagoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color=\'azulUG\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nuevo Pago</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-card color=\'azulUG\'>\n      <ion-card-content>\n        <p>Selecciona un beneficiario.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list>\n      <button ion-item *ngFor="let item of arrBeneficiarios" (click)="beneficiarioClicked(item.idben)">\n        <ion-avatar item-start>\n          <img src={{item.foto}}>\n        </ion-avatar>\n        <h2>{{item.nombre}}</h2>\n        <p><strong>RFC: </strong>{{item.rfc}}</p>\n      </button>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\nuevopago\nuevopago.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], NuevopagoPage);
    return NuevopagoPage;
}());

//# sourceMappingURL=nuevopago.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagoconeptoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datos_concepto_datos_concepto__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(42);
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
            selector: 'page-pagoconepto',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\pagoconepto\pagoconepto.html"*/'<!--\n  Generated template for the PagoconeptoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'azulUG\'>\n    <ion-title>Concepto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card color=\'azulUG\' style="margin-bottom: 0;">\n    <ion-card-content>\n      <p>Selecciona el concepto del pago.</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style="margin-top: 0;">\n      <ion-list>\n        <ion-item>\n            <ion-label stacked>Campus:</ion-label>\n            <ion-select [(ngModel)]="campusSelected" interface="action-sheet" (ionChange)="campusChanged()">\n              <ion-option *ngFor="let item of arrCampus" [value]="item.Rectoria">{{item.CentroBeneficio}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item *ngIf="campusSelected != null">\n            <ion-label stacked>División:</ion-label>\n            <ion-select [(ngModel)]="divSelected" interface="action-sheet" (ionChange)="divChanged()">\n              <ion-option *ngFor="let item of arrDivision" [value]="item.Secretaria">{{item.CentroBeneficio}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item *ngIf="divSelected != null">\n            <ion-label stacked>Departamento:</ion-label>\n            <ion-select [(ngModel)]="depSelected" interface="action-sheet" (ionChange)="depChanged()">\n              <ion-option *ngFor="let item of arrDeptos" [value]="item.Id_CentroBeneficio">{{item.CentroBeneficio}}</ion-option>\n            </ion-select>\n        </ion-item>\n      </ion-list>\n  </ion-card>\n\n\n  \n\n  <ion-card *ngIf="displayConceptos != null">\n    <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-label stacked><ion-icon name="search"></ion-icon> Buscar</ion-label>\n            <ion-input type="text" (ionChange)="searchChanged()" [(ngModel)]="searchInput"></ion-input>\n          </ion-item>\n      \n          <button ion-item *ngFor="let concepto of displayConceptos" (click)="conceptoSelected(concepto)">\n            <ion-avatar item-start>\n              <ion-icon name="card" *ngIf="concepto.Monto.toUpperCase() !== \'A CAPTURAR\'"></ion-icon>\n              <ion-icon name="log-in" *ngIf="concepto.Monto.toUpperCase() === \'A CAPTURAR\'"></ion-icon>\n            </ion-avatar>\n            <h2 text-wrap>{{concepto.nombre_cuenta}}</h2>\n            <h3 text-wrap>{{concepto.sub_cuenta}}</h3>\n            <h4 text-wrap>{{concepto.ELEMENTO_PEP_DSC}}</h4>\n            <p><strong>Monto: </strong> {{concepto.Monto}}</p>\n          </button>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\pagoconepto\pagoconepto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], PagoconeptoPage);
    return PagoconeptoPage;
}());

//# sourceMappingURL=pagoconepto.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/beneficiarios/beneficiarios.module": [
		307,
		5
	],
	"../pages/datos-concepto/datos-concepto.module": [
		308,
		4
	],
	"../pages/guardar-pago/guardar-pago.module": [
		309,
		3
	],
	"../pages/mis-lineas-referencia/mis-lineas-referencia.module": [
		310,
		2
	],
	"../pages/nuevopago/nuevopago.module": [
		311,
		1
	],
	"../pages/pagoconepto/pagoconepto.module": [
		312,
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color=\'azulUG\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\PagosUG\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_guardar_pago_guardar_pago__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_datos_concepto_datos_concepto__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pagoconepto_pagoconepto__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_nuevopago_nuevopago__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_beneficiarios_beneficiarios__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mis_lineas_referencia_mis_lineas_referencia__ = __webpack_require__(108);
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
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_beneficiarios_beneficiarios__["a" /* BeneficiariosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_nuevopago_nuevopago__["a" /* NuevopagoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_pagoconepto_pagoconepto__["a" /* PagoconeptoPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_datos_concepto_datos_concepto__["a" /* DatosConceptoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_guardar_pago_guardar_pago__["a" /* GuardarPagoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mis_lineas_referencia_mis_lineas_referencia__["a" /* MisLineasReferenciaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/beneficiarios/beneficiarios.module#BeneficiariosPageModule', name: 'BeneficiariosPage', segment: 'beneficiarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datos-concepto/datos-concepto.module#DatosConceptoPageModule', name: 'DatosConceptoPage', segment: 'datos-concepto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guardar-pago/guardar-pago.module#GuardarPagoPageModule', name: 'GuardarPagoPage', segment: 'guardar-pago', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-lineas-referencia/mis-lineas-referencia.module#MisLineasReferenciaPageModule', name: 'MisLineasReferenciaPage', segment: 'mis-lineas-referencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevopago/nuevopago.module#NuevopagoPageModule', name: 'NuevopagoPage', segment: 'nuevopago', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagoconepto/pagoconepto.module#PagoconeptoPageModule', name: 'PagoconeptoPage', segment: 'pagoconepto', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_beneficiarios_beneficiarios__["a" /* BeneficiariosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_nuevopago_nuevopago__["a" /* NuevopagoPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_pagoconepto_pagoconepto__["a" /* PagoconeptoPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_datos_concepto_datos_concepto__["a" /* DatosConceptoPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_guardar_pago_guardar_pago__["a" /* GuardarPagoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mis_lineas_referencia_mis_lineas_referencia__["a" /* MisLineasReferenciaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_mis_lineas_referencia_mis_lineas_referencia__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_nuevopago_nuevopago__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_beneficiarios_beneficiarios__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(212);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */] },
            { title: 'Beneficiarios', component: __WEBPACK_IMPORTED_MODULE_2__pages_beneficiarios_beneficiarios__["a" /* BeneficiariosPage */] },
            { title: 'Nuevo Pago', component: __WEBPACK_IMPORTED_MODULE_1__pages_nuevopago_nuevopago__["a" /* NuevopagoPage */] },
            { title: 'Mis Lineas de Referencia', component: __WEBPACK_IMPORTED_MODULE_0__pages_mis_lineas_referencia_mis_lineas_referencia__["a" /* MisLineasReferenciaPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Memo\Documents\ionic\PagosUG\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color=\'azulUG\'>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Memo\Documents\ionic\PagosUG\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    //baseURL: 'http://localhost:52300/api',
    baseURL: 'https://www.colmena.ugto.mx/ApiMovil/api'
});
//# sourceMappingURL=config.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map