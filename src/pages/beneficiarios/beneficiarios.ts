import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import axios from 'axios';
import config from '../../config';

@IonicPage()
@Component({
  selector: 'page-beneficiarios',
  templateUrl: 'beneficiarios.html',
})
export class BeneficiariosPage {

  //arrBeneficiarios: { idben: number, idTipo: number, nombre: string, clave: string, rfc: string, esTitular: string, foto: string }[] = [];
  arrBeneficiarios = [];
  arrFotos:string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.getBeneficiarios();
  }

  getBeneficiarios(){
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

}
