import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Device } from '@ionic-native/device';
import axios from 'axios';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: String = '';
  password: String = '';
  imei: String = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private platform: Platform, private device: Device, 
    private storage: NativeStorage, private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    this.platform.ready().then(() => {
      this.imei = this.device.uuid;
    })
  }

  fnIniciarSesion(){
    if(this.usuario === '' || this.password === ''){
      this.alertCtrl.create({
        title: 'Inicio de Sesión',
        subTitle: 'Estimado usuario, debe ingresar su correo y contraseña institucionales.',
        buttons: ['Aceptar']
      }).present();
    }else{
      console.log('login');
      let loading = this.loadingCtrl.create({
        content: 'Iniciando Sesión',
        spinner: 'dots'
      });
      loading.present();

      axios.post(`https://conector.ugto.mx/Servicios/api/LoginMovil?usuario=${this.usuario}&password=${this.password}&IMEI=${this,this.imei}`, { 
        headers: { 
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
          'Accept': 'application/json'
        },
        withCredentials: true
      }).then((res) => {
        this.storage.setItem('token', res.data);
        loading.dismiss();
        this.navCtrl.push(HomePage, { token: res.data, imei: this.imei, usuario: this.usuario});
      }).catch((err) => {
        console.log(err);
        loading.dismiss();
        let alertError = this.alertCtrl.create({
          message: 'Ocurrió un error al iniciar sesión. ' + err,
          buttons: ['Aceptar'],
          title: 'Error al Iniciar Sesión'
        });
        alertError.present();
      }); 
    }
  }

}
