import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosConceptoPage } from './datos-concepto';

@NgModule({
  declarations: [
    DatosConceptoPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosConceptoPage),
  ],
})
export class DatosConceptoPageModule {}
