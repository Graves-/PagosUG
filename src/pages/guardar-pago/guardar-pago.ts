import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import axios from 'axios';
import config from '../../config';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-guardar-pago',
  templateUrl: 'guardar-pago.html',
})
export class GuardarPagoPage {

  idBeneficiario: number;
  concepto: any;
  idPagoAgrupado: string;
  idPago: string;
  pagoSuccess: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, public alertCtrl: AlertController) {
    this.idBeneficiario = this.navParams.get('idBeneficiario');
    this.concepto = this.navParams.get('concepto');
  }

  ionViewDidLoad() {
    let alert = this.alertCtrl.create({
      title: 'Registro de Pago',
      subTitle: 'El pago no pudo llevarse a cabo.',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          this.navCtrl.pop();
        }
      }] 
    });

    axios.post(`${config.baseURL}/Pagos?idArancel=${this.concepto.Id_Arancel}&idBenef=${this.idBeneficiario}&monto=${this.concepto.Monto}&obs=${this.concepto.Observaciones}`).then((res) => {
      console.log(res.data);
      if(res.data){
        if(res.data[0] === "1"){
          this.idPagoAgrupado = res.data[2];
          this.idPago = res.data[3];
          this.pagoSuccess = true;
        }else{
          console.log(res.data[1]);
          alert.present();
        }
      }
    }).catch((err) => {
      console.log('error al guardar pago ', err);
      alert.present();
    });
  }

  openPdfPage(){
    const url = `${config.baseURL}/PDFPago?idPago=${this.idPago}`;
    this.iab.create(url, '_self', {});
  }

  homeClicked(){
    this.navCtrl.popToRoot();
  }

}
