import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FramingimgPageRoutingModule } from './framingimg-routing.module';

import { FramingimgPage } from './framingimg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FramingimgPageRoutingModule
  ],
  declarations: [FramingimgPage]
})
export class FramingimgPageModule {}
