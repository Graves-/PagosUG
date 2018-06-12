import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import JsBarcode from 'jsbarcode2';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-codigo-barras',
  templateUrl: 'codigo-barras.html',
})
export class CodigoBarrasPage {
  referenciaCodigo: string;
  pdfObj = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private file: File, private fileOpener: FileOpener, private plt: Platform) {
    this.referenciaCodigo = this.navParams.get('referencia');
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ionViewDidLoad() {
    JsBarcode(document.getElementById('code128'), this.referenciaCodigo);
  }


  imprimirPDF(){

    let docDefinition = {
      content: [
        {text: 'reminder', style: 'header'},
        {text: new Date().toTimeString(), alignment: 'right'},
        {text: 'From', style: 'subheader'},
        {text: 'Guillermo Ortiz'},
        {text: 'To', style: 'subheader'},
        {text: 'Jhon Doe'},
        {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id turpis at arcu consequat porttitor. Phasellus lobortis pharetra justo, eu laoreet eros finibus eu. Donec eget metus facilisis lacus rhoncus aliquet. Donec in dapibus leo. Aliquam auctor justo ac turpis hendrerit, vel blandit mauris lacinia. Etiam convallis dui eget dui sagittis, id sodales odio bibendum. Cras in lorem lorem. Cras felis nibh, scelerisque eget bibendum sed, scelerisque et lacus. Nulla rutrum est non magna tincidunt pretium. Donec a posuere libero, vitae facilisis dui. Suspendisse bibendum nulla et felis hendrerit imperdiet. Phasellus ut hendrerit lacus.', style: 'story', margin: [0, 20, 0, 20]},
        {
          ul: [
            'Bacon',
            'Ribs',
            'BBQ'
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0,15,0,0]
        },
        story: {
          italic: true,
          alignment: 'justify',
          width: '50%'
        }
      }
    };
    this.pdfObj = pdfMake.createPdf(docDefinition);

    if(this.plt.is('cordova')){
      this.pdfObj.getBuffer((buffer) => {
        let blob = new Blob([buffer], {type: 'application/pdf'});
        this.file.writeFile(this.file.dataDirectory, 'mypdf.pdf', blob, {replace: true}).then( fileEntry => {
          this.fileOpener.open(this.file.dataDirectory + 'mypdf.pdf', 'application/pdf');
        });
      });
    }else{
      this.pdfObj.download();
    }
  }
}
