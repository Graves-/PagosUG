import { MisLineasReferenciaPage } from './../pages/mis-lineas-referencia/mis-lineas-referencia';
import { NuevopagoPage } from './../pages/nuevopago/nuevopago';
import { BeneficiariosPage } from './../pages/beneficiarios/beneficiarios';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CodigoBarrasPage } from '../pages/codigo-barras/codigo-barras';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: NativeStorage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Beneficiarios', component: BeneficiariosPage},
      { title: 'Nuevo Pago', component: NuevopagoPage},
      { title: 'Mis Lineas de Referencia', component: MisLineasReferenciaPage },
      { title: 'Código Barras', component: CodigoBarrasPage },
      { title: 'Login', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.storage.getItem('introShown').then((res) => {
        if(res){ 
          this.rootPage = HomePage;
          console.log('home xD');
        }else {
          this.rootPage = IntroPage;
          this.storage.setItem('introShown', true);
          console.log('Intro xD');
        }
      }, (error) => {
        console.log('error xD ', error.message);
        this.rootPage = IntroPage;
        this.storage.setItem('introShown', true);
        console.log('Intro xD');
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
