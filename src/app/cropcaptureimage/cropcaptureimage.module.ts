import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropcaptureimagePageRoutingModule } from './cropcaptureimage-routing.module';

import { CropcaptureimagePage } from './cropcaptureimage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropcaptureimagePageRoutingModule
  ],
  declarations: [CropcaptureimagePage]
})
export class CropcaptureimagePageModule {}
