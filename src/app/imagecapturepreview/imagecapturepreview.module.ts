import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagecapturepreviewPageRoutingModule } from './imagecapturepreview-routing.module';

import { ImagecapturepreviewPage } from './imagecapturepreview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagecapturepreviewPageRoutingModule
  ],
  declarations: [ImagecapturepreviewPage]
})
export class ImagecapturepreviewPageModule {}
