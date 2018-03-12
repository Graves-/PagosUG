import { DatosConceptoPage } from './../datos-concepto/datos-concepto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import axios from 'axios';
import config from '../../config';

@IonicPage()
@Component({
  selector: 'page-pagoconepto',
  templateUrl: 'pagoconepto.html',
})
export class PagoconeptoPage {

  idBeneficiario: number;
  campusSelected: string;
  divSelected: string;
  depSelected: string;
  searchInput: string;
  arrCampus: any[];
  arrDivision: any[];
  arrDeptos: any[];
  arrConceptos: any[];
  displayConceptos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idBeneficiario = this.navParams.get('idben');
  }

  ionViewDidLoad() {
    this.getCampus().then((res) => {
      if(res.data){
        this.arrCampus = res.data;
      }
    }).catch((err) => {
      console.log('error al obtener campus ', err);
    });
  }


  getCampus(){
    return axios.get(`${config.baseURL}/FinCampus`);
  }

  getDivisiones(){
    return axios.get(`${config.baseURL}/FinDivision`);
  }

  getDepartamentos(){
    return axios.get(`${config.baseURL}/FinDepartamento`);
  }

  campusChanged(){
    this.getDivisiones().then((res) => {
      this.arrDivision = res.data.filter((div, index) => {
        return div.Rectoria === this.campusSelected;
      });
    }).catch((err) => {
      console.log('hubo un error al obtener las divisiones ', err);
    });
  }

  divChanged(){
    this.getDepartamentos().then((res) => {
      this.arrDeptos = res.data.filter((dpto, index) => {
        return dpto.Secretaria === this.divSelected && dpto.Rectoria === this.campusSelected;
      });
    }).catch((err) => {
      console.log('hubo un error al obtener los departamentos ', err);
    });
    console.log('cam: ', this.campusSelected, ' div: ', this.divSelected);
    axios.get(`${config.baseURL}/Conceptos?cam=${this.campusSelected}&div=${this.divSelected}`).then((res) => {
      this.displayConceptos = res.data;
    }).catch((err) => {
      console.log('error al obtener conceptos ', err);
    });
  }

  depChanged(){
    axios.get(`${config.baseURL}/Conceptos?centro=${this.depSelected}`).then((res) => {
      this.arrConceptos = res.data;
      this.displayConceptos = res.data;
    }).catch((err) => {
      console.log('hubo un error al obtener los conceptos ', err);
    });
  }

  searchChanged(){
    this.displayConceptos = this.arrConceptos.filter((concepto, index) => {
      return concepto.Busqueda.toLowerCase().indexOf(this.searchInput) !== -1;
    });
  }

  conceptoSelected(concepto){
    
    this.navCtrl.push(DatosConceptoPage, {
      idBeneficiario: this.idBeneficiario,
      concepto: concepto
    });
  }
}
