import { GuardarPagoPage } from './../pages/guardar-pago/guardar-pago';
import { DatosConceptoPage } from './../pages/datos-concepto/datos-concepto';
import { PagoconeptoPage } from './../pages/pagoconepto/pagoconepto';
import { NuevopagoPage } from './../pages/nuevopago/nuevopago';
import { BeneficiariosPage } from './../pages/beneficiarios/beneficiarios';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { Device } from '@ionic-native/device';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MisLineasReferenciaPage } from '../pages/mis-lineas-referencia/mis-lineas-referencia';
import { CodigoBarrasPage } from '../pages/codigo-barras/codigo-barras';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';

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
    MisLineasReferenciaPage,
    CodigoBarrasPage,
    IntroPage,
    LoginPage
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
    MisLineasReferenciaPage,
    CodigoBarrasPage,
    IntroPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    NativeStorage,
    FileOpener,
    File,
    Device
  ]
})
export class AppModule {}
