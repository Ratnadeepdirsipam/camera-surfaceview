import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosizePageRoutingModule } from './photosize-routing.module';

import { PhotosizePage } from './photosize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosizePageRoutingModule
  ],
  declarations: [PhotosizePage]
})
export class PhotosizePageModule {}
