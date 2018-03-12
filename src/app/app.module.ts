import { GuardarPagoPage } from './../pages/guardar-pago/guardar-pago';
import { DatosConceptoPage } from './../pages/datos-concepto/datos-concepto';
import { PagoconeptoPage } from './../pages/pagoconepto/pagoconepto';
import { NuevopagoPage } from './../pages/nuevopago/nuevopago';
import { BeneficiariosPage } from './../pages/beneficiarios/beneficiarios';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MisLineasReferenciaPage } from '../pages/mis-lineas-referencia/mis-lineas-referencia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BeneficiariosPage,
    NuevopagoPage,
    PagoconeptoPage,
    DatosConceptoPage,
    GuardarPagoPage,
    MisLineasReferenciaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BeneficiariosPage,
    NuevopagoPage,
    PagoconeptoPage,
    DatosConceptoPage,
    GuardarPagoPage,
    MisLineasReferenciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ]
})
export class AppModule {}
