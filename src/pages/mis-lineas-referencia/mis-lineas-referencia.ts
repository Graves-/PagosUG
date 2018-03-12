import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import axios from 'axios';
import config from '../../config';

@IonicPage()
@Component({
  selector: 'page-mis-lineas-referencia',
  templateUrl: 'mis-lineas-referencia.html',
})
export class MisLineasReferenciaPage {

  correoUsuario: string = 'oscar.salazar@ugto.mx';
  pagos: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl: LoadingController, private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    let loading = this.loadCtrl.create({
      content: 'Cargando Pagos',
      spinner: 'dots'
    });
    loading.present();
    this.getIdRegistroByEmail(this.correoUsuario).then((res) => {
      if(res.data != null){
        this.pagos = res.data;
        loading.dismiss();
      }else{
        console.log('hubo un error al obtener el registro en Pagos. ', res.data);
      }
    }).catch((err) => {
      console.log('hubo un error al obtener el registro en Pagos. Error:', err);
    });
  }

  getIdRegistroByEmail(correo){
    return axios.get(`${config.baseURL}/FinRegistro?correo=${correo}`);
  }

  imprimirPago(idpago){
    const url = `${config.baseURL}/PDFPago?idPago=${idpago}`;
    this.iab.create(url, '_self', {});
  }

}
