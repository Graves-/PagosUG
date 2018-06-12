import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import axios from 'axios';
import config from '../../config';
import { CodigoBarrasPage } from '../codigo-barras/codigo-barras';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-mis-lineas-referencia',
  templateUrl: 'mis-lineas-referencia.html',
})
export class MisLineasReferenciaPage {

  correoUsuario: string = 'oscar.salazar@ugto.mx';
  pagos: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl: LoadingController, private iab: InAppBrowser, private alertCtrl: AlertController) {
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
        console.log(res.data);
      }else{
        this.alertCtrl.create({
          title: 'Error',
          subTitle: 'hubo un error al obtener el registro en Pagos. ' + res.data,
          buttons: ['Ok']
        }).present();
      }
    }).catch((err) => {
      this.alertCtrl.create({
        title: 'Error',
        subTitle: 'hubo un error al obtener el registro en Pagos. ' + err,
        buttons: ['Ok']
      }).present();
    });
  }

  formatearFecha(fecha){
    return moment(fecha).format('DD-MM-YYYY');
  }

  getIdRegistroByEmail(correo){
    return axios.get(`${config.baseURL}/FinRegistro?correo=${correo}`);
  }

  imprimirPago(idpago){
    const url = `${config.baseURL}/PDFPago?idPago=${idpago}`;
    this.iab.create(url, '_system', {});
  }

  generarCodigoBarras(referencia){
    this.navCtrl.push(CodigoBarrasPage, {
      referencia: referencia
    });
  }
}
