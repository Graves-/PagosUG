import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevopagoPage } from './nuevopago';

@NgModule({
  declarations: [
    NuevopagoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevopagoPage),
  ],
})
export class NuevopagoPageModule {}
