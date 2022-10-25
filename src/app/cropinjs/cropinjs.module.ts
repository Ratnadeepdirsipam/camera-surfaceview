import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropinjsPageRoutingModule } from './cropinjs-routing.module';

import { CropinjsPage } from './cropinjs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropinjsPageRoutingModule
  ],
  declarations: [CropinjsPage]
})
export class CropinjsPageModule {}
