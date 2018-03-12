import { GuardarPagoPage } from './../guardar-pago/guardar-pago';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DatosConceptoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-concepto',
  templateUrl: 'datos-concepto.html',
})
export class DatosConceptoPage {

  idBeneficiario: number;
  concepto: any;
  inputConcepto: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.idBeneficiario = this.navParams.get('idBeneficiario');
    this.concepto = this.navParams.get('concepto');
  }

  ionViewDidLoad() {

  }

  GenerarPagoClicked(){
    let alert = this.alertCtrl.create({
      title: 'Monto Inválido',
      subTitle: 'Por favor ingresa un monto válido para el concepto seleciconado.',
      buttons: ['Ok']
    });
    let re = /^[0-9.,]+$/;

    if(this.concepto.Monto.toLowerCase() === 'a capturar'){
      if(this.inputConcepto !== undefined){
        if(re.test(this.inputConcepto.toString())){
          this.concepto.Monto = this.inputConcepto;
          this.navCtrl.push(GuardarPagoPage, {
            idBeneficiario: this.idBeneficiario,
            concepto: this.concepto
          });
        }else{
          alert.present();
        }
      }else{
        alert.present();
      }
    }else{
      this.navCtrl.push(GuardarPagoPage, {
        idBeneficiario: this.idBeneficiario,
        concepto: this.concepto
      });
    }
  }

}
