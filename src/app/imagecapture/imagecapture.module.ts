import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagecapturePageRoutingModule } from './imagecapture-routing.module';

import { ImagecapturePage } from './imagecapture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagecapturePageRoutingModule
  ],
  declarations: [ImagecapturePage]
})
export class ImagecapturePageModule {}
