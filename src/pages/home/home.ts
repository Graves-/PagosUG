import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as JWT from 'jwt-decode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 
  usuario: String = '';
  imei : String = '';
  token: String = '';
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.usuario = this.navParams.get('usuario');
    this.imei = this.navParams.get('imei');
    this.token = this.navParams.get('token');

    if(this.token){
      if(this.token !== ''){
        let decoded = JWT(this.token);
        console.log(decoded.Id_Empleado);
        console.log(decoded.Id_Externo);
        console.log(decoded.NUA);
        console.log(decoded.Tipo);
        console.log(decoded.role);
      }
    }else{
      console.log('no hay token :c');
    }
  }

}
