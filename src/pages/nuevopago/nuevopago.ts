import { PagoconeptoPage } from './../pagoconepto/pagoconepto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import axios from 'axios';
import config from '../../config';

/**
 * Generated class for the NuevopagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevopago',
  templateUrl: 'nuevopago.html',
})
export class NuevopagoPage {

  arrBeneficiarios = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    this.getBeneficiarios();
  }

  getBeneficiarios(){
    let loading = this.loadCtrl.create({
      content: 'Cargando Beneficiarios',
      spinner: 'dots'
    });
    loading.present();
    axios.get(`${config.baseURL}/Beneficiario`, { 
      params: { correo: 'oscar.salazar@ugto.mx' }
    }).then((res) => {
      res.data.map((ben) => {
        if(ben.idTipo === 1){
          this.getFotosEmpleados(parseInt(ben.clave)).then((res) => {
            this.arrBeneficiarios.push({
              idben: ben.idben,
              nombre: ben.nombre,
              clave: ben.clave,
              rfc: ben.rfc,
              foto: `data:image/png;base64,${res.data}`,
              tipo: 'Trabajador UG',
              tipoClave: 'No. Empleado'
            });
          }).catch((err) => {
            this.arrBeneficiarios.push({
              idben: ben.idben,
              nombre: ben.nombre,
              clave: ben.clave,
              rfc: ben.rfc,
              foto: 'https://image.flaticon.com/icons/png/512/306/306473.png',
              tipo: 'Trabajador UG',
              tipoClave: 'No. Empleado'
            });
          });
        }else if(ben.idTipo === 2){
          this.getFotosAlumnos(parseInt(ben.clave)).then((res) => {
            this.arrBeneficiarios.push({
              idben: ben.idben,
              nombre: ben.nombre,
              clave: ben.clave,
              rfc: ben.rfc,
              foto: `data:image/png;base64,${res.data}`,
              tipo: 'Estudiante',
              tipoClave: 'NUA'
            });
          }).catch((err) => {
            this.arrBeneficiarios.push({
              idben: ben.idben,
              nombre: ben.nombre,
              clave: ben.clave,
              rfc: ben.rfc,
              foto: 'https://image.flaticon.com/icons/png/512/306/306473.png',
              tipo: 'Estudiante',
              tipoClave: 'NUA'
            });
          });
        }else{
          this.arrBeneficiarios.push({
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
    }).catch((err) => {
      console.log('error ', err);
    });
  }

  getFotosEmpleados(idEmpleado: number){
    return axios.get(`${config.baseURL}/FotosEmpleados?idEmpleado=${idEmpleado}`);
  }

  getFotosAlumnos(NUA: number){
    return axios.get(`${config.baseURL}/FotosAlumnos?NUA=${NUA}`);
  }

  beneficiarioClicked(idben){
    console.log('beneficiario clicked: ', idben);
    this.navCtrl.push(PagoconeptoPage, { idben: idben});
  }

}
